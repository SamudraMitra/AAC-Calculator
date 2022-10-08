document.getElementById("sb1").addEventListener("click",function(event){
  event.preventDefault();
  let a = parseFloat(document.getElementById("per").value);
  let b = parseFloat(document.getElementById("pw").value);
  let c = parseFloat(document.getElementById("pa").value);
  let d = parseFloat(document.getElementById("rw").value);
  let e = parseFloat(document.getElementById("ra").value);
  let resnew = ((b*((100-a)/100))*d)+((c+((a*b)/100))*e);
  let resold = (b*d+c*e);
  let ans = ((resnew-resold)/(resold))*100;
  ans  = Math.round((ans + Number.EPSILON) * 100) / 100
  document.getElementById("respan").innerHTML = ans;
});
