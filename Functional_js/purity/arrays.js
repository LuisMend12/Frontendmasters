
// instead of myArray.push(element)
export function push(element, array) {
    // TODO return a new array with the new element at the end
		// return array.concat([element]);
		return [...array, element]
}


// instead of myArray[index] = value
export function update(index, value, array) {
    // TODO return a new copy of the array with the given value at index
		// return array.map((item, i) => i === index ? value : item);
    const itemsBefore  = array.slice(0, index);
    const itemsAfter = array.slice(index + 1);
    return [...itemsBefore, value, ...itemsAfter]
}

// instead of myArray.pop();
export function pop(array) {
    // TODO return a new array with the last old element removed
		return array.slice(0, -1)
}