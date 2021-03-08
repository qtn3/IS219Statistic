const City = require('../src/Models/City')

test('Can create a city object', () => {
    let city = new City();
    expect(city).toBeInstanceOf(City);
});
test('Can create a city object by factory', () => {
    let city = City.create();
    expect(city).toBeInstanceOf(City);
});

let data = {
    id: 2,
    city: "Belleville City",
    city_ascii: "NJ",
    lat: 100.24,
    lng: 123.567,
    iso2: 789.10,
    iso3: 234.56,
    capital: "Trenton",
    admin_name: "Quang Nguyen"
}

test('Test Values of City', () => {
    let city = new City(data);
    expect(city.id).toBe(2);
    expect(city.city).toBe("Belleville City");
    expect(city.city_ascii).toBe("NJ");
    expect(city.lat).toBe(100.24);
    expect(city.lng).toBe(123.567);
    expect(city.iso2).toBe(789.10);
    expect(city.iso3).toBe(234.56);
    expect(city.capital).toBe("Trenton");
    expect(city.admin_name).toBe("Quang Nguyen");

});
