import "./Element.css";

export default function Element(props) {
    function kattintasKezelo() {
        console.log("kattintottam");
        props.katt_propsname(props.index);
    }

    return (
        <div className="mezo" onClick={kattintasKezelo}>
            <p>{props.ertek}</p>
        </div>
    );
}
