const order = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Order placed!");
      resolve();
    }, 5000); // 1 seconds delay
  });
};

const prepare = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Food is Ready!");
      resolve();
    }, 3000);
  });
};

const deliver = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Food Delivered!");
      resolve();
    }, 2000);
  });
};

const orderFood = async () => {
  await order();
  await prepare();
  await deliver();
  console.log("Your food has been delivered")
};

console.log(orderFood());