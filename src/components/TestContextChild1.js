import React,{useContext} from "react";
/*importer le context MonContext*/
import { useMonContext } from './MonContextProvider.js';

function TestContextChild1() {
/*Récupérer le context MonContext*/
const donnees = useMonContext();

return (<div className="bg-info">
TestContextChild1<br/>
{/*Utiliser les données du Context*/}
nom:{donnees.nom}<br/>
siteweb:{donnees.siteweb}<br/>
cours:{donnees.cours}<br/>
</div>);
}
export default TestContextChild1;