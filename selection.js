bars = document.getElementsByClassName('bar');
let selectionBtn = document.getElementById('selection');

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

  console.log("in Selection");
  
  async function selectionSort(){
    let n = bars.length;
    console.log(n, "IN");

    var i, j, min_idx, prev_min;
 
    // One by one move boundary of unsorted subarray
    for (i = 0; i < n-1; i++)
    {
        // Find the minimum element in unsorted array
        min_idx = i;
        

        for (j = i + 1; j < n; j++){

            let h1 = bars[j].style.height;
            let h2 = bars[min_idx].style.height;
            h1 = h1.slice(0,h1.length-2);
            h2 = h2.slice(0,h2.length-2);

            bars[min_idx].style.background="red";
            bars[j].style.background="blue";
            await new Promise(resolve => setTimeout(() => {resolve(100), delay(2)}));
            
            if (Number(h1) < Number(h2)){
                bars[min_idx].style.background="yellow";
                min_idx = j;
                bars[min_idx].style.background="red";
            }

            if(j != min_idx)
                bars[j].style.background="yellow";
        }       
        // Swap the found minimum element with the first element
        swap(bars[min_idx], bars[i]);
        bars[i].style.background="green";
    }
    bars[n-1].style.background="green";

  }

  selectionBtn.addEventListener('click', selectionSort);