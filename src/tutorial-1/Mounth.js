const montoToStr = (num) => {
  let date = new Date(2021, `${num - 1}`);
  return date.toLocaleString('ru', {
    month: 'long',
  });
};

console.log(montoToStr(5)); //май
