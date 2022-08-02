const data = require("../data.json");
const {
    filterDataByEmployer,
    getCreditCardDetails,
    getAllEmployers,
    getPersonByName,
    ipIsPresent,
} = require("../assessmentPractice");

describe("filterDataByEmployer()", () => {
    test("should throw an error if people is empty", () => {
        const people = [];
        const employer = "Edgetag";
        expect(() => { filterDataByEmployer(people, employer) }).toThrow("The `people` array is empty.")
    });

    test("should return an empty array if no people match the filter", () => {
        const people = data.slice(100);
        const employer = "zzzzzz";
        expect(filterDataByEmployer(people, employer)).toEqual([]);
    });

    test("should return values if filter matches", () => {
        const people = data;
        const employer = "Photojam";
        const expected = [
            {
              id: 2,
              first_name: 'Johnathon',
              last_name: 'Berick',
              email: 'jberick1@cbsnews.com',
              gender: 'Male',
              ip_address: '59.30.192.30',
              credit_card: { number: '3568382267216737', type: 'jcb' },
              username: 'jberick1',
              employer: 'Photojam'
            },
            {
              id: 359,
              first_name: 'Peter',
              last_name: 'Demelt',
              email: 'pdemelt9y@google.com',
              gender: 'Male',
              ip_address: '24.151.231.3',
              credit_card: { number: '3557695014592628', type: 'jcb' },
              username: 'pdemelt9y',
              employer: 'Photojam'
            }
        ]
        expect(filterDataByEmployer(people, employer)).toEqual(expected);
    });

    test("should call filter on the array", () => {
        const people = data;
        const employer = "Photojam";
        people.filter = jest.fn();
        filterDataByEmployer(people, employer)
        expect(people.filter).toHaveBeenCalled();
    })
})

describe("getCreditCardDetails()", () => {
    test("should throw an error if people is empty", () => {
        const people = [];
        expect(() => { getCreditCardDetails(people) }).toThrow("The `people` array is empty.")
    });

    test("should return correct objects", () => {
        const people = data.slice(0, 5);
        const expected = [
            {
              name: 'Prentice Keedy',
              number: '6393933171959657',
              type: 'instapayment'
            },
            { name: 'Johnathon Berick', number: '3568382267216737', type: 'jcb' },
            { name: 'Darlleen Trickey', number: '3563368800591574', type: 'jcb' },
            {
              name: 'Fayth MacFadden',
              number: '5010120435419851',
              type: 'mastercard'
            },
            { name: 'Malory Neaverson', number: '3536873500220139', type: 'jcb' }
          ];
        expect(getCreditCardDetails(people)).toEqual(expected);
    })

    test("should call map on the array", () => {
        const people = data;
        people.map = jest.fn();
        getCreditCardDetails(people);
        expect(people.map).toHaveBeenCalled();
    })
})

describe("getAllEmployers()", () => {
    test("should throw an error if people is empty", () => {
        const people = [];
        expect(() => { getAllEmployers(people) }).toThrow("The `people` array is empty.")
    });

    test("should return sorted list of employers", () => {
        const people = data.slice(0, 100);
        const expected = [
            'Agimba',     'Agivu',        'Aimbu',        'Avavee',
            'Babbleblab', 'Brainsphere',  'Browseblab',   'Browsedrive',
            'Browsezoom', 'Bubblebox',    'Bubblemix',    'Bubbletube',
            'Buzzshare',  'Camido',       'Centidel',     'Centimia',
            'Centizu',    'Chatterpoint', 'Dabjam',       'Dabtype',
            'Dabvine',    'Demimbu',      'Devcast',      'Devify',
            'Devpulse',   'Eazzy',        'Edgeclub',     'Edgetag',
            'Eimbee',     'Einti',        'Eire',         'Fatz',
            'Feedbug',    'Fivechat',     'Flashdog',     'Flipopia',
            'Gabspot',    'Gigaclub',     'Jayo',         'Katz',
            'Kazio',      'Layo',         'Linkbridge',   'Livefish',
            'Livetube',   'Meembee',      'Meemm',        'Meezzy',
            'Miboo',      'Minyx',        'Muxo',         'Ooba',
            'Oyonder',    'Ozu',          'Photojam',     'Pixope',
            'Podcat',     'Quamba',       'Quinu',        'Realfire',
            'Riffwire',   'Rooxo',        'Shufflebeat',  'Shuffledrive',
            'Skilith',    'Skinder',      'Skipfire',     'Skyndu',
            'Skynoodle',  'Tagopia',      'Talane',       'Tanoodle',
            'Tazzy',      'Tekfly',       'Thoughtworks', 'Topdrive',
            'Topicshots', 'Twinder',      'Twinte',       'Vinder',
            'Voolith',    'Yabox',        'Yakidoo',      'Yombu',
            'Zoomlounge'
          ];

        expect(getAllEmployers(people)).toEqual(expected);
    })

    test("should call forEach on the array", () => {
        const people = data;
        people.forEach = jest.fn();
        Array.prototype.sort = jest.fn();
        getAllEmployers(people);
        expect(people.forEach).toHaveBeenCalled();
        expect(Array.prototype.sort).toHaveBeenCalled();
    })
})

describe("getPersonByName()", () => {
    test("should throw an error if people is empty", () => {
        const people = [];
        const first = "Should";
        const last = "Fail";
        expect(() => { getPersonByName(people, first, last) }).toThrow("The `people` array is empty.")
    });

    test("should throw an error if person is not found", () => {
        const people = [{ first: "Test", last: "Test" }];
        const first = "Should";
        const last = "Fail";
        expect(() => { getPersonByName(people, first, last) }).toThrow("Person with given name could not be found.")
    });

    test("should return a matching person if name is found", () => {
        const people = data;
        const first = "Isidora";
        const last = "Reynard";
        const expected = {"id":406,"first_name":"Isidora","last_name":"Reynard","email":"ireynardb9@businessweek.com","gender":"Genderqueer","ip_address":"176.201.151.140","credit_card":{"number":"675950198230116676","type":"switch"},"username":"ireynardb9","employer":"Gabtune"};
        expect(getPersonByName(people, first, last)).toEqual(expected);
    })

    test("should call find on the array", () => {
        const people = data;
        people.find = jest.fn(people.find);
        getPersonByName(people, "Isidora", "Reynard");
        expect(people.find).toHaveBeenCalled();
    })
})

describe("ipIsPresent()", () => {
    test("should throw an error if people is empty", () => {
        const people = [];
        const ip = "8.8.8.8";
        expect(() => { ipIsPresent(people, ip) }).toThrow("The `people` array is empty.")
    });

    test("should return true if IP is found", () => {
        const people = data;
        const ip = "64.248.200.59";
        expect(ipIsPresent(people, ip)).toEqual(true);
    })

    test("should return false if IP is not found", () => {
        const people = data;
        const ip = "1.1.1.1";
        expect(ipIsPresent(people, ip)).toEqual(false);
    })

    test("should call some on the array", () => {
        const people = data;
        people.some = jest.fn();
        ipIsPresent(people, "1.1.1.1");
        expect(people.some).toHaveBeenCalled();
    })
})