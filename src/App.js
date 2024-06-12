import { useState } from 'react';
import './App.css';
import Horloge from './composants/Horloge';

function App() {
  const [nom, setNom] = useState("Louis");
  const [chat, setChat] = useState({ nom: "Paul", age: "5" });
  const [song, setSong] = useState("Ma musique");
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("Mon texte");
  const [texteExemple, setTexteExemple] = useState("Texte");
  const currentDate = new Date();
  console.log(currentDate.toTimeString());
  const [animaux, setAnimaux] = useState([
    {
      name: "Trolilo",
      type: "troll"
    },
    {
      name: "Sheep sheep",
      type: "poisson"
    },
    {
      name: "Donald Trump",
      type: "orange"
    }
  ]);
  const [newAnimalType, setNewAnimalType] = useState("");
  const [newAnimalName, setNewAnimalName] = useState("");

  /**
     * Incrémente la valeur du compteur du state
     */
  function incrementCounter() {
    setCounter(counter + 1)
  }

  /**
   * Décrémente la valeur du compteur du state
   */
  function decrementCounter() {
    setCounter(counter - 1)
  }

  /**
   * Remplace la valeur de text par "Baba"
   */
  function remplacerParBaba() {
    setText(text + "ba")
  }

  function handleChange(event) {
    setTexteExemple(event.target.value)
  }

  /**
         * Mettre à jour le state avec la nouvelle valeur du nom de l'animal
         */
  function handleAnimalNameChange(event) {
    setNewAnimalName(event.target.value)
  }

  /**
  * Mettre à jour le state avec la nouvelle valeur du type de l'animal
  * @param event Event contient la nouvelle valeur
  */
  function handleAnimalTypeChange(event) {
    setNewAnimalType(event.target.value)
  }

  /**
  * Afficher le contenu des deux champs
  * @param event Event événement de soumission du formulaire
  */
  function handleSubmit(event) {
    event.preventDefault();
    const ani = animaux;

    const name = newAnimalName;
    const type = newAnimalType;
    const newAnimal = {
      name,
      type,
    };
    ani.push(newAnimal)

    setAnimaux(ani)
  }

  return (
    <div className="App">
      <p>Afficher la propriété nom du state : {nom}</p>
      <p>Afficher la propriété chat du state avec ses attributs : {chat.nom} - {chat.age}</p>
      <p>Créer une propriété song dans le state, donnez-lui la valeur de votre choix, et affichez-là ici : {song}</p>
      <p>Créer une propriété nombreDeBananes dans le state, donnez-lui la valeur de votre choix, et affichez-le
        ici.
      </p>


      <div>
        <p>Voici un élément Compteur, cliquez sur le bouton pour découvrir son comportement</p>
        <h2>Compteur : {counter}</h2>
        <button onClick={incrementCounter}>Ajouter + 1</button>
      </div>
      <div>
        <p>Remplir la fonction decrementCounter</p>
        <p>Lier la fonction decrementCounter dans le constructor comme pour incrementCounter</p>
        <p>Créer un nouveau bouton "Retirer -1" qui va déclencher une fonction decrementCounter</p>
        <button onClick={decrementCounter}>Retirer - 1</button>
      </div>
      <div>
        <p>Remplir la fonction remplacerParBaba</p>
        <p>Lier la fonction remplacerParBaba dans le constructor </p>
        <p>Créer un nouveau bouton Remplacer qui va déclencher une fonction remplacerParBaba</p>
        <button onClick={remplacerParBaba}>Remplacer</button>
        <h2>{text}</h2>
      </div>


      <div>
        <p>Voici un input qui est lié au state texteExemple</p>
        <input value={texteExemple} onChange={handleChange} />
        <p>Voici sa valeur {texteExemple}</p>
      </div>
      <div>
        <p>
          Créer un input de type texte qui permettra de saisir un texte et qui aura pour valeur le texte du state
        </p>
        <p>
          Créer une méthode "handleTextChange" qui sera déclenchée à chaque fois que le texte changera. Cette méthode
          sera appelée avec le déclencheur onChange de l'input
        </p>
        <p>Afficher la valeur de texte ici : {texteExemple}</p>
      </div>


      <div>
        <Horloge hor={currentDate} />
      </div>

      <div>
        <ul>
          <li>
            Afficher la liste des animaux dans une boucle map. Pour chaque animal, afficher son nom, et
            son type
          </li>
          <li>
            Créer un input texte qui permet de saisir la valeur du state newAnimalType. Quand sa valeur
            change, la valeur de newAnimalType est mise à jour.
          </li>
          <li>
            Créer un autre input texte qui permet de saisir la valeur du state newAnimalName, avec le
            même fonctionnement
          </li>
          <li>
            Créer une méthode vide sauvegarderAnimal, et l'appeler depuis un bouton que vous créerez
            également
          </li>
          <li>
            Remplir la méthode sauvegarderAnimal tel que les valeurs newAnimalType et newAnimalName sont
            sauvegardées dans un nouvel animal,
            que la méthode mette le tableau des animaux à jour en ajoutant le nouvel animal à la fin
            et que une fois que l'animal a été créé, la méthode vide les champs newAnimalType et
            newAnimalName
          </li>
          <li>Bon courage !</li>
          <p>
            {newAnimalName}
          </p>
          <p>
            {newAnimalType}
          </p>
          <form onSubmit={handleSubmit}>
            <label>
              Nom de l'animal
              <input type="text" value={newAnimalName}
                onChange={handleAnimalNameChange} />
            </label>
            <label>
              Type de l'animal
              <input type="text" value={newAnimalType}
                onChange={handleAnimalTypeChange} />
            </label>
            <button type='submit'>Sauvegarder</button>
          </form>
          {animaux.map((animal, index) => (
            <div key={index}>
              <p> {animal.name} - {animal.type}</p>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}



export default App;
