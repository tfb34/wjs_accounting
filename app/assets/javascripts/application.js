// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .

document.addEventListener("turbolinks:load", function() {
    let title = document.getElementsByTagName("title")[0].innerHTML;
    let currentPage;
    if(title.includes("home")){
        currentPage = "nav-home"
    }else if(title.includes("about")){
        currentPage = "nav-about"
        document.getElementsByTagName('body')[0].style.backgroundColor = "#E8E8E3";
    }else if(title.includes("contact")){
        currentPage = "nav-contact"
        document.getElementsByTagName('body')[0].style.backgroundColor = "#E8E8E3";
    }else if(title.includes("forms")){
        currentPage = "nav-forms"
    }else if(title.includes("payroll")){
        currentPage = "nav-payroll";
        document.getElementsByTagName('body')[0].style.backgroundColor = "#E8E8E3";
    }else if(title.includes("services")){
        currentPage = "nav-services";
        document.getElementsByTagName('body')[0].style.backgroundColor = "#E8E8E3";
    }
    document.getElementById(currentPage).className = "selected";
})

let timer = null;

let x = window.matchMedia("(max-width: 650px)");/*min-width: 1024px*/

function setNavbar(x){
    console.log("hello");
    if(x.matches){
        mobileNavbar();
        console.log("mobile");
    }else{
        desktopNavbar();
        console.log("desktop");
    }
}
setNavbar(x);

window.addEventListener('resize', function(e){
    setNavbar(x);
});


function desktopNavbar(){
    window.addEventListener('scroll', function(e){
        if(timer!=null){
            clearTimeout(timer);
        }
        let navbar = document.getElementsByTagName('nav')[0];
        let logo = document.getElementsByClassName('logo-style')[0];
        let logoRect = logo.getBoundingClientRect();
        let navRect = navbar.getBoundingClientRect();

        if(window.scrollY < (logoRect.height + navRect.height)+10){
            navbar.style.position = "relative";
                navbar.style.display = "block";
        }else{
            navbar.style.display = "none";
            navbar.style.position ="fixed";
            navbar.style.display = "block";
            navbar.style.top ="0px";
        }
        
    });
}

function mobileNavbar(){
    window.addEventListener('scroll', function(e){
        if(timer!=null){
            clearTimeout(timer);
        }
        let navbar = document.getElementsByTagName('nav')[0];
        if(window.scrollY < 200){
            navbar.style.position = "relative";
                navbar.style.display = "block";
        }else{
            navbar.style.display = "none";
        }
        timer = setTimeout(function(){
            
            let logo = document.getElementsByClassName('logo-style')[0];
            let logoRect = logo.getBoundingClientRect();
            let navRect = navbar.getBoundingClientRect();
            if(window.scrollY < (logoRect.height + navRect.height)+10){//logoRect.bottom
                navbar.style.position = "relative";
                navbar.style.display = "block";
                console.log('true')
            }else{
                navbar.style.position ="fixed";
                navbar.style.display = "block";
                navbar.style.top = '-67px';
                console.log('false')
                slideDown();
            }
            //navbar.style.display = "block";
        },200);
        
    });
}

let timer2 = null;
function toggle(id){
    if(timer2!= null){
        clearTimeout(timer2);
    }
    let menu = document.getElementById('mobile-menu');
    let menuRect = menu.getBoundingClientRect();
    timer2 = setTimeout(function(){
        if(menu.style.display === "block"){
            console.log("moving left");
            menu.style.left = -menuRect.width+'px';
            menu.style.display = "none";
        }else{
            slideRight();
        }
    },1);
}


function slideDown(){
    let elem = document.getElementsByTagName('nav')[0];
    let pos = -67;
    let id = setInterval(frame, 1);
    function frame(){
        if(pos === 0){
            clearInterval(id);
        }else{
            pos++;
            elem.style.top = pos +'px';
        }
    }
}


function slideRight(){
    console.log("moving right");
    let elem = document.getElementById('mobile-menu');
    let elemRect = elem.getBoundingClientRect();
    console.log(elemRect);
    let pos = -250;
    let id = setInterval(frame, 0.5);
    function frame(){
        if(pos >= 0){
            clearInterval(id);
        }else{
            pos++;
            elem.style.left = pos + 'px';
        }
    }
    elem.style.display = "block";
}
/*fix this problem*/
/*
function slideLeft(){
    let elem = document.getElementById('mobile-menu');
    let elemRect = elem.getBoundingClientRect();
    let pos = 0;
    let id = setInterval(frame, 0.5);
    function frame(){
        if(pos < -100){
            elem.style.display = "none";
            clearInterval(id);
        }else{
            pos--;
            elem.style.left = pos + 'px';
        }
    }
}*/


