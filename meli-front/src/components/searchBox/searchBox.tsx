import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import logoML from "../../assets/imgs/MELI-ec0c0e4f.png";
import "./searchBox.css";
import { SearchIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import CategoryBreadcrumb from "../categoriesBreadCrumb/categoriesBreadCrumb";

function SearchBox() {
  const { register, handleSubmit, reset } = useForm();
  const [placeHolder, setPlaceHolder] = useState<string>("");
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    if (data.query.length > 1) {
      navigate(`/items?search=${encodeURIComponent(data.query)}`);
    } else {
      alert("Ingrese +1 caracter");
    }
  };

  useEffect(() => {
    updatePlaceholder();
  }, [placeHolder]);

  const navigateHome = () => {
    reset({ query: "" });
    navigate("");
  };

  const updatePlaceholder = () => {
    if (window.innerWidth < 700) {
      setPlaceHolder("Estoy buscando...");
    } else {
      setPlaceHolder("Buscar productos, marcas y más...");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="header-search">
        <img className="logo-ml" src={logoML} onClick={navigateHome} />
        <div className="input-container">
          <input
            className="input-search"
            type="text"
            {...register("query")}
            placeholder={placeHolder}
          />
          <button type="submit" className="icon-button">
            <SearchIcon />
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBox;
