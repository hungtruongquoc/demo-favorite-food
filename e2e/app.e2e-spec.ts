import { AppPage } from "./app.po";

describe("NICE Favorite Food List App", () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it("should display welcome message", () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual("Welcome to NICE Favorite Food List!");
  });
});
