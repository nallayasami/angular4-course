var StringValidators = /** @class */ (function () {
    function StringValidators() {
    }
    StringValidators.containWhiteSpace = function (control) {
        if (control.value && control.value.indexOf(' ') >= 0) {
            return { 'containWhiteSpace': true };
        }
        return null;
    };
    StringValidators.shouldBeUnique = function (control) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (control.value === 'NKA') {
                    resolve({ shouldBeUnique: true });
                }
                else {
                    resolve(null);
                }
            }, 2000);
        });
    };
    return StringValidators;
}());
export { StringValidators };
//# sourceMappingURL=string.validator.js.map