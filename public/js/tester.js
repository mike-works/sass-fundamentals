(function() {
  const assert = {
    ok: function(check, description) {
      if (!check) {
        throw { description };
      }
    },
    equal: function(a, b, description) {
      if (a !== b) {
        throw { description };
      }
    },
    hasStyle: function(selector, styles, description) {
      var elem = document.querySelector(selector);
      var elemStyles = window.getComputedStyle(elem);
      for (let s in styles) {
        if (styles.hasOwnProperty(s) && elemStyles[s] !== styles[s]){
          throw { description,
            detail: 'Expected $("' + selector + '") to have value for ' + s + ':\n' + styles[s] + '.\n' + elemStyles[s] + ' was found instead'
          }
        }
      }
    }
  };
  var _errorContainer = null;
  
  function setupErrorList() {
    _errorContainer = document.createElement('ul');
    _errorContainer.className = 'test-failures';
    _errorContainer.style = 'position: fixed;bottom: 0; max-height: 100vh; overflow-y: scroll; right: 0; width: 200px; padding-left:0; background: red; list-style: none; color: white; font-family: Sans-Serif';
    document.body.appendChild(_errorContainer);
    return _errorContainer;
  }

  function addErrorToList(info) {
    var li = document.createElement('li');
    li.className = 'test-failure';
    li.style = 'margin: 10px; background: #f55; padding: 10px'
    var s = '<h4 style="text-transform: uppercase">' + info.name + '</h4><b >' + info.description + '</b>';
    if (info.detail) {
      s += '<pre style="font-size: 0.8rem; font-family: Monospace; white-space: pre-wrap">' + info.detail + '</pre>';
    }
    li.innerHTML = s;
    _errorContainer.appendChild(li);
  }

  function onFail(info) {
    if (!_errorContainer) {
      setupErrorList();
    }
    addErrorToList(info);
  }

  function test(name, cb) {
    try {
      cb(assert);
    } catch(e) {
      onFail(Object.assign(e, { name }));
    }
  };

  function start() {
    window.test = test;
  };
  window.onload = start();
}());