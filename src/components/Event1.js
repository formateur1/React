import { useState } from "react"

export default function Event1() {
    const [currentText, setCurrentText] = useState("Pop")
    const [personne, setPersonne] = useState({
        name: "LouisFilou",
        age: 51
    })

    return (
        <div>
            <ul>
                <li>Créer une méthode afficheAge qui affiche l'âge dans la console de la personne contenue dans
                    le state
                </li>
                <li>Créer un bouton qui appelle cette méthode lorsque l'on clique dessus.</li>
                <button onClick={afficheAge}>Affiche Age</button>
            </ul>
            <p>Voici un bouton qui envoie comme paramètre "hello" à la méthode "afficher"</p>
            <button onClick={() => afficher("hello")}>Dire Hello</button>
            <ul>
                <li>Créer un bouton qui appelle la méthode "afficher" en lui envoyant comme paramètre "Tu es de
                    la guimauve"
                </li>
            </ul>

            <button onClick={() => afficher("Tu es de la guimauve")}>Tu es de la guimauve</button>

            <p>Ici on affiche le contenu de currentText : {currentText}</p>
            <ul>
                <li>Créer une méthode changeText qui reçoit un texte en paramètre, et qui va le mettre dans le
                    state currentText
                </li>
                <li>Créer un bouton qui appelle la méthode changeText, et lui passer en paramètre la chaîne de
                    caractères suivante : "C'est une belle journée pour sauver des vies"
                </li>
            </ul>
            <button onClick={() => changeText("C'est une belle journée pour sauver des vies")}>Change texte </button>
        </div>
    )

    /**
         * Mettre à jour le state du texte avec ce qu'elle reçoit en paramètre
         */
    function changeText(text) {
        setCurrentText(text)
    }

    /**
     * Appeler affiche en envoyant le paramètre "Hello"
     */
    function appelleAfficheHello() {
        afficher("Hello");
    }

    /**
     * Afficher l'âge de la personne du state
     */
    function afficheAge() {
        console.log(personne.age);
    }

    /**
     * Affiche le texte reçu en paramètre
     * @param text String | Number
     */
    function afficher(text) {
        console.log(text);
    }
}