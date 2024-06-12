import './App.css';
import Hello from './components/Hello';
import Title from './components/Title';
import Button from './components/Button';
import Image from './components/Image';
import PanierLegumes from './components/PanierLegumes';
import Eleves from './components/Eleves';

function App() {

  const legumes = listeLegumes();
  const eleves = listeEleves();

  return (
    <div className="App">
      <p>
        En vous basant sur les exemple TitleComponent et Consigne, créez votre propre component
        PrimaryButton qui contiendra un bouton simple avec un texte de votre choix.
      </p>
      <p>Depuis la classe Hello, appeler ce nouveau composant en vous inspirant des exemples</p>
      <p>Créer un nouveau composant TextField qui contiendra un input de type texte et un label de vos choix.</p>
      <p>Générer ce nouveau composant TextField depuis la classe Home deux fois.</p>
      <Hello />


      <p>
        En vous basant sur l'exemple de Title, créer un composant Button qui prendra en props un texte, et qui sera
        affiché à l'intérieur de ce bouton.
      </p>
      <p>Appeler ce bouton deux fois en lui envoyant pour props "Bubu", et "bababa"</p>
      <p>Créer un composant Image qui va afficher une image, et qui prend une clé src en guise de props</p>
      <p>Appeler cette image en lui envoyant cette adresse comme prop de src :
        https://intiformation.com/wp-content/uploads/2021/02/numerique.gif
      </p>
      <Title title="Bonjour" />
      <Button text="Baba" />
      <Button text="Bububu" age={18} />
      <Image
        src={"https://intiformation.com/wp-content/uploads/2021/02/numerique.gif"} />
      <Image src={"Pérave"} />


      <div>
        <p>Créez un composant PanierLegumes et passez-lui en props les legumes.</p>
        <p>Dans le composant PanierLegumes, créer un composant Legume qui sera appelé autant de fois qu'il y a de légumes dans les props</p>
        <p>Dans le composant Legume, afficher le nom et le prix de chaque légume </p>
        <PanierLegumes listeLegumes={legumes}/>
      </div>
      <div>
        <p>Créer un composant Eleves et passez-lui en props les élèves.</p>
        <p>Dans ce composant, créer un composant Eleve qui sera appelé autant de fois qu'il y a d'élève dans les props </p>
        <p>Dans le composant Eleve, afficher l'élève dans une balise de votre choix</p>
        <Eleves listeEleves={eleves} />
      </div>
    </div>
  );
}

/**
       * Cette fonction génère une liste de légumes en brut
       */
function listeLegumes() {
  return [
    {
      name: "Topinambour",
      prix: 15,
    },
    {
      name: "Pois chiche",
      prix: 2,
    },
    {
      name: "Salade",
      prix: 999,
    },
    {
      name: "Courgette",
      prix: 1,
    },
    {
      name: "Oignon",
      prix: 2,
    },
  ]
}

/**
 * Cette fonction génère une liste d'élèves en brut
 */
function listeEleves() {
  return [
    {
      name: "Charly",
      age: 15,
    },
    {
      name: "Bobbybillybouba",
      age: 12,
    },
    {
      name: "JeanMichelDestroyer",
      age: 16,
    }
  ]
}


export default App;
