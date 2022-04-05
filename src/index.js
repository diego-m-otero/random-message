const messages = [
    "Diego",
    "Caroline",
    "Paulina",
    "Mauricio",
    "Carlos",
    "Ana",
    "Nicolay",
    "Yessica"
]

const randomMsg = () => { 
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(message)
}

module.exports = { randomMsg }