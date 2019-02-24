import {App} from "./app";

test('app construction', () => {
    const app = new App();
    app.start();
    expect(app).toBeTruthy();
});