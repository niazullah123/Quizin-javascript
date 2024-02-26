
    clickedPosition = document.querySelector('.clickedposition')
    clickedTime = document.querySelector('.clickedtime')
    document.onclick = (e) =>{
        let timenow = new Date()
        thishour = timenow.getHours()
        thismin = timenow.getMinutes()
        thissec = timenow.getSeconds()
        thismisec = timenow.getMilliseconds()
        clickedPosition.textContent = `Clicked Position: Y ${e.clientY} ,  X ${e.clientX}`
        clickedTime.textContent =`Clicked Time: ${thishour} Hours   ${thismin} Minutes  ${thissec} Second  ${thismisec} MilliSecond `
    }
