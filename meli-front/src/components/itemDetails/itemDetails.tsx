import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { SearchProductsInterface } from "../../interfaces/searchProducts";
import { getItemDetails } from "../../services/getItemDetailsService";
import CategoryBreadcrumb from "../categoriesBreadCrumb/categoriesBreadCrumb";
import "./itemDetails.scss";
import { ItemDetailsInterface } from "../../interfaces/itemDetails";
import ItemDescription from "../itemDescription/itemDescription";
import { Spinner } from "@chakra-ui/react";

const ItemDetails = () => {
  const location = useLocation();
  const [productsDetails, setProductsDetails] =
    useState<ItemDetailsInterface | null>(null);
  const [categories, setCategories] = useState<string[]>(
    location.state?.categories || []
  );
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams();

  useEffect(() => {
    getItem();
  }, [id]);

  const getItem = () => {
    setLoading(true);
    getItemDetails(id).then((p: ItemDetailsInterface) => {
      setProductsDetails(p);
      setLoading(false);
    });
  };

  if (!loading) {
    return (
      <div className="container-item-detail">
        <CategoryBreadcrumb categories={categories} />
        <div className="card-product-detail">
          <div className="item-detail">
            <div className="container-img-detail">
              <img src={productsDetails?.item.picture} />
            </div>
            <div className="container-text-details">
              {productsDetails?.item.condition && (
                <p className="condition">
                  {productsDetails.item.condition === "new" ? "Nuevo" : "Usado"}{" "}
                  - {productsDetails.item.sold_quantity + " vendidos"}
                </p>
              )}
              <h2>{productsDetails?.item.title}</h2>
              <h1>
                $ {productsDetails?.item.price.amount}
                <span style={{ fontSize: "small" }} className="top-price-decimals">
                  {productsDetails?.item.price.decimals === 0
                    ? "00"
                    : productsDetails?.item.price.decimals
                        .toString()
                        .padStart(2, "0")}
                </span>
              </h1>
              <a className="container-button">
                <button className="button-buy">Comprar</button>
              </a>
            </div>
          </div>
          <ItemDescription description={productsDetails?.item.description} />
        </div>
      </div>
    );
  } else {
    return (
        <div className="loading-container">
          <Spinner size="xl" color="yellow.500" />
        </div>
    );
  }
};

export default ItemDetails;
