// fs - File System built-in module
let fs = require('fs')
let path = require('path')

// json --> csv
// JSON = JavaScript Object Notation
// CSV = Comma Separated Values

let filename = "people.json"
let filePath = path.join(__dirname, filename) // "/path/to/file.json" "\path\to\file"

fs.readFile(filePath, function(err, data) {
    if (err) {
        console.log("ERROR:", err)
        return;
    }

    let json = JSON.parse(data)
    let programmers = json.programmers;

    let firstRow = ["firstName","lastName","typingSpeed","favouriteOS","favouriteDrink","salary"]

    let rows = []
    for(let i = 0; i < programmers.length; i++) {
        rows.push([
            programmers[i].firstName,
            programmers[i].lastName,
            programmers[i].typingSpeed,
            programmers[i].favouriteOS,
            programmers[i].favouriteDrink,
            programmers[i].salary
        ])
    }

    let csv = firstRow.join(',') + '\n' + rows.join('\n')
    console.log(csv)

    let csvFilename = filename.substring(0, filename.lastIndexOf('.')) + '.csv'
    let csvPathname = path.join(__dirname, csvFilename)
    
    fs.writeFile(csvPathname, csv, function(err) {
        if (err) {
            console.log("ERROR:", err)
            return;
        }
        console.log("File written succesfully!")
    })

})

// Read: fs.readFile(path[, options], callback)
// Create: fs.writeFile(file, data[, options], callback)
// Update: fs.appendFile(file, data[, options], callback)
// Delete: fs.unlink(path, callback)
// Rename: fs.rename(oldPath, newPath, callback)
// fs.open(path, flags[, mode], callback)

// Don't use fs.stat(), instead, handle the error.

// fs.watchFile(filename[, options], listener)

// fs.readdir(path[, options], callback)