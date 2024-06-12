import React, { useState, useEffect } from 'react';

function LocalStorageExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Utilisation de useEffect pour récupérer la valeur de "count" depuis le localStorage lors du montage du composant
    const storedCount = localStorage.getItem('count');
    if (storedCount) {
      setCount(Number(storedCount));
    }
  }, []); // Le tableau vide [] signifie que cette fonction s'exécutera uniquement après le montage initial du composant

  useEffect(() => {
    // Utilisation de useEffect pour mettre à jour le localStorage à chaque changement de "count"
    localStorage.setItem('count', count.toString());
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  return (
     <div>
      <h2>Exemple d'utilisation de useEffect avec localStorage</h2>
      <p>Count : {count}</p>
      <button onClick={increment}>Incrémenter Count</button>
    </div>
  );
}

export default LocalStorageExample;