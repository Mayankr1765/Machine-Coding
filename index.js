let para = document.getElementById('snack');

/**
 * Logic to add classname to paragraph
 */
function show(){
    para.className="showw"
}

/**
 * Logic to hide snackbar
 */
setTimeout(
    function(){ para.className = para.className.replace("showw", ""); 
}, 3000);