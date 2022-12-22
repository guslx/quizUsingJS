const form = document.querySelector('.quiz-form')
const finalResult = document.querySelector('.result')

const correctAnswers = ['C', 'A', 'D', 'D']

form.addEventListener('submit', event => {
    event.preventDefault()

    const valueOfFirstQuestion = form.inputQuestion1.value 
    const valueOfSecondQuestion = form.inputQuestion2.value 
    const valueOfThirdQuestion = form.inputQuestion3.value 
    const valueOfFourthQuestion = form.inputQuestion4.value

    let score = 0

    const userAnswers = [
        valueOfFirstQuestion,
        valueOfSecondQuestion,
        valueOfThirdQuestion,
        valueOfFourthQuestion
    ]


    userAnswers.forEach((userAnswer, index) => {
        const userAnsweredCorrectly = userAnswer === correctAnswers[index]
        if(userAnsweredCorrectly) {
            score += 25
        }
    })

    
    scrollTo(0, 0)

    finalResult.style.display= 'block'


    let counter = 0

    const timer = setInterval(() => {
        if(counter === score) {
            clearInterval(timer)
        }

        finalResult.querySelector('span').textContent = `${counter}%`
        counter++
    }, 10)
})