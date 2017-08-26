// ==UserScript==
// @name         Agar Balkan Longer Nick
// @namespace    
// @version      1
// @description  Longer Nick
// @author       ab
// @match        http://agar-balkan.ga/*
// @match        http://www.agar-balkan.ga/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
  $("#nickname").attr("maxlength", "30");
  window.maxNickLength = 30;
})();

