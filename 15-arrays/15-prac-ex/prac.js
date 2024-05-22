// const num = [10,20,30]
// num[num.length-1] = 55
// console.log(num)

// function getLastValue(array) {
//   return array[array.length-1]
// }
// console.log(getLastValue([1,20,22,24,5]))
// console.log(getLastValue(['hi','hello','good']))

// function arraySwap(array) {
//   let newArray = array
//   const firstElement = array[0]
//   const lastElement = array[array.length-1]
//   newArray[0] = lastElement
//   newArray[newArray.length-1]=firstElement
//   return newArray  
// }
// console.log(arraySwap([1,20,22,24,5]))

// for (let i=0; i<=10; i+=2) {
//   console.log(i)
// }

// for (let i=5; i>=0; i--) {
//   console.log(i)
// }

// i=0
// while (i<=10) {
//   console.log(i)
//   i+=2
// }
// i=5
// while (i>=0) {
//   console.log(i)
//   i--
// }

// function incrementByOne(array) {
//   let newArray=[]
//   for (let i =0; i<array.length; i++) {
//     newArray[i] = array[i]+1
//   }
//   return newArray
// }
// console.log(incrementByOne([1,2,3]))
// console.log(incrementByOne([-2,-1,0,99]))

// function incrementByGivenNum (array,num) {
//   let newArray = []
//   for (let i=0; i<array.length; i++) {
//     newArray[i] = array[i]+num
//   }
//   return newArray
// }
// console.log(incrementByGivenNum([1,2,3],2))
// console.log(incrementByGivenNum([1,2,3],3))
// console.log(incrementByGivenNum([-2,-1,0,99],2))

// function addArrays(array1,array2) {
//   let newArray = []
//   for (let i=0; i<array1.length; i++) {
//     newArray[i] = array1[i] + array2[i]
//   }
//   return newArray
// }
// console.log(addArrays([1,1,2],[1,1,3]))
// console.log(addArrays([1,2,3],[4,5,6]))

// function countPositive(nums) {
//   let count=0
//   for (let i=0; i<nums.length; i++) {
//     if (nums[i]>0) {
//       count ++
//     }
//   }
//   return count
// }
// console.log(countPositive([1,-3,5]))
// console.log(countPositive([-2,3,-5,7,10]))


//CHALLENGE EXERCISE

function minMax(nums) {
  if (nums.length<=1) {
    console.log("error")
    return
  }
  let obj = {
    min:nums[0],
    max:nums[0]
  };
  for (let i=0; i<nums.length; i++) {
    if(nums[i]<= obj.min) {
      obj.min=nums[i]
    }

    if (nums[i]>=obj.max) {
      obj.max=nums[i]
    }
  }
  console.log(obj)
}
minMax([1,-3,5])
minMax([-2,3,-5,7,10])
minMax([])
minMax([3])


function countWords(words) {
  let obj = {};
  let word=''
  for (let i=0; i<words.length; i++){

    word=words[i]
    for (let j=0; j<obj.length; j++) {
      if (word===obj[j]) {
        obj.word+=1
      } else {
        obj[j]=word;
        obj.word+=1;
      }
    }
  }
  console.log(obj)  
}
countWords(['apple','grape','apple','apple'])