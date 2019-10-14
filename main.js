//Part One
function idAndUrl(idString, urlString){
    const foundId = document.querySelector(idString)
    foundId.src = urlString
}

idAndUrl('#image-1', 'https://media0.giphy.com/media/aFTt8wvDtqKCQ/giphy.gif?cid=790b761143c4557ff452c2a8424a621a152f25afa523222a&rid=giphy.gif')
idAndUrl('#image-2', 'https://media1.giphy.com/media/10we3R8dLZQ7hS/giphy.gif?cid=790b7611bdf3c67eaebcceff6105250b370774de265ec64c&rid=giphy.gif')
idAndUrl('#image-3', 'https://media2.giphy.com/media/5JEWBLv0mZDYA/giphy.gif?cid=790b7611aa76d9ada720ea5bf961b8127171a53dced7259a&rid=giphy.gif')

function lineThroughLi(){
    const liElement = document.querySelector('ul>li:nth-child(1)')
    liElement.style.textDecoration = 'line-through'
}

lineThroughLi()

function removesLastLi(){
    const unorderedList = document.querySelector('ul')
    const lastLi = document.querySelector('li:last-child')
    unorderedList.removeChild(lastLi)
}

removesLastLi()
removesLastLi()

//Part Two
function addsToUl(element){
    const newElement = document.createElement(element)
    const foundUl = document.querySelector('#arguments')
    foundUl.appendChild(newElement)
}

addsToUl('img')

function fixedHeight(){
    const foundImage = document.querySelector('img')
    foundImage.style.height = '30px'
}

fixedHeight('#image-1')

function invisibilityPotion(element){
    const newElement = document.querySelector(element)
    newElement.className = 'invisible'
}

invisibilityPotion('#thing-c')

function sizeAndId(size, id){
    const newId = document.querySelector(id)
    newId.style.fontSize = size
}

sizeAndId('100px', '#thing-2')

//Part Three
function addsTextLi(text){
    const newLi = document.createElement('li')
    newLi.innerText = text
    return newLi
}

//Doesn't work with addsToUl function
const newestLi= addsTextLi('hello')
document.querySelector('ul').appendChild(newestLi)

function newHeader(headerSize, someText){
    const newHeader = document.createElement('h'+headerSize)
    newHeader.innerText = someText
    return newHeader
}

//Doesn't work with addsToUl function
const unorderedList = document.querySelector('ul')
const newestHeader = newHeader('6', 'Hellloooooo')
unorderedList.appendChild(newestHeader)