let bars = document.getElementsByClassName('bar');
let bubbleSortBtn = document.getElementById('bubble');

function swap(el1,el2)
  {

    // console.log("Swapped", el1, el2);
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);


    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");

    el1.style.height = transform2;
    el2.style.height = transform1;

  }

  async function bubbleSort(){
    
    let n = bars.length;
    var i, j;
    for (i = 0; i < n-1; i++)
    {

        for (j = 0; j < n-i-1; j++)
        {
            bars[j].style.background="red"; 
            bars[j+1].style.background="red"; 
            let h1 = bars[j].style.height;
            let h2 = bars[j+1].style.height
            h1 = h1.slice(0,h1.length-2);
            h2 = h2.slice(0,h2.length-2);
            await new Promise(resolve => setTimeout(() => {resolve(100), delay(2)}));
            if (Number(h1) > Number(h2))
            {          
                bars[j+1].style.background="blue"; 
                bars[j].style.background="blue";      
                swap(bars[j], bars[j+1]);
            
            }
            bars[j+1].style.background="yellow"; 
            bars[j].style.background="yellow";
        }
        bars[n-i-1].style.background="green";
    }
    bars[0].style.background = "green";
  }

  bubbleSortBtn.addEventListener('click', bubbleSort);


