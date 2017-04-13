test('Primary button', function(assert) {
  assert.hasStyle('.btn.btn--mode-primary', {
    'padding-left': '10px',
    'padding-right': '10px',
    'padding-top': '2px',
    'padding-bottom': '2px',
    'line-height': '20px',
    'border-radius': assert.compare.eq('2px'),
    'border-style': 'solid',
    'border-color': assert.compare.truthy(),
    'border-width': assert.compare.gt(0)
  }, 'styles are incorrect');
  
  assert.hasStyle('.btn.btn--mode-primary', {
    'background-color': 'rgb(204, 68, 102)',
    'color': 'rgb(255, 255, 255)',
    'opacity': '1'
  }, 'colors for enabled state are incorrect');
  assert.hasStyle('.btn.btn--mode-primary:disabled', {
    'opacity': '0.5'
  }, 'colors for enabled state are incorrect');

});

test('Secondary button', function(assert) {
  assert.hasStyle('.btn.btn--mode-secondary', {
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
  assert.hasStyle('.btn.btn--mode-secondary:disabled', {
    'opacity': '0.5'
  }, 'colors for enabled state are incorrect');
});

test('Price', function(assert) {
  assert.hasStyle('.btn .btn__price', {
    'padding-left': '3px',
    'padding-right': '3px',
    'padding-top': '1px',
    'padding-bottom': '1px',
  }, 'padding is incorrect');
  
  assert.hasStyle('.btn .btn__price', {
    'background-color': '#008000',
    'color': '#ffffff'
  }, 'colors for enabled state are incorrect');
  assert.hasStyle('.btn:disabled .btn__price', {
    'background-color': '#aaaaaa',
    'color': '#ffffff'
  }, 'colors for enabled state are incorrect');
});
