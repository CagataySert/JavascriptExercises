const myString = ("Intergalactic");

function isRepeateed(myString) {
    const stringArray = myString.split("");
    let arrayElements = [];
    let repeatedValues = [];
    let characterAndIndex = {};

    for (let i = 0; i < stringArray.length; i++) {
        arrayElements.includes(stringArray[i]) ? repeatedValues.push(stringArray[i]) : arrayElements.push(stringArray[i]);
    }

    for (let j = 0; j < repeatedValues.length; j++) {
        if (j === 0) {
            characterAndIndex.char = repeatedValues[j];
            characterAndIndex.index = myString.indexOf(repeatedValues[j]);
        }
        if (myString.indexOf(repeatedValues[j]) < characterAndIndex.index) {
            characterAndIndex.char = repeatedValues[j];
            characterAndIndex.index = myString.indexOf(repeatedValues[j]);
        }
    }
    console.log(characterAndIndex.char);
    return characterAndIndex.char;
}
isRepeateed(myString);