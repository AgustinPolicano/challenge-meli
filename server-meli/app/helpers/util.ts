export const apiML = "https://api.mercadolibre.com/";

export const isNumberInteger = (price: number): number | null => {
  if (Number.isInteger(price)) {
    return 0o0;
  } else {
    const decimals = Math.round((price % 1) * 100);
    return decimals;
  }
};