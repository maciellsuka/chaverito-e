"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { addProductToCartSchema, AddProductToCartSchema } from "./schema";

export const addProductToCart = async (data: AddProductToCartSchema) => {
  addProductToCartSchema.parse(data);
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    throw new Error("Unauthorized");
  }
}; // aula 3 1:59:16
