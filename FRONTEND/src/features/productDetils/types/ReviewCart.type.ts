interface ReviewItem {
  id: number | string;
  name: string;
  image: string;
  likes: number;
  dislikes: number;
  rating: number;
  date: string;
  review: string;
}

export interface ReviewCartProps {
  item: ReviewItem;
}
