import { describe, it, expect } from "vitest";
import { formatPercentage } from "./formatPercentage";

describe("formatPercentage", () => {
  it("formats percentage with default locale", () => {
    const value = 0.12345;

    const formatted = formatPercentage(value);

    expect(formatted).toBe("12.35%");
  });

  it("formats percentage with specified locale", () => {
    const value = 0.54321;
    const locale = "fr-FR";

    const formatted = formatPercentage(value, locale);

    expect(formatted).toBe("54,32 %");
  });

  it("handles zero value", () => {
    const value = 0;

    const formatted = formatPercentage(value);

    expect(formatted).toBe("0%");
  });
});
