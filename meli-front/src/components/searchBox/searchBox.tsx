import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { SearchProductsInterface } from "../../interfaces/searchProducts";
import { searchProducts } from "../../services/searchProductsService";
import ProductsSearched from "../productsSearched/productsSearched";

function SearchBox() {
  const { register, handleSubmit } = useForm();
  const [loadingProducts, setLoadingProducts] = useState<boolean>(false);
  const [products, setProducts] = useState<SearchProductsInterface | null>(
    null
  );

  const onSubmit = (data: any) => {
    console.log(data.query);
    if (data.query.length > 1) {
      setLoadingProducts(true);
      searchProducts(data.query).then((p) => {
        setProducts({
          author: p.author,
          categories: p.categories,
          items: p.items.slice(0, 4),
        });
        setLoadingProducts(false);
      });
    } else {
      alert("Ingrese +1 caracter");
    }
  };

  useEffect(() => {
    if (products) {
      console.log(products);
    }
  }, [products]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("query")} placeholder="Ingrese su consulta" />
        <button type="submit">Buscar</button>
      </form>

      {loadingProducts ? (
        <p>Cargando productos...</p>
      ) : products ? (
        <ProductsSearched data={products} />
      ) : (
        <p>No se encontraron productos.</p>
      )}
    </div>
  );
}

export default SearchBox;
