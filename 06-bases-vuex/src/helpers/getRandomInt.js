const getRandomInt = () => {
  return new Promise((res) => {
    const randomInt = Math.floor(Math.random() * 20 + 1);

    setTimeout(() => {
      res(randomInt);
    }, 2000);
  });
};

export default getRandomInt;
