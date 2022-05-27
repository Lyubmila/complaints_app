      console.log("hello")
      let choices = document.querySelectorAll('.choice')
      
      function findBorough (e) {  
         let limit = 10  // defaulst number of compaints
         limit = Number(document.getElementById('comps').value);
         
       if (e.target.id === 'brooklyn'){
         
         fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=BROOKLYN&agency=NYPD&$limit='+ limit).then(response => response.json()).then(users => { 
            
            let div = "";
            users.forEach ((item) => {                                            
               
               div +=  "<div>" + item.complaint_type + "</div>"
               div += `<button id='clik'  onclick = "myFunc()">`+ `What did the Police Do?` + "</button>"
               div += "<div class=`resolution`>" + item.resolution_description + "</div>"                         
               
            } ) 
               document.getElementById("container").innerHTML = div;
            
         
         }).catch(err => console.log(err))
            
                           
      }  else if (e.target.id === 'bronx') {
         fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=BRONX&agency=NYPD&$limit='+ limit).then(response => response.json()).then(users => { 
            
            let div = "";
            users.forEach ((item) => {                                            
               
               div +=  "<div>" + item.complaint_type + "</div>"
               div += `<button id='clik'  onclick = "myFunc()">`+ `What did the Police Do?` + "</button>"
               div += "<div class=`resolution`>" + item.resolution_description + "</div>"                         
               
            } ) 
               document.getElementById("container").innerHTML = div;
            
         
         }).catch(err => console.log(err))
      }  else if (e.target.id === 'manhattan') { 
         fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=MANHATTAN&agency=NYPD&$limit='+ limit).then(response => response.json()).then(users => { 
            
            let div = "";
            users.forEach ((item) => {                                            
               
               div +=  "<div>" + item.complaint_type + "</div>"
               div += `<button id='clik'  onclick = "myFunc()">`+ `What did the Police Do?` + "</button>"
               div += "<div class=`resolution`>" + item.resolution_description + "</div>"                         
               
            } ) 
               document.getElementById("container").innerHTML = div;
            
         
         }).catch(err => console.log(err))
           

      }  else if (e.target.id === 'queens') { 
         fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=QUEENS&agency=NYPD&$limit='+ limit).then(response => response.json()).then(users => { 
            
            let div = "";
            users.forEach ((item) => {                                            
               
               div +=  "<div>" + item.complaint_type + "</div>"
               div += `<button id='clik'  onclick = "myFunc()">`+ `What did the Police Do?` + "</button>"
               div += "<div class=`resolution`>" + item.resolution_description + "</div>"                         
               
            } ) 
               document.getElementById("container").innerHTML = div;
            
         
         }).catch(err => console.log(err))
      }  else if (e.target.id === 'staten_island') { 
         fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=STATEN ISLAND&agency=NYPD&$limit='+ limit).then(response => response.json()).then(users => { 
            
            let div = "";
            users.forEach ((item) => {                                            
               
               div +=  "<div>" + item.complaint_type + "</div>"
               div += `<button id='clik'  onclick = "myFunc()">`+ `What did the Police Do?` + "</button>"
               div += "<div class=`resolution`>" + item.resolution_description + "</div>"                         
               
            } ) 
               document.getElementById("container").innerHTML = div;
            
         
         }).catch(err => console.log(err))
      

      }      



    } // end of function

      function myFunc() {
        
       let  b = document.querySelector(`#clik + div`);
         if (b.style.display === `none`) {
           b.style.display = `block`;
         } else {
           b.style.display = `none`;
         }
       }
  

 

choices.forEach(choice => choice.addEventListener('click', findBorough))