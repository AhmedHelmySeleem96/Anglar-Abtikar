/* tslint:disable */
/* eslint-disable */
import { CartItemDto } from './cart-item-dto';
export interface CartDto {
  cartItems: Array<CartItemDto>;
  countItems: number;
  id?: number;
  notes?: null | string;
  totalCart: number;
  userId: string;
}
