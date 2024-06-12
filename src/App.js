import { useEffect, useState, useContext } from 'react';
import './App.css';
import Timer from './components/Timer';
import LocalStorageExample from './components/LocalStorageExample';

import TestContextChild1 from './components/TestContextChild1';
import TestContextChild2 from './components/TestContextChild2';
/*importer le context Provider*/
import MonContextProvider from './components/MonContextProvider.js';
import UseStateCrud from './components/UseStateCrud.js';
import ListComponent from './components/ListComponent.js';
import { CalculateFactorial } from './components/CalculateFactorial.js';

function App() {
  const [message, setMessage] = useState('');

  /*Créer des données à partager avec les components child de MonContextProvider*/
  let donnees = {
    nom: "hakiki",
    siteweb: "fixwins",
    cours: "ReactJS",
  };

  let items = [
    {id: 1, name: "Iphone"},
    {id: 2, name: "Samsung"},
    {id: 3, name: "Xiaomi"},
  ]

  // Utilisation de useEffect pour afficher un message lorsque le composant est monté
  useEffect(() => {
    setMessage('Hello world !');
  }, []); // Le tableau vide [] signifie que cette fonction s'exécutera uniquement après le montage initial du composant

  return (
    <div>
      <h2>Exemple d'utilisation de useEffect</h2>
      <p>{message}</p>

      <Timer />

      <LocalStorageExample />

      {/*passer les données à toutes les components child */}
      <MonContextProvider value={donnees}>
        <TestContextChild1 />
        <TestContextChild2 />
      </MonContextProvider>

      <UseStateCrud />

      <ListComponent items={items} />
      <CalculateFactorial />
    </div>
  );
}

export default App;
