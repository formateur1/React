import React, { Component,useState,useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate,useLocation,useSearchParams } from "react-router-dom";


function Login(){

/*Créer une state qui sera utilisé dans le formulaire*/
const [auth,setAuth]=useState({login:'',password:'',role:''});

/*Créer un compte et le stock dans les cookies  */
const [cookies, setCookie] = useCookies(["auth"]);

const navigate = useNavigate();
const location = useLocation();


const inputChange = e => {
/*Récupérer l'input changé*/
const { name, value } = e.target;
if(value!='')
{
/*Modifier dans le state l'attirbut Client changé*/
setAuth(prevAuth => ({
...prevAuth,/*Récupérer l'ancien objet*/
[name]: value /*changé la valeur de l'attribut :<input name="login" ou name="password"*/
}));
}
};


/*Sauvegarder les preferences dans les cookies */
const connexion=()=> {
  if(auth.login!='' && auth.password!='')
  {
setCookie("auth", auth,
{
path: "/"
});
/*Une fois connecté redirect vers Home*/
navigate("/");
}
}



/*Vérifier si l'utilisateur est déjà connecté */
useEffect(() => {
if(cookies.auth!=undefined)
{
setAuth(cookies.auth);
console.log("not null"+cookies.auth.login);
}
}, []);



/*Afficher l'interface*/

return (
<div className="container">
<br/>
<div className="card text-success  card bg-light mb-3">
  <div className="card-header">Connexion</div>
  <div className="card-body">
    <input value={auth.login}  onChange={e => inputChange(e)} name="login" className="form-control" type="text" placeholder="Nom"/>
    <input value={auth.password}  onChange={e => inputChange(e)} name="password" className="form-control" type="text" placeholder="Prenom"/>
    <select value={auth.role}  onChange={e => inputChange(e)} name="role" className="form-control">
  <option value="">Choisir un Role</option>
  <option value="Admin">Admin</option>
  <option value="User">User</option>
  </select>
    <input  onClick={connexion}  className="form-control btn btn-success " type="button" value="Envoyer"/>
  </div>
</div>

  <div class="card text-white bg-danger">{location.state}</div>
</div>
);
  
}

export default Login;