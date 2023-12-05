import "./App.css";
import Jatekter from "./components/Jatekter";
import TicTacToeModel from "./model/TicTacToeModel";
const tmodel = new TicTacToeModel();
import { useState } from "react";

export default function App() {
    const [list, setLista] = useState([...tmodel.getLista()]);
    function kattintasKezelo(index) {
        console.log(index);
        tmodel.setLista(index);
        setLista([...tmodel.getLista()]);
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>TicTacToe</h1>
            </header>
            <article>
                <Jatekter katt_propsname={kattintasKezelo} list={LIST} />
            </article>
        </div>
    );
}
