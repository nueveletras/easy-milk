import { EasyMilkPage } from './app.po';

describe('easy-milk App', () => {
  let page: EasyMilkPage;

  beforeEach(() => {
    page = new EasyMilkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
