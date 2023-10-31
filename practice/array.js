let movies=["bahubhali","puspha","robo","kantara"];
let emovies=["intersteller","kingkong","the universe","skull","zombiees"];
let NewMovies=movies.concat(emovies);
let NewMovies_1=[...movies,...emovies];
console.log(NewMovies);
console.log(NewMovies_1);
let array=[1,2,3,4,[3,4,5],[6,7,8,9],[10,11,2,34],5,6,7,[2,3,4,5,6]];
let newarry=array.flat(4);
console.log(newarry);