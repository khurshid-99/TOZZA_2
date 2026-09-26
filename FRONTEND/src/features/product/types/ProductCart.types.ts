export interface ProductCartProps {
  id: number | string;
  img: string;
  title: string;
  subTitle: string;
  netWt: string;
  gross: number | string;
  mrp: number | string;
  fn: () => void;
}
