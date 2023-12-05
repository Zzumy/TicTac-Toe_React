import Element from "./Element.js";

export default function Jatekter(props) {
    function kattintasKezelo(szoveg) {
        console.log("kattintottam");
        props.katt_propsname(szoveg);
    }

    return (
        <div className="jatekter">
            {props.list.map((elem, index) => {
                return (
                    <Element
                        ertek={elem}
                        katt_propsname={kattintasKezelo}
                        key={index}
                        index={index}
                    />
                );
            })}
        </div>
    );
}
