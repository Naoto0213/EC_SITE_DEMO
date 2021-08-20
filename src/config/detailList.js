export const DETAIL_LIST = (product) => [
  {
    label: "シリーズ:",
    detail: product.series,
  },
  {
    label: "種類:",
    detail: product.type,
  },
  {
    label: "価格:",
    detail: product.price + "円",
  },
  {
    label: "在庫:",
    detail: product.stock,
  },
];
