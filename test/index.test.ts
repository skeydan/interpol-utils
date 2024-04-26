import path from 'path';
import process from 'process';
import '../src/index';
import { interpolate } from '../src/index';

const datadir = './test/testdata'

const var0 = "Харків";
const var1 = "Одессa";

describe('index.ts', () => {
  it('interpolate text', () => {
    let expected = `This is a plain-text file expecting to be passed two variables, of arbitrary name. Here they are: first: Харків. Second: Одессa.`;
    expect(interpolate(path.join(process.cwd(), datadir, "sample-text"), var0, var1)).toEqual(expected);
  });
});