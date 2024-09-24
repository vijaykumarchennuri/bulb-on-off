function switchOff(){
 document.getElementById("bulbimg").src= "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
 document.getElementById("catimg").src= "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
 document.getElementById("switch-status").textContent="switched-off";
 document.getElementById("on-switch").style.backgroundColor="red";
 document.getElementById("off-switch").style.backgroundColor="green";
 document.getElementById("vijay").style.color="black";
}

function switchOn(){
  document.getElementById("bulbimg").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
  document.getElementById("catimg").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
  document.getElementById("switch-status").textContent="switched-on";
   document.getElementById("on-switch").style.backgroundColor="green";
   document.getElementById("off-switch").style.backgroundColor="red";
   document.getElementById("vijay").style.color="white";
}
