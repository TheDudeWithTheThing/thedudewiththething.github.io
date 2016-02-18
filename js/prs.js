$( function() {
  registerEvents();
  loadData();
  render();
});

function registerEvents() {
  $('#start').on('keyup', render);
  $('#deadline').on('keyup', render);
  $('#hours').on('keyup', render);
  $('#complete').on('keyup', render);
  $('.log-hour').on('click', logHour);
  $('.log-half-hour').on('click', logHalfHour);
  $('.clear-data').on('click', clearData);
}

function render() {
  var dateFormat = 'YYYY-MM-DD',
      complete = parseFloat($("#complete").val()),
      deadline = moment($('#deadline').val(), dateFormat),
      hours = parseFloat($('#hours').val()),
      now = moment(),
      start = moment($('#start').val(), dateFormat);

  if (isNaN(start) || isNaN(deadline) || isNaN(hours) || isNaN(complete)) {
    return;
  }

  var daysLeft = deadline.diff(now, 'days'),
      hoursLeft = hours - complete,
      hoursPerDayLeft = (hoursLeft / daysLeft).toFixed(2);

  $('.days-left').text(daysLeft);
  $('.hours-left').text(hoursLeft);
  $('.hours-per-day').text(hoursPerDayLeft);

  var height = $('.progress-mask').height(),
      percentComplete = complete / hours,
      heightOffset = height * percentComplete * -1;
  $('.progress-mask').css({'margin-top' : heightOffset + 'px' });

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
    $('#start').val(moment(start, dateFormat).format(dateFormat));
  }
  if (deadline) {
    $('#deadline').val(moment(deadline, dateFormat).format(dateFormat));
  }

  $('#hours').val(hours);
  $('#complete').val(complete);
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
