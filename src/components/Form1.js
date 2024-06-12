import React, { useState } from 'react'

export default function Form1() {
  const [animal, setAnimal] = useState("")
  const [pseudo, setPseudo] = useState("Paul")
  const [age, setAge] = useState(0)

  return (
    <div>
      <div>
        <p>Voici un formulaire pour entrer un nom d'animal</p>
        <form onSubmit={showAnimal} className="Form">
          <label>
            <span>Nom de l'animal</span>
            <input type="text" value={animal} onChange={handleAnimalNameChange}/>
          </label>
          <button>Envoyer</button>
        </form>
      </div>
      <div>
        <p>Créer un formulaire pour saisir un pseudo, qui alerte la valeur du pseudo quand on le soumet</p>
        <form onSubmit={alertPseudo}>
          <label>
            Pseudo
            <input type="text" value={pseudo} onChange={updatePseudo}/>
          </label>
          <button>Envoyer</button>
        </form>
      </div>
      <div>
        <p>Créer un formulaire pour saisir un âge. Quand on soumet le formulaire alerter la valeur que si l'âge est
          inférieur à 18</p>
        <form onSubmit={alertAge}>
          <label>
            <span>Age</span>
            <input type="text" value={age} onChange={updateAge}/>
            <button>Envoyer</button>
          </label>
        </form>
      </div>


      <div>
        <p>Créer un formulaire permettant de saisir sa pizza préférée dans un input text. Afficher sa valeur dans
          une console.log quand on soumet le formulaire</p>
      </div>
    </div>
  )

  /**
     * Mettre l'âge à jour
     */
  function updateAge(event) {
    setAge(event.target.value)
  }

  /**
     * Montre l'animal présent dans le state
     */
  function showAnimal(event) {
    event.preventDefault() // Empêche le formulaire d'avoir un comportement normal, c'est-à-dire qu'on empêche qu'il s'actualise
    console.log(animal)
  }

  /**
   * Met à jour la valeur de animal avec la valeur courante de l'input animal
   * @param event
   */
  function handleAnimalNameChange(event) {
    setAnimal(event.target.value)
  }

  /**
   * Mettre à jour le pseudo du state avec la nouvelle valeur du input
   */
  function updatePseudo(event) {
    setPseudo(event.target.value)
  }

  /**
   * Alerter le contenu de pseudo
   */
  function alertPseudo(event) {
    event.preventDefault();
    alert(pseudo)
  }

  /**
   * Alerte le contenu de l'âge du state si il est supérieur à 18
   */
  function alertAge(event) {
    event.preventDefault();
    if (age < 18) {
      alert(age);
    }
  }
}
