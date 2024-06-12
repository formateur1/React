import React, { Component,useState,useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate,useLocation,useSearchParams } from "react-router-dom";


function Forbiden(){

/*Récuper le message envoyer par la route:
<Navigate to="/forbiden" state="Vous n'avez pas le droit" />
 */
const location = useLocation();

/*Afficher l'interface*/
return (
<div className="container">
<br/>
<div className="card   mb-3">
  <div className="card-header text-white  card bg-danger">Fobiden for your</div>
  <div className="card-body">
   Message from parent :<b> {location.state}</b>
  </div>
</div>
</div>
);
}

export default Forbiden;