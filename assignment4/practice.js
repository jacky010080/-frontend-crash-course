// 1.
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const message = 'Hello, world!';
    resolve(message);
  }, 1000);
});
myPromise.then((message) => {
  console.log(message);
});

// 2.
async function delay() {
  const result = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Delay complete');
        resolve();
      }, 3000);
    });
  }
  await result();
}
delay();

// 3.
const handleError = async () => {
  const result = () => {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        const error = new Error('failure!!!');
        reject(error);
      }, 1000);
    });
  }
  await result();
}
handleError();

// 4.
const multiplePromise = async () => {
  const promiseA = () => {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }
  const promiseB = () => {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    }); 
  }
  const promiseC = () => {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
  }

  await promiseA();
  await promiseB();
  await promiseC();

  console.log('All promises resolved!');
}
multiplePromise();