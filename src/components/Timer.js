import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Utilisation de useEffect pour incrémenter le compteur de secondes chaque seconde
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // La fonction de nettoyage arrête l'incrémentation lorsque le composant est démonté
    return () => clearInterval(interval);
  }, []); // Le tableau vide [] signifie que cette fonction s'exécutera uniquement après le montage initial du composant

  return (
  <div>
      <h2>Compteur de secondes</h2>
      <p>{seconds} secondes</p>
    </div>
  );
}

export default Timer;