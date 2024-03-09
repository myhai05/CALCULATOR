
    let screen = document.getElementById("display");


    function plus(){
        let lastChar = screen.innerHTML.slice(-1);
        if (lastChar === '+' || lastChar === '-' || lastChar === '/' || lastChar === '*' || lastChar === '') { // check if the last character is an operator
                 screen.innerHTML += "";
        } else { screen.innerHTML +="+"; }
        }

    function less(){
        let lastChar = screen.innerHTML.slice(-1);
        if (lastChar === '+' || lastChar === '-' || lastChar === '/' || lastChar === '*' || lastChar === '') {
                 screen.innerHTML += "";
        } else { screen.innerHTML +="-"; }
        }

    function multiplying(){
        let lastChar = screen.innerHTML.slice(-1);
        if (lastChar === '+' || lastChar === '-' || lastChar === '/' || lastChar === '*' || lastChar === '') {
                 screen.innerHTML += "";
        } else { screen.innerHTML +="*"; }
        }

    function division(){
        let lastChar = screen.innerHTML.slice(-1);
        if (lastChar === '+' || lastChar === '-' || lastChar === '/' || lastChar === '*' || lastChar === '') {
                 screen.innerHTML += "";
        } else { screen.innerHTML +="/"; }
        }
    function zero(){
        let screenValue = screen.innerHTML;
        screen.innerHTML = (screenValue==="") ? screen.innerHTML="" : screen.innerHTML+=0; //check if the screen is empty
    }
    function point(){
        let screenValue = screen.innerHTML;
        screen.innerHTML = (screenValue==="") ? screen.innerHTML="" : screen.innerHTML+='.'; //check if the screen is empty
    }
   
    
   function equal(){
        let screenValue = screen.innerHTML;
        let result = eval(screenValue);
        screen.innerHTML = (screenValue==="") ? screen.innerHTML="" : screen.innerHTML=result.toFixed(2); //check if the screen is empty
    }

    function reset(){
        screen.innerHTML="";
    }

  