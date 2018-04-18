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
let initialNavColor;

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

    if(title.includes("home")){
        initialNavColor = "transparent";
    }else{
        initialNavColor = "rgba(0,0,0,0.7)"
    }
    document.getElementsByTagName('nav')[0].style.backgroundColor = initialNavColor;
    document.getElementById(currentPage).className = "selected";
})

let timer = null;

let x = window.matchMedia("(max-width: 1024px)");/*min-width: 1024px*/

function setNavbar(x){
    console.log("hello");
    console.log(x);
    mobileNavbar();
}
setNavbar(x);

window.addEventListener('resize', function(e){
    setNavbar(x);
});


function desktopNavbar(){
    console.log("desktop");
    let navbar = document.getElementsByTagName('nav')[0];/**/
    navbar.style.backgroundColor="rgba(0,0,0,0.7)";
}

function mobileNavbar(){
    window.addEventListener('scroll', function(e){
       
        let navbar = document.getElementsByTagName('nav')[0];
        if(window.scrollY >10){
            navbar.style.backgroundColor="rgba(0,0,0,0.7)";
        }else{
            navbar.style.backgroundColor= initialNavColor;
        }
        
    });
}

function toggle(){
    let menuBtnDivs = document.getElementById("menu-btn").getElementsByTagName("div");
    let div = menuBtnDivs[0];
    let div2 = menuBtnDivs[1];
    if(div.classList.contains("lean-right")){//close menu
        div.classList.remove("lean-right");
        div2.classList.remove("lean-left");
        div.classList.add("top-parallel");
        div2.classList.add("bottom-parallel");
        closeNav();
    }else{
        div.classList.remove("top-parallel");
        div2.classList.remove("bottom-parallel");
        div.classList.add("lean-right");
        div2.classList.add("lean-left");
        openNav();
    }
}

function openNav(){
    document.getElementById("mobile-menu").style.width = "250px";


}

function closeNav(){
    document.getElementById("mobile-menu").style.width = "0";
}





