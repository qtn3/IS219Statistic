const CSVReader = require('../src/csvReader');
const City = require('../src/Models/City')
test('Can Read CSV File', () => {
    let filePath  = 'data/worldcities.csv';
    let records = CSVReader.GetRecord(filePath, City);
    records.then((response) => {
        expect(response.length).toBe(6);
    });
});