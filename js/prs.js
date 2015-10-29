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
  var start = Date.parse($('#start').val()),
      deadline = Date.parse($('#deadline').val()),
      hours = parseInt($('#hours').val()),
      complete = parseInt($("#complete").val());

  if (isNaN(start) || isNaN(deadline) || isNaN(hours) || isNaN(complete)) {
    return;
  }

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
  var datas = {};

  return datas;
}

function loadData() {
  var start = parseInt(localStorage.getItem('start')),
      deadline = parseInt(localStorage.getItem('deadline')),
      hours = localStorage.getItem('hours'),
      complete = localStorage.getItem('complete');

  $('#start').val(new Date(start).toLocaleDateString());
  $('#deadline').val(new Date(deadline).toLocaleDateString());
  $('#hours').val(hours);
  $('#complete').val(complete);
}
