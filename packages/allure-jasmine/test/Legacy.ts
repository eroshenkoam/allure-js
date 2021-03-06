import { allure } from "./Setup";
import { ContentType, Severity } from "allure-js-commons";

describe("Suite legacy", function() {
  it("Create step", function() {
    allure.createStep("Step name", (a: string) => {
      allure.step(`Step param a=${a}`, function() {
      });
    })("VALUE");
  });

  it("Create attachment", function() {
    allure.createAttachment("attachment", (c: string) => c, ContentType.TEXT)!("Content value");
  });

  it("Add argument", function() {
    allure.addArgument("arg", "argval");
  });

  it("Add environment", function() {
    allure.addEnvironment("name", "val");
  });

  it("Add description", function() {
    allure.description("This is description text", ContentType.TEXT);
  });

  it("Add severity", function() {
    allure.severity(Severity.CRITICAL);
  });

  it("Add epic", function() {
    allure.epic("Epic name");
  });

  it("Add feature", function() {
    allure.feature("Feature name");
  });

  it("Add story", function() {
    allure.story("Story name");
  });
});
