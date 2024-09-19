import { useState } from "react";
import ProductCard, { Product } from "./ProductCard";
import NewProductModal from "./NewProductModal";

interface ProductListProps {
  products: Product[];
  setProducts: (products: Product[]) => void;
  removeProduct: (id: number) => void;
}

export default function ProductList({
  products,
  removeProduct,
  setProducts,
}: ProductListProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: 0,
    image: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct((prevState) => ({ ...prevState, [name]: value }));
  };

  const addProduct = () => {
    if (
      !newProduct.name ||
      !newProduct.description ||
      newProduct.price <= 0
    ) {
      alert("Todos os campos são obrigatórios.");
      return;
    }

    const newId = products.length ? products[products.length - 1].id + 1 : 1;
    setProducts([...products, { id: newId, ...newProduct, price: Number(newProduct.price) }]);
    setNewProduct({ name: "", description: "", price: 0, image: "" });
    setIsModalOpen(false);
  };

  return (
    <div className="product-list">
      <div className="list-heading">
        <h1>Product List</h1>
        <button onClick={() => setIsModalOpen(true)} className="add-button">
          Add Product
        </button>
      </div>

      <div className="products-wrapper">
        {products.length ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onRemove={removeProduct}
            />
          ))
        ) : (
          <p>Não há produtos disponíveis</p>
        )}
      </div>

      {isModalOpen && (
        <NewProductModal
          addProduct={addProduct}
          handleInputChange={handleInputChange}
          newProduct={newProduct}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
}
