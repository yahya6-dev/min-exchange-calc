window.onload = function(){
     let sourceAmount = document.querySelector("#source-amounts")
     let source = document.getElementById("source")
     let text = document.getElementById("result")

     let target = document.querySelector("#target-currency")
     let targetAmount = document.getElementById("source-currency")

     document.querySelector("button").addEventListener("click", () => {
         let sources = [sourceAmount.value, source.value, target.value ]
         for (let field of sources){
             if (sources === "")
              return 
         if (source.value == "CNY"){
             let result = Math.round(sourceAmount.value * 0.14 * 100) / 100
             let formattedString = `${sourceAmount.value} ${source.value} =  ${result} USD `
             text.textContent = formattedString
             targetAmount.value = ""+result

         }
         if (source.value == "USD"){
             let result = Math.round(sourceAmount.value / 0.14)
             let formattedString  = `${sourceAmount.value} ${source.value} = ${result} CNY`
             text.textContent = formattedString
             targetAmount.value = result+""
         }
         

         }
     })

}