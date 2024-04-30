// https://blog.logrocket.com/how-build-ecommerce-app-nestjs/#creating-user-schema-dto

/* 
Global entry to package functionality.
Will be delegating to specialized functions such as
interpolate-text, interpolate-dict, and interpolate-list.
 */

import './string.extensions';
import { readFileSync } from 'fs';

export const interpolate = (file: string, ...replacements: Array<string|number|boolean>) : string | void => {
  try {
    let contents = readFileSync(file, 'utf8');
    let replaced = contents.format(replacements);
    return replaced;
  } catch(e) {
      console.log(`Error reading file: ${(<any>e).stack}`);
  }  
};