export const apiML = "https://api.mercadolibre.com/";

export const isNumberInteger = (price: number): number | null => {
  if (Number.isInteger(price)) {
    return null;
  } else {
    const decimals = Math.round((price % 1) * 100);
    return decimals;
  }
};