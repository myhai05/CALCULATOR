
    let screen = document.getElementById("display");
    const lastChar = screen.innerHTML.slice(-1);

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
        let lastChar = screen.innerHTML.slice(-1);
        if(lastChar==="0"){screenValue==="";} else {screen.innerHTML+=0;} //check if the screen is empty
        
    }
    function point(){
        let lastChar = screen.innerHTML.slice(-1); 
        let screenValue = screen.innerHTML;
        console.log(screenValue);
        screen.innerHTML = (screenValue==="") ? screen.innerHTML="" : screen.innerHTML+='.'; //check if the screen is empty
        if(lastChar==="."){screen.innerHTML=+"";}// check if the last character is a "." symbol;
    }
    function equal() {
        let screenValue = screen.innerHTML;
        if (screenValue === "") {
            screen.innerHTML = "";
            return; // Exit function if display is empty
        }

        let result;
    try {
        result = eval(screenValue);
    } catch (error) {
        screen.innerHTML = "ERROR!";
        return; //exit if the the screenValue can not be evaluate
    }
       screen.innerHTML = Number.isInteger(result) ? result : result.toFixed(2);
    }

    function reset(){
        screen.innerHTML="";
    }

  