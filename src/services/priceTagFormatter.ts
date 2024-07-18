const priceTagFormatter = (number: number) => {
  number = Math.round(number * 100) / 100;
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default priceTagFormatter;
