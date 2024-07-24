const userText = document.getElementById('input_text')
const characters = document.getElementById('char')
const words = document.getElementById('words')

userText.addEventListener('input', function(){
    characters.innerHTML = userText.value.length + ' characters';
    words.innerHTML = userText.value.trim().split(' ').length + ' words'
})

