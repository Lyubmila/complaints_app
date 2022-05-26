console.log("hello")



// function borough () {
 let brooklyn = document.querySelector('#brooklyn')
 let manhattan = document.querySelector('#manhattan')
 let queens = document.querySelector('#queens')
 let bronx = document.querySelector('#bronx')
 let staten_island = document.querySelector('#staten_island')

// }


let limit = 10

fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit='+ limit)
.then(response => response.json())
.then(users => console.log(users)) 
.catch(err => console.log(err))  

// localStorage.setItem('user', 'id56789')

// //reading a value from local storage
// const value = localStorage.getItem('user')
// console.log(value);

//brooklyn.addEventListener('click', )