export const power = (x, n) => {
  if (x == 0) return 0;
  if (n === 0) return 1;
  if (n % 2 == 0) {
    return power(x, Math.floor(n / 2)) * power(x, Math.floor(n / 2));
  } else {
    return power(x, Math.floor(n / 2)) * power(x, Math.floor(n / 2)) * x;
  }
};
// export default power;
