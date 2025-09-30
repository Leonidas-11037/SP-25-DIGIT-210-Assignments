window.addEventListener('DOMContentLoaded',init,false);

function init() {
    alert('The page loaded! Snooping as usual, I see?');
    var buttons = document.getElementsByTagName("button")
    buttons[0].addEventListener('click', changeColor, false);
    buttons[1].addEventListener('click', changeColor2, false);
    buttons[2].addEventListener('click', newFunction, false);
    buttons[3].addEventListener('click', anotherFunction, false);
    buttons[4].addEventListener('click', nope(), false);
}
function changeColor() {
    var p1 = document.getElementByTagName("h2")
    { p1.style.backgroundColor = "skyblue";  }

    /* here, style is a *property*: the CSS styling of an element:
    Use document.getElementByTagName("tag") OR
    document.getElementByTagId("attribute")
     * you can add a CSS property after invoking style. */

}

function changeColor2() {
    var pars = document.getElementsByTagName('p')
    for (var i = 0, length = pars.length; i < length; i++) {
        pars[i].style.backgroundColor = "pink";
        pars[i].style.fontWeight="bold";
    }
}



function newFunction() {
    alert ('I heard purple is in this time of year. I think you are on the list.');
    var li = document.getElementsByTagName('li')
    for (var i = 0, length = li.length; i < length; i++) {
        li[i].style.backgroundColor = "purple";
    }
}


function anotherFunction() {
    var anothers = document.getElementsByClassName('mono')
    for (var i = 0, length = anothers.length; i < length; i++) {
        anothers[i].style.cssText = "text-decoration: underline; text-decoration-style: wavy;"
    }
}

function nope() {
    alert ('No. Just stop.');
}