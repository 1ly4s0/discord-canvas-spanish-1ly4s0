const Promotes = require("./Base3");

module.exports = class Promote extends Promotes {
    constructor() {
        super();
        this.textTitle = "Nuevo Admin";
        this.textMessage = "Grupo: {server}";
        this.colorTitle = "#df0909";
    }
};