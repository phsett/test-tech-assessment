import { AxeBuilder } from "@axe-core/playwright";
import { expect } from "@playwright/test";

//Allows tags to be added/removed easily for accessibility testing
const AXE_TAGS = [
  "wcag2a",
  "wcag2aa"
];

// Function to check for accessibility violations on a given page
export async function expectNoAccessibilityViolations(page: any) {
  const results = await new AxeBuilder({ page }).withTags(AXE_TAGS).analyze();
  expect(results.violations).toEqual([]);
}
