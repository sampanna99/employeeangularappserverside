import { AngularCrudPage } from './app.po';

describe('angular-crud App', () => {
  let page: AngularCrudPage;

  beforeEach(() => {
    page = new AngularCrudPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
