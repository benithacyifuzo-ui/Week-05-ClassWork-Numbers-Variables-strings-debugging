//Project1
const fullName = " aline UWASE ";

// 1. Trimmed name
const trimmedName = fullName.trim();
console.log(`1. Trimmed name: "${trimmedName}"`);

// 2. Properly capitalized
const words = trimmedName.split(" ");
const capitalizedWords = words.map(word => {
    return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
});
const capitalizedName = capitalizedWords.join(" ");
console.log(`2. Properly capitalized: "${capitalizedName}"`);

// 3. Initials
const initials = capitalizedWords.map(word => word.slice(0, 1) + ".").join("");
console.log(`3. Initials: "${initials}"`);

// 4. Username
const username = trimmedName.replace(" ", ".").toLowerCase();
// Alternative using split/join: const username = trimmedName.split(" ").join(".").toLowerCase();
console.log(`4. Username: "${username}"`);

// 5. Number of letters
const letterCount = trimmedName.replace(/\s+/g, "").length;
// Alternative for beginners: const letterCount = trimmedName.split(" ").join("").length;
console.log(`5. Number of letters: ${letterCount}`);





let name = "Alli";

function globalscope() {
    console.log(name);
}

globalscope();

// Local scope
function localscope() {
    let name = "Anie";
    console.log(name);
}

localscope

//block scope
if (true) {
    let blocklet = "I am trapped in this block";
    var leakedvar = "I can escape!";
    console.log(blocklet);
}

console.log(leakedvar); 

// tdz (temporal dead zone)

const quote = "She said \"Muraho\"";   //  inside double quotes
console.log(quote);
const path = "C:\\coding\\week05";    // \\ for a backslash
console.log(path);
const twoLines = "benitha\nCYIFUZO";
console.log(twoLines);


//capitalisation

const foo = 42;
const result = foo + "1";
console.log(result);

let x = 5;
let y = "5";
console.log(x === y);


let city ="kigali"; 
city = city.toLowerCase();
console.log(city);
console.log(city.length);


//



