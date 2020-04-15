let essays = []
window.addEventListener("DOMContentLoaded", () => {
    console.log("Loaded!");
    
    FileManager.loadList('data/essays', (files) => {
        for(let i = 0; i < files.length; i++) {
            essays.push(files[i])
            document.getElementById('essays-container').innerHTML += `
                <button class="squareButton">
                    <div class="squareButton__settings" id="squareButton__settings-${i}">⚙</div>
                    <img class="squareButton__document-icon" src="../../sources/images/document-icon.png" id="squareButton__${files[i]}>
                    <div class="squareButton__name" id="squareButton__${files[i]}">${files[i]}</div>

                    <div class="squareButton__settingsPanel squareButton__settingsPanel--hidden" id="squareButton__settingsPanel-${i}">
                        <div class="squareButton__settingsPanel__element" id="squareButton__settingsPanel__element-export-${i}">Eksportuj</div>
                        <div class="squareButton__settingsPanel__element" id="squareButton__settingsPanel__element-rename-${i}">Zmień nazwę</div>
                        <div class="squareButton__settingsPanel__element" id="squareButton__settingsPanel__element-remove-${i}">Usuń</div>
                        <div class="squareButton__settingsPanel__element" id="squareButton__settingsPanel__element-cancel-${i}">Anuluj</div>
                    </div>
                </button>
            `
        }

        for (let i = 0; i < essays.length; i++) {
            document.getElementById(`squareButton__${files[i]}`).addEventListener('click', () => {
                window.location.href = `../draft/draft.html?id=${files[i]}`
            });
            document.getElementById(`squareButton__settings-${i}`).addEventListener('click', () => {
                openCurrentSettings(i);
            });
            document.getElementById(`squareButton__settingsPanel__element-export-${i}`).addEventListener('click', () => {
                exportFile(i);
            });
            document.getElementById(`squareButton__settingsPanel__element-rename-${i}`).addEventListener('click', () => {
                renameFile(i);
            });
            document.getElementById(`squareButton__settingsPanel__element-remove-${i}`).addEventListener('click', () => {
                removeFile(i);
            });
            document.getElementById(`squareButton__settingsPanel__element-cancel-${i}`).addEventListener('click', () => {
                cancelSettings(i);
            });
        }


    });

});

const openCurrentSettings = (id) => {
    document.getElementById(`squareButton__settingsPanel-${id}`).classList.remove('squareButton__settingsPanel--hidden');
}

let exportFile = (file) => {
    console.log('nie zrobione :)')
}

let renameFile = (oldfile) => {
    prompt({
        title: 'Zmiana nazwy',
        label: 'Nowa nazwa:',
        value: '',
        inputAttrs: {
            type: 'text'
        },
        type: 'input'
    })
    .then((fileName) => {
        if (fileName === null) {
        } else {
        fs.rename(path.join(__dirname, `../../data/essays/${essays[oldfile]}`), path.join(__dirname, `../../data/essays/${fileName}`), function(err) {
            if (err) {
              alert("Nieprawidłowe znaki!")
            } else {
              location.reload()
            }
          })
        }
    })
    .catch(console.error);
}

let cancelSettings = (id) => {
    console.log(id)
    document.getElementById(`squareButton__settingsPanel-${id}`).classList.add('squareButton__settingsPanel--hidden');
}

let removeFile = (file) => {
    let nameOfFile = essays[file]
    var r = confirm(`Czy na pewno chcesz usunąć plik ${nameOfFile}`);
    if (r == true) {
        FileManager.removeFile(`../../data/essays/${nameOfFile}/`)
        location.reload()
    }
}