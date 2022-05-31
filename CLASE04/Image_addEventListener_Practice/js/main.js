const imgCont = document.getElementById("imgCont");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const img = "<img class='img' id='img' src='img/FondoPc2.png' alt='CupHead Image'>";
    imgCont.innerHTML += img;
});

// "<div class='newImgCont' id='imgCont'><img class='img' id='img' src='img/FondoPc2.png' alt='CupHead Image'></div>"