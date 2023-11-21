const display = document.getElementById('display')
const input = document.querySelectorAll('.input')
const exp = document.querySelector('.exp')
const res = document.querySelector('.res')
let errMessage;
// console.log(input);
const inputArr = Array.from(input)
// console.log(inputArr);

inputArr.forEach((elm) => {
    elm.addEventListener('click', (e) => {
        // console.log(typeof(display.innerText));
        try {
            if (e.target.innerText === '=') {
                let result = eval(exp.innerText)
                setTimeout(() => {
                    res.innerText = result
                }, 111)
            }
            else if (e.target.innerText === 'AC') {
                exp.innerText = ''
                res.innerText = ''
            }
            else if (e.target.innerText === 'DEL') {
                exp.innerText = exp.innerText.slice(0, -1)
                res.innerText = ''
            }
            else {
                if(res.innerHTML != ''){
                    exp.innerHTML = ''
                    exp.innerHTML += res.innerHTML + elm.innerText
                    res.innerHTML = ''
                }else{
                    exp.innerText += elm.innerText
                }
            }
        } catch (err) {
            exp.innerText = 'Error'
            setTimeout(() => {
                exp.innerText = ''
                res.innerText = ''
            }, 555)
        }
    })
})



