import { 
    HasKey,
    HasMethod,
    Installable,
    Locator,
    LocatorOptions
} from '@lemon/ice';

export class ServiceLocator implements Locator {
    private serviceList:Map<string, any>;
    public byKey: (key:string) => any | undefined;
    public install: (input:Installable) => boolean;
    constructor(options?: LocatorOptions) {
        const serviceList = new Map();

        const verbose = options && options.verbose;
        if(verbose) {console.log('Verbose Mode');}

        this.byKey = (key:string):undefined | any => {
            const exists:boolean = serviceList.has(key);
            if(!exists) { return undefined };

            return serviceList.get(key).method ? serviceList.get(key).method : serviceList.get(key);
        };
        this.install = (input:Installable) => {
            if(serviceList.has(input.key)) {
                if(verbose) { console.log(`Cannot Install Duplicate KEY ${(input as HasKey).key}`);}
                return false;
            }
            if(verbose) { console.log(`Installing ${input.key}...`);}
            serviceList.set(input.key, input.method);

            return true;
        };
    }
};

export default ServiceLocator;