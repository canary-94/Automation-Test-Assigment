import { Given, When, Then } from "@wdio/cucumber-framework";
import CheckboxesPage from "../page-objects/checkboxes.page";
import { expect } from "@wdio/globals";

const pages = {
  checkboxes: CheckboxesPage,
};

Given("I am on the {string} page", async (page) => {
  await pages[page].open();
});

When("I toggle the first checkbox", async () => {
  await CheckboxesPage.toggleFirstCheckbox();
});

Then("the first checkbox should be checked", async () => {
  const isChecked = await CheckboxesPage.firstCheckbox.isSelected();
  await expect(isChecked).toBe(true);
});

When("I uncheck the second checkbox", async () => {
  await CheckboxesPage.toggleSecondCheckbox();
});

Then("the second checkbox should not be checked", async () => {
  const isChecked = await CheckboxesPage.secondCheckbox.isSelected();
  await expect(isChecked).toBe(false);
});
