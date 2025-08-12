import z from "zod";
import { addProductToCart } from ".";

export const addProductToCartSchema = z.object({
  productVariantId: z.uuid(),
  quantity: z.number().min(1),
});

export type AddProductToCartSchema = z.infer<typeof addProductToCartSchema>;
