// jsQR is concatenated by gulp
import jsQR from "jsqr-es6";

self.addEventListener("message", function (e) {
  const decoded = jsQR(e.data.data, e.data.width, e.data.height);
  if (decoded) {
    postMessage(decoded);
  } else {
    postMessage(null);
  }
});
