const parse = require('csv-parse')
const fs = require('fs');
const output = [];
/*
class CSVReader{
    static GetRecord(filePath, model){
        fs.createReadStream(filePath)
            .pipe(parse({columns: false, delimiter: ',', trim: true, skip_empty_lines: true}))
            .on('readable', function (){
                let record
                while (record = this.read()){
                    let city = model.create(record)
                    output.push(record)
                }
            })
            .on('end', function (){
                //console.log(output);
            })
        return output;
    }
}
*/
/*
class CSVReader{
    static GetRecord(filePath, model){
        const csvContents = fs.readFileSync(filePath);
        const output = parse(csvContents, {columns: false, delimiter: ',', trim: true, skip_empty_lines: true})
            let arr = Array();
            output.forEach(function(record){
                arr.push(model.create(record));
        })
        return output;
    }
}
*/
class CSVReader{
    static async GetRecord(filePath, model){
        // return a promise
        return new Promise((resolve, reject) => {
            fs.createReadStream(filePath)
                .pipe(parse({columns: false, delimiter: ',', trim: true, skip_empty_lines: true}))
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

