import { SpentePage } from './app.po';

describe('spente App', function() {
  let page: SpentePage;

  beforeEach(() => {
    page = new SpentePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
