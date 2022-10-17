// function change(duration){
//     // alert("hello");
//     var option = document.querySelector(`.${duration}`);
//     option.style.color = "#FFFFFF";
//     removeChange(option);
// }

let data = [
  {
    title: 'Work',
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: 'Play',
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: 'Study',
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: 'Exercise',
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: 'Social',
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: 'Self Care',
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
]

var links = document.querySelectorAll('.first-bottom span')
let active = 1
links[active].classList.add('active-link')

// let title = document.querySelectorAll('.type-work')
let current = document.querySelectorAll('.current')
let previous = document.querySelectorAll('.stats')

links.forEach((link, index) => {
  link.addEventListener('click', () => {
    links.forEach((li) => {
      li.classList.remove('active-link')
      if (link.innerText === li.innerText) {
        li.classList.add('active-link')
        data.forEach((d, ind) => {
          current[ind].innerText = `${
            Object.values(d.timeframes)[index].current
          }hrs`
          previous[ind].innerText = `Last Week - ${
            Object.values(d.timeframes)[index].previous
          }Hrs`
        })
      }
    })
  })
})
