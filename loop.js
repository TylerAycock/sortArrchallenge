
// const sorter = arr => {
//     let newArr= []
//     for(let i = 0; i<arr.length; i++){
//         newArr.push(arr[i]*(i+1))
//     }
//     return(newArr.sort(function(a, b){return a - b}))
// }


//when you push items to obj it will auto sort  them by numerical value 
const sorter = arr =>{
   let obj = {}
   let sorted = []
   for(let i = 0; i<arr.length; i++){
    let multiplier = i+1

    obj[arr[i]*multiplier] = arr[i]
   }
   for(let product in obj){
    sorted.push(obj[product])
   }
   return sorted
}

console.log(sorter([23, 2, 3, 4, 5]))