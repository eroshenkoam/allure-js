import { suite, test } from "mocha-typescript";
import { MochaAllureInterface } from "../../../src/MochaAllureInterface";

// @ts-ignore
const allure: MochaAllureInterface = global.allure;

@suite
class Known {
  @test
  shouldHighlightAsKnown() {
    allure.setKnown();
  }
}
