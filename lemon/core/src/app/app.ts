import {ServiceLocator} from "../data/serviceLocator";

type ShellOptions = {
    log?: any;
};

type Shell = {
    start:() => void;
}

export class App implements Shell {
    private options: ShellOptions;
    private serviceLocator: ServiceLocator;
    constructor(input?:ShellOptions) {
        this.options = input || {log:"console"}; 
        
        this.serviceLocator = new ServiceLocator({});
        if(this.options.log == "console") {
            this.serviceLocator.install({key:"log", method: console.log});
        }
    }

    start() {
        
        
    }
}
