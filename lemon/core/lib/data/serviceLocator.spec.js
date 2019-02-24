"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serviceLocator_1 = require("./serviceLocator");
const emptyService = { key: 'empty', method: () => { } };
test("Service Locator Constucts", () => {
    const service = new serviceLocator_1.ServiceLocator();
    expect(service).toBeTruthy();
    // Has expected methods
    expect(service.byKey).toBeTruthy();
    expect(service.install).toBeTruthy();
    expect(service).toMatchSnapshot();
});
test("Service Locator test duplicate service install protection", () => {
    const service = new serviceLocator_1.ServiceLocator();
    expect(service.install(emptyService)).toBeTruthy();
    expect(service.install(emptyService)).toBeFalsy();
});
test("Service Locator install empty service", () => {
    const service = new serviceLocator_1.ServiceLocator();
    service.install(emptyService);
    expect(service.byKey("bad-key")).toBeFalsy();
    expect(service.byKey("empty")).toBeTruthy();
});
test("Service Locator verbose mode", () => {
    const service = new serviceLocator_1.ServiceLocator({ verbose: true });
});
