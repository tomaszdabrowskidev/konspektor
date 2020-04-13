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

const splitBySentences = () => {
    let text = Array.from(document.getElementById('draft__content-textarea').value);
    let words = [];
    let i = 0;
    while(text.length > 0) {
        i++;
        if (text[i] == "." || text[i] == "?" || text[i] =="!") {
            if(text[i + 1] == " " && text[i + 2] == text[i + 2].toUpperCase()) {
                words.push((text.splice(0,i+1)).join(''));
                i = 0;
            }
        }
        if(i > text.length) words.push((text.splice(0,i-1)).join(''));
    }
    return words
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
    static onRight = "thesis";
    static loadText(text) {
        text = splitBySentences(text);
        for(let i = 0; i < text.length; i++) {
            sentences.source.push({id: i, content: text[i]});
            sentences.uncategorized.push({id: i, content: text[i]});
        }
        sentences.thesis = [];
        sentences.arg1 = [];
        sentences.arg2 = [];
        sentences.arg3 = [];
        sentences.end = [];

        for(let i = 0; i < text.length; i++) {
            let color = 'black';
            if(i == 3) color = 'orangered';
            document.getElementById('documentPresentation').innerHTML += `
                <div class="documentPresentation__sentence" style="color: ${color}" id="documentPresentation__sentence-${i}">
                    ${text[i]}
                </div>
            `;
            setTimeout(() => document.getElementById(`documentPresentation__sentence-${i}`).addEventListener('click', () => this.toggleTextPosition(`documentPresentation__sentence-${i}`)), 500)
            
        }
    }

    static toggleTextPosition(id) {
        console.log(id)
        if(document.getElementById('documentPresentation').contains(document.getElementById(id))) {
            console.log('tak')
            this.moveText(id, 'right')
        } else {
            this.moveText(id, 'left')
        }
    }

    static moveText(id, to) {
        let i = id.split("-")[1];
        let text = document.getElementById(id).innerText;
        document.getElementById(id).remove();
        let outputID;
        // TO DO TO FIX XDD
        if(to == "right") {
            outputID = 'documentPresentation-right';
            sentences[this.onRight].push(sentences["source"][i]);
            sentences['uncategorized'].splice(i, 1);
        } else if(to == "left") {
            outputID = 'documentPresentation';
        }
        document.getElementById(outputID).innerHTML += `
            <div class="documentPresentation__sentence" onclick="DocumentPresentation.toggleTextPosition('${id}')" id="${id}">
                ${text}
            </div>
        `
    }
}