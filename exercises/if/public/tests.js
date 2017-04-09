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

  function whiteIfAbove70Brightness(h) {
    var hex = h.replace('#', '');
    var r = parseInt(hex.substring(0, 2), 16);
    var g = parseInt(hex.substring(2, 4), 16);
    var b = parseInt(hex.substring(4, 6), 16);
    var parts = rgbToHsl(r, g, b);
    var brightness = parts[2]
    return brightness >= 0.7 ? '#000000' : '#ffffff';
  }

  function testTheme(themename, c1, c2, c3, c4) {
    test(themename + ' button colors', function (assert) {
      assert.hasStyle('.' + themename + ' .btn.btn-primary', {
        'background-color': c1,
        color: whiteIfAbove70Brightness(c1)
      }, 'primary button styles are incorrect');
      assert.hasStyle('.' + themename + ' .btn.btn-secondary', {
        'background-color': c2,
        color: whiteIfAbove70Brightness(c2)
      }, 'secondary button styles are incorrect');
      assert.hasStyle('.' + themename + ' .btn.btn-other', {
        'background-color': c3,
        color: whiteIfAbove70Brightness(c3)
      }, 'other button styles are incorrect');
      assert.hasStyle('.' + themename + ' .btn.btn-other2', {
        'background-color': c4,
        color: whiteIfAbove70Brightness(c4)
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

  testTheme('theme-1', '#99ff99', '#3377ff', '#ff7733', '#ff33ff');
  testTheme('theme-2', '#9999ff', '#ff6666', '#66ff66', '#ffff66');
  testTheme('theme-3', '#aa66aa', '#6d6d3d', '#3d6d6d', '#3d6d3d');
}());