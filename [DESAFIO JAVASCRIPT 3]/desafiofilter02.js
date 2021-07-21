const companies = [

    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', founedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', founedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', founedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', founedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', founedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', founedOn: 1976 },

];

const newCompanies = companies.filter( company => {

    if(company.founedOn > 1975 && company.marketValue >= 200) {
        return true
    } else return false

})

console.log(newCompanies)
// EMPRESAS FUNDADAS DEPOIS DE 1975 E 
