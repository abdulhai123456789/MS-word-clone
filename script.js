const boldBtn= document.querySelector('#bold-btn')
const italicBtn= document.querySelector('#italic-btn')
const underlineBtn= document.querySelector('#underline-btn')
const colourBtn= document.querySelector('#colour-btn')

boldBtn.addEventListener('click', ()=>{
    document.execCommand("bold")
})
italicBtn.addEventListener('click', ()=>{
    document.execCommand("italic")
})
underlineBtn.addEventListener('click', ()=>{
    document.execCommand("underline")
})
colourBtn.addEventListener('input ', ()=>{
    document.execCommand("forecolor",false,colourBtn.value )
})