// ==UserScript==
// @name         Mass on Q
// @namespace    http://agar.rs
// @version      0.2
// @description  mass
// @author       Me
// @match        http://www.agar.rs/*
// @match        http://agar.rs/*
// @grant        none
// ==/UserScript==

window.addEventListener('load', function() {
    console.log('called');
    var interval;
    var switchy = false;
    $(document).on('keydown',function(e){
        console.log('keydown e.keyCode="'+e.keyCode+'"');
        if(e.keyCode == 81){
            console.log('keydown 81, switchy '+switchy);
            if(switchy){
                return;
            }
            switchy = true;
            interval = setInterval(function() {
                console.log('firing');
                $("body").trigger($.Event("keydown", { keyCode: 87}));
                $("body").trigger($.Event("keyup", { keyCode: 87}));
            }, 10);//increase this number to make it fire them out slower
        }
    });

    $(document).on('keyup',function(e){
        console.log('keyup e.keyCode="'+e.keyCode+'"');
        if(e.keyCode == 81){
            console.log('stop firing');
            switchy = false;
            clearInterval(interval);
            return;
        }
    });
}, true);
