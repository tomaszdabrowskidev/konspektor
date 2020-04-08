const path = require('path');
const fs = require('fs');

class FileManager {
    static loadList(path, callback) {
        fs.readdir(path, (err, files) => {
            if (err) return console.log('Unable to scan directory: ' + err);
            
            files.forEach(function (file) {
                console.log(file);
            });
            callback(files)
        });
    }
    static loadFile(filepath, callback) {
        fs.readFile(path.join(__dirname, filepath), 'utf8', function (err, data) {
            if (err) {
                throw err;
            }
            //console.log(data);
            callback(data.toString())
        });
    }
    static writeFile(filepath, content, callback) {
        fs.writeFile(path.join(__dirname, filepath), content, function(err) {
            if(err) return console.log(err);
            console.log("The file was saved!");
        }); 
    }
}


//FileManager.loadList(path.join(__dirname, '../../data/essays'), (files) => console.log(files) )
