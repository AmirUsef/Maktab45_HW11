function merge(firstName, lastname) {
    return `${firstName} ${lastname}`
}

function mergeNames(firstName, lastName, func) {
    console.log(merge(firstName, lastName));
}

const NAME = "Ali";
const LAST_NAME = "Ahmadi";

mergeNames(NAME, LAST_NAME, merge);