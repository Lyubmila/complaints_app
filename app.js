
      console.log("hello")
      let choices = document.querySelectorAll('.choice')
      
      function findBorough (e) {  // find complaints by borough
       clearScreen();   // remove all elements after each button push
       let limit = Number(document.getElementById('comps').value);
       
       if (limit == '' || limit < 0 )   limit = 10
       
       
      
       if (e.target.id === 'brooklyn'){
         let itemCount = []
        // fetch data according to borough, agemcy=NYPD, order by complaint type, limit=number of complaints to show      
         fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=BROOKLYN&agency=NYPD&$limit='+ limit).then(response => response.json()).then(users => { 
            
            users.forEach ((item) => {                                            
              // create the complaint elements
               const parentDiv = document.querySelector('#container')
               const newDiv= document.createElement("div");
               newDiv.className = "complaints"
               parentDiv.appendChild(newDiv)
               const divKid = document.createElement('div')
               divKid.className = 'type'
               divKid.textContent = item.descriptor
               newDiv.appendChild(divKid)
               const divbut = document.createElement('div')
               divbut.className = 'buttoncontainer'
               newDiv.appendChild(divbut)
               const button = document.createElement('button')
               button.className='show'
               button.textContent="What did the Police Do?"
               divbut.appendChild(button)
               const div3 = document.createElement('div')
               div3.className='hidden'
               div3.textContent = item.resolution_description
               divbut.appendChild(div3) 
               const div4 = document.createElement('div')
               div4.className ="maps"
               div4.innerHTML = `<a href= "https://maps.google.com/?q= ${item.latitude} , ${item.longitude}"  target='_blank' >Click for Map</a> `
               newDiv.appendChild(div4)

               itemCount.push( item.descriptor)
                 
            
              } ) //end users foreach
            
            const freq = getFrequency(itemCount)             
               
             // Show frequency of complaints
             const complaintTimes = document.getElementById('frequency')
             let message = ''
             for (const property in freq){
                message += `${property} was complained about  ${freq[property]} times.<br>`
              }
              
             complaintTimes.innerHTML = message;

            
           
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
          let itemCount = []
         fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=BRONX&agency=NYPD&$limit='+ limit).then(response => response.json()).then(users => { 
            
            users.forEach ((item) => {                                            
              
               const parentDiv = document.querySelector('#container')
               const newDiv= document.createElement("div");
               newDiv.className = "complaints"
               parentDiv.appendChild(newDiv)
               const divKid = document.createElement('div')
               divKid.className = 'type'
               divKid.textContent = item.descriptor
               newDiv.appendChild(divKid)
               const divbut = document.createElement('div')
               divbut.className = 'buttoncontainer'
               newDiv.appendChild(divbut)
               const button = document.createElement('button')
               button.className='show'
               button.textContent="What did the Police Do?"
               divbut.appendChild(button)
               const div3 = document.createElement('div')
               div3.className='hidden'
               div3.textContent = item.resolution_description
               divbut.appendChild(div3) 
               const div4 = document.createElement('div')
               div4.className ="maps"
               div4.innerHTML = `<a href= "https://maps.google.com/?q= ${item.latitude} , ${item.longitude}"  target='_blank' >Click for Map</a> `
               newDiv.appendChild(div4)

               
               itemCount.push( item.descriptor)
         
                            
            } ) 

            const freq = getFrequency(itemCount)             
               
            // Show frequency of complaints
            const complaintTimes = document.getElementById('frequency')
            let message = ''
            for (const property in freq){
               message += `${property} was complained about  ${freq[property]} times.<br>`
            }
            
            complaintTimes.innerHTML = message;
            
               // add event listeners to buttons
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
          let itemCount = []
         fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=MANHATTAN&agency=NYPD&$limit='+ limit).then(response => response.json()).then(users => { 
            
           
            users.forEach ((item) => {                                            
              
               const parentDiv = document.querySelector('#container')
               const newDiv= document.createElement("div");
               newDiv.className = "complaints"
               parentDiv.appendChild(newDiv)
               const divKid = document.createElement('div')
               divKid.className = 'type'
               divKid.textContent = item.descriptor
               newDiv.appendChild(divKid)
               const divbut = document.createElement('div')
               divbut.className = 'buttoncontainer'
               newDiv.appendChild(divbut)
               const button = document.createElement('button')
               button.className='show'
               button.textContent="What did the Police Do?"
               divbut.appendChild(button)
               const div3 = document.createElement('div')
               div3.className='hidden'
               div3.textContent = item.resolution_description
               divbut.appendChild(div3) 
               const div4 = document.createElement('div')
               div4.className ="maps"
               div4.innerHTML = `<a href= "https://maps.google.com/?q= ${item.latitude} , ${item.longitude}"  target='_blank' >Click for Map</a> `
               newDiv.appendChild(div4)

               itemCount.push(item.descriptor)
         
                            
            } ) 
             
            const freq = getFrequency(itemCount)             
               
            // Show frequency of complaints
            const complaintTimes = document.getElementById('frequency')
            let message = ''
            for (const property in freq){
               message += `${property} was complained about  ${freq[property]} times.<br>`
             }
             
            complaintTimes.innerHTML = message;

            // add event listeners
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
         let itemCount = [] 
         fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=QUEENS&agency=NYPD&$limit='+ limit).then(response => response.json()).then(users => { 
            
            
            users.forEach ((item) => {                                            
              
               const parentDiv = document.querySelector('#container')
               const newDiv= document.createElement("div");
               newDiv.className = "complaints"
               parentDiv.appendChild(newDiv)
               const divKid = document.createElement('div')
               divKid.className = 'type'
               divKid.textContent = item.descriptor
               newDiv.appendChild(divKid)
               const divbut = document.createElement('div')
               divbut.className = 'buttoncontainer'
               newDiv.appendChild(divbut)
               const button = document.createElement('button')
               button.className='show'
               button.textContent="What did the Police Do?"
               divbut.appendChild(button)
               const div3 = document.createElement('div')
               div3.className='hidden'
               div3.textContent = item.resolution_description
               divbut.appendChild(div3) 
               const div4 = document.createElement('div')
               div4.className ="maps"
               div4.innerHTML = `<a href= "https://maps.google.com/?q= ${item.latitude} , ${item.longitude}"  target='_blank' >Click for Map</a> `
               newDiv.appendChild(div4)

               itemCount.push(item.descriptor)
         
                            
            } ) 

            const freq = getFrequency(itemCount)             
               
            // Show frequency of complaints
            const complaintTimes = document.getElementById('frequency')
            let message = ''
            for (const property in freq){
               message += `${property} was complained about  ${freq[property]} times.<br>`
             }
             
            complaintTimes.innerHTML = message;

            // add event listeners
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
         let itemCount = []
         fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=STATEN ISLAND&agency=NYPD&$limit='+ limit).then(response => response.json()).then(users => { 
            
            
              
            users.forEach ((item) => {                                            
              
               const parentDiv = document.querySelector('#container')
               const newDiv= document.createElement("div");
               newDiv.className = "complaints"
               parentDiv.appendChild(newDiv)
               const divKid = document.createElement('div')
               divKid.className = 'type'
               divKid.textContent = item.descriptor
               newDiv.appendChild(divKid)
               const divbut = document.createElement('div')
               divbut.className = 'buttoncontainer'
               newDiv.appendChild(divbut)
               const button = document.createElement('button')
               button.className='show'
               button.textContent="What did the Police Do?"
               divbut.appendChild(button)
               const div3 = document.createElement('div')
               div3.className='hidden'
               div3.textContent = item.resolution_description
               divbut.appendChild(div3) 
               const div4 = document.createElement('div')
               div4.className ="maps"
               div4.innerHTML = `<a href= "https://maps.google.com/?q= ${item.latitude} , ${item.longitude}"  target='_blank' >Click for Map</a> `
               newDiv.appendChild(div4)

               itemCount.push(item.descriptor)
         
                            
            } ) 

            const freq = getFrequency(itemCount)             
               
            // Show frequency of complaints
            const complaintTimes = document.getElementById('frequency')
            let message = ''
            for (const property in freq){
               message += `${property} was complained about  ${freq[property]} times.<br>`
             }
             
            complaintTimes.innerHTML = message;

            // add event listeners
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

      // return number of occurence of each complaint
      function getFrequency (arr) {
         const complaints = {};
         arr.forEach(item => {
            if(complaints[item]){
               complaints[item]++;
            }else{
               complaints[item] = 1;
            }
         });
         return complaints;
      };

choices.forEach(choice => choice.addEventListener('click', findBorough))


 
