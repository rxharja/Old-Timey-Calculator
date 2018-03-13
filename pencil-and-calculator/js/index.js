//assign variables doing calculations
var num1=0, num2=0, mrc=0;

//assign buttons and display to variables
var mrcButton = document.getElementById('mrc');
var mMinus = document.getElementById('mMinus');
var mPlus = document.getElementById('mPlus');
var display = document.querySelector('.display');
var clear = document.getElementById('clear');
var decimal = document.getElementById('decimal');
var divide = document.getElementById('divide');
var multiply = document.getElementById('multiply');
var subtract = document.getElementById('subtract');
var add = document.getElementById('add');
var equals = document.getElementById('equals');

//0 is divide, 1 is multiply, 2 is subtract, 3 is add
var operation = [false,false,false,false];

//calculator object defining functionality
var calculator = {
  add: function(a,b){
    return a+b;
  },
  subtract: function(a,b){
    return a-b;
  },
  multiply: function(a,b){
    return a*b;
  },
  divide: function(a,b){
    return a/b;
  },
  clear: function(){
    return 0;
  }
};

//handlers to referencing calculator object
var handlers = {
  add: calculator.add(num1,num2),
  subtract: calculator.subtract(num1,num2),
  multiply: calculator.multiply(num1,num2),
  divide: calculator.divide(num1,num2),
  clear: function(){
    display.value = calculator.clear();
  }
};

//event listeners

document.querySelectorAll('.numpad').forEach(function(button){
  button.addEventListener('click',function(){
    display.value = parseFloat(display.value+button.value);
    button.addEventListener('keydown',function(){
      
    })
  });
});

mrcButton.addEventListener('click',function(){
  mrc = parseFloat(display.value);
  handlers.clear();
});

mMinus.addEventListener('click',function(){
  num1 = display.value;
  handlers.clear();
  display.value = calculator.subtract(num1,mrc);
});

mPlus.addEventListener('click',function(){
  num1 = parseFloat(display.value);
  var displayVal = calculator.add(num1,mrc);
  handlers.clear();
  display.value = parseFloat(displayVal);
});

decimal.addEventListener('click',function(){
  display.value = display.value+'.';
})

clear.addEventListener('click',function(){
  handlers.clear();
})

divide.addEventListener('click', function(){
  operation[0]=true;
  operation[1]=false;
  operation[2]=false;
  operation[3]=false;
  num1 = parseFloat(display.value);
  handlers.clear();
});

multiply.addEventListener('click', function(){
  operation[0]=false;
  operation[1]=true;
  operation[2]=false;
  operation[3]=false;
  num1 = parseFloat(display.value);
  handlers.clear();
});

subtract.addEventListener('click', function(){
  operation[0]=false;
  operation[1]=false;
  operation[2]=true;
  operation[3]=false;
  num1 = parseFloat(display.value);
  handlers.clear();
});

add.addEventListener('click', function(){
  operation[0]=false;
  operation[1]=false;
  operation[2]=false;
  operation[3]=true;
  num1 = parseFloat(display.value);
  handlers.clear();
});

equals.addEventListener('click',function(){
  num2 = parseFloat(display.value);
  for (var i = 0; i < operation.length; i++){
    if (operation[i]===true && i===0){
        display.value = calculator.divide(num1,num2);
    }
    if (operation[i]===true && i===1){
        display.value = calculator.multiply(num1,num2); 
    }
    if (operation[i]===true && i===2){
        display.value = calculator.subtract(num1,num2);
    }
    if (operation[i]===true && i===3){
        display.value = calculator.add(num1,num2);
    }
  }
});