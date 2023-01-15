const newArrayBtn = document.getElementById('newArray');
let barsDiv = document.getElementById('mybar');
var arr_size=document.querySelector("#arr_sz"); 


arr_size.addEventListener("input",createArray);
newArrayBtn.addEventListener('click', createArray);


function createArray(){
    barsDiv.innerHTML = "";

    
    var no_of_bar=arr_size.value;
    
    var arr = []

    for(let i=1; i<=no_of_bar; i++){
        arr.push(Math.ceil(Number((Math.random()*100)+1)*2));
        // arr.push(i);
    }
    for(let i=0; i<no_of_bar; i++){
        let div = document.createElement('div');
        div.style.height = arr[i]+'px';
        div.classList.add('bar');
        // div.classList.add('bor');
        document.getElementById('mybar').appendChild(div);
    
    }
}


// export { };