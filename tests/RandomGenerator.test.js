const expect = require("expect");
const RandomNumWithoutSeed= require('../src/RandomGeneratorFunction/RandomNumberWithoutSeed');
const RandomNumWithSeed= require('../src/RandomGeneratorFunction/RandomNumberWithSeed');
const ListRandomNumWithSeed= require('../src/RandomGeneratorFunction/ListOfRandomNumberWithSeed');
const RandomItemFromList= require('../src/RandomGeneratorFunction/RandomItemFromList');
const SelectNWithoutSeedFromList= require('../src/RandomGeneratorFunction/SelectNWithoutSeedFromList');
const RandomNWithSeed= require('../src/RandomGeneratorFunction/SelectNWithSeed');

test('Generate Random Number Both Integer and Decimal Without Seed', () => {
    let minimum = 1;
    let maximum = 10;
    let rand = new RandomNumWithoutSeed();
    expect(rand.IntWithoutSeed(minimum,maximum)).toBeGreaterThan(0);
    expect(rand.IntWithoutSeed(minimum,maximum)).toBeLessThan(11);
    expect(rand.DecWithoutSeed(minimum,maximum)).toBeGreaterThan(0);
    expect(rand.DecWithoutSeed(minimum,maximum)).toBeLessThan(11);
});

test('Generate Random Number Both Integer and Decimal With Seed', () => {
    let minimum = 1;
    let maximum = 10;
    let seed = 10;
    let rand = new RandomNumWithSeed();
    expect(rand.IntWithSeed(minimum, maximum, seed)).toBeGreaterThan(1);
    expect(rand.IntWithSeed(minimum, maximum, seed)).toBeLessThan(10);
    expect(rand.DecWithSeed(minimum, maximum, seed)).toBeGreaterThan(1);
    expect(rand.DecWithSeed(minimum, maximum, seed)).toBeLessThan(10);
});

test('Generate a List of N Random Numbers with a Seed and Between a Range of Numbers both Integer and Decimal', () => {
    let arr12 = 10;
    let list1 = new ListRandomNumWithSeed();
    let list2 = new ListRandomNumWithSeed();
    expect(list1.ListIntWithSeed(10, 100, arr12, 100)).toHaveLength(10);
    expect(list1.ListIntWithSeed(10, 100, arr12, 100)).toEqual(list2.ListIntWithSeed(10, 100, arr12, 100));
    let arr34 = 10;
    let list3 = new ListRandomNumWithSeed();
    let list4 = new ListRandomNumWithSeed();
    expect(list3.ListDecWithSeed(10, 100, arr34, 100)).toHaveLength(10);
    expect(list3.ListDecWithSeed(10, 100, arr34, 100)).toEqual(list4.ListDecWithSeed(10, 100, arr34, 100));
});

test('Select a Random Item from a List', () => {
    let length = 10;
    let rand = new ListRandomNumWithSeed().ListIntWithSeed(10,100,length,100);
    let result = new RandomItemFromList();
    expect(rand).toContain(result.RandomItem(rand));
});

test('Select 3 Numbers of Items from a List without a Seed', () => {
    let length = 10;
    let rand = new ListRandomNumWithSeed().ListIntWithSeed(10, 100, length, 100);
    let result = new SelectNWithoutSeedFromList();
    expect(result.SelectNWithoutSeed(rand,3)).toHaveLength(3);
});

test('Select 3 Numbers of Items from a List with a Seed', () => {
    let length = 10;
    let rand = new ListRandomNumWithSeed().ListIntWithSeed(10, 100, length, 100);
    let result = new RandomNWithSeed();
    expect(result.SelectWithSeed(rand,3,100)).toHaveLength(3);
});