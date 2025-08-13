let number1=document.getElementById("number1");   
let counter=0;
setInterval(()=>{
    if(counter==80){
        clearInterval();
    }
    else{
        counter+=1;
        number1.innerText=counter+'%';
    }
},25);

let number2=document.getElementById("number2");   
let counter2=0;
setInterval(()=>{
    if(counter2==70){
        clearInterval();
    }
    else{
        counter2+=1;
        number2.innerText=counter2+'%';
    }
},25);

let number3=document.getElementById("number3");   
let counter3=0;
setInterval(()=>{
    if(counter3==70){
        clearInterval();
    }
    else{
        counter3+=1;
        number3.innerText=counter3+'%';
    }
},25);
  document.getElementById("skillBtn").addEventListener("click", function() {
    document.getElementById("about").scrollIntoView({
      behavior: 'smooth', // smooth scroll
      block: 'start'      // align to top
    });
  });

   document.getElementById("projectsBtn").addEventListener("click", function() {
    document.getElementById("projects").scrollIntoView({
      behavior: 'smooth', // smooth scroll
      block: 'start'      // align to top
    });
  });
  document.getElementById("contactBtn").addEventListener("click", function() {
    document.getElementById("contact-container").scrollIntoView({
      behavior: 'smooth', // smooth scroll
      block: 'start'      // align to top
    });
  });