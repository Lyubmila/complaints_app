      console.log("hello")
      let choices = document.querySelectorAll('.choice')
      
      function findBorough (e) {  // find complaints by borough
       clearScreen();   // remove all elements after each button push
      let limit = Number(document.getElementById('comps').value);
       
       if (limit == '')   limit = 10
         
       if (e.target.id === 'brooklyn'){
        // fetch data according to borough, agemcy=NYPD, order by complaint type, limit=number of complaints to show      
         fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=BROOKLYN&agency=NYPD&$limit='+ limit).then(response => response.json()).then(users => { 
            
            users.forEach ((item) => {                                            
              // create the complaint elements
               const parentDiv = document.querySelector('#container')
               const newDiv= document.createElement("div");
               newDiv.className = "complaints"
               parentDiv.appendChild(newDiv)
               const spanEl = document.createElement('div')
               spanEl.className = 'type'
               spanEl.textContent = item.descriptor
               newDiv.appendChild(spanEl)
               const button = document.createElement('button')
               button.className='show'
               button.textContent="What did the Police Do?"
               newDiv.appendChild(button)
               const div3 = document.createElement('div')
               div3.className='hidden'
               div3.textContent = item.resolution_description
               newDiv.appendChild(div3)               
               console.log(item)
         
                            
            } ) 
            // add event listeners to each button
            const resolutions = document.querySelectorAll('.show')
            resolutions.forEach( reso =>{
                  reso.addEventListener("click",function(event) {  
                     let content = event.target.nextElementSibling; // target the element under the button 
                     if (content.style.display === "block") {
                     content.style.display = "none";
                     } else {
                     content.style.display = "block";
                     }

                  })
            })
                
            
         
         }).catch(err => console.log(err))
            
                           
       }  else if (e.target.id === 'bronx') {
         fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=BRONX&agency=NYPD&$limit='+ limit).then(response => response.json()).then(users => { 
            
            users.forEach ((item) => {                                            
              
               const parentDiv = document.querySelector('#container')
               const newDiv= document.createElement("div");
               newDiv.className = "complaints"
               parentDiv.appendChild(newDiv)
               const spanEl = document.createElement('div')
               spanEl.className = 'type'
               spanEl.textContent = item.descriptor
               newDiv.appendChild(spanEl)
               const button = document.createElement('button')
               button.className='show'
               button.textContent="What did the Police Do?"
               newDiv.appendChild(button)
               const div3 = document.createElement('div')
               div3.className='hidden'
               div3.textContent = item.resolution_description
               newDiv.appendChild(div3)               
               console.log(item)
         
                            
            } ) 

            const resolutions = document.querySelectorAll('.show')
            resolutions.forEach( reso =>{
                  reso.addEventListener("click",function(event) {  
                     let content = event.target.nextElementSibling; // target the next element 
                     if (content.style.display === "block") {
                     content.style.display = "none";
                     } else {
                     content.style.display = "block";
                     }

                  })
            })
                
            
         
         }).catch(err => console.log(err))
      }  else if (e.target.id === 'manhattan') { 
         fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=MANHATTAN&agency=NYPD&$limit='+ limit).then(response => response.json()).then(users => { 
            
           
            users.forEach ((item) => {                                            
              
               const parentDiv = document.querySelector('#container')
               const newDiv= document.createElement("div");
               newDiv.className = "complaints"
               parentDiv.appendChild(newDiv)
               const spanEl = document.createElement('div')
               spanEl.className = 'type'
               spanEl.textContent = item.descriptor
               newDiv.appendChild(spanEl)
               const button = document.createElement('button')
               button.className='show'
               button.textContent="What did the Police Do?"
               newDiv.appendChild(button)
               const div3 = document.createElement('div')
               div3.className='hidden'
               div3.textContent = item.resolution_description
               newDiv.appendChild(div3)               
               console.log(item)
         
                            
            } ) 

            const resolutions = document.querySelectorAll('.show')
            resolutions.forEach( reso =>{
                  reso.addEventListener("click",function(event) {  
                     let content = event.target.nextElementSibling; // target the next element 
                     if (content.style.display === "block") {
                     content.style.display = "none";
                     } else {
                     content.style.display = "block";
                     }

                  })
            })
            
         
         }).catch(err => console.log(err))
           

      }  else if (e.target.id === 'queens') { 
         fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=QUEENS&agency=NYPD&$limit='+ limit).then(response => response.json()).then(users => { 
            
            
            users.forEach ((item) => {                                            
              
               const parentDiv = document.querySelector('#container')
               const newDiv= document.createElement("div");
               newDiv.className = "complaints"
               parentDiv.appendChild(newDiv)
               const spanEl = document.createElement('div')
               spanEl.className = 'type'
               spanEl.textContent = item.descriptor
               newDiv.appendChild(spanEl)
               const button = document.createElement('button')
               button.className='show'
               button.textContent="What did the Police Do?"
               newDiv.appendChild(button)
               const div3 = document.createElement('div')
               div3.className='hidden'
               div3.textContent = item.resolution_description
               newDiv.appendChild(div3)               
               console.log(item)
         
                            
            } ) 

            const resolutions = document.querySelectorAll('.show')
            resolutions.forEach( reso =>{
                  reso.addEventListener("click",function(event) {  
                     let content = event.target.nextElementSibling; // target the next element 
                     if (content.style.display === "block") {
                     content.style.display = "none";
                     } else {
                     content.style.display = "block";
                     }

                  })
            })
             
         
         }).catch(err => console.log(err))
      }  else if (e.target.id === 'staten_island') { 
         fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=STATEN ISLAND&agency=NYPD&$limit='+ limit).then(response => response.json()).then(users => { 
            
            
              
            users.forEach ((item) => {                                            
              
               const parentDiv = document.querySelector('#container')
               const newDiv= document.createElement("div");
               newDiv.className = "complaints"
               parentDiv.appendChild(newDiv)
               const spanEl = document.createElement('div')
               spanEl.className = 'type'
               spanEl.textContent = item.descriptor
               newDiv.appendChild(spanEl)
               const button = document.createElement('button')
               button.className='show'
               button.textContent="What did the Police Do?"
               newDiv.appendChild(button)
               const div3 = document.createElement('div')
               div3.className='hidden'
               div3.textContent = item.resolution_description
               newDiv.appendChild(div3)               
               console.log(item)
         
                            
            } ) 

            const resolutions = document.querySelectorAll('.show')
            resolutions.forEach( reso =>{
                  reso.addEventListener("click",function(event) {  
                     let content = event.target.nextElementSibling;
                     if (content.style.display === "block") {
                     content.style.display = "none";
                     } else {
                     content.style.display = "block";
                     }

                  })
            })
               
            
         
         }).catch(err => console.log(err))
      
     }      

      document.getElementById('comps').value = ''  //reset input to none

    } // end of function

    function clearScreen () { // kill the starks
       const houseStark =document.getElementById('container')
       const starkChildren = houseStark.querySelectorAll('div')
       starkChildren.forEach(child => child.remove() )
    }

choices.forEach(choice => choice.addEventListener('click', findBorough))