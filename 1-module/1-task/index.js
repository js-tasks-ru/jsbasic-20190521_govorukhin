/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow(x, n) {
    var powResult = x;
  
    for (var i = 1; i < n; i++) {
      powResult *= x;
    }
  
    return powResult;
  }
  
  var x = prompt("Какое число возводим в степень?", '');
  var n = prompt("В какую степень возводим это число?", '');
  
  if (n <= 1) {
    alert('Так нельзя. Введите степень строго больше 1');
  } 
  else 
  {
    alert(pow(x, n));
  }