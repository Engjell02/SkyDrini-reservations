
let chooseElement;

var container = document.querySelector('.container');

for (var i = 1; i <= 26; i++) {
    var div = document.createElement('div');
    div.classList.add('element');
    div.id = 'e' + i;
    div.innerHTML = i + ' <br><button onclick="red(this)">R</button><button onclick="norm(this)">N</button><button onclick="spec(this)">Y</button>';
    container.appendChild(div);
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



function red(kjo){
    kjo.parentNode.style.backgroundColor = 'rgba(255,0,0,0.71)';
}

function norm(kjo){
    kjo.parentNode.style.backgroundColor = 'rgba(243,243,243,100)';
}

function spec(kjo){
    kjo.parentNode.style.backgroundColor = 'rgba(224,223,23,100)';
}