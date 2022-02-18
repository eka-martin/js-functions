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

const goodMovies = movies.filter(m => m.score > 80)
const badMovies = movies.filter(m => m.score < 70)
const recentMovies = movies.filter(m => m.year > 2000)
const goodTitles = movies.filter(m => m.score > 80).map(m => m.title)
// const goodTitles = movies.
// filter(m => m.score > 80).
// map(m => m.title)              // way of writing

