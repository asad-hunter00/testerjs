// navigator.geolocation.getCurrentPosition((position) => {
//     console.log(position.coords.latitude);
//     console.log(position.coords.longitude);

// });

// try {
//     const a = 30;
//     a = x - 10;
//     throw

// } catch (error) {
//     console.log(error);

// } finally {
//     console.log(
//         end
//     );

// }

// try {
//   let son = 10;
//   let natija = son / 2;
//   console.log("Natija:", natija);
// } catch (error) {
//   console.log("Xatoga duch keldi:", error.message);
// }


function count(n) {
  if(n === 1) {
    return 1;
  }

  return n * count(n - 1)

}

console.log(count(5));




  
// }

// console.log(faktorial(5));

function salom(){
  console.log("salom");
  
}

function bajar(func) {
  func()
}

bajar(salom);

function creator() {
  return function() {
    console.log("hello");
    
  }
}

let result = creator()

result();