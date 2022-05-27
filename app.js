      console.log("hello")
      let choices = document.querySelectorAll('.choice')
      
      function findBorough (e) {  
          
      let limit = Number(document.getElementById('comps').value);
       
       if (limit == '')   limit = 10
         
       if (e.target.id === 'brooklyn'){
         
         fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=BROOKLYN&agency=NYPD&$limit='+ limit).then(response => response.json()).then(users => { 
            
            let div = "";
            users.forEach ((item) => {                                            
               
               div +=  "<div>" + item.complaint_type + "</div>"
               div += "<button class=show>"+ `What did the Police Do?` + "</button>"
               div += "<div class=hidden>" + item.resolution_description + "</div>"                         
      } ) 
               document.getElementById("container").innerHTML = div;            
         
         }).catch(err => console.log(err))
            
                           
      }  else if (e.target.id === 'bronx') {
         fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=BRONX&agency=NYPD&$limit='+ limit).then(response => response.json()).then(users => { 
            
            let div = "";
            users.forEach ((item) => {                                            
               
               div +=  "<div>" + item.complaint_type + "</div>"
               div += `<button class=show>`+ `What did the Police Do?` + "</button>"
               div += "<div class=hidden>" + item.resolution_description + "</div>"                         
               
            } ) 
               document.getElementById("container").innerHTML = div;
            
         
         }).catch(err => console.log(err))
      }  else if (e.target.id === 'manhattan') { 
         fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=MANHATTAN&agency=NYPD&$limit='+ limit).then(response => response.json()).then(users => { 
            
            let div = "";
            users.forEach ((item) => {                                            
               
               div +=  "<div>" + item.complaint_type + "</div>"
               div += `<button class=show>`+ `What did the Police Do?` + "</button>"
               div += "<div class=hidden>" + item.resolution_description + "</div>"                         
               
            } ) 
               document.getElementById("container").innerHTML = div;
            
         
         }).catch(err => console.log(err))
           

      }  else if (e.target.id === 'queens') { 
         fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=QUEENS&agency=NYPD&$limit='+ limit).then(response => response.json()).then(users => { 
            
            let div = "";
            users.forEach ((item) => {                                            
               
               div +=  "<div>" + item.complaint_type + "</div>"
               div += `<button class=show>`+ `What did the Police Do?` + "</button>"
               div += "<div class=hidden>" + item.resolution_description + "</div>"                         
               
            } ) 
               document.getElementById("container").innerHTML = div;
            
         
         }).catch(err => console.log(err))
      }  else if (e.target.id === 'staten_island') { 
         fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=STATEN ISLAND&agency=NYPD&$limit='+ limit).then(response => response.json()).then(users => { 
            
            let div = "";
            users.forEach ((item) => {                                            
               
               div +=  "<div>" + item.complaint_type + "</div>"
               div += `<button class=show >`+ `What did the Police Do?` + "</button>"
               div += "<div class=hidden >" + item.resolution_description + "</div>"                         
               
            } ) 
               document.getElementById("container").innerHTML = div;
            
         
         }).catch(err => console.log(err))
      
     }      

      document.getElementById('comps').value = ''  //reset input to 0

    } // end of function
 

choices.forEach(choice => choice.addEventListener('click', findBorough))