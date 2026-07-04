const Display = document.querySelector(".display");

const Inc = document.getElementById("increase")
const Res = document.getElementById("rest")
const dec = document.getElementById("decrease")


let tasbiih = 0;


const Increament = () =>{
    tasbiih +=1
    Display.textContent = tasbiih
}
const Rest = () =>{
    tasbiih = 0;
    Display.textContent = tasbiih
}
const Decreament = () =>{
    if(tasbiih <= 0) return;

        tasbiih -= 1
        Display.textContent = tasbiih


}

Inc.addEventListener("click",Increament)
Res.addEventListener("click",Rest)
dec.addEventListener("click",Decreament)


