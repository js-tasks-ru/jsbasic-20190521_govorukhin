'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */

function getMinMax(str) {
  let strConverter = str.replace(/,/g, ' ').split(/\s/);
  
  let result = {};
  let minVar = 0;
  let maxVar = 0;

  for (let n in strConverter) {
    if (minVar > parseFloat(strConverter[n])) {
        minVar = parseFloat(strConverter[n]);
    };
    if (maxVar < parseFloat(strConverter[n])) {
        maxVar = parseFloat(strConverter[n]);
    }
    result.min = minVar;
    result.max = maxVar;
  }
  return result;
}