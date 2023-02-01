const balls = document.getElementsByClassName('ball');
console.log(balls[0])

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

for (let i = 0; i< 2; i++) {
  balls[i].style.left = x;
  balls[i].style.top = y;
  balls[i].transform = `translate(${x},${y})`
  }
}

//   loops! accomplishing the following code in a much more effecient and clean manner. 
 
//   balls[0].style.left = x;
//   balls[0].style.top = y;
//   balls[0].transform = `translate(${x},${y})`

//   balls[1].style.left = x;
//   balls[1].style.top = y;
//   balls[1].transform = `translate(${x},${y})`

// }







