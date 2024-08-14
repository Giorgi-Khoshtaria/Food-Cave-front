import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export interface IconProps extends FontAwesomeIconProps {
  show?: boolean;
}

export interface CardProps {
  meal: string;
  ingredients: string;
  price: string;
}

export interface SpecialManuCardsProps {
  img: string;
  text: string;
}
