window.addEventListener("DOMContentLoaded", () => {
    console.log("Draw Loaded!");

    for(let i = 0; i < 7; i++) {
        document.getElementById('sidebar__element-' + i).addEventListener("click", () => {
            console.log('klikam -> ' + i);
            Drafts.changePhase(i)
        })
    }

});
//siema kajetan
//normalnie winrar.open

class Drafts {
    static constructor() {
        this.currentPhase = 0;
    }
    
    static set changePhase(phase) {
        console.log('Set ' + phase + ' from old ' + this.currentPhase);

        document.getElementById(`draft__phase-${this.currentPhase}`).classList.add('hidden');
        this.currentPhase = phase;
        document.getElementById(`draft__phase-${phase}`).classList.remove('hidden');
    }
}

//https://www.youtube.com/watch?v=nUHKOgHgQc4

/*
🎤🐢Midunseti nane, nane nane, sarebazi bade, bade bade, morakhazish kame, kame kame, naneke-uo mano zayidi, tuo ke dahan-e mano gayidi, midunesti nane, buozorg misham sarebazi miram, chera dadi duoshidam, nazashti man bemiram, sarbazamuo, sarebazi baram ye muoshdekhake, hamin daru nadaram, faghad yik-dune pake, sarbaz duoäm gelim-e pare, shabra sar miyare, kalogh par, pa morghe, basash farghi nadare!🎤🐢
XDDD

remix

https://www.youtube.com/watch?v=utcID57IbPc

d-.-b
*/