
const Greeting = require("./Base");

module.exports = class Welcome extends Greeting {
    constructor() {
        super();
        this.textTitle = "BIENVENID@";
        this.textMessage = "Servidor: {server}";
        this.colorTitle = "#03A9F4";
    }
};