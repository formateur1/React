import Legume from "./Legume";

export default function PanierLegumes(props) {
    const legumes = props.listeLegumes;

    return (
        <div>
            {legumes.map((legume, index) => (
                <Legume key={index} article={legume} />
            ))}
        </div>
    )
}