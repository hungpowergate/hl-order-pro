export const numberWithCommas = (val) => {
  if (val) {
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return val;
}