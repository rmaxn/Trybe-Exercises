const wakeUp = () => {
  console.log('Acordando!!')
}

const breakFast = () => {
  console.log('Bora Tomar Café!!')
}

const sleep = () => {
  console.log('Partiu dormir!!')
}

const doingThings = (função) => {
  console.log(função(''))
}

doingThings(wakeUp)
doingThings(breakFast)
doingThings(sleep)