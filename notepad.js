const checkbox=document.getElementById("feature-flag");
const textareaContent=document.getElementById("text-area");
textareaContent.value=localStorage.getItem('autosave_data');

checkbox.addEventListener('change',()=>{
    //console.log("Hellow");
    
    if(checkbox.checked==true){
        setInterval(function(){
            localStorage.setItem('autosave_data',textareaContent.value);
        },1000);
        //console.log("Hellow");
        //console.log(localStorage.getItem(autosave_data));
    }
    
    
})