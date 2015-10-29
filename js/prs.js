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

  $('#start').on('blur', render);
  $('#deadline').on('blur', render);
  $('#hours').on('blur', render);
  $('#complete').on('blur', render);
}

function render() {
  var start = moment($('#start').val()),
      deadline = moment($('#deadline').val()),
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
    start: start,
    deadline: deadline,
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
  var start = moment(localStorage.getItem('start')),
      deadline = moment(localStorage.getItem('deadline')),
      hours = localStorage.getItem('hours'),
      complete = localStorage.getItem('complete');

  $('#start').val(start.format('MM-DD-YYYY'));
  $('#deadline').val(deadline.format('MM-DD-YYYY'));
  $('#hours').val(hours);
  $('#complete').val(complete);
}
