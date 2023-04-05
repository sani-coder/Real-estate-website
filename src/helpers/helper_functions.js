/**
 * The function formats a number as a price with commas separating thousands.
 * @param price - The price parameter is a number that needs to be formatted with commas as thousands
 * separators.
 * @returns The `priceFormat` function is returning the formatted price with commas separating the
 * thousands.
 */
const priceFormat = (price) => {
  Number.prototype.format = function (n, x) {
    var re = "\\d(?=(\\d{" + (x || 3) + "})+" + (n > 0 ? "\\." : "$") + ")";
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, "g"), "$&,");
  };
  return price.format();
};

export { priceFormat };
