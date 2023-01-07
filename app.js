const form = document.querySelector('.quiz-form')
const finalScoreContainer = document.querySelector('.final-score-container')

const correctAnswers = ['C', 'A', 'D', 'D']

let score = 0

const getUserAnswers = () => correctAnswers.map((_, index) =>
    form[`inputQuestion${index + 1}`].value)


const calculateUserScore = userAnswers => {
    userAnswers.forEach((userAnswer, index) => {
        const isUserAnswerCorrect = userAnswer === correctAnswers[index]

        if(isUserAnswerCorrect) {
            score += 25
        }
    })
}

const showfinalScoreContainer = () => {
    scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })

    finalScoreContainer.style.display= 'block'
}

const animateFinalScore = () => {
    let counter = 0

    const timer = setInterval(() => {
        if(counter === score) {
            clearInterval(timer)
        }

        finalScoreContainer.querySelector('span').textContent = `${counter++}%`  
    }, 10)
}

form.addEventListener('submit', event => {
    event.preventDefault()

    const userAnswers = getUserAnswers()

    calculateUserScore(userAnswers)

    showfinalScoreContainer()

    animateFinalScore()
    
})