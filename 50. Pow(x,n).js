/** slow
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  const multiplyer = x;

  if(n<0){
      for(let i = 0 ; i> n+1; i--){
          x *=multiplyer
      }
      return 1/x
  }
  else if (n==0 || x==1){
      return 1;
  }
  
  for (let i = 0 ; i < n-1; i++){
      x *= multiplyer;
      
  }

  return x;
};


// obvious
Math.pow(x,n);