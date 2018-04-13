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

let x = window.matchMedia("(max-width: 0px)");/*min-width: 1024px*/

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
        let navbar = document.getElementsByTagName('nav')[0];/**/
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

function toggle(){
    console.log("hello");
    let menu = document.getElementById('mobile-menu');
    let menuRect = menu.getBoundingClientRect();
    let menuBtn = document.getElementById('menu-btn');
    let closeBtn = document.getElementById('close-btn');
    if(menuBtn.style.display === "none"){// show menu-btn and close men
        console.log(menuBtn);
        menuBtn.style.display = "block";
        closeBtn.style.display = "none";
        closeNav();
    }else{
        console.log(menuBtn);;
        menuBtn.style.display = "none";
        closeBtn.style.display = "block";
        openNav();
    }
}

function openNav(){
    document.getElementById("mobile-menu").style.width = "250px";


}

function closeNav(){
    document.getElementById("mobile-menu").style.width = "0";
}





