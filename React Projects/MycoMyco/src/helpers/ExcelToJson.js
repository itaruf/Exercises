var excelToJson = require('convert-excel-to-json');
const fs = require('fs');

var getdatabase = excelToJson({
    source: fs.readFileSync('src/helpers/database.xlsx'),
    header: {
        rows: 1
    },
    columnToKey: {
        '*': '{{columnHeader}}'
    }
});

var getquizdatabase = excelToJson({
    source: fs.readFileSync('src/helpers/quiz-database.xlsx'),
    header: {
        rows: 1
    },
    columnToKey: {
        '*': '{{columnHeader}}'
    }
});

var jsonfile = require('jsonfile')
var datafile = 'back/database/data.json'
var quizfile = 'back/database/quiz.json'

jsonfile.writeFile(datafile, getdatabase, function (err) {
    console.error(err)
})

jsonfile.writeFile(quizfile, getquizdatabase, function (err) {
    console.error(err)
})