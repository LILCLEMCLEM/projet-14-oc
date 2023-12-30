let D = new Date();

const day =[
  "lu",
  "mar",
  "mer",
  "jeu",
  "ven",
  "sam",
  "dim"
]

console.log(D.getDay())
let firstDay = new Date(D.getFullYear(), D.getMonth(), 1);
let lastDay = new Date(D.getFullYear(), D.getMonth() + 1, 0);

let lastMonth = new Date(D.getFullYear(), D.getMonth(), 0)
console.log(lastMonth)

console.log(firstDay , lastDay)
let index = firstDay.getDay()


for(let i = 1; i <= lastDay.getDate(); i++) {
  if (index > 7) index = 1
  console.log(day[index - 1] , i);
  
  index++
}