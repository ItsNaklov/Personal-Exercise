const pizzaPromise = new Promise((resolve, reject) => {
  // do whatever data processing that we want
  setTimeout(() => {
    const dataProcessed = true;
    if (dataProcessed) {
      resolve("this is the process data");
    } else {
      reject("something went wrong");
    }
  }, 2000);
});

pizzaPromise.then((data) => console.log(data)).catch((err) => console.log(err));
console.log("user doing some other stuff");

async function sendRequest() {
  try {
    const data = await pizzaPromise;
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

//promise.all is calling all the data in the same time.
//promise.allsettled is calling all the data in the same time and if one of them fails it will still return something.
