(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.index = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var BASE_URL = 'http://localhost:3000/mc';

  function sendDataByPost(sendDataStr) {
    var xmlhttp = new window.XMLHttpRequest();
    xmlhttp.open('POST', BASE_URL, true);

    xmlhttp.send(sendDataStr);
  }

  function sendDataByGet(sendDataStr) {
    var img = new window.Image();
    img.src = BASE_URL + '?' + sendDataStr;
  }

  function MonitorCenter() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'apiMonitor';
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var enCodeParams = encodeURIComponent(JSON.stringify({ params: params }));

    var sendDataStr = 'type=' + type + '&params=' + enCodeParams;
    if (sendDataStr.length > 3000) {
      sendDataByPost(sendDataStr);
    } else {
      sendDataByGet(sendDataStr);
    }
  }
  exports.default = MonitorCenter;
});
