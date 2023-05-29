function updateClock() {
  //declare the current time of the device
  const now = new Date();

  //get hours, minutes, seconds of now variable (current time)
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Add leading zeros to the hours, minutes, and seconds if necessary
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  let time = hours + ':' + minutes + ':' + seconds;
  let amPm = hours >= 12 ? 'PM' : 'AM';


  // Update the clock element with the current time
  document.querySelector('.time').textContent = time;
  document.querySelector('.am-pm').textContent = amPm;
}

// Update the clock immediately
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);
