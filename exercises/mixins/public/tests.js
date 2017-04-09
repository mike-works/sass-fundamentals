(function() {
  function testButtonColor(colorName, fontColor, bgColor) {
    test(colorName + ' button', function(assert) {
      assert.hasStyle('.btn.btn-' + colorName, {
        color: fontColor,
        'background-color': bgColor
      }, 'Colors are correct')
    });
  }
  test('First button', function(assert) {
    assert.hasStyle('.btn', {
      'border-radius': assert.compare.eq('2px'),
      'border-style': 'solid',
      'border-color': assert.compare.truthy(),
      'border-width': assert.compare.gt(0),
      'display': 'inline-block'
    }, 'styles are incorrect');
  })

  testButtonColor('yellow', '#ffffff', '#999900');
  testButtonColor('blue', '#ffffff', '#3333aa');
  testButtonColor('green', '#ffffff', '#33cc33');
  testButtonColor('purple', '#ffffff', '#993399');
  testButtonColor('pink', '#ffffff', '#cc6699');
  testButtonColor('orange', '#ffffff', '#ff9933');
  testButtonColor('brown', '#ffffff', '#995522');
  
}());