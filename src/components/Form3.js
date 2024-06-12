import React, { useState } from 'react'

const ERROR_PASSWORD_TOO_SHORT = "Le mot de passe ne peut pas contenir moins de 8 caractères";

export default function Form3() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        address: "",
        mail: "",
        password: "", // Exercice 1
        newPassword: "", // Exercice 2
        newPasswordConfirm: "", // Exercice 2
        superPassword: "", // Exercice 3
        // errorMessage: "", // Exercice 3
    });
    const [errorMessage, setErrorMessage] = useState("")


    return (
        <div>
            <div>
                <p>Créer un formulaire qui permettra de saisir un nom, un prénom, une adresse, une adresse
                    e-mail, un mot de passe</p>
                <p>Pour chaque champ du formulaire, créer des states correspondant (un state nom, un state
                    prénom, ... etc), et les lier aux différents input de manière à ce que quand ils changent,
                    la data se mette à jour.</p>
                <form onSubmit={handleUserSubmit}>
                    <label>
                        Prénom
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleFieldChange}
                        />
                    </label>
                    <label>
                        Nom
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleFieldChange}
                        />
                    </label>
                    <label>
                        Adresse
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleFieldChange}
                        />
                    </label>
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
                            name="password"
                            value={formData.password}
                            onChange={handleFieldChange}
                        />
                    </label>
                    <button disabled={!isFormValid()}>Enregistrer</button>
                </form>
                <div>
                    <p>Afficher en direct toutes les données saisies ici</p>
                    <p>{formData.firstName}</p>
                    <p>{formData.lastName}</p>
                    <p>{formData.address}</p>
                    <p>{formData.mail}</p>
                    <p>{formData.password}</p>
                </div>
            </div>

            <div>
                <p>Créer un formulaire avec un champ de mot de passe, et un champ de confirmation de mot de
                    passe. </p>
                <p>Créer une méthode checkPassword qui vérifie si les deux mots de passe sont identiques, et qui
                    déclenche une alerte si ce n'est pas le cas. </p>
                <p>Appeler la méthode checkPassword quand on soumet le formulaire.</p>
            </div>
            <form onSubmit={checkPassword}>
                <label>
                    Mot de passe
                    <input
                        type="text"
                        name="newPassword"
                        value={formData.newPassword}
                        onChange={handleFieldChange}
                    />
                </label>
                <label>
                    Mot de passe confirmation
                    <input
                        type="text"
                        name="newPasswordConfirm"
                        value={formData.newPasswordConfirm}
                        onChange={handleFieldChange}
                    />
                </label>
                <button>rengistererer</button>
            </form>

            <form>
                <label>
                    Super mot de passe
                    <input
                        type="text"
                        name="superPassword"
                        value={formData.superPassword}
                        onChange={handleFieldChange}
                    />
                </label>
                {errorMessage}
            </form>

            <div>
                <p>Créer un formulaire avec un champ de mot de passe.</p>
                <p>Créer un state errorMessage qui contiendra le message d'erreur, et l'afficher sous le
                    formulaire</p>
                <p>Le mot de passe doit au moins contenir 8 caractères</p>
                <p>Si le mot de passe contient moins de 8 caracètres, alors régler le message d'erreur sur "Le
                    mot de passe ne peut pas contenir moins de 8 caractères" </p>
            </div>
        </div>
    )

    /**
         * Vérifier que le formulaire des noms soit bien rempli
         * @returns {number|number}
         */
    function isFormValid() {
        return formData.firstName.length && formData.lastName.length;
    }

    function componentDidUpdate() {
        if (formData.superPassword.length < 8 && errorMessage !== ERROR_PASSWORD_TOO_SHORT) {
            setErrorMessage(ERROR_PASSWORD_TOO_SHORT)
        }
        else if (formData.superPassword.length >= 8 && errorMessage !== "") {
            setErrorMessage("")
        }
    }

    /**
             * Comparer newPassword et newPasswordConfirm et alerter s'ils sont différents
             */
    function checkPassword(event) {
        event.preventDefault();
        if (formData.newPassword !== formData.newPasswordConfirm) {
            alert("Les deux password ne sont pas identiques")
        }
    }

    /**
     * Empêche l'exécution normale de l'événement de soumission
     */
    function handleUserSubmit(event) {
        event.preventDefault();
        const mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`/\{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if (mailRegex.test(formData.mail)) {
            console.log("Mail valide")
        }
        else {
            console.log("Mail invalide")
        }
    }

    /**
     * Mettre à jour le state du champ reçu en name du target, avec sa valeur
     */
    function handleFieldChange(event) {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }
}
