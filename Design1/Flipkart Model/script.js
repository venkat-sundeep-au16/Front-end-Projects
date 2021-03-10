//first function

function  here(a,b)
 {
  var result= a**b;
  return result;
}
var lookout=here(2,3);
console.log(lookout)


//second answer function 

var o =0;
var sum = 0;

function excute (H,B){
  sum = square(H,B);
  o = squareroot(sum);
  return o;
};
function square(H,B){
  var s = H*H + B*B;
  return s;
};

function squareroot (s){
  var sr = S**0.5;
  return sr;
};
console.log(excute(3,4));
console.log(square(9.8));