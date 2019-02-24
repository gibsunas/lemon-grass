export interface Route {
    key: string;
    matcher: RegExp;
    handler: (req:any, res:any, next:any) => void;
}
