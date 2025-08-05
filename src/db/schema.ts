import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const userTable = pgTable("user", {
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
});

export const categoryTable = pgTable("category", {
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
  slug: text().notNull().unique(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const categoryRelations = relations(categoryTable, ({ many }) => ({
  products: many(productTable),
}));

export const productTable = pgTable("product", {
  id: uuid().primaryKey().defaultRandom(), // id of the product
  categoryId: uuid("category_id")
    .notNull()
    .references(() => categoryTable.id), // categoryId is a foreign key to the category table
  name: text().notNull(), // name of the product
  slug: text().notNull().unique(), // slug of the product
  description: text().notNull(), // description of the product
  createdAt: timestamp("created_at").notNull().defaultNow(), // created at timestamp
});

export const productVariantTable = pgTable("product_variant", {
  id: uuid().primaryKey().defaultRandom(),
  productId: uuid("product_id")
    .notNull()
    .references(() => productTable.id),
  name: text().notNull(),
  slug: text().notNull(),
  priceInCents: integer("price_in_cents").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const productRelations = relations(productTable, ({ one }) => {
  return {
    category: one(categoryTable, {
      fields: [productTable.categoryId],
      references: [categoryTable.id],
    }),
  };
}); //1:47:56
