const parse = require('csv-parse')
const fs = require('fs');
const output = [];
class CSVReader{
    static async GetRecord(filePath, model){
        // return a promise
        return new Promise((resolve, reject) => {
            fs.createReadStream(filePath)
                .pipe(parse({columns: true, delimiter: ',', trim: true, skip_empty_lines: true}))
                .on('readable', function (){
                    let record
                    while (record = this.read()){
                        let city = model.create(record)
                        output.push(record)
                    }
                })
                .on('end', function (){

                    resolve(output);
                })
        });
    }
}

module.exports = CSVReader;