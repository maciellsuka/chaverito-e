import Image from "next/image";

import { Header } from "@/components/common/header";
import { db } from "@/db";
import ProductList from "@/components/common/product-list";

const Home = async () => {
  const products = await db.query.productTable.findMany({
    with: { variants: true },
  });

  return (
    <>
      <Header />
      <div className="space-y-6 px-5">
        <Image
          src="/banner.png"
          alt="Chaveiros Personalizados"
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto w-full"
        />
        <ProductList products={products} title="Mais vendidos" />
        <Image
          src="/banner-02.png"
          alt="Chaveiros Personalizados"
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto w-full"
        />
      </div>
    </>
  );
};

export default Home;
