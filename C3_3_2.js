// C3.3. Практическое задание 2

function haveProperty(str, obj) {
    if (obj.hasOwnProperty(str)) {
        return true; 
    }
    return false;
}

const parentObject = {
    parent : "I'm parent object"
}

const childObject = Object.create(parentObject);

childObject.child = "I'm child object";
childObject.myOwnProperty = "It's a child only property";

console.log(haveProperty('parent', childObject));
console.log(haveProperty('child', childObject));
console.log(haveProperty('child', parentObject));
console.log(haveProperty('parent', parentObject));
