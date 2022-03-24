function forEach(arr, callback) {

  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr)
  }
  // for (let item of arr) {
  //   callback(item)
  // }
}

function map(arr, callback) {
  const newArr = [];
  for (item of arr) {
    newArr.push(callback(item))
  }
  return newArr
}

function filter(arr, callback) {
  const newArr = []
  for (item of arr) {
    if (callback(item) === true) {
      newArr.push(item)
    }
  }
  return newArr
}

function every(arr, callback) {
  for (item of arr) {
    if (callback(item) === false) {
      return false
    }
  }
  return true
}

function some(arr, callback) {
  for (item of arr) {
    if (callback(item) === true) {
      return true
    }
  }
  return false
}

function majority(arr, callback) {
  const maj = Math.floor((arr.length / 2) + 1)
  const newArr = []
  for (item of arr) {
    if (callback(item) === true) {
      newArr.push(item)
    }
  }
  // console.log(newArr)
  // console.log(maj)
  if (newArr.length >= maj) {
    // console.log(newArr.length)
    return true
  } else {
    // console.log(newArr.length >= maj)
    return false
  }
}

// let functionCounter = 0

function once(callback) {
  let isCalled = false
  let value;
  return function (args) {
    if (isCalled) return value
    isCalled = true
    value = callback(args)
    return value
  }
}

function groupBy(arr, callback) {
  const obj = {}
  for (item of arr) {
    let key = callback(item)
    if (obj[key]) { // if object key exists
      obj[key].push(item) // push item into array
    } else { // else if key does not exist
      obj[key] = [item] // create key with array of item
    }
    // console.log(obj)
  }
  return obj

}

// const obj = {}
// let newArr = []
// for (item of arr) {
//   let key = callback(item)
//   if (key === callback(item)) {

//     console.log("Key: ", key, "Item: ", item)
//     console.log({ [key]: item })
//     newArr.push(item)
//     obj[key] = newArr
//     console.log(obj, newArr);
//   }
// }
// return obj
// }

// const input = [4.2, 6.1, 6.3];
// groupBy(input, (el) => Math.floor(el));


function arrayToObject(arr, callback) {
  let obj = {}
  for (item of arr) {
    obj[item] = callback(item)
  }
  return obj

}

module.exports = {
  forEach,
  map,
  filter,
  every,
  some,
  majority,
  once,
  groupBy,
  arrayToObject,
};
