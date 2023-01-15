const newArrayBtn = document.getElementById('newArray');
let barsDiv = document.getElementById('mybar');

newArrayBtn.addEventListener('click', createArray);



function createArray(){
    barsDiv.innerHTML = "";
    
    var arr = []

    for(let i=1; i<=100; i++){
        arr.push(Math.ceil(Number((Math.random()*100)+1)*2));
        // arr.push(i);
    }
    for(let i=0; i<100; i++){
        let div = document.createElement('div');
        div.style.height = arr[i]+'px';
        div.classList.add('bar');
        // div.classList.add('bor');
        document.getElementById('mybar').appendChild(div);
    
    }
}


// export { };