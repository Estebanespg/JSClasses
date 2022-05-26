function addN1(e) {
    e.preventDefault();
    let res = document.getElementById("result");
    res.value += 1;
}

function addN2(e) {
    e.preventDefault();
    let res = document.getElementById("result");
    res.value += 2;
}

function addN3(e) {
    e.preventDefault();
    let res = document.getElementById("result");
    res.value += 3;
}

function addN4(e) {
    e.preventDefault();
    let res = document.getElementById("result");
    res.value += 4;
}

function addN5(e) {
    e.preventDefault();
    let res = document.getElementById("result");
    res.value += 5;
}

function addN6(e) {
    e.preventDefault();
    let res = document.getElementById("result");
    res.value += 6;
}

function addN7(e) {
    e.preventDefault();
    let res = document.getElementById("result");
    res.value += 7;
}

function addN8(e) {
    e.preventDefault();
    let res = document.getElementById("result");
    res.value += 8;
}

function addN9(e) {
    e.preventDefault();
    let res = document.getElementById("result");
    res.value += 9;
}

function addN0(e) {
    e.preventDefault();
    let res = document.getElementById("result");
    res.value += 0;
}

function del(e) {
    e.preventDefault();
    let res = document.getElementById("result");
    res.value = "";
}

function addPlus(e) {
    let res = document.getElementById("result");
    let oculto = document.getElementById("oculto");
    let opera = document.getElementById("opera");
    opera.value = 1;
    oculto.value = res.value;
    res.value = "";
}

function addMinus(e) {
    let res = document.getElementById("result");
    let oculto = document.getElementById("oculto");
    let opera = document.getElementById("opera");
    opera.value = 2;
    oculto.value = res.value;
    res.value = "";
}

function addTimes(e) {
    let res = document.getElementById("result");
    let oculto = document.getElementById("oculto");
    let opera = document.getElementById("opera");
    opera.value = 3;
    oculto.value = res.value;
    res.value = "";
}

function addDivi(e) {
    let res = document.getElementById("result");
    let oculto = document.getElementById("oculto");
    let opera = document.getElementById("opera");
    opera.value = 4;
    oculto.value = res.value;
    res.value = "";
}

function addEqual(e) {
    let res = document.getElementById("result");
    let oculto = document.getElementById("oculto");
    let opera = document.getElementById("opera");
    if ( opera.value == 1 ) {
        res.value = parseInt(oculto.value) + parseInt(res.value);
    } if ( opera.value == 2 ) {
        res.value = parseInt(oculto.value) - parseInt(res.value);
    } if ( opera.value == 3 ) {
        res.value = parseInt(oculto.value) * parseInt(res.value);
    } if ( opera.value == 4 ) {
        res.value = parseInt(oculto.value) / parseInt(res.value);
    }
    oculto.value = "";
}