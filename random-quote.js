const randomQuote = [
    {
        id: 11,
        text: "God save me from my friends. I can protect myself from my enemies.",
        qouter: "Claude Louis Hector De Villars"
    },
    {
        id: 12,
        text: "Life is too short and sweet to be spent by cribbing and complaining about things.",
        qouter: "Zose Nilson"
    },
    {
        id: 13,
        text: "he price of anything is the amount of life you exchange for it.",
        qouter: "David Thoreau"
    },
    {
        id: 14,
        text: "Here are some random quotes about the most wonderful gift that we've got.",
        qouter: "Maltia Toteri"
    },
    {
        id: 15,
        text: "Humor is richly rewarding to the person who employs it.",
        qouter: "Marker Bolio"
    },
    {
        id: 16,
        text: "It has some value in gaining and holding attention.",
        qouter: "Milka Munis"
    },
    {
        id: 11,
        text: "God save me from my friends. I can protect myself from my enemies.",
        qouter: "Claude Louis Hector De Villars"
    },
    {
        id: 12,
        text: "Life is too short and sweet to be spent by cribbing and complaining about things.",
        qouter: "Zose Nilson"
    },
    {
        id: 13,
        text: "he price of anything is the amount of life you exchange for it.",
        qouter: "David Thoreau"
    },
    {
        id: 14,
        text: "Here are some random quotes about the most wonderful gift that we've got.",
        qouter: "Maltia Toteri"
    },
    {
        id: 15,
        text: "Humor is richly rewarding to the person who employs it.",
        qouter: "Marker Bolio"
    },
    {
        id: 16,
        text: "It has some value in gaining and holding attention.",
        qouter: "Milka Munis"
    },
]



const button = document.querySelector('.button');
const qouteContent = document.querySelector('.qoute-content');
const questioner = document.querySelector('.questioner');


button.addEventListener('click', () => {
    let number = Math.floor(Math.random() * randomQuote.length)

    qouteContent.textContent = `${randomQuote[number].text}`
    questioner.textContent = randomQuote[number].qouter

})

