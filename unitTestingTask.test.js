const unitTestingTask = require("./unitTestingTask");

const mockDate = new Date(
  Date.parse("Fri Feb 2 2024 00:37:38 GMT+0300 (GMT+03:00)")
);
const mockDate2 = new Date(
  Date.parse("Fri Feb 2 2024 15:37:38 GMT-0300 (GMT-03:00)")
);

describe("Unit Testing Task", () => {
  it("should throw error if format is null", () => {
    const format = null;
    const date = null;
    expect(() => unitTestingTask(format, date)).toThrow(TypeError);
  });

  it("should throw error if format is null", () => {
    const format = "MMMM";
    const date = null;
    expect(() => unitTestingTask(format, date)).toThrow(TypeError);
  });

  it("should format the date ", () => {
    const format = "MMMM";
    const date = null;
    expect(() => unitTestingTask(format, date)).toThrow(TypeError);
  });

  it("should handle one argument", () => {
    const format = "MMMM";
    expect(unitTestingTask(format)).toBe("February");
  });

  it("should handle non date type date", () => {
    const format = "MMMM";
    const date = "02/04/2024"
    expect(unitTestingTask(format, date)).toBe("February");
  });

  it("should format the mockDate using formatters", () => {
    expect(unitTestingTask("YYYY", mockDate)).toBe("2024");
    expect(unitTestingTask("YY", mockDate)).toBe("24");
    expect(unitTestingTask("MMMM", mockDate)).toBe("February");
    expect(unitTestingTask("MMM", mockDate)).toBe("Feb");
    expect(unitTestingTask("MM", mockDate)).toBe("02");
    expect(unitTestingTask("M", mockDate)).toBe("2");
    expect(unitTestingTask("DDD", mockDate)).toBe("Friday");
    expect(unitTestingTask("DD", mockDate)).toBe("Fri");
    expect(unitTestingTask("D", mockDate)).toBe("Fr");
    expect(unitTestingTask("dd", mockDate)).toBe("02");
    expect(unitTestingTask("d", mockDate)).toBe("2");
    expect(unitTestingTask("HH", mockDate)).toBe("00");
    expect(unitTestingTask("H", mockDate)).toBe("0");
    expect(unitTestingTask("hh", mockDate)).toBe("12");
    expect(unitTestingTask("h", mockDate)).toBe("12");
    expect(unitTestingTask("mm", mockDate)).toBe("37");
    expect(unitTestingTask("m", mockDate)).toBe("37");
    expect(unitTestingTask("ss", mockDate)).toBe("38");
    expect(unitTestingTask("s", mockDate)).toBe("38");
    expect(unitTestingTask("ff", mockDate)).toBe("000");
    expect(unitTestingTask("f", mockDate)).toBe("0");
    expect(unitTestingTask("A", mockDate)).toBe("AM");
    expect(unitTestingTask("a", mockDate)).toBe("am");
    expect(unitTestingTask("ZZ", mockDate)).toBe("+0300");
    expect(unitTestingTask("Z", mockDate)).toBe("+03:00");
    
    expect(unitTestingTask("A", mockDate2)).toBe("PM");
    expect(unitTestingTask("a", mockDate2)).toBe("pm");
});

it("should return default language", () => {
    expect(unitTestingTask.lang(null)).toBe("en");
    expect(unitTestingTask.lang("en", null)).toBe("en");
  });

  it("should return the language in parameter if options not falsy", () => {
    expect(unitTestingTask.lang("tr", {})).toBe("tr");
  });

  it("should register new format", () => {
    unitTestingTask.register('shortDate', 'd M YY');
    expect(unitTestingTask.formatters()).toContain("shortDate");
    expect(unitTestingTask("shortDate", mockDate)).toBe("2 2 24");
  });
});
