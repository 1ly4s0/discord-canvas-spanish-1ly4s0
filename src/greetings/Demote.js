const Demotes = require("./Base4");

module.exports = class Demote extends Demotes {
    constructor() {
        super();
        this.textTitle = "Admin Degradado";
        this.textMessage = "Grupo: {server}";
        this.colorTitle = "#df0909";
    }
};