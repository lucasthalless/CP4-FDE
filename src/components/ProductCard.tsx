export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

interface ProductProps extends Product {
    onRemove: (id: number) => void;
}
  
  export default function ProductCard({ id, name, description, price, image, onRemove }: ProductProps) {
    return (
    <div className="product-card">
        {
          image ?
          <img src={`/${image}`} alt="" />
          :
          <div className="image-placeholder">🛒</div>
        }
        <div className="product-content">
          <h2>{`#${id} - ${name}`}</h2>
          <p>{description}</p>
          <p><strong>R$ {price.toFixed(2)}</strong></p>
        </div>
        <button onClick={() => onRemove(id)} className="remove-button">🗑️</button>
      </div>
    );
  };