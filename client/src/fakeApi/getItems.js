import delay from './delay';
import items from './jobs';

export default () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: items });
    }, delay);
  });
