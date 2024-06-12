import {useParams} from "react-router-dom";

// ProductDetails.js
export default function ProductDetails(){
    const { productId, category, subcategory } = useParams();
    return (
      <div>
        <h2>Détails du Produit</h2>
        <p>ID du Produit : {productId}</p>
        <p>Catégorie : {category}</p>
        <p>Sous-catégorie : {subcategory}</p>
      </div>
    );
  };