import React from 'react';

/*Créer un context avec un objet vide {}*/
const MonContext = React.createContext({});

export default function MonContextProvider(props) {
/*Recevoir les données à partager */
let donnees=props.value;

return (
<MonContext.Provider value={donnees}>
{/*Créer un provider afin de partager des données avec ses components children*/}

{props.children}
</MonContext.Provider>
);
}
/*Exporter monContext afin de l'appeler avec le nom useContext()*/
export const useMonContext = () => React.useContext(MonContext);