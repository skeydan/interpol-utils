
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface String {
  format(...vars: Array<string|number|boolean>): string;
}

// Make String.format() work as in Python
// Kudos to https://sebhastian.com/javascript-format-string/ for base implementation
// It does follow the JavaScript convention though of replacing content inside
// dollar-prefixed pairs of braces though (${somevar}).
String.prototype.format = function (...vars: Array<string|number|boolean>): string {
  // replace by position
  return this.replace(/${(\d+)}/g, function (match: string, number: number): string {
    return typeof vars[number] != "undefined" ? String(vars[number]) : match;
  })};
