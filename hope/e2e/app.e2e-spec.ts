import { HopePage } from './app.po';

describe('hope App', function() {
  let page: HopePage;

  beforeEach(() => {
    page = new HopePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
