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
window.addEventListener('scroll', function(e){
    if(timer!=null){
        clearTimeout(timer);
    }
    let navbar = document.getElementsByTagName('nav')[0];
    if(scrollY > 193){
        navbar.style.display = "none";
    }
    timer = setTimeout(function(){
        
        let logo = document.getElementsByClassName('logo-style')[0];
        let logoRect = logo.getBoundingClientRect();
        let navRect = navbar.getBoundingClientRect();
        if(window.scrollY < (logoRect.height + navRect.height)){//logoRect.bottom
            navbar.style.position = "relative";
            console.log('true')
        }else{
            navbar.style.position ="fixed";
            navbar.style.top = 0;
            console.log('false')
        }
        navbar.style.display = "block";
    },500);
    
});

function toggle(id){
    let x = document.getElementById(id);
    let nav = document.getElementsByTagName('nav')[0];
    nav.appendChild(x);
    if(x.style.display === "block"){
        x.style.display = "none";
    }else{
        x.style.display = "block";
    }
}


