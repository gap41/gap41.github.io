window.onload = function() {
         getUserInput();
}



async function getUserInput() {
    var input = document.getElementById("input-box");
    input.addEventListener("change", function(event) {
        alert(event.target.value);
    });
    
    
    await sleep(1000)
    alert("Morra di");

}

function sleep(interval) {
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve();
        }, interval)   
    })
}



