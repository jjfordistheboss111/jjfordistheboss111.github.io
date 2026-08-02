const time = document.getElementsByClassName("time")[0];
const h1 = time.getElementsByTagName("h1")[0];

function timing(){
    let now = new Date();
    let h = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    
    let hr = h % 12 || 12;

    h1.innerText = `${hr.toString().padStart(2 ,0)}:${min.toString().padStart(2, 0)}:${sec.toString().padStart(2 , 0)}`
}
timing();
setInterval(timing, 1000);
const open =  document.getElementById("open");
const close = document.getElementById("close");
const overlay = document.getElementsByClassName("overlay")[0]; 
close.addEventListener("click", ()=>{
    overlay.style.right = "auto";
    overlay.style.left = "0";
    overlay.style.bottom = "0";
    overlay.style.top = "auto";
    overlay.style.width = "0px";
    overlay.style.height = "0px"; 
    overlay.style.pointerEvents = "none";
});
open.addEventListener("click", ()=>{
    overlay.style.left = "auto";
    overlay.style.right = "0";
    overlay.style.bottom = "auto";
    overlay.style.top = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%"; 
    overlay.style.pointerEvents = "all";
    

});