const sortByNum = (arr, ori, col) => {
  if (ori === 'DESC') {
    const sortedArr = arr.sort((a, b) => {
      return b[col] - a[col]
    })
    return sortedArr
  } else {
    const sortedArr = arr.sort((a, b) => {
      return a[col] - b[col]
    })
    return sortedArr
  }
}

const sortByString = (arr, ori, col) => {
  if (ori === 'DESC') {
    const sortedArr = arr.sort((a, b) => {
      if (a[col] > b[col]) {
        return -1
      } else if (a[col] < b[col]) {
        return 1
      } else return 0
    })
    return sortedArr
  } else {
    const sortedArr = arr.sort((a, b) => {
      if (a[col] < b[col]) {
        return -1
      } else if (a[col] > b[col]) {
        return 1
      } else return 0
    })
    return sortedArr
  }
}

export {
  sortByNum,
  sortByString
}
