/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    
  const bin1 = a;
  const bin2=b;
  const maxLength = Math.max(bin1.length, bin2.length);
  let result = '';
  let carry = 0;

  for (let i = 0; i < maxLength; i++) {
      const bit1 = parseInt(bin1.charAt(bin1.length - 1 - i) || '0', 2);
      const bit2 = parseInt(bin2.charAt(bin2.length - 1 - i) || '0', 2);

      const sum = bit1 + bit2 + carry;
      result = (sum % 2) + result;
      carry = sum >= 2 ? 1 : 0;
  }

  if (carry) {
      result = '1' + result;
  }

  return result;
}

//One liner 

var addBinary = function (a, b) {
  return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2);
};