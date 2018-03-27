"use strict";

(function () {
  var map = document.querySelector(".map");
  var popUpMap = document.querySelector(".pop-up-map");
  var closeMap = popUpMap.querySelector(".close-map");

  var ESC_KEYCODE = 27;

  var hideMap = function () {
    popUpMap.classList.add("hidden");

    map.addEventListener("click", onMapClick);
    closeMap.removeEventListener("click", onCloseMapClick);
    document.removeEventListener("keydown", onEscPress);
  };

  var onCloseMapClick = function () {
    hideMap();
  };

  var onEscPress = function (evtEsc) {
    if (evtEsc.keyCode === ESC_KEYCODE) {
      hideMap();
    }
  };

  var onMapClick = function (evtMap) {
    evtMap.preventDefault();

    popUpMap.classList.remove("hidden");

    map.removeEventListener("click", onMapClick);
    closeMap.addEventListener("click", onCloseMapClick);
    document.addEventListener("keydown", onEscPress);
  };

  map.addEventListener("click", onMapClick);
})()
