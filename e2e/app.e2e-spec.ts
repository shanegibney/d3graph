import { AngularD3ExamplePage } from './app.po';

describe('angular-d3-example App', () => {
  let page: AngularD3ExamplePage;

  beforeEach(() => {
    page = new AngularD3ExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
