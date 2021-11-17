function check(){
    var lowerAlphaCount=0;
    var upperAplhaCount=0;
    var numCount=0;
    var specialCount=0;
    var inp =document.getElementById("inp").value;
    console.log(typeof(inp));
    for(let i=0;i<inp.length;i++){
        if(inp[i] >= "a" && inp[i]<= "z" ){
            lowerAlphaCount++;
        }
        else if(inp[i]>="A" && inp[i]<="Z"){
            upperAplhaCount++;
        }
        else if(inp[i]>="0" && inp[i]<="9"){
            numCount++;
        }
        else{
            specialCount++;
        }
    }

    if(upperAplhaCount>0 && specialCount>0 && numCount>0){
        document.getElementById("result").innerHTML="Uncracable";
        document.getElementById("result").style.backgroundColor="green";
        document.getElementById("random").innerHTML = "";
    }
    else if(upperAplhaCount>0 && numCount>0){
        document.getElementById("result").innerHTML="Strong";
        document.getElementById("result").style.backgroundColor="blue";
        document.getElementById("random").innerHTML = "";
    }
    else if((lowerAlphaCount+upperAplhaCount)>0 && numCount>0){
        document.getElementById("result").innerHTML="Moderate";
        document.getElementById("result").style.backgroundColor="Orange";
        gfg_Run();
    }
    else if((lowerAlphaCount+upperAplhaCount)==0 || numCount==0){
    document.getElementById("result").innerHTML="Weak";
    document.getElementById("result").style.backgroundColor="red";
    gfg_Run();
    }
}
function myFunction() {
    var x = document.getElementById("inp");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  function count(){
      
    var inp =document.getElementById("inp").value;
      document.getElementById("count").innerHTML="number of characters in the password:"+inp.length;
  }

  function generateP() {
    var pass = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
            'abcdefghijklmnopqrstuvwxyz0123456789@#$';
      
    for (i = 1; i <= 8; i++) {
        var char = Math.floor(Math.random()
                    * str.length + 1);
          
        pass += str.charAt(char)
    }
      
    return pass;
}

function gfg_Run() {
    document.getElementById("random").innerHTML = "you can use this password:  "+generateP();
}