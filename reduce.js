const prices = [1.99, 5.99, 25.50, 14.50, 3.29]
// let total = 0;
// for (let price of prices) {
//     total += price
// }
// console.log(total)


// const total = prices.reduce((total, price) => {
//     return total + price
// })

const total = prices.reduce((total, price) => total + price)
// single-liner

const minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min;
})

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1999
    },
    {
        title: 'Beethoven',
        score: 89,
        year: 1989
    },
    {
        title: 'Shark',
        score: 80,
        year: 2002
    },
    {
        title: 'Smart Dog',
        score: 92,
        year: 2015
    },
    {
        title: 'Silly Cat',
        score: 69,
        year: 2001
    },
    {
        title: 'Big Momma',
        score: 56,
        year: 1995
    },
    {
        title: 'My family',
        score: 60,
        year: 1998
    },
]

const best = movies.reduce((bestMovie, currMovie) => {
    if (currMovie.score > bestMovie.score) {
        return currMovie;
    } return bestMovie;
})

const evens = [2, 4, 6, 8];
evens.reduce((sum, num) => sum + num, 100) // (sum, num) => sum + num - first argument; 100 - second argument

