import Eleve from "./Eleve";

export default function Eleves(props) {
    return (
        <div>
            {props.listeEleves.map((eleve, index) => <Eleve key={index} eleve={eleve} />)}
        </div>
    )
}