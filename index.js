const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//const titleCased = () => {
  //return tutorials
//}

// const titleCased = array =>
// {
//   array = array.map(element => 

//     element.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')
//   )
//   return array;
// }

//const titleCased = () => {
  //array = array.map(element =>element.split 
  //  )
//}

// const titleCased = function (){
//   return tutorials.map((title) => {
//     return title.split('').map((word) => {
//       return (word.charAt(0).toUpperCase() + word.slice(1));
//     }).join('');
//   });
// }
//console.log(titleCased(tutorials));

// const titleCased=function (arrayString){
//   let mapArray=arrayString.map(function (sentence){
//   let splitWord=sentence.split(" ")
//   let titleWord=splitWord.map(word=>word[0].toUpperCase()+word.substring(1))
//   let joinWord=titleWord.join(" ")
//   return joinWord;
//   })
//   return mapArray;
// }
// console.log(titleCased(tutorials))

const titleCased = () => {
  tutorials.map(function (element) {
    const words = element.split(" ");
    words.map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    }).join(" ");
  })
}
console.log(titleCased(tutorials));