test('Primary button', function(assert) {
  assert.hasStyle('.btn', {
    'padding-left': '10px',
    'padding-right': '10px',
    'padding-top': '2px',
    'padding-bottom': '2px',
  }, 'padding is incorrect');
  
  assert.hasStyle('.btn.btn--mode-primary', {
    'background-color': 'rgb(204, 68, 102)',
    'color': 'rgb(255, 255, 255)',
    'opacity': '1'
  }, 'colors for enabled state are incorrect');
  var $button = document.querySelector('.btn.btn--mode-primary');
  $button.classList.add('btn--state-disabled');
  assert.hasStyle('.btn.btn--mode-primary.btn--state-disabled', {
    'background-color': 'rgb(204, 68, 102)',
    'color': 'rgb(255, 255, 255)',
    'opacity': '0.5'
  }, 'colors for enabled state are incorrect');
  $button.classList.remove('btn--state-disabled');

});

test('Secondary button', function(assert) {
  assert.hasStyle('.btn', {
    'padding-left': '10px',
    'padding-right': '10px',
    'padding-top': '2px',
    'padding-bottom': '2px',
  }, 'padding is incorrect');
  
  assert.hasStyle('.btn.btn--mode-secondary', {
    'background-color': 'rgb(237, 188, 200)',
    'color': 'rgb(0, 0, 0)',
    'opacity': '1'
  }, 'colors for enabled state are incorrect');
  var $button = document.querySelector('.btn.btn--mode-secondary');
  $button.classList.add('btn--state-disabled');
  assert.hasStyle('.btn.btn--mode-secondary.btn--state-disabled', {
    'background-color': 'rgb(237, 188, 200)',
    'color': 'rgb(0, 0, 0)',
    'opacity': '0.5'
  }, 'colors for enabled state are incorrect');
  $button.classList.remove('btn--state-disabled');
});
