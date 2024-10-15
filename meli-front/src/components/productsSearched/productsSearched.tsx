import React from "react";
import { SearchProductsInterface } from "../../interfaces/searchProducts";

function ProductsSearched({ data }: { data: SearchProductsInterface }) {
  const { items, categories, author } = data;

  if (items.length >= 1) {
    return (
      <div>
        {items.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>
              Precio: {item.price.currency} {item.price.amount}
            </p>
            <img src={item.picture} alt={item.title} />
            <p>Condición: {item.condition}</p>
            {item.free_shipping && <span>Envío gratuito</span>}
          </div>
        ))}
      </div>
    );
  }

  return <p>No se encontraron productos.</p>;
}

export default ProductsSearched;
