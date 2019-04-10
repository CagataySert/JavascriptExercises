const getMinimumArr = (nonUniqueArray) => {
    let uniqueValues = [];
    let repeatedValues = [];
    let sortedUniqueArray = [];

    for (let i = 0; i < nonUniqueArray.length; i++) {
        if (i == 0) {
            uniqueValues.push(nonUniqueArray[i]);
            continue;
        }

        uniqueValues.includes(nonUniqueArray[i])
            ? repeatedValues.push(nonUniqueArray[i])
            : uniqueValues.push(nonUniqueArray[i]);
    }

    const minValue = Math.min(...repeatedValues);

    uniqueValues.push(minValue + 1);

    sortedUniqueArray = uniqueValues.sort((a, b) => a - b);

    console.log(sortedUniqueArray);
}

getMinimumArr([1, 2, 4, 4, 2, 5, 6, 8]);
