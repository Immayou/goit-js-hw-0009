import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const inputDataField = document.querySelector('#datetime-picker')
const startBTN = document.querySelector('button')
const spanDays = document.querySelector('span[data-days]')
const spanHours = document.querySelector('span[data-hours]')
const spanMinutes = document.querySelector('span[data-minutes]')
const spanSeconds = document.querySelector('span[data-seconds]')

startBTN.setAttribute('disabled', 'true')

let timerId = null;
let deltaTime = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if(selectedDates[0].getTime() > options.defaultDate.getTime()) {
        startBTN.removeAttribute('disabled')
    } else {
        clearInterval(timerId);
        Notiflix.Notify.failure("Please choose a date in the future")
       }
  }
}

flatpickr('#datetime-picker', options)

startBTN.addEventListener('click', () => {
    timerId = setInterval(() => {
        deltaTime = new Date(inputDataField.value) - new Date()
        const { days, hours, minutes, seconds } = convertMs(deltaTime)
        startBTN.setAttribute('disabled', 'true')
        spanDays.textContent = addLeadingZero(days)
        spanHours.textContent = addLeadingZero(hours)
        spanMinutes.textContent = addLeadingZero(minutes)
        spanSeconds.textContent = addLeadingZero(seconds)
    }, 1000)
})

function addLeadingZero(value) {
    return String(value).padStart(2,'0')
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
