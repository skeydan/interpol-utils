import '../src/string.extensions';

const sampleText = `This is a plain-text file expecting to be passed two variables, of arbitrary name. Here they are: first: ${0}. Second: ${1}.`
const var0 = "Украина";
const var1 = "Кавказ";

describe('string.extensions.ts', () => {
  it('String.format on strings', () => {
    let expected = `This is a plain-text file expecting to be passed two variables, of arbitrary name. Here they are: first: Украина. Second: Кавказ.`;
    let arr = [var0, var1]
    expect(sampleText.format(arr)).toEqual(expected);
  });
});