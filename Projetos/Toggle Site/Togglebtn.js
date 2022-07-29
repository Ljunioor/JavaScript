
(function readyJS(win,doc){
    'use strict';

    let btn=doc.querySelector(".btn");
    let body=doc.querySelector(".body");
    
    

    function toggle(event) {
       if(body.classList.contains(".chat-button")){
        btn.classList.remove("chat-button");
        btn.setAttribute("src","1.png");
        
    }else{
        btn.classList.add("show");
        btn.setAttribute("src","3.png");
    }
    }
    btn.addEventListener("click",toggle,false);

})(window, document)