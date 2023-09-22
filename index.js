 let start = document.getElementById("start")
let hrs = document.getElementById("hrs")
 let mins = document.getElementById("mins")
 let secs = document.getElementById("secs")
 let millisecs = document.getElementById("millisecs")
   let milli = ""
    let sec = 0
  let min = 0
  let hr = 0
 function logic() {
    
      milli++ 
        if(milli < 9) {
             millisecs.innerHTML = "0" + milli
        }
         if(milli > 9) {
             millisecs.innerHTML =  milli
         }
       if(milli > 99) {
         milli = 0
       sec++
        secs.innerHTML = "0" + sec

       // millisecs.innerHTML  = "00" 
       }
          if(sec < 9) {
            secs.innerHTML = "0" + sec
          }
         if(sec > 9) {
             secs.innerHTML = sec
         }
           if(sec == 60) {
            sec = 0
              min++
               mins.innerHTML = "0" + min
                
           }
           if(min < 9) {
            mins.innerHTML = "0" + min
          }
              if(min > 9) {
                 mins.innerHTML = min
              }
              if(min == 60) {
                min = 0
                 hr++
                 hrs.innerHTML = "0" + hr
                
              }
              if(hr < 9) {
                hrs.innerHTML = "0" + hr
              }
                 if(hr > 9) {
                     hrs.innerHTML = hr
                 }
         
       
                }


       start.addEventListener("click",function(){
   timeinterval = setInterval(logic, 10)
       })

 function pause() {

    clearInterval(timeinterval)
    
  }

    function reset() {
        clearInterval(timeinterval)
        milli = 0
         sec = 0
          min = 0
          hr = 0
           millisecs.innerHTML = "0" + milli
           secs.innerHTML = "0" + sec
           mins.innerHTML = "0" + min
           hrs.innerHTML = "0" + hr
            
    }

  

   