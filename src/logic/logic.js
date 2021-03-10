export const formatValue = (value) => {
  let convertedValue = replaceQuotes(value.trim());
  let cSharpFormatedValue = formatForCSharp(convertedValue);
  let jsFormatedValue = formatForJS(convertedValue);
  let jsLintFormatedValue = formatForJSLint(convertedValue);

  return { cSharpFormatedValue, jsFormatedValue, jsLintFormatedValue };
};

const replaceQuotes = (value) => value.replaceAll('"', "'");

const formatForCSharp = (value) => (value === "" ? "" : `@"${value}"`);

const formatForJS = (value) => {
  if (value === "") {
    return "";
  } else {
    let values = value.split("\n");
    if (values.length === 1) return `"${values}"`;
    else {
      return values
        .map((line) => `"${line}"+`)
        .join("\n")
        .slice(0, -1);
    }
  }
};

const formatForJSLint = (value) => {
  if (value === "") {
    return "";
  } else {
    let convertedValue = `var fetchXML = new String();\n`;
    convertedValue += value
      .split("\n")
      .map((line) => `fetchXML += "${line}";`)
      .join("\n");
    return convertedValue;
  }
};
