import { browser, by, element } from 'protractor';
var Angular4CoursePage = /** @class */ (function () {
    function Angular4CoursePage() {
    }
    Angular4CoursePage.prototype.navigateTo = function () {
        return browser.get('/');
    };
    Angular4CoursePage.prototype.getParagraphText = function () {
        return element(by.css('app-root h1')).getText();
    };
    return Angular4CoursePage;
}());
export { Angular4CoursePage };
//# sourceMappingURL=app.po.js.map