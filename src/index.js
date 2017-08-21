import React from 'react';
import jQuery from "jquery";
import Popper from 'popper.js';
import App from 'app/App.jsx';
import AOS from 'aos';
import hljs from 'highlight.js';
require('fullpage.js');
// bootstrap requires a global jQuery and Popper to initialize
window.$ = window.jQuery = jQuery;
window.Popper = Popper;
require('bootstrap');

require('../node_modules/animate.css/animate.css');

// Initialize any JS Libraries
hljs.initHighlightingOnLoad();

AOS.init({
  duration: 1200,
  easing: 'ease-out-sine'
});

