

// CHARACTER GENERATOR HELPERS

const charClassArr = ["warrior", "mage", "rogue", "healer"];

var i = 0;
function prevClass(arr) {
    if (i <= 0) {
        i = arr.length - 1;
    } else {
        i--;
    }
    charClass = charClassArr[i];
    document.getElementById("adventurerClass").innerHTML = charClass;
    document.getElementById("adventurerImg").src = "img/" + charClass + ".png"; 
    document.getElementById("adventurerImg").alt = "picture of the " + charClass;
}

function nextClass(arr) {
    if (i >= arr.length - 1) {
        i = 0;
    } else {
        i++;
    }
    charClass = charClassArr[i];
    document.getElementById("adventurerClass").innerHTML = charClass;
    document.getElementById("adventurerImg").src = "img/" + charClass + ".png"; 
    document.getElementById("adventurerImg").alt = "picture of the " + charClass;
}