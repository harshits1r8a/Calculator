const display = document.getElementById('display')
const input = document.querySelectorAll('.input')
const inputArr = Array.from(input)
console.log(inputArr);

inputArr.forEach((elm)=>{
    elm.addEventListener('click',(e)=>{
        // console.log(typeof(display.innerText));
        try{
            if(e.target.innerText === '='){
                let result = eval(display.innerText)
                display.innerText = result
            }
            else if(e.target.innerText === 'AC'){
                display.innerText = ''
            }
            else if(e.target.innerText === 'DEL'){
                display.innerText = display.innerText.slice(0,-1)
            }
            else{
                display.innerText += elm.innerText
            }
        }catch(err){
            display.innerText = 'Error'
        }
    })
})
