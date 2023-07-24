export const TURNS = {
  red: 'red',
  yellow: 'yellow'
}

const DIAGONAL_COMBO = (array, start, step) => {
  let miniArray = []
  let cont = 0
  for (let i = start; i < array.length/2+3; i++) {
    let arrayTest = [i, i+step, i+(step*2), i+(step*3)]
    if (arrayTest.length === 4 && arrayTest[arrayTest.length-1] < 49) {
      miniArray.push(arrayTest)
      cont++
      if (cont === 4) {
        i = i+3
        cont = 0
      }
    }
  }
  return miniArray
}

const WINNER_COMBOS_FUNCTION = (array) => {
  let newArray = []
  for (let i = 0; i < array.length; i = i+7) {
    newArray.push([i, i+1, i+2, i+3])
    newArray.push([i+1, i+2, i+3, i+4])
    newArray.push([i+2, i+3, i+4, i+5])
    newArray.push([i+3, i+4, i+5, i+6])
  }
  for (let i = 0; i < 7; i++) {
    newArray.push([i, i+7, i+14, i+21])
    newArray.push([i+7, i+14, i+21, i+28])
    newArray.push([i+14, i+21, i+28, i+35])
    newArray.push([i+21, i+28, i+35, i+42])
  }
  return newArray.concat(DIAGONAL_COMBO(array, 0, 8)).concat(DIAGONAL_COMBO(array, 3, 6))
}

export const WINNER_COMBOS = WINNER_COMBOS_FUNCTION([...Array(49).keys()])
