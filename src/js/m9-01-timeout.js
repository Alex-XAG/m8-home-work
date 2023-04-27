import '../css/common.css';

// Method window.setTimeout(callback, delay, args)

const logMessage = () => {
  console.log('Log in calling callback-function at 3 seconds');
};

console.log('Before calling setTimeout');

setTimeout(() => {
  console.log('Inside of callback for setTimeout');
}, 2000);

console.log('After calling setTimeout');

// Clearing timeout with clearTimeout(timeoutId)

// const logger = time => {
//     console.log(`Log after ${time}ms, because was not rejected timeout`);
// }

// setTimeout(logger, 2000, 2000)
