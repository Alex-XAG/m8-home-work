// method setInterval(callback, delay, args)

const logger = time => console.log(`log every ${time}ms - ${Date.now()}`);

// console.log('Before calling setInterval()');
// setInterval(logger, 2000, 2000);
// console.log('After calling setInterval()');

//  Clearing of interval with clearInterval(intervalId)

// const intervalId = setInterval(logger, 2000, 2000);
// const shouldCancelInterval = Math.random() > 0.3
// console.log(shouldCancelInterval);

// if (shouldCancelInterval) {
//     clearInterval(intervalId)
// }
