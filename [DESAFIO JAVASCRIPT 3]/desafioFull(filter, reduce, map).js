
const list = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000];

const companies = [

    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', founedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', founedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', founedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', founedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', founedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', founedOn: 1976 },

];

const add10PercentMarketValue = company => {

    company.marketValue = company.marketValue + company.marketValue * 0.10

    return company
}

const oldCompanies = company => {
    if(company.founedOn < 2000){
        return true
    } else return false
}

const totalMarketValueOldCompanies = (acc, current) => acc + current.marketValue

const myBestCompanies = companies
    .map(add10PercentMarketValue)
    .filter(oldCompanies)
    .reduce(totalMarketValueOldCompanies,0)

console.log(myBestCompanies)