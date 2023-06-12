// C3.3. Практическое задание 1

function showOwnKeys(obj) {
    for (let key in obj) {
         if (obj.hasOwnProperty(key)) {
             console.log(`${key} - ${obj[key]}`); 
         }   
     }
 }

 const parentObject = {
    parent : "I'm parent object"
}

const childObject = Object.create(parentObject);

childObject.child = "I'm child object";
childObject.myOwnProperty = "It's a child only property";

showOwnKeys(childObject);
