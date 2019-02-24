// import type {Crust} from "@lemon/ice";
// export class DataProvider {
//     get:(provider:string) => Crust;
//     constructor(services:Map<string, Crust>) {
//         this.get = (serviceName:string) => services.get(serviceName);
//     }
// }
//
// const initServices = (servicesToInit:Map<string, Crust>) => {
//
//
//     const serviceList: Array<Crust> = [];
//
//     const installService = x => {
//         if(!x) {return;}
//         serviceList.push(x)
//     }
//     // We need to convert the input map into a promise array of init'd services
//     // however we still need the keys to 'install' the provider
//     Array.from(servicesToInit.keys())
//         .map(k => installService(servicesToInit.get(k)))
//
//     const result:Promise<DataProvider> = Promise.all(serviceList)
//         .then(results => {
//             console.log('...data services init complete');
//
//             const services = new Map();
//             results.map((x:{key:string, service:*}) => services.set(x.key, x.service));
//
//             return services;
//         }).then(x => new DataProvider(x));
//
//     return result;
// };
//
// const init = () => {
//     console.log('Initializing data services');
//     const servicesToInit: Map<string, Crust> = new Map();
//     const installProvider = (provider: Crust) => {
//         servicesToInit.set(provider.key, provider);
//     };
//
//     return initServices(servicesToInit);
// };
//
// export default {init};
