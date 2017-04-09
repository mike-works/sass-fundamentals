test('Normal container', function(assert) {
  var $container = document.querySelector('.container');
  var hadRight = $container.classList.contains('right-nav');
  $container.classList.remove('right-nav');
  
  assert.hasStyle('.container', {
    'max-width': '600px',
    'width': assert.compare.lte(600)
  }, 'the container doesn\'t look right');

  assert.hasStyle('.container > .main', {
    'max-width': 'none',
    'width': assert.compare.gte(200),
    'margin-left': '220px',
    'margin-right': '0px'
  }, 'main content area doesn\'t look right');

  assert.hasStyle('.container > .sidebar', {
    'width': '200px',
    'float': 'left',
  }, 'the sidenav doesn\'t look right');

  $container.classList.add('right-nav');

  assert.hasStyle('.container.right-nav > .main', {
    'max-width': 'none',
    'margin-right': '220px',
    'margin-left': '0px',
    'width': assert.compare.gte(200)
  }, 'main content area doesn\'t look right');

  assert.hasStyle('.container.right-nav > .sidebar', {
    'width': '200px',
    'float': 'right',
  }, 'the sidenav doesn\'t look right');

  if (!hadRight) {
    $container.classList.remove('right-nav');
  }
});