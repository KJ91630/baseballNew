
let Guest = 0;
let Home = 0;


/This is the Guest Part/ 

function GaddOne() {

Guest = Guest +1;

document.getElementById("guestEl").textContent = Guest;

}


function GaddTwo() {

    Guest = Guest +2;
    
    document.getElementById("guestEl").textContent = Guest;
    
    }

    
function GaddThree() {

    Guest = Guest +3;
    
    document.getElementById("guestEl").textContent = Guest;
    
    }

    if (Guest => 20){

        document.getElementById("guestEl").textContent = "Win";


    }


/This is the Home part/


function addOne() {

    Home = Home +1;
    
    document.getElementById("homeEl").textContent = Home;
    
    }
    
    
    function addTwo() {
    
        Home = Home +2;
        
        document.getElementById("homeEl").textContent = Home;
        
        }
    
        
    function addThree() {
    
        Home = Home +3;
        
        document.getElementById("homeEl").textContent = Home;
        
        }