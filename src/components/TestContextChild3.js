import React,{useContext} from "react";
import { useMonContext } from './MonContextProvider.js';


function TestContextChild3() {
/*Récupérer le context MonContext*/
const donnees = useMonContext();

return (<div className="bg-success">
TestContextChild3<br/>
{/*Utiliser les données du Context*/}
nom:{donnees.nom}<br/>
siteweb:{donnees.siteweb}<br/>
cours:{donnees.cours}<br/>
</div>);
}

export default TestContextChild3;