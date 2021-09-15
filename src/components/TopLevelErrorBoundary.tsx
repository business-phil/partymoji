import { Button, Icon, Stack, Typography } from '@material-ui/core';
import React, { ErrorInfo } from 'react';

interface Props {
  onClearLocalStorage: () => void;
}

interface State {
  hasError: boolean;
}

export class TopLevelErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(error: Error): State {
    console.error(error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Stack spacing={1}>
          <Typography variant="h2">Oh no!</Typography>
          <Typography variant="body1">
            There seems to have been an issue
          </Typography>
          <Typography variant="body2">
            If refreshing the page doesn't fix things, click the below button to
            clear local storage
          </Typography>
          <Button
            variant="contained"
            sx={{ maxWidth: '300px' }}
            endIcon={<Icon>priority_high</Icon>}
            startIcon={<Icon>priority_high</Icon>}
            onClick={this.props.onClearLocalStorage}
          >
            Clear storage and reload
          </Button>
        </Stack>
      );
    }

    return this.props.children;
  }
}
