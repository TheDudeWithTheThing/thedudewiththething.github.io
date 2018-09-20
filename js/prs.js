var q = document.querySelector.bind(document);

function registerEvents() {
  q('#start').addEventListener('blur', render);
  q('#deadline').addEventListener('blur', render);
  q('#hours').addEventListener('blur', render);
  q('#complete').addEventListener('blur', render);
  q('.log-hour').addEventListener('click', logHour);
  q('.log-half-hour').addEventListener('click', logHalfHour);
  q('.clear-data').addEventListener('click', clearData);
}

function render() {
  var dateFormat = 'YYYY-MM-DD',
      complete = q("#complete").valueAsNumber,
      deadline = moment(q('#deadline').value, dateFormat),
      hours = q('#hours').valueAsNumber,
      now = moment(),
      start = moment(q('#start').value, dateFormat);

  if (isNaN(start) || isNaN(deadline) || isNaN(hours) || isNaN(complete)) {
    return;
  }

  var daysLeft = deadline.diff(now, 'days'),
      hoursLeft = hours - complete,
      hoursPerDayLeft = (hoursLeft / daysLeft).toFixed(2);

  q('.days-left').innerHTML = daysLeft;
  q('.hours-left').innerHTML = hoursLeft;
  q('.hours-per-day').innerHTML = hoursPerDayLeft;

  var height = q('.progress-mask').clientHeight,
      percentComplete = complete / hours,
      heightOffset = height * percentComplete * -1;

  q('.progress-mask').style.marginTop = heightOffset + 'px';

  saveData({
    start: start.format(dateFormat),
    deadline: deadline.format(dateFormat),
    hours: hours,
    complete: complete
  });
}

function saveData(datas) {
  Object.keys(datas).forEach( function(key) {
    localStorage.setItem(key, datas[key]);
  });
}

function loadData() {
  var dateFormat = 'YYYY-MM-DD',
      complete = localStorage.getItem('complete'),
      deadline = localStorage.getItem('deadline'),
      hours = localStorage.getItem('hours'),
      start = localStorage.getItem('start');

  if (start) {
    q('#start').value = moment(start, dateFormat).format(dateFormat);
  }
  if (deadline) {
    q('#deadline').value = moment(deadline, dateFormat).format(dateFormat);
  }

  q('#hours').value = hours
  q('#complete').value = complete
}

function logHour() {
  logTime(1.0);
}

function logHalfHour() {
  logTime(0.5);
}

function logTime(amount) {
  var complete = parseFloat(localStorage.getItem('complete')),
      logHistory = localStorage.getItem('logHistory');

  if (isNaN(complete)) {
    return;
  }

  complete += amount;
  logHistory = JSON.parse(logHistory) || [];
  logHistory.push(moment().toISOString());
  saveData({complete: complete, logHistory: JSON.stringify(logHistory)});
  loadData();
  render();
}

function clearData() {
  if(confirm("Clear data???")) {
    localStorage.clear();
    loadData();
  }
}

registerEvents();
loadData();
render();
