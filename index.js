function writeCards(arr1, evnt){
  let arr2 = []
  for (let i=0; i < arr1.length; i++){
    arr2.push(`Thank you, ${arr1[i]}, for the wonderful ${evnt} gift!`)
  }
  return arr2
}
writeCards(['Lisa', 'Kaitlin', 'Jan'], 'birthday') 

// function countDown() {
//   while (countdown > 10) {
//     countdown--
//   }
// }

function countDown(num) {
  let i = num
  while (i >= 0) {
    console.log(i)
    i--
    debugger;
  }
}

countDown(10)


