(function () {
  function rgbToHsl(r, g, b) {
    r /= 255, g /= 255, b /= 255;

    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if (max == min) {
      h = s = 0; // achromatic
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }

      h /= 6;
    }

    return [h, s, l];
  }

  function testTheme(themename, c1, c2, c3, c4, c5, c6, c7, c8) {
    test(themename + ' button colors', function (assert) {
      assert.hasStyle('.' + themename + ' .btn.btn-primary', {
        'background-color': c1,
        color: c5
      }, 'primary button styles are incorrect');
      assert.hasStyle('.' + themename + ' .btn.btn-secondary', {
        'background-color': c2,
        color: c6
      }, 'secondary button styles are incorrect');
      assert.hasStyle('.' + themename + ' .btn.btn-other', {
        'background-color': c3,
        color: c7
      }, 'other button styles are incorrect');
      assert.hasStyle('.' + themename + ' .btn.btn-other2', {
        'background-color': c4,
        color: c8
      }, 'other2 button styles are incorrect');
    });
  }
  test('First button', function (assert) {
    assert.hasStyle('.btn', {
      'border-radius': assert.compare.eq('2px'),
      'border-style': 'solid',
      'border-color': assert.compare.truthy(),
      'border-width': assert.compare.gt(0),
      'display': 'inline-block'
    }, 'styles are incorrect');
  })

  testTheme('theme-1', '#99ff99', '#3377ff', '#ff7733', '#ff33ff', '#000000', '#ffffff', '#000000', '#000000');
  testTheme('theme-2', '#9999ff', '#ff6666', '#66ff66', '#ffff66', '#000000', '#000000', '#000000', '#000000');
  testTheme('theme-3', '#6666ff', '#ff0000', '#00ff00', '#ffff00', '#ffffff', '#ffffff', '#000000', '#000000');
}());