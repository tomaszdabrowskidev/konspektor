window.addEventListener("DOMContentLoaded", () => {
    console.log("Draw Loaded!");

    for(let i = 0; i < 7; i++) {
        document.getElementById('sidebar__element-' + i).addEventListener("click", () => {
            console.log('klikam -> ' + i);
            Drafts.changePhase = i;
        })
    }
    document.getElementById("draft__phase-0-textarea").addEventListener("input", () => {
        if (document.getElementById("draft__phase-0-textarea").value == "szczepan szczesiak") {
            window.location.href = "../about/about.html"
        };
    });
    document.getElementById('draft__button-next').addEventListener('click', () => Drafts.changePhase = "+")
    document.getElementById('draft__button-previous').addEventListener('click', () => Drafts.changePhase = "-")
});

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
    }
}

//https://www.youtube.com/watch?v=nUHKOgHgQc4

/*
🎤🐢Midunseti nane, nane nane, sarebazi bade, bade bade, morakhazish kame, kame kame, naneke-uo mano zayidi, tuo ke dahan-e mano gayidi, midunesti nane, buozorg misham sarebazi miram, chera dadi duoshidam, nazashti man bemiram, sarbazamuo, sarebazi baram ye muoshdekhake, hamin daru nadaram, faghad yik-dune pake, sarbaz duoäm gelim-e pare, shabra sar miyare, kalogh par, pa morghe, basash farghi nadare!🎤🐢
XDDD
*/