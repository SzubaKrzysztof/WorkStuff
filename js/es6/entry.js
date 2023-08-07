import tippy from 'tippy.js'
window.tippy = tippy;

var _ = require('lodash/core');
_.debounce = require('lodash/debounce');
_.throttle = require('lodash/throttle');

// import _ from "lodash";

import swiper from 'swiper'
window.Swiper = swiper;

import toastr from 'toastr'
window.toastr = toastr;

import Typed from 'typed.js';
window.Typed = Typed;

import Headroom from 'headroom.js';
window.Headroom = Headroom;

import Slider from './components/Slider';
import HotSpot from './components/HotSpot';
import CountDownTimer from './components/CountDownTimer';

import Components from './dev/Components';
import jQueryExtend from './dev/jQueryExtend';
import Body from './dev/Body';
import Basket from './dev/Basket';
import WishList from './dev/WishList';

import Modal from './components/Modal';
window.Modal = Modal;

import List from '../lib/list';
window.List = List;

import MainPage from './page/MainPage';
import SearchPage from './page/SearchPage';
import ProductPage from './page/ProductPage'


window.Konesso = window.Konesso || { 'settings': {}, 'behaviors': {}, 'themes': {}, 'locale': {}, 'develop' : false };


window.Konesso.behaviors =  Object.assign(
    (window.Konesso.behaviors || {}),
    {
        init:function() {
            this.attachAll();
        },
        attached:{},
        attachAll:function (context) {
            if (typeof context == 'undefined') {
            context = window;
            }
            for (let behavior in this) {
                if (typeof this[behavior].attach == 'function' && !this.attached[behavior]) {
                    this[behavior].attach.call(this[behavior], context, Konesso.settings)
                    this.attached[behavior] = true;
                }
            }
        },
        dettachAll:function (context) {
            if (typeof context == 'undefined') {
            context = window;
            }
            for (let behavior in this) {
                if (typeof this[behavior].attach == 'function' && this.attached[behavior]) {
                    this[behavior].dettach.call(this[behavior], context, Konesso.settings)
                    this.attached[behavior] = false;
                }
            }
        }
    }
)

// if is Dev mode
// document.addEventListener('DOMContentLoaded', window.Konesso.behaviors.init.bind(window.Konesso.behaviors)); 

window.Basket = new Basket;
window.WishList = new WishList;

window.Konesso.behaviors.jQueryExtend = new jQueryExtend();
window.Konesso.behaviors.Body = new Body();
window.Konesso.behaviors.Components = new Components();

window.Konesso.behaviors.MainPage = new MainPage();
window.Konesso.behaviors.SearchPage = new SearchPage();
window.Konesso.behaviors.ProductPage = new ProductPage();

window.Konesso.behaviors.Components.register('HotSpot', HotSpot);
window.Konesso.behaviors.Components.register('Slider', Slider);
window.Konesso.behaviors.Components.register('CountDownTimer', CountDownTimer);

window.Konesso.behaviors.Scroll = {
    Smooth:function(top = 0){
        $("html, body").stop().animate({scrollTop: top }, 500, 'swing', function() {});
    }
}

$(document).ready(function(){
    window.Konesso.behaviors.init();
});
