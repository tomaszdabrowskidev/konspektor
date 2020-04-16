String.prototype.last = function() {
    return this[this.length-1]
}
let config = {};
let session = {"phases": {}, "currPhase": 0, "summaryInfoJson": ""};
let loadConfigData = (name) => {
    FileManager.loadFile('../../data/config.json', (file) => {
        let parsedCrits = JSON.parse(file);
        config = parsedCrits;
    })
    if (name != "") {
            loadSession(name)
    }
}
window.addEventListener("DOMContentLoaded", () => {
    console.log("Draw Loaded!");
    let id;
    if(getParameterByName('id')) {
        id = getParameterByName('id');
        loadConfigData(id);
        loadSession(id);
    } else {
        console.log('elsuje')
        loadConfigData("");
    }
    
    
    for(let i = 0; i < 7; i++) {
        document.getElementById('sidebar__element-' + i).addEventListener("click", () => {
            console.log('klikam -> ' + i);
            Drafts.changePhase = i;
            if (i == 6) {
                //tu wywolac funkcje    -- - makeSummary  (=== func countPercentage (istniejacva funckaj))    (co zle co do poprawy ile czego procent stanowi)
                DocumentPresentation.loadText();
            }
        })
    }
    document.getElementById("draft__phase__theme-0-textarea").addEventListener("input", () => {
        document.getElementById('draft__phase__theme-counter-0').innerText = 'Liczba słów: ' + countWords('draft__phase__theme-0-textarea');
        if (document.getElementById("draft__phase__theme-0-textarea").value == "szczepan szczesiak") {
            window.location.href = "../about/about.html"
        };
    });
    document.getElementById("draft__phase__thesis-1-textarea").addEventListener("input", () => {
        document.getElementById('draft__phase__thesis-counter-1').innerText = 'Liczba słów: ' + countWords('draft__phase__thesis-1-textarea');
    });
    document.getElementById("draft__phase__argument-2-textarea").addEventListener("input", () => {
        document.getElementById('draft__phase__argument-counter-2').innerText = 'Liczba słów: ' + countWords('draft__phase__argument-2-textarea');
    });
    document.getElementById("draft__phase__example-2-textarea").addEventListener("input", () => {
        document.getElementById('draft__phase__example-counter-2').innerText = 'Liczba słów: ' + countWords('draft__phase__example-2-textarea');
    });
    document.getElementById("draft__phase__argument-3-textarea").addEventListener("input", () => {
        document.getElementById('draft__phase__argument-counter-3').innerText = 'Liczba słów: ' + countWords('draft__phase__argument-3-textarea');
    });
    document.getElementById("draft__phase__example-3-textarea").addEventListener("input", () => {
        document.getElementById('draft__phase__example-counter-3').innerText = 'Liczba słów: ' + countWords('draft__phase__example-3-textarea');
    });
    document.getElementById("draft__phase__argument-4-textarea").addEventListener("input", () => {
        document.getElementById('draft__phase__argument-counter-4').innerText = 'Liczba słów: ' + countWords('draft__phase__argument-4-textarea');
    });
    document.getElementById("draft__phase__example-4-textarea").addEventListener("input", () => {
        document.getElementById('draft__phase__example-counter-4').innerText = 'Liczba słów: ' + countWords('draft__phase__example-4-textarea');
    });
    document.getElementById("draft__phase__ending-5-textarea").addEventListener("input", () => {
        document.getElementById('draft__phase__ending-counter-5').innerText = 'Liczba słów: ' + countWords('draft__phase__ending-5-textarea');
    });
    document.getElementById('draft__button-next').addEventListener('click', () => Drafts.changePhase = "+")
    document.getElementById('draft__button-previous').addEventListener('click', () => Drafts.changePhase = "-")
    document.getElementById('draft__button-save').addEventListener('click', () => {
        wannaSaveAlert(document.querySelectorAll('.sidebar__element--selected')[0].id.last(), id);
    });
    document.getElementById('draft__button-cancel').addEventListener('click', () => {
        /*
        if (confirm("Niezapisane zmiany zostaną usunięte! Czy na pewno chcesz wyjść?")) {
            window.location.href = "../index/index.html";
        };*/

        //can back to menu without asking?
        cBTMWA(document.querySelectorAll('.sidebar__element--selected')[0].id.last(), id, (res) => {
            if (res) {
                window.location.href = "../index/index.html";
            } else {
                if (confirm("Niezapisane zmiany zostaną usunięte! Czy na pewno chcesz wyjść?"))  window.location.href = "../index/index.html";
            }
        });
    });
});

let isEquivalent = (obj1, obj2) => {
    if (JSON.stringify(obj1) == JSON.stringify(obj2)) return true;
    return false
}

const cBTMWA = (currentId, currentLocation, callback) => {
    if (!currentLocation) return false;
    let content = generateJSON();
    let path = `../../data/essays/${currentLocation}`
    FileManager.loadFile(path + "/essay.txt", (dataEssay) => {
        dataEssay = JSON.parse(dataEssay);
        if (!isEquivalent(dataEssay, content)) {
            return callback(false); 
        }
        let currentSession = {"phases": {}, "currPhase": 0, "summaryInfoJson": ""};
        for (let i = 6; i > -1; i--) {
            let temp = []
            temp.push(document.getElementById(`sidebar__element--character-${i}`).innerHTML)
            temp.push(document.getElementById(`sidebar__element-${i}`).classList[1])
            currentSession.phases[i] = temp
        }
        currentSession.currPhase = currentId
        FileManager.loadFile(path + "/session.json", (dataSession) => {
            dataSession = JSON.parse(dataSession);
            if (!isEquivalent(currentSession, dataSession)) return callback(false);
            return callback(true);
        })
    })
}



function generateJSON() {
    let textareas = returnTextareas();
    //theme
    let theme = document.getElementById(textareas[0][0]).value;
    //thesis
    let thesis = document.getElementById(textareas[1][0]).value;
    //arg1
    let deduce1 = document.getElementById(textareas[2][0]).value;
    let example1 = document.getElementById(textareas[2][1]).value;
    //arg2
    let deduce2 = document.getElementById(textareas[3][0]).value;
    let example2 = document.getElementById(textareas[3][1]).value;
    //arg3
    let deduce3 = document.getElementById(textareas[4][0]).value;
    let example3 = document.getElementById(textareas[4][1]).value;
    //end
    let ending = document.getElementById(textareas[5][0]).value;

    let output = {
        name: "",
        description: "",
        created: "",
        content: [
            {type: "theme", value: theme},
            {type: "thesis", value: thesis},
            {type: "arg1", value: [deduce1, example1]},
            {type: "arg2", value: [deduce2, example2]},
            {type: "arg3", value: [deduce3, example3]},
            {type: "end", value: ending}
        ]
    };

    return output;    
}


let loadSession = (id) => {
    let path = `../../data/essays/${id}`;

    FileManager.loadFile(path + "/essay.txt", (dataTextarea) => {
        dataTextarea = JSON.parse(dataTextarea);
        console.log('tutaj patrz')
        console.log(dataTextarea)
        document.getElementById(`draft__phase__theme-0-textarea`).value = dataTextarea["content"][0]["value"];
        document.getElementById(`draft__phase__thesis-1-textarea`).value = dataTextarea["content"][1]["value"];
        document.getElementById(`draft__phase__argument-2-textarea`).value = dataTextarea["content"][2]["value"][0];
        document.getElementById(`draft__phase__example-2-textarea`).value = dataTextarea["content"][2]["value"][1];
        document.getElementById(`draft__phase__argument-3-textarea`).value = dataTextarea["content"][3]["value"][0];
        document.getElementById(`draft__phase__example-3-textarea`).value = dataTextarea["content"][3]["value"][1];
        document.getElementById(`draft__phase__argument-4-textarea`).value = dataTextarea["content"][4]["value"][0];
        document.getElementById(`draft__phase__example-4-textarea`).value = dataTextarea["content"][4]["value"][1];
        document.getElementById(`draft__phase__ending-5-textarea`).value = dataTextarea["content"][5]["value"];
        
        
        //document.getElementById('draft__phase__theme-${gg}-textarea').value = dataTextarea[]
    });

    FileManager.isExist((path + "/session.json"), (result) => {
        console.log('result -> ' + result)
        if (result == false) return console.log('no session fount to load');
        FileManager.loadFile(path + "/session.json", (dataSession) => {
            dataSession = JSON.parse(dataSession);
            Drafts.changePhase = dataSession.currPhase
        })
    })
}

let wannaSaveAlert = (id, name) => {
    console.log(name)
    if(name) {
        let path = `../../data/essays/${name}`
        saveFile(`${path}/essay.txt`); 
        saveSession(id, `${path}/session.json`);
        return
    }

    
    prompt({
        title: 'Zapisz rozprawke',
        label: 'Tytuł rozprawki:',
        value: '',
        inputAttrs: {
            type: 'text'
        },
        type: 'input'
    })
    .then((fileName) => {
        if (fileName === null) {
        } else {
            if(fileName.match(/[a-zA-Z0-9]+/g)[0] != fileName) return alert("Nazwa pliku powinna zawierać tylko litery i liczby")
            if (fileName.length > 25 || fileName.length < 3) return alert("Nazwa pliku powinna być dłuższa niż 3 znaki i krótsza niż 25 znaków.")
            fs.mkdir(path.join(__dirname, `../../data/essays/${fileName}`), (err) => { 
                if (err) { 
                    return console.error(err); 
                } else {
                    let path = `../../data/essays/${fileName}`;
                    saveFile(`${path}/essay.txt`);
                    saveSession(id, `${path}/session.json`);
                    alert("Plik zapisany!");
                    window.location.href = `../draft/draft.html?id=${fileName}`
                }
            }); 
        }
    })
    .catch(console.error);
}

const saveFile = (path) => {
    //   path = ../../data/essays/${fileName}/${fileName}.txt
    let content = generateJSON();
    console.log('Content of file: ');
    console.log(content);
    FileManager.writeFile(path, JSON.stringify(content))
}
// current Phase
const saveSession = (current, path) => {
    for (let i = 6; i > -1; i--) {
        let temp = []
        temp.push(document.getElementById(`sidebar__element--character-${i}`).innerHTML)
        temp.push(document.getElementById(`sidebar__element-${i}`).classList[1])
        session.phases[i] = temp
    }
    session.currPhase = current
    //session.summaryInfoJson = summary();
    FileManager.writeFile(path, JSON.stringify(session))
}


const countWords = (textAreaId) => {
    // PRAWIE dziala jak chcesz kajetan to napraw :P
    let text = document.getElementById(textAreaId).value;
    text = text.trim()
    text = text.replace(/  +/g, ' ');
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

let turnToNumber = (id, num) => {
    removeWWC(id);
    document.querySelectorAll("#" + id + " span")[0].innerHTML = String(num) + "."
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

class Drafts {
    static currentPhase = 0;
    static set changePhase(phase) {
        setTimeout(() => {

            if(phase == "+") phase = this.currentPhase + 1;
            if(phase == "-") phase = this.currentPhase - 1;
            console.log('Set ' + phase + ' from old ' + this.currentPhase);
            let oldphase = this.currentPhase
            document.getElementById(`draft__phase-${phase}`).scrollTo(0,0);
            document.getElementById(`sidebar__element-${this.currentPhase}`).classList.remove('sidebar__element--selected');
            this.currentPhase = phase;
            document.getElementById('draft__phases').style.transform = `translateY(${(-100) * phase}%)`;
            document.getElementById(`sidebar__element-${this.currentPhase}`).classList.add('sidebar__element--selected');
            let neededSidebarIds = returnSidebarsId()
            let neededTextareaIds = returnTextareas()
            for (let i = 6; i > this.currentPhase; i--) {
                removeWWC(neededSidebarIds[i])
            }
            if (oldphase < this.currentPhase) {
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
                }}
            } else {
                for (let gu = this.currentPhase; gu < 6; gu++) {
                   turnToNumber(neededSidebarIds[gu], gu)
                }
            }



        }, 100)
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


class DocumentPresentation {
    static loadText() {
        let color = 'black';
        let valuesToPush = [
            document.getElementById(`draft__phase__thesis-1-textarea`).value,
            document.getElementById(`draft__phase__argument-2-textarea`).value,
            document.getElementById(`draft__phase__example-2-textarea`).value,
            document.getElementById(`draft__phase__argument-3-textarea`).value,
            document.getElementById(`draft__phase__example-3-textarea`).value,
            document.getElementById(`draft__phase__argument-4-textarea`).value,
            document.getElementById(`draft__phase__example-4-textarea`).value,
            document.getElementById(`draft__phase__ending-5-textarea`).value
        ]

        document.getElementById('documentPresentation').innerHTML = ``;
        for(let i = 0; i < valuesToPush.length; i++) {
            document.getElementById('documentPresentation').innerHTML += `
                <div class="documentPresentation__sentence" style="color: ${color}" id="documentPresentation__sentence-${i}">
                    ${valuesToPush[i]}
                </div>
            `;
        }

    }
}