export interface ProductCartProps {
  id: number | string;
  img: string;
  title: string;
  subTitle: string;
  netWt: string;
  gross: number;
  mrp: number;
  fn: () => void;
}
