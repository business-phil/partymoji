/* eslint-disable no-restricted-globals */
import { runTransforms } from './run';

const ctx: Worker = self as any;
ctx.addEventListener('message', async (event) => {
  const results = await runTransforms(event.data);
  ctx.postMessage(results);
});
