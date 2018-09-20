const q = document.querySelector.bind(document);

function saveData(datas) {
  Object.keys(datas).forEach((key) => {
    localStorage.setItem(key, datas[key]);
  });
}

function render() {
  const dateFormat = 'YYYY-MM-DD';
  const complete = q('#complete').valueAsNumber;
  const deadline = moment(q('#deadline').value, dateFormat);
  const hours = q('#hours').valueAsNumber;
  const now = moment();
  const start = moment(q('#start').value, dateFormat);

  if (Number.isNaN(start) || Number.isNaN(deadline)
      || Number.isNaN(hours) || Number.isNaN(complete)) {
    return;
  }

  const daysLeft = deadline.diff(now, 'days');
  const hoursLeft = hours - complete;
  const hoursPerDayLeft = (hoursLeft / daysLeft).toFixed(2);

  q('.days-left').innerHTML = daysLeft;
  q('.hours-left').innerHTML = hoursLeft;
  q('.hours-per-day').innerHTML = hoursPerDayLeft;

  const height = q('.progress-mask').clientHeight;
  const percentComplete = complete / hours;
  const heightOffset = height * percentComplete * -1;

  q('.progress-mask').style.marginTop = `${heightOffset}px`;

  saveData({
    start: start.format(dateFormat),
    deadline: deadline.format(dateFormat),
    hours,
    complete,
  });
}

function loadData() {
  const dateFormat = 'YYYY-MM-DD';
  const complete = localStorage.getItem('complete');
  const deadline = localStorage.getItem('deadline');
  const hours = localStorage.getItem('hours');
  const start = localStorage.getItem('start');

  if (start) {
    q('#start').value = moment(start, dateFormat).format(dateFormat);
  }
  if (deadline) {
    q('#deadline').value = moment(deadline, dateFormat).format(dateFormat);
  }

  q('#hours').value = hours;
  q('#complete').value = complete;
}

function logTime(amount) {
  let complete = parseFloat(localStorage.getItem('complete'));
  let logHistory = localStorage.getItem('logHistory');

  if (Number.isNaN(complete)) {
    return;
  }

  complete += amount;
  logHistory = JSON.parse(logHistory) || [];
  logHistory.push(moment().toISOString());
  saveData({ complete, logHistory: JSON.stringify(logHistory) });
  loadData();
  render();
}

function logHour() {
  logTime(1.0);
}

function logHalfHour() {
  logTime(0.5);
}

function clearData() {
  if (window.confirm('Clear data???')) {
    localStorage.clear();
    loadData();
  }
}

function registerEvents() {
  q('#start').addEventListener('blur', render);
  q('#deadline').addEventListener('blur', render);
  q('#hours').addEventListener('blur', render);
  q('#complete').addEventListener('blur', render);
  q('.log-hour').addEventListener('click', logHour);
  q('.log-half-hour').addEventListener('click', logHalfHour);
  q('.clear-data').addEventListener('click', clearData);
}

registerEvents();
loadData();
render();
