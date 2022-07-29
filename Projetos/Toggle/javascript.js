
(function readyJS(win,doc){
    'use strict';

    let btn=doc.querySelector("#btn");
    let menu=doc.querySelector(".menu");
    let body=doc.querySelector("body");
    

    function toggle(event) {
       if(menu.classList.contains("show")){
        menu.classList.remove("show");
        btn.setAttribute("src","1.png");
        body.style.backgroundColor='white';
        
    }else{
        menu.classList.add("show");
        btn.setAttribute("src","3.png");
        body.style.backgroundColor='black';
    }
    }
    btn.addEventListener("click",toggle,false);

})(window, document);