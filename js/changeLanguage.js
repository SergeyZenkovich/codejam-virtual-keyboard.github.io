function changeLanguage(e) {
    var obj = document.event? event : e
    if ( obj.altKey && obj.ctrlKey){
        langRU = !langRU;
        
    };
    drawKeyBoard(shift);
    localStorage.setItem("lang", langRU);
};
export{changeLanguage};