
const _ = {

// Sets a number to min/max
  clamp(number, lower, upper) {
  let lowerClampedValue = Math.max(number, lower)
  let clampedValue = Math.min(lowerClampedValue, upper)
  return clampedValue
},

//Checks if a number is within the specified range
  inRange(number, startValue, endValue) {
    if (endValue === undefined) {
      endValue = startValue
      startValue = 0
    }
    if (startValue > endValue) {
      const temp = startValue
      startValue = endValue
      endValue = temp
    }
    const isInRange = ((number >= startValue) && (number <= endValue))
    return isInRange
  },

//Split a string into an array of words
  words(string) {
    const words = string.split(' ')
    return words
  },

//Add padding to beginning and end of string
  pad(string, length) {
    if (length <= string.length) {
      return string
    }
    const paddingToAdd = (length - string.length)
    const paddingToStart = Math.floor(paddingToAdd/2)
    const paddingToEnd = (paddingToAdd - paddingToStart)
    const paddedString = (' '.repeat(paddingToStart)) + string + (' '.repeat(paddingToEnd))
    return paddedString
  },

//Checks if the object contains a value at the specified key
  has(object, key) {
    hasValue = object.hasOwnProperty(key)
    return hasValue
  },

//Creates an object composed of the inverted keys and values of object
  invert(object) {
    let invertedObject = {}
      for (let key in object) {
      let originalValue = object[key]
      invertedObject[originalValue] = key
    }
    return invertedObject
  },

//Finds the first key of a specific value
  findKey(object, predicate) {
      for (let key in object) {
      let value = object[key]
      let predicateReturnValue = predicate(value)
      if (predicateReturnValue) {
        return key
      }
    }
    return undefined
  },

//Creates new array with specified number of elements dropped from the beginning of array
  drop(array, number) {
    if (number === undefined ) {
      number = 1
    }
    let droppedArray = array.slice(number)
    return droppedArray
  },

//Creates copy of the supplied array, dropping elements until specific element found
  dropWhile(array, predicate) {
    const dropNumber = array.findIndex( (element, index) => {
    return !predicate(element, index, array)
    })
    const droppedArray = this.drop(array, dropNumber)
    return droppedArray
  },

//Breaks up an array into arrays of specified size
  chunk(array, size) {
    if (size === undefined) {
      let size = 1
    }
    const arrayChunks = []
    for (let i = 0; i < array.length; i += size) {
      const arrayChunk = array.slice(i, i+size)
      arrayChunks.push(arrayChunk)
    }
    return arrayChunks
  }

}




// Do not write or modify code below this line.
module.exports = _;
