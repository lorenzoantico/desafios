let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let passwordLength = 12;
let password = "";

function generatePassword(){
    let password = "";
    for (let i = 0; i <= passwordLength; i++){
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
    }
    return password;
}

console.log(generatePassword());



