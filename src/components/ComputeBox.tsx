import React from 'react';
import {
  Button,
  CircularProgress,
  Divider,
  Grid,
  Icon,
  LinearProgress,
  Stack,
  Typography,
} from '@material-ui/core';

import { assert } from '../domain/utils';
import { TransformInput, TransformWithParams } from '../domain/types';
import { sliderParam } from '../params/sliderParam';

// eslint-disable-next-line import/no-webpack-loader-syntax
import RunTransformWorker from 'worker-loader!../domain/transform.worker';

interface ComputeBoxProps {
  isDirty: boolean;
  computeDisabled: boolean;
  baseImageUrl?: string;
  transforms: TransformWithParams<any>[];
  onComputed: () => void;
}

type ComputeState =
  | {
      loading: false;
      results: { transformName: string; gif: string }[];
      computeTime: number | undefined;
    }
  | { loading: true };

const DEFAULT_FPS = 20;
const fpsParam = sliderParam({
  name: 'Frames per Second',
  defaultValue: DEFAULT_FPS,
  min: 1,
  max: 60,
});

export const ComputeBox: React.FC<ComputeBoxProps> = ({
  isDirty,
  computeDisabled,
  baseImageUrl,
  transforms,
  onComputed,
}) => {
  const [state, setState] = React.useState<ComputeState>({
    loading: false,
    results: [],
    computeTime: undefined,
  });
  const [fpsChanged, setFpsChanged] = React.useState(false);
  const [fps, setFps] = React.useState(DEFAULT_FPS);
  const [progress, setProgress] = React.useState<number | undefined>();

  const buttonDisabled = computeDisabled && !fpsChanged;

  return (
    <Stack spacing={1}>
      <Typography variant="h5">Create Gif</Typography>

      <div style={{ maxWidth: '300px' }}>
        {fpsParam.fn({
          value: { valid: true, value: fps },
          onChange: (x) => {
            if (x.valid) {
              setFps(x.value);
              setFpsChanged(true);
            }
          },
        })}
      </div>
      <Button
        variant="contained"
        sx={{ maxWidth: '300px' }}
        endIcon={
          !state.loading && (isDirty || fpsChanged) ? (
            <Icon>priority_high</Icon>
          ) : undefined
        }
        disabled={buttonDisabled}
        onClick={async () => {
          const transformInputs = transforms.map(
            (t): TransformInput => ({
              transformName: t.transformName,
              params: t.paramsValues.map((p) => {
                assert(p.valid);
                return p.value;
              }),
            })
          );
          setState({ loading: true });
          setTimeout(async () => {
            assert(
              baseImageUrl,
              'No source image, this button should be disabled!'
            );
            const start = Date.now();
            const worker = new RunTransformWorker();
            worker.postMessage({
              inputDataUrl: baseImageUrl,
              transformList: transformInputs,
              fps,
            });
            worker.onmessage = (event: any) => {
              const results = event.data;
              const computeTime = Math.ceil((Date.now() - start) / 1000);
              setState({
                loading: false,
                computeTime,
                results: results.map((result: any, idx: number) => ({
                  transformName: transforms[idx].transformName,
                  gif: result.gif,
                })),
              });
              setFpsChanged(false);
              setProgress(undefined);
              onComputed();
            };
          });
        }}
      >
        {state.loading ? <CircularProgress color="inherit" /> : 'Compute'}
      </Button>
      {progress !== undefined && (
        <LinearProgress variant="determinate" value={progress} />
      )}
      {!state.loading && state.computeTime && (
        <>
          <Divider />
          <Typography variant="caption">
            Compute Time: {state.computeTime} second(s)
          </Typography>
        </>
      )}

      {!state.loading && state.results.length > 0 && (
        <>
          <Divider />
          <Grid
            container
            spacing={2}
            padding={1}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {state.results.map(({ gif, transformName }, idx) => (
              <Grid item xs={4} sm={4} md={4}>
                <Typography variant="subtitle2">{transformName}</Typography>
                <img src={gif} alt={`gif-${transformName}-${idx}`}></img>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Stack>
  );
};
