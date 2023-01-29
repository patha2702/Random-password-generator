const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
        "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
        "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
        "/"];

const pass1El = document.querySelector("#pass1-el")
const pass2El = document.querySelector("#pass2-el")

function generatePassword(){
    let password = ""
    let passLength = 15

    for (let i=0; i<passLength; i++){
        let randomIndex = Math.floor(Math.random() * characters.length)
        let randomChar = characters[randomIndex]
        password += randomChar
    }
    return password
}

function displayPassword(element, password){
    element.textContent = password
}

function updatePassword(){
    let pass1 = generatePassword()
    let pass2 = generatePassword()

    displayPassword(pass1El, pass1)
    displayPassword(pass2El, pass2)

}