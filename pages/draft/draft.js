let config = {};
let loadConfigData = () => {
    FileManager.loadFile('../../data/config.json', (file) => {
        let parsedCrits = JSON.parse(file);
        config = parsedCrits;
    })
}

window.addEventListener("DOMContentLoaded", () => {
    console.log("Draw Loaded!");
    loadConfigData();

    for(let i = 0; i < 7; i++) {
        document.getElementById('sidebar__element-' + i).addEventListener("click", () => {
            console.log('klikam -> ' + i);
            Drafts.changePhase = i;
            if (i == 1) {
                
            }
            if (i == 6) {
            }
        })
    }
    document.getElementById("draft__phase__theme-0-textarea").addEventListener("input", () => {
        if (document.getElementById("draft__phase__theme-0-textarea").value == "szczepan szczesiak") {
            window.location.href = "../about/about.html"
        };
    });
    document.getElementById('draft__button-next').addEventListener('click', () => Drafts.changePhase = "+")
    document.getElementById('draft__button-previous').addEventListener('click', () => Drafts.changePhase = "-")
});


const countWords = (textAreaId) => {
    let text = document.getElementById(textAreaId).value;
    let wordsArray = text.split(" ");
    for (let i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i].length == 1) {
            wordsArray.splice(i, 1);
        }
    }
    if (wordsArray.length == 1 && wordsArray[0] == "") {
        return 0
    } else {
    return wordsArray.length
    }
}

const countPhrases = (textAreaId) => {
    let text = document.getElementById(textAreaId).value;
    let phrases = 0
    for (let i = 0; i < text.length; i++) {
        if (text[i] == "." || text[i] == "?" || text[i] =="!") {
            phrases += 1;
            i += 3;
        }
    }
    return phrases
}

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

const countLetters = (textAreaId) => {
    let text = document.getElementById(textAreaId).value;
    let letters = 0
    for (let i = 0; i < text.length; i++) {
        if (isLetter(text[i])) {
            letters += 1;
        }
    }
    return letters
}

const returnTextareas = () => {
    let arrayWithAreaNames = []
    /*for (let i = 0; i < document.querySelectorAll('.draft-textarea').length; i++) {
        arrayWithAreaNames.push(document.querySelectorAll('.draft-textarea')[i].id)
    }*/
    for (let i = 0; i < document.querySelectorAll('.draft__phase').length; i++) {
        let idOfPhase = document.querySelectorAll('.draft__phase')[i].id
        let temp = []
        for (let j = 0; j < document.querySelectorAll(`#${idOfPhase} .draft-textarea`).length; j++){
            temp.push(document.querySelectorAll(`#${idOfPhase} .draft-textarea`)[j].id)
        }
        arrayWithAreaNames.push(temp)
    }
    return arrayWithAreaNames
}

const returnSidebarsId = () => {
    let sidebarsIds = []
    for (let i = 0; i < document.querySelectorAll('.sidebar__element').length; i++) {
        sidebarsIds.push(document.querySelectorAll('.sidebar__element')[i].id)
    }
    return sidebarsIds
}

const countPercentage = () => {
    let textAreas = returnTextareas();
    let wordsValues = [];
    let lettersValues = [];
    let phrasesValues = [];
    for (i in textAreas) {
        wordsValues.push(countWords(textAreas[i]));
        lettersValues.push(countLetters(textAreas[i]));
        phrasesValues.push(countPhrases(textAreas[i]));
    }
    let wordsPercentValues = realPercents(wordsValues)

}

let turnToWarn = (id) => {
    document.getElementById(id).classList.add("sidebar__element--warn")
    document.querySelectorAll("#" + id + " span")[0].innerHTML = "!!!"
}

let turnToWrong = (id) => {
    document.getElementById(id).classList.add("sidebar__element--wrong")
    document.querySelectorAll("#" + id + " span")[0].innerHTML = "X"
}

let turnToCorrect = (id) => {
    document.getElementById(id).classList.add("sidebar__element--correct")
    document.querySelectorAll("#" + id + " span")[0].innerHTML = "✔"
}

let removeWWC = (id) => {
    document.getElementById(id).classList.remove("sidebar__element--warn")
    document.getElementById(id).classList.remove("sidebar__element--correct")
    document.getElementById(id).classList.remove("sidebar__element--wrong")
}

let isWarned = (id, criterium) => {
    if (countWords(id) < criterium) return false;
    return true
}

let isWrong = (id, criterium) => {
    if (countWords(id) < criterium) return false;
    return true
}

const realPercents = (values) => {
    summ = 0
    values.splice(0, 1)
    for (val in values) {
        summ += values[val]
    }
    let percentsOfValues = []
    for (val in values) {
        percentsOfValues.push(Math.round(values[val]/summ*10000)/100)
    }
    return percentsOfValues
}

class Drafts { // i nie dzialalo? no xd
    static currentPhase = 0;
    
    static set changePhase(phase) {
        if(phase == "+") phase = this.currentPhase + 1;
        if(phase == "-") phase = this.currentPhase - 1;
        console.log('Set ' + phase + ' from old ' + this.currentPhase);
        document.getElementById(`draft__phase-${phase}`).scrollTo(0,0);
        //document.getElementById(`draft__phase-${this.currentPhase}`).classList.add('draft__phase--up')
        document.getElementById(`sidebar__element-${this.currentPhase}`).classList.remove('sidebar__element--selected');

        //document.getElementById(`draft__phase-${this.currentPhase}`).classList.add('draft__phase--up')
        this.currentPhase = phase;
        //document.getElementById(`draft__phase-${phase}`).classList.remove('draft__phase--down');
        document.getElementById('draft__phases').style.transform = `translateY(${(-100) * phase}%)`;
        document.getElementById(`sidebar__element-${this.currentPhase}`).classList.add('sidebar__element--selected');
        let neededSidebarIds = returnSidebarsId()
        let neededTextareaIds = returnTextareas()
        for (let i = 6; i > this.currentPhase; i--) {
            removeWWC(neededSidebarIds[i])
        }
        for (let i = 0; i < this.currentPhase; i++) {
            turnToWarn(neededSidebarIds[i])
            let summOfWords = 0
            for (let jd = 0; jd < neededTextareaIds[i].length; jd++) {
                summOfWords += countWords(neededTextareaIds[i][jd])
            }
            if (summOfWords > config.crits[i].minWordsWarn) {
                removeWWC(neededSidebarIds[i])
                turnToCorrect(neededSidebarIds[i])
            } else if (summOfWords > config.crits[i].minWordsWrong) {
                removeWWC(neededSidebarIds[i])
                turnToWarn(neededSidebarIds[i])
            } else {
                removeWWC(neededSidebarIds[i])
                turnToWrong(neededSidebarIds[i])
            }
        }
    }
}

//https://www.youtube.com/watch?v=nUHKOgHgQc4

/*
🎤🐢Midunseti nane, nane nane, sarebazi bade, bade bade, morakhazish kame, kame kame, naneke-uo mano zayidi, tuo ke dahan-e mano gayidi, midunesti nane, buozorg misham sarebazi miram, chera dadi duoshidam, nazashti man bemiram, sarbazamuo, sarebazi baram ye muoshdekhake, hamin daru nadaram, faghad yik-dune pake, sarbaz duoäm gelim-e pare, shabra sar miyare, kalogh par, pa morghe, basash farghi nadare!🎤🐢
XDDD

document.getElementById(`sidebar__element-${beforePhase}`).classList.remove('sidebar__element--selected')
document.getElementById(`sidebar__element-${this.currentPhase}`).classList.add('sidebar__element--selected')
document.getElementById(`sidebar__element--character-${beforePhase}`).classList.remove('sidebar__element--selected')
document.getElementById(`sidebar__element--character-${this.currentPhase}`).classList.add('sidebar__element--selected')
*/