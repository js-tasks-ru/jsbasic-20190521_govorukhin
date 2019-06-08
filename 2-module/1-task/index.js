/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */

function clone(obj) {

    let clonedObject = {};
  
    for (let key in obj) {
      if (typeof(obj[key]) === 'object' && obj[key] !== null) {
        clonedObject[key] = clone(obj[key]);
      } else {
        clonedObject[key] = obj[key];
      }
    }
    return clonedObject;
  };