window.addEventListener("DOMContentLoaded", () => {
    console.log("Loaded!");
    document.getElementById("arabitortoise").addEventListener("click", () => {
        showVid();
        document.getElementById("arabitortoise").hidden = true;
        document.getElementById('lol').innerText = '🎤🐢Midunseti nane, nane nane, sarebazi bade, bade bade, morakhazish kame, kame kame, naneke-uo mano zayidi, tuo ke dahan-e mano gayidi, midunesti nane, buozorg misham sarebazi miram, chera dadi duoshidam, nazashti man bemiram, sarbazamuo, sarebazi baram ye muoshdekhake, hamin daru nadaram, faghad yik-dune pake, sarbaz duoäm gelim-e pare, shabra sar miyare, kalogh par, pa morghe, basash farghi nadare!🎤🐢'
    })
});

let showVid = () => {
    let ran = getRandomInt(1,3)
    for (let i = 0; i < 20; i++) console.log(getRandomInt(1,3));
    console.log(ran)
    document.getElementById(`eloeloelo${ran}`).play()
    document.getElementById(`eloeloelo${ran}`).hidden = false;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }