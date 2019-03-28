function multipleOf4And7(myNumberArray) {
    let manipulatedArray = [];
    for (let i = 0; i < myNumberArray.length; i++) {
        if (myNumberArray[i] % 4 === 0 && myNumberArray[i] % 7 === 0) {
            manipulatedArray.push("fs");
            continue;
        }
        else if (myNumberArray[i] % 4 === 0) {
            manipulatedArray.push("f");
            continue;
        }
        else if (myNumberArray[i] % 7 === 0) {
            manipulatedArray.push("s");
            continue;
        }
        else {
            manipulatedArray.push(myNumberArray[i]);
        }
    }
    console.log("çalıştı");
    console.log(manipulatedArray);
    return manipulatedArray;
}

multipleOf4And7([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 28]);