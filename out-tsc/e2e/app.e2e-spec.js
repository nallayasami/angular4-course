import { Angular4CoursePage } from './app.po';
describe('angular4-course App', function () {
    var page;
    beforeEach(function () {
        page = new Angular4CoursePage();
    });
    it('should display welcome message', function () {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Welcome to app!');
    });
});
//# sourceMappingURL=app.e2e-spec.js.map