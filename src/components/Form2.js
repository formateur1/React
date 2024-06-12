import React, { useState } from 'react'

export default function Form2() {
    const [animal, setAnimal] = useState("")
    const [nom, setNom] = useState("")
    const [age, setAge] = useState(0)
    const [pizza, setPizza] = useState("")

    return (
        <div>
          <div>
            <p>Voici un formulaire pour entrer un nom d'animal, qui affiche dans la console "trop long" si le nom fait
              plus de 8 caractères de long</p>
            <form onSubmit={showAnimal} className="Form">
              <label>
                <span>Nom de l'animal</span>
                <input type="text" value={animal} onChange={handleAnimalNameChange}/>
              </label>
              <button>Envoyer</button>
            </form>
          </div>
          <div>
            <p>Créer un formulaire pour saisir un age. Quand on le soumet, afficher une alerte "Interdit aux mineurs" si
              l'âge est inférieur à 18.</p>
            <form className="Form" onSubmit={handleAgeSubmit}>
              <label>
                <span> Age </span>
                <input type="text" value={age} onChange={handleAgeChange}/>
              </label>
              <button>Envoyer</button>
            </form>
          </div>
          <div>
            <p>Créer un formulaire pour saisir un nom. Quand on le soumet, Si le nom est différent de Bobby, alors
              afficher une alerte "Mais tu n'es pas Bobby !".</p>

            <form className="Form" onSubmit={handleNameSubmit}>
              <label>
                <span> Nom </span>
                <input type="text" value={nom} onChange={updateNom}/>
              </label>
              <button>Envoyer</button>
            </form>
          </div>
          <div>
            <p>Créer un formulaire avec un input de type select qui permet de choisir parmi les pizzas suivantes :
              "Ananas, Sushis, Anchois, et Nutella". </p>
            <p>Lorsque l'on clique sur le bouton d'envoi du formulaire, afficher dans la console le nom de la pizza
              choisie. </p>

            <form className="Form" onSubmit={handlePizzaSubmit}>
              <label>
                <span> Pizza </span>
                <select value={pizza} onChange={updatePizza}>
                    <option value="">-</option>
                    <option value="Ananas">Ananas</option>
                    <option value="Sushis">Sushis</option>
                    <option value="Anchois">Anchois</option>
                    <option value="Nutella">Nutella</option>
                </select>
              </label>
              <button>Envoyer</button>
            </form>
          </div>
        </div>
      )

      /**
     * Affiche "Trop long" si l'animal du state fait plus de 8 caractères de long
     */
    function showAnimal(event) {
        event.preventDefault() // Empêche le formulaire d'avoir un comportement normal, c'est-à-dire qu'on empêche qu'il s'actualise
        if (animal.length > 8) {
          console.log("Trop long !");
        }
      }
  
      /**
       * Met à jour la valeur de animal avec la valeur courante de l'input animal
       * @param event
       */
      function handleAnimalNameChange(event) {
        setAnimal(event.target.value)
      }
  
      /**
       * Mettre à jour le state avec la variable age
       */
      function handleAgeChange(event) {
        setAge(event.target.value)
      }
  
      /**
       * Gérer l'envoi du formulaire de l'âge
       */
      function handleAgeSubmit(event) {
        event.preventDefault();
        if (age < 18) {
          alert("Interdit aux mineurs !")
        }
      }
  
      /**
       * Met à jour le nom dans le state
       */
      function updateNom(event) {
        setNom(event.target.value)
      }
  
      /**
       *  Cette méthode gère l'envoi du formulaire du nom et vérifie qu'il soit égal à Bobby
       */
      function handleNameSubmit(event) {
        event.preventDefault()
        if (nom !== "Bobby") {
          alert("Mais tu n'es pas Bobby, appelez la police ")
        }
        else {
          alert("Bienvenue maître")
        }
      }
  
      /**
       * Mettre à jour le state de la pizza
       */
      function updatePizza(event) {
        setPizza(event.target.value)
      }
  
      /**
       * Gérer l'envoi de la pizza
       */
      function handlePizzaSubmit(event) {
        event.preventDefault();
        console.log(pizza)
      }
    }
