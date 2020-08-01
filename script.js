const periodBetweenDates = []
let diffInSeconds = 0
let diffInHours = 0

function getInitialDate(event) {
    periodBetweenDates.push(dateFns.format(event.target.value, 'YYYY-MM-DD HH:mm:ss'))
}

function getFinalDate(event) {
    periodBetweenDates.push(dateFns.format(event.target.value, 'YYYY-MM-DD HH:mm:ss'))
    calculeDiffInSeconds()
}

function calculeDiffInSeconds() {
    const initial = dateFns.parse(periodBetweenDates[0])
    const final = dateFns.parse(periodBetweenDates[1])
    diffInSeconds = dateFns.differenceInSeconds(final, initial)
    diffInHours = dateFns.differenceInHours(final, initial)
    calculeReturnDate()
}

function calculeReturnDate() {
    setInterval(() => {
        let now = new Date()
        let returnDate = dateFns.addSeconds(now, diffInSeconds)
        returnDate = dateFns.format(returnDate, 'DD/MM/YYYY HH:mm:ss')
        render(returnDate)
        diffInSeconds = diffInSeconds - 1
    }, 1000);
}

function render(value) {
    document.querySelector('#root').innerHTML = `
        <p>Hora atual: ${dateFns.format(new Date(), 'DD/MM/YYYY HH:mm:ss')}</p>
        <p>Saldo gerado pela viagem: ${diffInHours} horas</p>
        <p>Date de retorno: ${value}</p>
    `
}