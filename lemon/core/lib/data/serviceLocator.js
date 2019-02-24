"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServiceLocator {
    constructor(options) {
        const serviceList = new Map();
        const verbose = options && options.verbose;
        if (verbose) {
            console.log('Verbose Mode');
        }
        this.byKey = (key) => serviceList.get(key);
        this.install = (input) => {
            if (serviceList.has(input.key)) {
                if (verbose) {
                    console.log(`Cannot Install Duplicate KEY ${input.key}`);
                }
                return false;
            }
            if (verbose) {
                console.log(`Installing ${input.key}...`);
            }
            serviceList.set(input.key, input.method);
            return true;
        };
    }
}
exports.ServiceLocator = ServiceLocator;
;
exports.default = ServiceLocator;
