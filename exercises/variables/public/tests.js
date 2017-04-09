test('Primary button', function(assert) {
  assert.hasStyle('.btn.btn-primary', {
    'padding-left': '10px',
    'padding-right': '10px',
    'padding-top': '2px',
    'padding-bottom': '2px',
    'border-radius': assert.compare.eq('2px'),
    'border-style': 'solid',
    'border-color': assert.compare.truthy(),
    'border-width': assert.compare.gt(0)
  }, 'styles are incorrect');
  
  assert.hasStyle('.btn.btn-primary', {
    'background-color': 'rgb(204, 102, 153)',
    'color': 'rgb(255, 255, 255)',
    'opacity': '1'
  }, 'colors for enabled state are incorrect');
  assert.hasStyle('.btn.btn-primary:disabled', {
    'opacity': '0.5'
  }, 'colors for enabled state are incorrect');

});

test('Secondary button', function(assert) {
  assert.hasStyle('.btn.btn-secondary', {
    'padding-left': '10px',
    'padding-right': '10px',
    'padding-top': '2px',
    'padding-bottom': '2px',
  }, 'padding is incorrect');
  
  assert.hasStyle('.btn.btn-secondary', {
    'background-color': 'rgb(153, 128, 153)',
    'color': 'rgb(0, 0, 0)',
    'opacity': '1'
  }, 'colors for enabled state are incorrect');
  assert.hasStyle('.btn.btn-secondary:disabled', {
    'opacity': '0.5'
  }, 'colors for enabled state are incorrect');
});
