// date data
const curDate = new Date();
const curMonth = curDate.getMonth();
const curDay = curDate.getDate();
const curYear = curDate.getFullYear();
const curHour = curDate.getHours();
const curMinute = curDate.getMinutes();

// elements
const timeOutput = document.querySelector('#time > p:nth-of-type(1)');
const dateOutput = document.querySelector('#time > p:nth-of-type(2)');

const getPropTime = (hour, minute) => {
    let propMinute = minute < 10 ? `0${minute}` : minute; //inset 0 when the minutes is less than 10 ex: 5 became 05

    return hour > 12 ? `${hour - 12}:${propMinute}PM` : `${hour}:${propMinute}AM`;
};

timeOutput.textContent = getPropTime(curHour, curMinute);
dateOutput.textContent = `${curMonth + 1}/${curDay}/${curYear}`;
