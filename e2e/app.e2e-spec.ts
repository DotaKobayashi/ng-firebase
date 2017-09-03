import { NgFirebasePage } from './app.po';

describe('ng-firebase App', () => {
  let page: NgFirebasePage;

  beforeEach(() => {
    page = new NgFirebasePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
