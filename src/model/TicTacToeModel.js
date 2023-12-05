export default class TicTacToeModel {
    #list = [];
    #allapot = "X";
    constructor() {
        this.list = ["0", " ", "X", "0", " ", "X", " ", " ", " "];
    }
    getLista() {
        return [...this.#list];
    }
    setLista(index) {
        this.#list[index] = this.#allapot;
        if (this.#allapot === "#") {
            this.#allapot = "0";
        } else {
            this.#allapot = "X";
        }
    }
}
