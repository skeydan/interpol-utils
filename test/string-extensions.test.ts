import '../src/string.extensions';
import { readFileSync } from 'fs';
import path from 'path';

const datadir = './test/testdata';
const file = path.join(process.cwd(), datadir, "sample-text");
const var0 = "Украина";
const var1 = "Кавказ";

describe('string.extensions.ts', () => {
  it('String.format on strings', () => {
    let sampleText = readFileSync(file, 'utf8');
    let expected = `This is a plain-text file expecting to be passed two variables, of arbitrary name. Here they are: first: Украина. Second: Кавказ.`;
     expect(sampleText.format([var0, var1])).toEqual(expected);
  });
});