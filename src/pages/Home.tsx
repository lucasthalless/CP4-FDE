import { useState } from "react";
import ProductList from "../components/ProductsList";
import { products_mock } from "../___mock___/MOCK_DATA";
import { Product } from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState<Product[]>(products_mock);
  const handleRemoveProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <>
      <ProductList
        products={products}
        setProducts={setProducts}
        removeProduct={handleRemoveProduct}
      />
    </>
  );
}
