var a, b = Math.floor(Math.random() * 1000); 

function add(a, b){
  return a + b;
}

function subtract(a, b){
  return a - b;
}

function multiply(a, b){
  return a*b;
}

function divide(a, b){
  return a/b;
}

function inc(a){
  return a += 1; 
}

function dec(a){
  return a -= 1;
}

function makeInt(a){
  return parseInt(a, 10); 
}

function preserveDecimal(a){
  return parseFloat(a);
}

preserveDecimal(2.222)
