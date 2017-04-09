(function () {

  var properties = ['margin', 'padding'];
  var subProperties = ['top', 'bottom', 'left', 'right'];
  var steps = [5, 10, 15, 20, 25];

  test('Atomic classes are expressed properly', function(assert) {
    
    for(var p = 0; p < properties.length; p++) {
      var prop = properties[p];
      for (var sp = 0; sp < subProperties.length; sp++) {
        var subProp = subProperties[sp];
        for (var s = 0; s < steps.length; s++) {
          var step = steps[s];
          var styleProp = prop + '-' + subProp;
          var styleVal = step + 'px';
          var className = '.' + prop.substr(0, 1) + '-' + subProp.substr(0, 1) + '-' + step;
          var styl = {};
          styl[styleProp] = styleVal;
          assert.hasStyle(className, styl,
            className
          );
        }
      }
    }

  });

}());