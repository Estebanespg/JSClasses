const msg = document.getElementById("message");
const btn = document.getElementById("btn");
const txt = document.getElementById("txt");

btn.addEventListener("click", () => {
    console.log(msg.value);
    const userMsg = msg.value;
    txt.value = userMsg;    
});