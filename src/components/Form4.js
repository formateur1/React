import React, { useState } from 'react'

const REGEX_MAIL_FORMAT = /^[a-zA-Z0-9.!#$%&'*+/=?^_`/\{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const ERROR_MAIL_FORMAT = "L'email n'est pas au bon format"

const ERROR_TOO_SHORT = "Mot de passe trop court, Il faut au moins 8 caractères, et vous en avez mis ";
const ERROR_NO_CAP = "Le mot de passe doit contenir au moins une majuscule";
const ERROR_NO_MIN = "Le mot de passe doit contenir au moins une minuscule";
const ERROR_PASSWORD_CONFIRM = "Erreur, le mot de passe doit être le même que celui de la confirmation";



export default function Form4() {
    const [formData, setFormData] = useState({
        currentStep: 1,
        nom: "",
        prenom: "",
        age: "",
        pizza: "",
        garnitures: [],
        mail: "",
        pass: "",
        passwordConfirm: "",
        errors: [],
    });

    function FormResults(props) {
        return (
            <div>
                Afficher les data
                {props.data.map((info, index) => <p key={index}>{info.label}: {info.value}</p>)}
            </div>
        )
    }
    
    function NextButton(props) {
        return (
            <button disabled={props.isDisabled} onClick={props.onClick}>Next</button>
        )
    }


    return (
        <div>

            <form className="Form">
                {formData.currentStep === 1 && (
                    <div className="step">
                        <h2>{formData.currentStep}</h2>

                        <label>
                            Nom
                            <input
                                type="text"
                                name="nom"
                                value={formData.nom}
                                onChange={handleFieldChange}
                            />
                        </label>
                        <label>
                            Prénom
                            <input
                                type="text"
                                name="prenom"
                                value={formData.prenom}
                                onChange={handleFieldChange}
                            />
                        </label>
                        <label>
                            Age
                            <input
                                type="text"
                                name="age"
                                value={formData.age}
                                onChange={handleFieldChange}
                                className={`age${formData.age < 18 && '--mineur'}`}
                            />
                        </label>
                        <NextButton
                            isDisabled={!isStepValid()}
                            onClick={nextStep}
                        />
                    </div>
                )}
                {formData.currentStep === 2 && (
                    <div className="step">
                        <h2>{formData.currentStep}</h2>
                        <label>
                            Pizza préférée
                            <select
                                name="pizza"
                                value={formData.pizza}
                                onChange={handleFieldChange}
                            >
                                <option value=""> -- </option>
                                <option value="Ananas">Ananas</option>
                                <option value="Anchois">Anchois</option>
                                <option value="Paprika">Paprika</option>
                                <option value="Radiateur de Renault 5">Radiateur</option>
                            </select>
                        </label>
                        <div>
                            <label>
                                Fromage
                                <input
                                    type="checkbox"
                                    value="Fromage"
                                    onChange={handleGarnitureChange}
                                />
                            </label>
                            <label>
                                Jambon
                                <input
                                    type="checkbox"
                                    value="Jambon"
                                    onChange={handleGarnitureChange}
                                />
                            </label>
                            <label>
                                Nutella
                                <input
                                    type="checkbox"
                                    value="Nutella"
                                    onChange={handleGarnitureChange}
                                />
                            </label>
                            <label>
                                Croustille
                                <input
                                    type="checkbox"
                                    value="Croustille"
                                    onChange={handleGarnitureChange}
                                />
                            </label>
                            <label>
                                CrunchyRoll
                                <input
                                    type="checkbox"
                                    value="CrunchyRoll"
                                    onChange={handleGarnitureChange}
                                />
                            </label>
                        </div>
                        <div>
                            {formData.garnitures.map((ingredient, index) =>
                                <span key={index}>{`${ingredient} `}</span>
                            )}
                        </div>
                        <NextButton
                            isDisabled={!isStepValid()}
                            onClick={nextStep}
                        />
                    </div>
                )}
                {formData.currentStep === 3 && (
                    <div className="step">
                        <h2>{formData.currentStep}</h2>
                        {formData.errors.map((error, index) => <p key={index}>{error}</p>)}
                        <label>
                            Mail
                            <input
                                type="text"
                                name="mail"
                                value={formData.mail}
                                onChange={handleFieldChange}
                            />
                        </label>
                        <label>
                            Mot de passe
                            <input
                                type="password"
                                name="pass"
                                value={formData.pass}
                                onChange={handleFieldChange}
                            />
                        </label>
                        <label>
                            Mot de passe Confirmation
                            <input
                                type="password"
                                name="passwordConfirm"
                                value={formData.passwordConfirm}
                                onChange={handleFieldChange}
                            />
                        </label>

                        <NextButton
                            isDisabled={!isStepValid()}
                            onClick={nextStep}
                        />
                    </div>
                )}
                {formData.currentStep > 3 && (
                    <FormResults data={formatFields()} />
                )}
            </form>



            <p>Créer un formulaire qui se remplit en trois étapes, une seule étape peut être affichée à la fois.
                Il est possible d'accéder à la prochaine étape en cliquant sur le bouton Next
            </p>
            <p>Le formulaire devra conserver en mémoire dans le state toutes les données saisies et les afficher
                une fois qu'il sera complété dans un composant FormResults
            </p>
            <p>Les étapes sont détaillées comme ceci :</p>
            <div>
                <p>Etape 1 : </p>
                <p>Un champ texte pour le nom</p>
                <p>Un champ texte pour le prénom</p>
                <p>Un champ number pour l'âge</p>
                <p>L'âge ne peut pas être inférieur à 18. </p>
                <p>Si l'âge est inférieur à 18, alors afficher le contenu du champ en rouge</p>
                <p>Le bouton Next est désactivé pour une des raisons suivantes : </p>
                <ul>
                    <li>Le champ du nom est vide</li>
                    <li>Le champ du prénom est vide</li>
                    <li>L'âge est inférieur à 18</li>
                </ul>
            </div>
            <div>
                <p>Etape 2 :</p>
                <p>Un champ de type select pour sélectionner sa pizza préférée. Il doit contenir une option
                    vide </p>
                <p>Plusieurs checkbox pour enregistrer les garnitures de votre choix (4 au minimum)</p>
                <p>Le bouton Next est désactivé pour une des raisons suivantes : </p>
                <ul>
                    <li>Aucune pizza n'est sélectionnée</li>
                    <li>Moins de 4 ingrédients sont sélectionnés</li>
                </ul>
            </div>
            <div>
                <p>Etape 3 :</p>
                <p>Un champ d'email qui doit être au format email (utiliser une regex pour vérifier)</p>
                <p>
                    Un champ mot de passe. Le mot de passe est valide s'il remplit les conditions suivantes
                    :
                </p>
                <ul>
                    <li>Le mot de passe contient au moins 8 caractères</li>
                    <li>Le mot de passe contient au moins 1 chiffre</li>
                    <li>Le mot de passe contient au moins une lettre en majuscule</li>
                </ul>
                <p>
                    à chaque fois que le mot de passe change, vérifier qu'il soit valide. S'il n'est pas valide,
                    afficher un message depuis un state errorMessage pour détailler le problème sur la page.
                </p>
                <p>Un champ de confirmation de mot de passe</p>
                <p>Le bouton Enregistrer est désactivé pour les raisons suivantes : </p>
                <ul>
                    <li>Les mots de passe ne sont pas identiques</li>
                    <li>L'adresse e-mail n'est pas valide</li>
                    <li>Le mot de passe n'est pas valide</li>
                </ul>

                <p>
                    Lorsque l'on clique sur le bouton, le formulaire est caché, et on affiche un composant
                    FormResults qui prend en props les données saisies dans le formulaire
                </p>
                <p>Le composant FormResults affiche les données dans des balises de votre choix. </p>
            </div>
        </div>
    )

    function componentDidMount() {
        setFormData((prevFormData) => ({
            ...prevFormData,
            currentStep: 1,
        }));
    }

    function componentDidUpdate(prevProps, prevStates) {

        const errors = [];

        if (!REGEX_MAIL_FORMAT.test(formData.mail)) {
            errors.push(ERROR_MAIL_FORMAT)
        }

        if (formData.pass.length < 8) {
            errors.push(ERROR_TOO_SHORT)
        }

        if (!/[A-Z]/.test(formData.pass)) {
            errors.push(ERROR_NO_CAP)
        }

        if (!/[a-z]/.test(formData.pass)) {
            errors.push(ERROR_NO_MIN)
        }

        if (formData.pass !== formData.passwordConfirm) {
            errors.push(ERROR_PASSWORD_CONFIRM)
        }

        if (areDifferentArrays(prevStates.errors, errors)) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                errors: errors,
            }));
        }
    }

    /**
     * Comparer deux tableaux et renvoyer s'ils sont identiques ou pas
     */
    function areDifferentArrays(array1, array2) {
        if (array1.length !== array2.length) {
            return true;
        }

        for (let i = 0; i < array1.length; i++) {
            if (array1[i] !== array2[i]) {
                return true;
            }
        }

        return false;
    }

    /**
         * Vérifie si le current Step est valide ou non
         */
    function isStepValid() {
        switch(formData.currentStep) {
            case 1:
                return !!formData.nom && !!formData.prenom && formData.age >= 18
            case 2:
                return !!formData.pizza && formData.garnitures.length >= 4
            case 3:
                return formData.errors.length === 0
        }
    }

    /**
     * Met à jour le state du nom du target de l'évent avec la valeur reçue dans le target de l'évent
     */
    function handleFieldChange(event) {
        const { name, value } = event.target;
        setFormData((data) => ({
            ...data,
            [name]: value,
        }));
    }

    /**
     * Incrementer le state de l'étape courante
     */
    function nextStep() {
        setFormData((prevFormData) => ({
            ...prevFormData,
            currentStep: formData.currentStep + 1,
        }));
    }

    /**
     * Mettre à jour le state avec la nouvelle garniture
     * En se basant sur la valeur reçue en paramètre
     */
    function handleGarnitureChange(event) {
        let updatedGarniture = formData.garnitures;
        const { checked } = event.target;
        const garniture = event.target.value;

        if (checked) {
            updatedGarniture.push(garniture);
        }
        else {
            updatedGarniture = formData.garnitures.filter(ingredient => ingredient !== garniture)
        }

        setFormData((prevFormData) => ({
            ...prevFormData,
            garnitures: updatedGarniture,
        }));
    }

    /**
     * Formater les résultats de manière à mieux les afficher
     */
    function formatFields() {
        return [
            {
                label: "Nom",
                value: formData.nom
            },
            {
                label: "Prénom",
                value: formData.prenom
            },
            {
                label: "Age",
                value: formData.age
            },
            {
                label: "Pizza",
                value: formData.pizza
            },
            {
                label: "Garniture",
                value: formData.garnitures
            },
            {
                label: "Adresse E-mail",
                value: formData.mail
            },
            {
                label: "Mot de passe",
                value: formData.pass
            },
            {
                label: "Confirmation de mot de passe",
                value: formData.passwordConfirm
            },
        ]
    }
}
