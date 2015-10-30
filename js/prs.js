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
  $('.clear-data').on('click', clearData);
}

function render() {
  var dateFormat = 'YYYY-MM-DD',
      start = moment($('#start').val(), dateFormat),
      deadline = moment($('#deadline').val(), dateFormat),
      hours = parseInt($('#hours').val()),
      complete = parseInt($("#complete").val());

  if (isNaN(start) || isNaN(deadline) || isNaN(hours) || isNaN(complete)) {
    return;
  }

  var daysLeft = deadline.diff(start, 'days');
  var hoursLeft = hours - complete;
  var hoursPerDayLeft = (hoursLeft / daysLeft).toFixed(2);

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
      start = moment(localStorage.getItem('start'), dateFormat),
      deadline = moment(localStorage.getItem('deadline'), dateFormat),
      hours = localStorage.getItem('hours'),
      complete = localStorage.getItem('complete');

  $('#start').val(start.format(dateFormat));
  $('#deadline').val(deadline.format(dateFormat));
  $('#hours').val(hours);
  $('#complete').val(complete);
}

function logHour() {
  var complete = parseInt(localStorage.getItem('complete')),
      logHistory = localStorage.getItem('logHistory');

  if (isNaN(complete)) {
    return;
  }

  complete += 1;
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
