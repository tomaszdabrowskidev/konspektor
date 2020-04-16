let config = {};
let loadConfigData = () => {
    FileManager.loadFile('../../data/config.json', (file) => {
        let parsedCrits = JSON.parse(file);
        config = parsedCrits;
    })
}

window.addEventListener('DOMContentLoaded', () => {
    for(let i = 0; i < 2; i++) {
        document.getElementById('sidebar__element-' + i).addEventListener("click", () => {
            Sections.changeSection = i;
        })
    }

    document.getElementById("draft__content-textarea").addEventListener("input", (e) => {
        console.log(e)
        DocumentPresentation.loadText(document.getElementById("draft__content-textarea").value)
    });

    document.getElementById('button-next').addEventListener('click', () => Sections.changeSection = "+")
    document.getElementById('button-previous').addEventListener('click', () => Sections.changeSection = "-")
    document.getElementById('button-cancel').addEventListener('click', () => window.location.href = "../index/index.html")


    document.getElementById('draft__content-textarea').value = `
	W obliczu światowych zmian, działań rządów państw, coraz więcej ludzi zaczyna zastanawiać się na temat wolności człowieka - czy jest on istotą wolną, czy zniewoloną? Uważam, że człowiek jest istotą zniewoloną.

	Człowiek, szczególnie młody w okreśie szkolnym często poddawany jest pewnym przekonaniom, wpływom ludzi starszych, bardziej doświadczonych takich jak nauczyciele. Nie można nazwać człowieka istotą wolną, jeśli zabraniane jest mu przedstawienie własnego zdania, wyrażenia opinii. Każdy człowiek ma inne odczucia, przekonania, może inaczej interpretować różne sprawy, także może się mylić. Człowiekowi wolnemu pozwala się pójść własną ścieżką, nawet jeśli nie jest ona słuszna, nie zmusza się go do „jedynej prawdziwej” opinii.
	W przytoczonym fragmencie „Ferdydurke” Witolda Gombrowicza, Gałkiewicz – uczeń klasy podczas lekcji nie zgadza się z profesorem Bladaczką, który przedstawia i wymusza swoje zdanie na uczniach jako prawdę niezaprzeczalną bez poparcia tego konkretnymi argumentami. Sprzeciw Gałkiewicza wywołuje niepokój u nauczyciela, nie dopuścił on możliwości, że uczeń się z nim nie zgodzi. Profesor Bladaczka nie przedstawia mu żadnych konkretnych argumentów, nie rozmawia merytorycznie, a dalej wymusza na Gałkiewiczu swoje zdanie na temat twórczości Słowackiego. Ukazuje to, iż uczniowie nie są istotami wolnymi, bo nie mają prawa do własnego zdania, nauczyciele wymuszają na nich swój kierunek nauki
i sposób postrzegania rzeczywistości.

	Człowiek, do wolności na pewno potrzebuje mieć zdefiniowane własne zdanie, być w pełni sobą, a nie kopią tłumu, który narzuca jakieś nurty. Instytucje takie jak szkoły, które nie są zarządzane w poprawny sposób, mogą powodować ograniczenie wolności uczniów. Tak samo ogólno przyjęte schematy, stereotypy mogą być przyczyną ograniczania wolności.
	W całości „Ferdydyurke” W. Gombrowicza widzimy Józia, który stara się poszukiwać siebie, swojej „gęby” jednocześnie sprzeciwia się „upupianiu” – czyli narzucaniu uczniom „gęby” przez nauczycieli. W szkole panuje szereg nakazów i zakazów, które również według bohatera ograniczają swobodę. Również w domu Młodziaków zauważa panujące stereotypy np. możliwość bicia służącego i jego złe traktowanie, które uznaje za pewnego rodzaju „gębę”, która jest narzucana również jemu. Takie powszechnie panujące zasady potwierdzają, że człowiek nie jest w pełni istotą wolną.

	Wolność ludzka nie jest tylko kwestią wolnego słowa, światopoglądu, ale również pod względem fizycznym – wolność wyboru, wolność swobodnego przemieszczania się. Człowiek, któremu władza zabrania opuszczenia terytorium kraju, w pełni kontroluje go, wymusza jeden możiwy kierunek polityczny nie dopuszczając do głosu opozycji powoduje, że obywatele takiego kraju nie są wolnymi istotami.
	Doskonale widać to w filmie „300 mil do nieba” reżyserii Macieja Dejczera. Główni bohaterowie – Jędrek i Grześ widzą, że w Polsce Rzeczypospolitej Ludowej nie ma wolności wypowiadania się, mówienia prawdy historycznej, bo ich ojciec został właśnie za to zwolniony z pracy w szkole. Postanawiają wyjechać, najpierw dwunastoletni Grześ wierząc, że jest człowiekiem wolnym składa wniosek o wydanie paszportu, jednak spotyka się z wyśmianiem urzędnika, który wie, że taki wniosek zostanie odrzucony. Zrozumiał, że nie jest człowiekiem wolnym nawet w kwestii swobodnego przemieszczania się, więc bracia postanawiają  uciec
w nielegalny sposób pod przyczepą ciężarówki. Po udanej ucieczce nadal nie są ludźmi w pełni wolnymi, muszą zmierzyć się z dyplomatyczną walką pomiędzy rządem Królestwa Danii,
a władzą PRL, która zawnioskowała o ich przymusowe sprowadzenie do kraju. Po uzyskaniu statusu uchodźców, co oznacza ich stałe pozostanie po stronie państw kapitalistycznych uzyskują wolność jednostki, jednak duchowo czują, że dalej nie są w pełni wolni jako rodzina, bo ich rodzice zostali po drugiej stronie żelaznej kurtyny, a władza komunistyczna jeszcze bardziej zaczęła ich prześladować, po tym jak pozwolili, żeby ich synowie zostali za granicą.
    Podsumowując, człowiek do pełnej wolności potrzebuje zarówno wolności słowa, jak
i wolności jednostki, wyboru. W całości „Ferdydurke” jak i przytoczonym filmie „300 mil do nieba” nie znajdziemy pełnej definicji wolności. W „Ferdydurke” wprawdzie wolność jednostki istniała - akcja działa się w demokratycznej II Rzeczypospolitej, w której obywatele byli według prawa wolnymi ludźmi, jednak kulturowo panowało bardzo wiele schematów
 i stereotypów, które ograniczały wolność wypowiedzi wśród uczniów i zmuszały ludzi do pewnych zachowań. W „300 mil do nieba” już większości tych stereotypów ograniczających swobodę nie ma, bo akcja dzieje się blisko pół wieku później, jednak w tym utworze widzimy ograniczanie wolności ze strony władzy państwa, która nie dopuszcza, żeby obywatele mogli swobodnie się wypowiadać i opuszczaj terytorium kraju.
    `
    setTimeout(() => {
        DocumentPresentation.loadText(document.getElementById("draft__content-textarea").value)
    },250)

})

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  }

const splitBySentences = () => {
    let text = document.getElementById('draft__content-textarea').value;
    
    // TO DO TO FIX
    text = replaceAll(text, '	', '<tab>');
    console.log(text)

    let sentences = [];
    let i = 0;
    let regex = /(?<!\w\.\w.)(?<![A-Z]\.)(?<![A-Z][a-z]\.)(?<=\.|\?|\!\:)\s+[A-Z]/gm
    let match;
    var lastpointer = 0
    while((match = regex.exec(text)) != null) {
        console.log('cos robie')
        sentences.push(text.slice(lastpointer, match.index))
        lastpointer = match.index
        // text = text.slice(match.index, text.length)
    }
    /*while(text.length > 0) {
        i++;
        if (text[i] == "." || text[i] == "?" || text[i] =="!") {
            if(text[i + 1] == " " && text[i + 2] == text[i + 2].toUpperCase()) {
                sentences.push((text.splice(0,i+1)).join(''));
                i = 0;
            }
        }
        if(i > text.length) sentences.push((text.splice(0,i-1)).join(''));
    }*/
    console.log(sentences)
    return sentences
}

class Sections {
    static currentSection = 0;

    static set changeSection(section) {
        if(section == "+") section = this.currentSection + 1;
        if(section == "-") section = this.currentSection - 1;
        console.log('Set ' + section + ' from old ' + this.currentSection);
        document.getElementById(`section-${section}`).scrollTo(0,0);
        document.getElementById(`sidebar__element-${this.currentSection}`).classList.remove('sidebar__element--selected');

        this.currentSection = section;
        document.getElementById('sections').style.transform = `translateY(${(-100) * section}%)`;
        document.getElementById(`sidebar__element-${this.currentSection}`).classList.add('sidebar__element--selected');
    }
}

let sentences = {
    source: [],
    uncategorized: [],
    thesis: [],
    arg1: [],
    arg2: [],
    arg3: [],
    end: []
}

class DocumentPresentation {
    static currentMarker = "thesis";
    static sentences = [];
    static loadText(text) {
        text = splitBySentences(text);
        for(let i = 0; i < text.length; i++) {
            sentences.source.push({id: i, content: text[i]});
            sentences.uncategorized.push({id: i, content: text[i]});
            this.sentences.push({id: i, content: text[i], type: "uncategorized"});
        }

        for(let i = 0; i < text.length; i++) {
            let color = 'black';
            document.getElementById('documentPresentation').innerHTML += `
                <div class="documentPresentation__sentence" style="color: ${color}" id="documentPresentation__sentence-${i}">
                    ${text[i]}
                </div>
            `;
            setTimeout(() => document.getElementById(`documentPresentation__sentence-${i}`).addEventListener('click', () => this.markerSentence(i)), 500)
        }

        /* load markers buttons events */
        document.getElementById('marker-button--thesis').addEventListener('click', () => this.setMarker('thesis'));
        document.getElementById('marker-button--arg1').addEventListener('click', () => this.setMarker('arg1'));
        document.getElementById('marker-button--arg2').addEventListener('click', () => this.setMarker('arg2'));
        document.getElementById('marker-button--arg3').addEventListener('click', () => this.setMarker('arg3'));
        document.getElementById('marker-button--ending').addEventListener('click', () => this.setMarker('ending'));
    }
    static markerSentence(sentenceID) {
      if((document.getElementById('documentPresentation__sentence-' + sentenceID).classList).contains('documentPresentation__sentence--' + this.currentMarker)) {
        document.getElementById('documentPresentation__sentence-' + sentenceID).classList.remove('documentPresentation__sentence--' + this.currentMarker)
        this.sentences[sentenceID].type = 'uncategorized';
      } else {
        this.removeAllMarkersFromSentence(sentenceID);
        document.getElementById('documentPresentation__sentence-' + sentenceID).classList.add('documentPresentation__sentence--' + this.currentMarker)
        this.sentences[sentenceID].type = this.currentMarker;
      }
    }

    static removeAllMarkersFromSentence(sentenceID) {
        document.getElementById('documentPresentation__sentence-' + sentenceID).classList.remove('documentPresentation__sentence--thesis');
        document.getElementById('documentPresentation__sentence-' + sentenceID).classList.remove('documentPresentation__sentence--arg1');
        document.getElementById('documentPresentation__sentence-' + sentenceID).classList.remove('documentPresentation__sentence--arg2');
        document.getElementById('documentPresentation__sentence-' + sentenceID).classList.remove('documentPresentation__sentence--arg3');
        document.getElementById('documentPresentation__sentence-' + sentenceID).classList.remove('documentPresentation__sentence--ending');
    }

    static setMarker(marker) {
        document.getElementById('marker-button--' + this.currentMarker).classList.remove('documentPresentation__marker-button--selected');
        this.currentMarker = marker;
        document.getElementById('marker-button--' + this.currentMarker).classList.add('documentPresentation__marker-button--selected');
    }
}

function generateJSON() {
    let sentences = DocumentPresentation.sentences;
    let theme = '';
    let thesis = '';
    let deduce1 = '';
    let deduce2 = '';
    let deduce3 = '';
    let ending = '';

    for (let i = 0; i < sentences.length; i++) {
      if(sentences[i].type == 'thesis') thesis += sentences[i].content;
      else if(sentences[i].type == 'arg1') deduce1 += sentences[i].content;
      else if(sentences[i].type == 'arg2') deduce2 += sentences[i].content;
      else if(sentences[i].type == 'arg3') deduce3 += sentences[i].content;
      else if(sentences[i].type == 'ending') ending += sentences[i].content;
    }

    let output = {
        name: "",
        description: "",
        created: "",
        content: [
            {type: "theme", value: theme},
            {type: "thesis", value: thesis},
            {type: "arg1", value: [deduce1, '']},
            {type: "arg2", value: [deduce2, '']},
            {type: "arg3", value: [deduce3, '']},
            {type: "end", value: ending}
        ]
    };

    return output;
}

let wannaSaveAlert = (id, name) => {
    console.log(name)
    if(name) {
        let path = `../../data/essays/${name}`
        saveFile(`${path}/essay.txt`); 
        //saveSession(id, `${path}/session.json`);
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
                    //saveSession(id, `${path}/session.json`);
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