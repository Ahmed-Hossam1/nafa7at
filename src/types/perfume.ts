import { LucideIcon } from "lucide-react";

export interface Category {
  title: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  reviews: number;
  category: string;
  description: string;
}

export interface Benefit {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface Review {
  name: string;
  text: string;
  avatar: string;
}
