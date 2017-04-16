import { PieceMealAngularPage } from './app.po';

describe('piece-meal-angular App', () => {
  let page: PieceMealAngularPage;

  beforeEach(() => {
    page = new PieceMealAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
