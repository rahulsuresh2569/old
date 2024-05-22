// arr=['hello','world','search','good']

// function checkForSearch (array) {
//   for (let i=0; i < array.length ; i++) {
//     if (array[i]==='search') {
//       console.log(i)
//       break;
//     } else {
//       console.log(-1)
//     }

//   }
// }
// checkForSearch(arr)
// checkForSearch(['hello','world','search','good','search'])

//SSSSSSS

// function findIndex(array,word) {
//   let temp = -1 ;
//   for (let i=0; i < array.length; i++) {
//     if (array[i] === word) {
//       temp = i;
//       return temp
//     } 
//   }
//   return temp

// }

// console.log(findIndex(['green','red','blue','red'],'red'))
// console.log(findIndex(['green','red','blue','red'],'yellow'))

// function removeEgg(foods) {
//   let foodsArray = foods.slice().reverse()
//   console.log(foodsArray)
//   newFoods = []
//   let temp = 0
//   for (let i=0 ; i<foodsArray.length; i++) {
//     if (foods[i] === 'egg' && temp!==2) {
//       temp++
//       continue
//     } else {
//       newFoods.push(foodsArray[i])
//     }
//   }
//   newFoods = newFoods.reverse()
//   console.log(newFoods)
// }
// removeEgg(['egg','apple','egg','egg','ham'])
// removeEgg(['egg','egg','apple','egg','egg','ham'])


for (let i=0; i<=20; i++) {
  if (i%3===0 && i%5===0) {
    console.log('FizzBuzz')
  } else if (i%3===0) {
    console.log('Fizz')
  } else if (i%5===0) {
    console.log('Buzz')
  } else {
    console.log(i)
  }
}

function findIndex(array,word) {
  let temp = -1 ;
  for (let i=0; i < array.length; i++) {
    if (array[i] === word) {
      temp = i;
      return temp
    } 
  }
  return temp

}
console.log(findIndex(['green','red','blue','red'],'red'))


function unique(array) {
  let finalArray = []
  for (let i=0 ; i<array.length; i++){
    const word = array[i]

    if (findIndex(finalArray,word)===-1) {
      finalArray.push(word)
    }
  } 
  return finalArray
}

console.log(unique(['green','red','blue','red','blue','orange']))