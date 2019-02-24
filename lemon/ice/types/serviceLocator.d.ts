export declare type HasKey = {
    key: string;
}

export declare type HasMethod = {
    method: Function;
}

export declare type Installable = HasKey & HasMethod;

export declare type LocatorOptions = {
    id?: string,
    verbose?: boolean,
};

export interface Locator {
    byKey: (key:string) => any | undefined;
    install: (input:Installable) => boolean;
}
