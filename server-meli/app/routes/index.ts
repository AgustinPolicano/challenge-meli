import { Router } from "express";
import { productDetails } from "../controllers/productDetailsController"; 
import { searchProducts } from "../controllers/productsController";

const router = Router();

router.post("/searchProducts", searchProducts);
router.get("/getItems/:id", productDetails); 

export default router;
