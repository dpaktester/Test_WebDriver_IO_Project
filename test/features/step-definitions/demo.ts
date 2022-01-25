import { Given, When, Then } from "@cucumber/cucumber";
import chai from "chai";

Given(/^Google page is opened$/, async function () {
  console.log("Before Opening Browser....");
  await browser.url("https://www.google.com");
  await browser.pause(1000);
  console.log("After opeing browser.....");
  //browser.debug()
});

When(/^Search with (.*)$/, async function (searchItem) {
  //console.log(">>searchItem: ${searchItem}");
  console.log("searchItem", searchItem);
  let ele = await $("[name=q]");
  await ele.setValue(searchItem);
  await browser.keys("Enter");
});

Then(/^Click on the first search result$/, async function () {
  let ele = await $("<h3>");
  await ele.click();
});

Then(/^URL should match (.*)$/, async function (expectedURL) {
  //console.log('>> expectedURL : ${expectedURL}');
  console.log("expectedURL" ,expectedURL);
  let url = await browser.getUrl();
  //console.log(">>actual url: ${url} ");
  console.log("actual url ", url);
  chai.expect(url).equals(expectedURL);
});
