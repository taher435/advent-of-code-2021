export const navigate = (directions: Array<string>) => {
  let xPoint = 0
  let depth = 0
  for (let i = 0; i < directions.length; i++) {
    const [direction, value] = directions[i].split(' ')
    const nValue = Number(value)
    switch (direction) {
      case 'forward':
        xPoint += nValue
        break
      case 'down':
        depth += nValue
        break
      case 'up':
        depth -= nValue
        break
    }
  }

  return xPoint * depth
}

export const navigateWithAim = (directions: Array<string>) => {
  let xPoint = 0
  let depth = 0
  let aim = 0
  for (let i = 0; i < directions.length; i++) {
    const [direction, value] = directions[i].split(' ')
    const nValue = Number(value)
    switch (direction) {
      case 'forward':
        xPoint += nValue
        depth += aim * nValue
        break
      case 'down':
        aim += nValue
        break
      case 'up':
        aim -= nValue
        break
    }
  }

  return xPoint * depth
}
