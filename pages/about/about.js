window.addEventListener("DOMContentLoaded", () => {
    console.log("Loaded!");
    var lol = document.getElementById('eloeloelo')
    document.getElementById("arabitortoise").addEventListener("click", () => {
        lol.play();
        document.getElementById("arabitortoise").hidden = true;
        document.getElementById("eloeloelo").hidden = false;
        document.getElementById('lol').innerText = '🎤🐢Midunseti nane, nane nane, sarebazi bade, bade bade, morakhazish kame, kame kame, naneke-uo mano zayidi, tuo ke dahan-e mano gayidi, midunesti nane, buozorg misham sarebazi miram, chera dadi duoshidam, nazashti man bemiram, sarbazamuo, sarebazi baram ye muoshdekhake, hamin daru nadaram, faghad yik-dune pake, sarbaz duoäm gelim-e pare, shabra sar miyare, kalogh par, pa morghe, basash farghi nadare!🎤🐢'
    })
});
