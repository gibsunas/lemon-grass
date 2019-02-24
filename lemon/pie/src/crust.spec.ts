import { ServiceLocator } from "@lemon/seed";
import { Server, PieOptions } from "./crust";
import { Installable } from "@lemon/ice";

test("Server Constructs", () => {
    const locator = new ServiceLocator();
    
    const server = new Server(locator);
});

test("Server Respects Port assignment", () => {
    const locator = new ServiceLocator();
    const service:Installable = {
        key: "config",
        method: ():PieOptions => {
            return {
                port: 3001
            }
        },
    };
    locator.install(service);
    const server = new Server(locator);
});

test("Server Respects shouldListen", () => {
    const locator = new ServiceLocator();
    const service:Installable = {
        key: "config",
        method: ():PieOptions => {
            return {
                port:3003
            }
        },
    };
    locator.install(service);
    const shouldListen = new Server(locator);
    const shouldNotListen = new Server(locator,{shouldListen:false});
});