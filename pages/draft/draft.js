window.addEventListener("DOMContentLoaded", () => {
    console.log("Draw Loaded!");

    for(let i = 0; i < 7; i++) {
        document.getElementById('sidebar__element-' + i).addEventListener("click", () => {
            console.log('klikam -> ' + i);
            Drafts.changePhase = i
        })
    }
    document.getElementById("draft__phase-0-textarea").addEventListener("input", () => {
        if (document.getElementById("draft__phase-0-textarea").value == "szczepan szczesiak") {
            window.location.href = "../about/about.html"
        };
    })
});

class Drafts { // i nie dzialalo? no xd
    static currentPhase = 0;
    
    static set changePhase(phase) {
        console.log('Set ' + phase + ' from old ' + this.currentPhase);
        //document.getElementById(`draft__phase-${this.currentPhase}`).classList.add('draft__phase--up')
        setTimeout(() => {
            document.getElementById(`draft__phase-${this.currentPhase}`).classList.add('draft__phase--up')
            this.currentPhase = phase;
            document.getElementById(`draft__phase-${phase}`).classList.remove('draft__phase--down');
        }, 3000)

    }
}

//https://www.youtube.com/watch?v=nUHKOgHgQc4

/*
🎤🐢Midunseti nane, nane nane, sarebazi bade, bade bade, morakhazish kame, kame kame, naneke-uo mano zayidi, tuo ke dahan-e mano gayidi, midunesti nane, buozorg misham sarebazi miram, chera dadi duoshidam, nazashti man bemiram, sarbazamuo, sarebazi baram ye muoshdekhake, hamin daru nadaram, faghad yik-dune pake, sarbaz duoäm gelim-e pare, shabra sar miyare, kalogh par, pa morghe, basash farghi nadare!🎤🐢
XDDD
*/