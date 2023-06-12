// C3.3. Практическое задание 3

function createEmptyObject () {
    return Object.create(null);
}

console.log(Object.getPrototypeOf(createEmptyObject()));
