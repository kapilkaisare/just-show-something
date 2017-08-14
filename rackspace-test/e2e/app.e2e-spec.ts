import { RackspaceTestPage } from './app.po';

describe('rackspace-test App', () => {
  let page: RackspaceTestPage;

  beforeEach(() => {
    page = new RackspaceTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
