
const multiply = (a,b) => a*b
console.log(multiply(2,3))
console.log(multiply(7,10))

const countPositive = (array) => {
  let count = 0
  array.forEach(value => {
    if (value>0) {
      count++
    } 
  } )
  console.log(count)
}
countPositive([1,-3,5])
countPositive([-2,3,-5,7,10])

const addNum = (array,num) => array.map(value => value + num)
console.log(addNum([1,2,3],2))

const removeEgg = foods => foods.filter(value => value!='egg')
console.log(removeEgg(['egg','apple','egg','egg','ham']))

const removeEgg2 = foods => {
  let eggCount = 0 
  return foods.filter((value) => {
    if (value==='egg' && eggCount<2){
      eggCount++
      return false
    }
    return true
  })
}
console.log(removeEgg2(['egg','apple','egg','egg','ham']))
