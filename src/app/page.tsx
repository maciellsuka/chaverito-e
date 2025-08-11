import Image from "next/image";

import { Header } from "@/components/common/header";
import { db } from "@/db";
import ProductList from "@/components/common/product-list";
import CategorySelector from "@/components/common/category-selector";
import { productTable } from "@/db/schema";
import { desc } from "drizzle-orm";
import Footer from "@/components/common/footer";

const Home = async () => {
  const products = await db.query.productTable.findMany({
    with: { variants: true },
  });

  const newlyCreatedAt = await db.query.productTable.findMany({
    orderBy: [desc(productTable.createdAt)],
    with: {
      variants: true,
    },
  });

  const categories = await db.query.categoryTable.findMany({});

  return (
    <>
      <Header />
      <div className="space-y-6">
        <div className="px-5">
          <Image
            src="/banner.png"
            alt="Chaveiros Personalizados"
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto w-full"
          />
        </div>

        <ProductList products={products} title="Favoritos da galera" />
        <div className="px-5">
          <CategorySelector categories={categories} />
        </div>

        <div className="px-5">
          <Image
            src="/banner-02.png"
            alt="Chaveiros Personalizados"
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto w-full"
          />
        </div>

        <ProductList products={newlyCreatedAt} title="Chegaram agora" />
        <Footer />
      </div>
    </>
  );
};

export default Home;
