import { NgrxTVPage } from './app.po';

describe('ngrx-tv App', () => {
  let page: NgrxTVPage;

  beforeEach(() => {
    page = new NgrxTVPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
