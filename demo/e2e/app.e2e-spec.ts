import { DamoPage } from './app.po';

describe('damo App', function() {
  let page: DamoPage;

  beforeEach(() => {
    page = new DamoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
