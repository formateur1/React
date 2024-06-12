import { useState } from "react"

export default function Horloge(props) {
    const [currentTime, setCurrentTime] = useState(new Date());

    function updateTime() {
        setCurrentTime(new Date());
    }

    setInterval(updateTime, 1000);


    // toLocaleTimeString sert à afficher l'heure sous forme de chaîne de caractère
    return (
        <div>
            Horloge props : {props.hor.toLocaleTimeString()}
            <h2>Horloge state : {currentTime.toTimeString()}</h2>
        </div>
    )
}