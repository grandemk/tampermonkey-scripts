// ==UserScript==
// @name         Data Oriented Design basic style
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  This adds basic style to make the site easier to read
// @author       Kevin Grandemange
// @match        https://www.dataorienteddesign.com/dodbook/node3.html
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

    let my_style = `
    * {
        box-sizing: border-box;
    }

    body {
        color:#5D6063;
        background-color: #F9FAFB;
        width:800px;
        margin: 20px auto;
        font-family: verdana;
    }

    h1 {
        font-weight: normal;
    }

    a:link {
        color: #5995DA;
        text-decoration: none;
    }
    a:visited {
        color: #407FC7;
    }
    a:hover,
    a:visited:hover {
        color: #76AEED;
        border-bottom: 1px solid #76AEED;
    }
    a:active,
    a:visited:active {
        color: #5995DA;
    }
    `;

    addGlobalStyle(my_style);
    document.getElementsByTagName("TT")[0].innerHTML="";
})();