'use strict'


const init = require("../action/init");
describe('init', function () {
    it("init test", function () {
        let result = init();
        expect(result.doAction('1')).toEqual('barcode');
    })
    it("init test", function () {
        let result = init();
        expect(result.doAction('2')).toEqual('zipCode');
    })
    it("init test", function () {
        spyOn(process, "exit");
        init().doAction('q');
        expect(process.exit).toHaveBeenCalled();
    })
    it("init test", function () {
        spyOn(console, "log");
        let result = init();
        expect(result.doAction('5')).toEqual('init');
    })
})