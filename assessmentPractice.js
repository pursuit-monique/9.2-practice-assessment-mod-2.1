/* 

The year is 2232.

Corporations have displaced world governments to become the primary organizations of power.

People say "Have a WalMart-ful day" unironically. Truly a wasteland.

You are a data sifter. You eke out an existence by selling bundled personal information siphoned off of the global IntraNet through nefarious means. It is not a glamorous life, but it is better than being an Amazon Fresh sponsored influencer making TikTok videos promoting Pink Sauce v3.4. Unless you'd prefer that. If you do, that's weird bro, just do the problems.

You've just received your latest collection of data, and a set of orders to fulfill. Get it done.

The data you're working with will look like this:

{
    id: Number
    first_name: String
    last_name: String
    email: String
    gender: String
    ip_address: String
    credit_card: {
        number: String,
        type: String,
    },
    username: String,
    employer: String,
}

*/

/* 
    Returns a filtered list of people that are employed by the given employer.

    Should throw an error if people is empty or undefined.

    Should throw an error if no employer is provided.

    Note: Must use .filter()

    @params {Object[]} people - Array of objects matching the format above
    @params {String} employer - The employer to filter on
    @returns {Object[]} - A list of people that are employed by the given employer
*/

function filterDataByEmployer(people, employer) {}

/* 
    Returns the credit card details of every person in the given array. Each object in the array should look like: 
    
    { name: "<first_name> <last_name>", number: <credit_card.number>, type: <credit_card.type> }

    Should throw an error if people is empty or undefined.

    Note: Must use .map()

    @params {Object[]} people - Array of objects matching the format above.
    @returns {Object[]} - Array of objects matching the pattern in this problem description.
*/

function getCreditCardDetails(people) {}

/* 
    Returns a unique array of employers, sorted alphabetically from A-Z.

    Note: Must use .forEach() and .sort()

    @params {Object[]} people - Array of objects matching the format above.
    @returns {String[]} - Array of employers, sorted alphabetically, unique values only.
*/

function getAllEmployers(people) {}