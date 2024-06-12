import './App.css';
import Form1 from './components/Form1.js';
import Form2 from './components/Form2.js';
import Form3 from './components/Form3.js';
import Form4 from './components/Form4.js';
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./components/pages/home.js";
import Profil from "./components/pages/Profil";
import SettingsPage from "./components/pages/SettingsPage";
import Navigation from "./components/molecules/Navigation";
import About from './components/pages/About.js';
import UserProfile from './components/pages/UserProfile';
import ProductDetails from './components/pages/ProductDetails.js';
import PrivateRoute from "react-private-route";
import { useCookies } from "react-cookie";
import { useEffect, useState } from 'react';
import Login from './components/pages/Login.js';
import Facture from './components/pages/Facture.js';
import Achat from './components/pages/Achat.js';
import NotFound from './components/pages/NotFound.js';
import Forbiden from './components/pages/Forbiden.js';

function App() {
  /*****1.Varibales ***/
  /*un tableau de role et les components qui peut y accéder*/
  const roles = [
    { id: 1, role: 'Admin', components: ['Facture', 'Achat'] },
    { id: 2, role: 'User', components: ['Achat'] }
  ];

  /*auth:Varaible de state qui permet de récupérer login,password et le role From les cookies
  afin de vérifier est ce que l'utilisateur est connecté ou non 
   */
  const [auth, setAuth] = useState({ login: '', password: '', role: '' });

  /*cookies:Variable de state qui permet de récupérer  la cookie auth sauvegarder s'il existeCréer*/
  const [cookies, setCookie, removeCookie] = useCookies(["auth"]);
  /*estConnect:Varaible de state qui stock l'état de la connexion ,connecte true or false*/
  const [estConnect, setEstConnect] = useState(false);




  /******2:Gestion des routes private *****/
  /*{children} :les components dont PrivateRoute est la mère
  ...props}:récupérer les propos envoyé lorsque on appell <PrivateRoute data>
  */
  const PrivateRoute = ({ children, ...props }) => {

    /*
     <PrivateRoute role="User"> ==>Private Route
                  <Achat name="Achat" /> ==>Child
        </PrivateRoute>
    */

    /*récupérer le role assoicé  à la privateRoute  */
    const childRole = props.role;
    /*récupérer le nom de la component à afficher  */
    const childName = children.props.name;


    /*Utilisateur est déjà connecté */
    if (cookies.auth != undefined) {
      /*contiendra true si l'utilisteur connecté à le droit d'affficher la component childName*/
      let hasRole = false;

      /*boucler sur le tableau d'objet roles afin de chercher la est ce que :
      cookies.auth.role :le role de l'utilisateur connecté a le droit d'afficher la component ChildName
     {id: 1, role: 'Admin', components:[ 'Facture','Achat']},
      */
      roles.forEach((r) => {
        if ((cookies.auth.role == r.role) && r.components.includes(childName)) {
          /*Ok il a le droit*/
          hasRole = true;
        }
      });

      /*Ok il a le droit donc on afficher le children =>la component à afficher*/
      if (hasRole) {
        return children
      }

      /*si non on fait une redirection vers forbiden 
      Car l'utilisateur est connecté JUSTE il n'a pas le droit d'afficher cette Child*/
      else {
        return <Navigate to="/forbiden" state="Vous n'avez pas le droit" />
      }
    }
    /*Fin if utilisateur est connecté*/

    /*Si il n'est pas Connecté redirect vers la connexion*/
    return <Navigate to="/login" state="Erreur il faut se connecter" />
  }


  /***3.Charger l'utilisateur from les cookies ****
  /*Une fois l'application est lancée on Vérifier si l'utilisateur est déjà connecté */
  useEffect(() => {
    /*si le cookies('auth) existe */
    if (cookies.auth != undefined) {
      setAuth(cookies.auth);
      setEstConnect(true);
    }
  }, []);



  /*Déconnexion :Vider le cookie auth  */
  const deconnexion = () => {
    removeCookie("auth");
    setEstConnect(false);
    /*Rediection vers la route /login en envoyant state vide */
    return <Navigate to="/login" state="" />
  }

  return (
    <BrowserRouter>
      <div className="App">
        {/* <Form1 />
        <Form2 /> */}
        {/* <Form3 /> */}
        <Form4 />

        <h1>App</h1>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profil/:username' element={<Profil />} />
          <Route path='/settings' element={<SettingsPage />} />
        </Routes>

        <nav>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about">À Propos</Link></li>
            <li><Link to="/user/louis">Profil de John</Link></li>
            <li><Link to="/user/marie">Profil de Jane</Link></li>
            <li><Link to="/product/123/electronics/laptops">Laptop 123</Link></li>
            <li><Link to="/product/456/clothing/shirts">Chemise 456</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:username" element={<UserProfile />} />
          <Route path="/product/:productId/:category/:subcategory" element={<ProductDetails />} />
        </Routes>


        {/* 1.Le NAV */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse">
            <div className="navbar-nav">
              <a className="nav-item nav-link " href="/">Home :Public </a>
              <a className="nav-item nav-link " href="/Achat">Acheter </a>
              <a className="nav-item nav-link " href="/facture">Facture</a>
            </div>

            {estConnect == true &&
              <span class="nav-item nav-link">
                BienVenue:{auth.login} :Role {cookies.auth.role}
                <input onClick={deconnexion} className="btn btn-success " type="button" value="Deconnexion" />
              </span>
            }
          </div>
        </nav>

        {/*2. Les routes*/}
        <Routes>
          {/*Les routes publiques*/}
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/forbiden" element={<Forbiden />} />

          {/*Les routes privées*/}
          <Route path="/achat" element={
            <PrivateRoute role="User">
              <Achat name="Achat" />
            </PrivateRoute>
          }
          />

          <Route path="/facture" element={
            <PrivateRoute role="Admin">
              <Facture name="Facture" />
            </PrivateRoute>
          }
          />

          {/*NotFound*/}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
