// function bankRobbery() {
//     const heroes = ['batman', 'robin', 'wolverine', 'ivan-durak'];
//     function cryForHelp() {
//         function inner() {
//             for (let hero of heroes) {
//                 console.log(`Please, help us ${hero.toUpperCase()}`)
//             }
//         }
//         inner();
//     }
//     cryForHelp();
// }

// function callTwice(func) {
//     func();
//     func();
// }
// function callTenTimes(f) {
// //     for (let i = 0; i < 10; i++) {
// //         f();
// //     }
// // }
// // function rollDie() {
// //     const roll = Math.floor(Math.random() * 10) + 1
// //     console.log(roll)
// // }


// // callTenTimes(rollDie)
// // callTwice(rollDie)

// // function makeBetweenFunc(min, max) {
// //     return function (num) {
// //         return num >= min && num <= max;
// //     }
// // }
// // const isAdult = makeBetweenFunc(19, 64)
// // const isChild = makeBetweenFunc(0, 18)
// // const isSenior = makeBetweenFunc(65, 120)

// const myMath = {
//     PI: 3.1415926,
//     square(num) {
//         return num * num;
//     },
//     cube(num) {
//         return num ** 3
//     }
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const doubles = numbers.map(function (num) {
//     return num * 2;
// })

// // numbers.forEach(function (el) {
// //     if (el % 2 === 0) { //even number
// //         console.log(el)
// //     }
// // })
// // for (let el of numbers) {
// //     console.log(el);
// // } // for (for x of y) = .forEach

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99
//     },
//     {
//         title: 'Beethoven',
//         score: 89
//     },
//     {
//         title: 'Shark',
//         score: 80
//     },
//     {
//         title: 'Smart Dog',
//         score: 92
//     },
//     {
//         title: 'Silly Cat',
//         score: 81
//     }
// ]
// // movies.forEach(function (movie) {
// //     console.log(`${movie.title} - ${movie.score}/100`)
// // })

// // for (let movie of movies) {
// //     console.log(`${movie.title} - ${movie.score}/100`);
// // }

// const titles = movies.map(function (movie) {
//     return movie.title.toUpperCase();
// })

// const newMovies = movies.map(movie => (
//     `${movie.title} - ${movie.score / 10}`
// ))  // implicit return

const add = (x, y) => {
    return x + y;
}

const square = x => {
    return x ** 2; // () for x are optional
}

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1;
// }

const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
) // get off of word 'return' and change {} for ()