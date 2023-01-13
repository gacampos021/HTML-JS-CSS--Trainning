const decreaseBtn = document.querySelector(".btn-decrease");
const increaseBtn = document.querySelector(".btn-increase");
const resetBtn = document.querySelector(".btn-reset");
const num = document.querySelector(".num");
var n=0;

decreaseBtn.addEventListener('click', function(){
    n=n-1;
    num.textContent=n;
    color_num(n);
});

increaseBtn.addEventListener('click', function(){
    n=n+1;
    num.textContent=n;
    color_num(n);
});

resetBtn.addEventListener('click',function(){
    n=0;
    num.textContent=n;
    color_num(n);
});

const color_num = function(n){
    if(n>0)
    {
        num.style.color = 'green'
    }
    else if(n<0)
    {
        num.style.color = 'red'
    }
    else
    {
        num.style.color = 'black'
    }
}