
let chooseElement;

var containerJs = document.querySelector('.container');

for (var i = 1; i <= 26; i++) {
    var divJs = document.createElement('div');
    divJs.classList.add('element');
    divJs.id = 'e' + i;
    divJs.innerHTML = i + ' <br><button onclick="red(this)">R</button><button onclick="norm(this)">N</button><button onclick="spec(this)">Y</button>';
    containerJs.appendChild(divJs);
}
const move = function (){
    const elements = document.querySelectorAll(".element")

    elements.forEach(element => {
        element.addEventListener("mousedown",() => {
            element.style.position = "absolute"
            chooseElement = element

            const mouseMoveHandler = (e) =>{
                let x = e.pageX
                let y = e.pageY

                chooseElement.style.left = x -20 + "px"
                chooseElement.style.top = y -20 + "px"

                // console.log(chooseElement)
            };


            document.addEventListener("mousemove", mouseMoveHandler);

            document.addEventListener("mouseup", () => {
                document.removeEventListener("mousemove", mouseMoveHandler);
                chooseElement = null;
             })
        })
    })
    document.addEventListener("mouseleave", () => {
        chooseElement = null;
    });
}

function ADD(){

    var name = document.getElementById("name").value
    var people = document.getElementById("people").value
    var Nr = document.getElementById("NrOfPeople").value

    if (name===""|| people===""){

    }else {
        var a=1
        var divJs = document.createElement('div');
        divJs.classList.add('person');
        divJs.id = 'p' + a;
        divJs.innerHTML ='Emri: ' +name+ ' ---- Persona: ' +people+ ' ---- Numri: ' +Nr+ ' <br>';

        var parentElement = document.getElementById("myshteri")
        parentElement.appendChild(divJs);
        a++



        document.getElementById("name").value = ""
        document.getElementById("people").value = ""
        document.getElementById("NrOfPeople").value = ""
        }

    }

function red(kjo){
    kjo.parentNode.style.backgroundColor = 'rgba(255,0,0,0.71)';
}

function norm(kjo){
    kjo.parentNode.style.backgroundColor = 'rgba(243,243,243,100)';
}

function spec(kjo){
    kjo.parentNode.style.backgroundColor = 'rgba(224,223,23,100)';
}