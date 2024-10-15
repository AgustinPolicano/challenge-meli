  import React, { useEffect, useState } from "react";
  import { SearchProductsInterface } from "../../interfaces/searchProducts";
  import { useLocation, useNavigate } from "react-router-dom";
  import { searchProducts } from "../../services/searchProductsService";
  import { Spinner } from "@chakra-ui/react";
  import "./productsSearched.css";
  import CategoryBreadcrumb from "../categoriesBreadCrumb/categoriesBreadCrumb";

  const ProductsSearched = () => {
    const location = useLocation();
    const [products, setProducts] = useState<SearchProductsInterface | null>(
      null
    );
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();
    const getQueryParam = (param: string) => {
      const query = new URLSearchParams(location.search);
      return query.get(param);
    };

    const setItemDetails = (itemId: string) => {
      navigate(`/items/${itemId}`);
    };

    useEffect(() => {
      setLoading(true);
      const query = getQueryParam("search");
      if (query) {
        searchProducts(query).then((data) => {
          setProducts({
            author: data.author,
            categories: data.categories,
            items: data.items.slice(0, 4),
          });
          console.log(products?.categories);
          setLoading(false);
        });
      } else {
        setLoading(false);
      }
    }, [location]);

    if (!loading) {
      return (
        <div className="container-search-products">
          <CategoryBreadcrumb categories={products?.categories} />
          {products?.items.map((item) => (
            <div
              className="flex-items"
              key={item.id}
              onClick={() => setItemDetails(item.id)}
            >
              <div>
                <img src={item.picture} alt={item.title} />
              </div>
              <div className="container-text-search">
                <span className="price-text">$ {item.price.amount}</span>
                <h3>{item.title}</h3>
                <div>
                  {item.free_shipping && (
                    <span className="free-shipping">Envío gratis</span>
                  )}
                </div>
                <div>
                  {item.condition === "used" && (
                    <span className="condition-text">Usado</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div>
          <Spinner color="yellow.500" />
        </div>
      );
    }
  };

  export default ProductsSearched;
