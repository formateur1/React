import logo from './logo.svg';
import './App.css';

function App(props) {
  // lecture seule pour les props
  // props.message = "Hello React";

  const song = "Life goes on";
  const numberOfGoodReasonsToBeHere = 150;
  const disabledButton = <button disabled>Bouton</button>

  const notes = [0, 4, 10, 20, 15];

  const listeNotes = notes.map(function (note, index) {
    return (
      <li key={index}>
        {note}
      </li>);
  });

  // const personne = {
  //   firstname: "Boulette",
  //   lastname: "Fromage",
  //   age: 15,
  // };

  const actionsList = (
    <div>
      <button>Modifier</button>
      <button>Annuler</button>
    </div>
  );

  const personne = {
    firstname: "Boulette",
    lastname: "Fromage",
    name: "Charly",
    age: 66,
    job: {
      name: "Styliste",
      since: "29 Avril 2020",
    }
  };

  // const panierDeCourses = [
  //   {
  //     name: "Concombre",
  //     type: "Legume"
  //   },
  //   {
  //     name: "Courgette",
  //     type: "Legume",
  //   },
  //   {
  //     name: "Endive",
  //     type: "Beurk",
  //   },
  //   {
  //     name: "Steak",
  //     type: "Frais",
  //   },
  //   {
  //     name: "Sanglier",
  //     type: null,
  //   }
  // ];

  const series = catalogueSeries();
  console.log(series);


  const personnes = [
    {
      name: "Charly",
      age: 66,
      job: {
        name: "Styliste",
        since: "29 Avril 2020",
      },
    },
    {
      name: "Charly",
      age: 25,
      job: {
        name: "Barman",
      },
    },
    {
      name: "Bobby",
      age: null,
      job: null,
    },
  ];

  const panierDeCourses = [
    {
      name: "Concombre",
      type: "Legume",
      magasin: {
        name: "MisterEpices",
        taille: "petit",
      }
    },
    {
      name: "Courgette",
      type: "Legume",
      magasin: {
        name: "MisterEpices",
        taille: "petit",
      }
    },
    {
      name: "Endive",
      type: "Beurk",
      magasin: {
        name: "Parking Souterrain",
        taille: "Grand",
      }
    },
    {
      name: "Steak",
      type: "Frais",
    },
    {
      name: "Sanglier",
      type: null,
      magasin: null,
    }
  ];

  const chat = "RonronOa";

  return (
    <div className="heading">
      <h1>{props.message}</h1>
      <p>{props.subtitle}</p>
      <div>
        <p>Afficher ici le contenu de la variable song </p>
        <p>{song}</p>
        <p>Afficher ici le contenu de numberOfGoodReasonsToBeHere</p>
        {numberOfGoodReasonsToBeHere}
        <p>Afficher ici le contenu de disabledButton</p>
        {disabledButton}


        <p>
          Afficher le contenu du tableau notes sous forme de liste
        </p>
        <ul>
          {listeNotes}
        </ul>
        <ul>
          {notes.map((note, index) => <li key={index}>{note}</li>)}
        </ul>
        <p>Afficher le contenu de la constante personne sous la forme personne.valeur</p>
        <div>
          <p>{personne.firstname}</p>
          <p>{personne.lastname}</p>
          <p>{personne.age}</p>
        </div>
        <p>Afficher le contenu de la constante actionsList</p>
        {actionsList}


        <p>Consulter la méthode cancelButton. En vous basant sur le même modèle, remplissez la méthode
          validateButton</p>
        <p>Appeler la fonction validateButton pour générer le bouton en dessous de ce paragraphe</p>
        <p>{validateButton()}</p>
        <p>Afficher toutes les propriétés de la variable personne </p>
        <div>
          <p>
            <span>Nom : {personne.name} - {personne.age} Ans</span>
          </p>
          <p>
            <span>Job : {personne.job.name} - Depuis : {personne.job.since}</span>
          </p>
        </div>
        <p>Afficher toutes les propriétés du panier de courses</p>
        {panierDeCourses.map((aliment, index) => (
          <div key={index}>
            <p><span>{aliment.name} - {aliment.type || "Non renseigné"}</span></p>
          </div>
        ))}
        <p>Afficher toutes les propriétés du catalogue de séries</p>
        {series.map((serie, index) => (
          <div key={index}>
            <p>{serie.name}</p>
            <p>{serie.episodes}</p>
            <p>{serie.note}</p>
          </div>
        ))}


        <p>
          Après avoir consulté la documentation, afficher chat de manière conditionnelle seulement
          si son nom est différent de "Ronron" et qu'il n'est pas nul et avec la notation &&
        </p>
        {chat === 'Ronron' ? null : <h2>{chat}</h2>}
        {chat !== 'Ronron' && <h2>{chat}</h2>}
        <p>
          Afficher les propriétés de chaque personne à l'aide de map
          Pour chaque personne afficher son âge de manière conditionnelle en utilisant ? et :
        </p>
        {personnes.map((personne, index) => (
          <div key={index}>
            <p>{personne.name}</p>
            <p>{personne.age > 65 ? "Senior" : (personne.age || 'Non renseigné')}</p>
            {personne.job && (
              <div>
                <p>{personne.job.name}</p>
                <p>{personne.job.since}</p>
              </div>
            )}
          </div>
        ))}
        <p>
          Afficher les propriétés de chaque personne à l'aide de map
          Pour chaque personne afficher son âge de manière conditionnelle en utilisant ||
        </p>
        <ul>
          <li>
            Si l'âge de la personne est supérieur à 65, alors afficher "Senior"
          </li>
          <li>
            Sinon, afficher l'âge de la personne
          </li>
        </ul>
        <p>Afficher tous les légumes dans une boucle map</p>
        <p>Pour chaque légume, afficher son magasin de manière conditionnelle avec && </p>
        {panierDeCourses.map(aliment => (
          <div>
            <p>{aliment.name} - {aliment.type || 'Non renseigné'}</p>
            {aliment.magasin && (
              <div>
                <p>{aliment.magasin.name}</p>
                <p>{aliment.magasin.taille}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  /**
     * Cette méthode renvoie un bouton Annuler au format JSX
     */
  function cancelButton() {
    return <button>Annuler</button>
  }

  /**
   * Cette méthode renvoie un bouton Valider au format JSX
   */
  function validateButton() {
    return <button>Valider</button>
  }

  /*
  * Cette méthode renvoie une liste des séries à regarder pendant le confinement
  * */
  function catalogueSeries() {
    return [
      {
        name: "One Sheep",
        episodes: 999999,
        note: 5,
      },
      {
        name: "Vikongs",
        episodes: 5,
        note: 19,
      },
      {
        name: "Spartakis, au bon lait de brebis",
        episodes: 15,
        note: 12,
      }
    ];
  }

}



export default App;
