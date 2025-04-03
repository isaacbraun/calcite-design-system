import { newE2EPage } from "@arcgis/lumina-compiler/puppeteerTesting";
import { describe, expect, it } from "vitest";
import { accessible, hidden, renders } from "../../tests/commonTests";
import { CSS, TEXT } from "./resources";

describe("calcite-small-info-card", () => {
  describe("renders", () => {
    renders("calcite-small-info-card", { display: "block" });
  });

  describe("honors hidden attribute", () => {
    hidden("calcite-small-info-card");
  });

  describe("accessible", () => {
    accessible("calcite-small-info-card");
  });

  it("shows heading string by default", async () => {
    const page = await newE2EPage();

    await page.setContent("<calcite-small-info-card></calcite-small-info-card>");

    const headingElement = await page.find(`calcite-small-info-card >>> .${CSS.heading}`);
    expect(headingElement.innerText).toBe(TEXT.heading);
  });

  it("shows provided heading value", async () => {
    const exampleHeading = "This is an example heading";
    const page = await newE2EPage();

    await page.setContent(`<calcite-small-info-card heading="${exampleHeading}"></calcite-small-info-card>`);
    const headingElement = await page.find(`calcite-small-info-card >>> .${CSS.heading}`);

    expect(headingElement.innerText).toBe(exampleHeading);
  });

  it("updates heading when modified after mount", async () => {
    const initialHeading = "This is the initial heading";
    const updatedHeading = "This is the updated heading";

    const page = await newE2EPage();

    await page.setContent(`<calcite-small-info-card heading="${initialHeading}"></calcite-small-info-card>`);
    const headingElement = await page.find(`calcite-small-info-card >>> .${CSS.heading}`);

    expect(headingElement.innerText).toBe(initialHeading);

    headingElement.setProperty("heading", updatedHeading);
    await page.waitForChanges();

    expect(headingElement.innerText).toBe(updatedHeading);
  });
});
