interface ProductInput {
    name: string;
    description: string;
    price: number;
    image: string;
}

interface NewProductModalProps {
  newProduct: ProductInput;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addProduct: () => void;
  setIsModalOpen: (isOpen: boolean) => void;
}

export default function NewProductModal({
  newProduct,
  handleInputChange,
  addProduct,
  setIsModalOpen,
}: NewProductModalProps) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Adicionar Produto</h2>
        <input
          type="text"
          name="name"
          placeholder="Nome do Produto"
          value={newProduct.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Descrição"
          value={newProduct.description}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Preço"
          value={newProduct.price}
          onChange={handleInputChange}
          required
        />
        {/* TODO: input para imagens */}
        {/* <input
                    type="text"
                    name="image"
                    placeholder="Imagem (ex: relogio_1.webp)"
                    value={newProduct.image}
                    onChange={handleInputChange}
                    required
                /> */}
        <button onClick={addProduct}>Criar Produto</button>
        <button onClick={() => setIsModalOpen(false)}>Cancelar</button>
      </div>
    </div>
  );
}
