"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serviceLocator_1 = require("../data/serviceLocator");
class App {
    constructor(input) {
        this.options = input || { log: "console" };
        this.serviceLocator = new serviceLocator_1.ServiceLocator({});
        if (this.options.log == "console") {
            this.serviceLocator.install({ key: "log", method: console.log });
        }
    }
    start() {
    }
}
exports.default = App;
