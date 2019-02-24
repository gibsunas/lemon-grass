import { LocatorOptions } from "@lemon/ice";

import {ServiceLocator} from "./serviceLocator";

const emptyService = {key:'empty', method:()=>{}};

test("Service Locator Constucts",() => {
    const service = new ServiceLocator();
    expect(service).toBeTruthy();

    // Has expected methods
    expect(service.byKey).toBeTruthy();
    expect(service.install).toBeTruthy();

    expect(service).toMatchSnapshot();
});

test("Service Locator test duplicate service install protection",() => {
    const service = new ServiceLocator();
    expect(service.install(emptyService)).toBeTruthy();
    expect(service.install(emptyService)).toBeFalsy();
});
test("Service Locator install empty service",() => {
    const service = new ServiceLocator();
    service.install(emptyService);
    expect(service.byKey("bad-key")).toBeFalsy();
    expect(service.byKey("empty")).toBeTruthy();
});

test("Service Locator verbose mode",() => {
    const service = new ServiceLocator({verbose:true} as LocatorOptions);
});