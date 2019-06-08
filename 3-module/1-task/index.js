/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
    let finalArr = [];
  
    for (let i = 0; i < data.length; i++) {
      if (data[i]['age'] <= age) {
        finalArr.push(data[i]['name'] + ', ' + data[i]['balance']);
      }
    }
  
    let finalStr = finalArr.join('\n');
    return finalStr;
  }