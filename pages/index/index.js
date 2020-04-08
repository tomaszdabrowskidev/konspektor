window.addEventListener("DOMContentLoaded", () => {
    console.log("Loaded!");

    FileManager.loadList('../../data/essays', (files) => {
        for(let i = 0; i < files.length; i++) {
            document.getElementById('essays-container').innerHTML += `
                <button class="squareButton">
                    <img class="squareButton__document-icon" src="../../sources/images/document-icon.png">
                    <div class="squareButton__name">${files[i]}</div>
                </button>
            `
        }
    });
});