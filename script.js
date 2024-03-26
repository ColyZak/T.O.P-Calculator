


    const buttons = document.querySelectorAll(".btn");
    const screen = document.querySelector(".screen");
    const equal = document.querySelector(".btn-equal");
    const clear = document.querySelector(".btn-clear");
    const del = document.querySelector(".btn-delete");
  
    buttons.forEach(function(button){
      button.addEventListener('click', function(){
        let value = button.dataset.num;
        screen.value += value;
      })
      
    });
    clear.addEventListener('click', function(){
      screen.value = '';
    })
    del.addEventListener('click', function(){
      screen.value = screen.value.toString().slice(0,-1);
    })
    equal.addEventListener('click', function(){
      if(screen.value === ''){
        screen.value = '';
      }else{
        let result;

        let operator;
        let firstValue;
        let lastValue;

     if(screen.value.includes("+")){
        operator = "+";
        firstValue = parseFloat(screen.value.substring(0 ,screen.value.indexOf('+')));
        lastValue = parseFloat(screen.value.substring(screen.value.indexOf('+') +1));
        console.log(firstValue)
        console.log(lastValue)
        console.log(operator)
        result = add(firstValue,lastValue)
     }
     else if(screen.value.includes("-")){
        operator = "-";
        firstValue = parseFloat(screen.value.substring(0 ,screen.value.indexOf('-')));
        lastValue = parseFloat(screen.value.substring(screen.value.indexOf('-') +1));
        console.log(firstValue)
        console.log(lastValue)
        console.log(operator)
        result = sub(firstValue,lastValue)
     }
     else if(screen.value.includes("*")){
        operator = "*";
        firstValue = parseFloat(screen.value.substring(0 ,screen.value.indexOf('*')));
        lastValue = parseFloat(screen.value.substring(screen.value.indexOf('*') +1));
        console.log(firstValue)
        console.log(lastValue)
        console.log(operator)
        result = mult(firstValue,lastValue)
     }
     else if(screen.value.includes("/")){
        operator = "/";
        firstValue = parseFloat(screen.value.substring(0 ,screen.value.indexOf('/')));
        lastValue = parseFloat(screen.value.substring(screen.value.indexOf('/') +1));
        console.log(firstValue)
        console.log(lastValue)
        console.log(operator)
        result = div(firstValue,lastValue)
     }

      screen.value = result;
    }
    })
  
  

  function add (a,b){
    return a+b;
  }
  function sub (a,b){
    return a-b;
  }
  function mult (a,b){
    return a*b;
  }
  function div (a,b){
    return a/b;
  }