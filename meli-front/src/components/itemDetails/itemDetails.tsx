import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { SearchProductsInterface } from "../../interfaces/searchProducts";
import { getItemDetails } from "../../services/getItemDetailsService";

const ItemDetails = () => {
  const location = useLocation();
  const [productsDetails, setProductsDetails] = useState<SearchProductsInterface | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams();

  useEffect(() => {
    getItem();
  }, [id])

  const getItem = () => {
    setLoading(true)
    getItemDetails(id).then(p => {
        console.log(p)
        setProductsDetails(p.items)
    })
  };


  return <div>
    <p></p>
  </div>;
};

export default ItemDetails;
