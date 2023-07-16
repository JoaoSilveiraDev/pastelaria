const mais = document.getElementById("mais")
const menos = document.getElementById("menos")
const quantidade = document.getElementById("quantidade")
const mais2 = document.getElementById("mais2")
const menos2 = document.getElementById("menos2")
const quantidade2 = document.getElementById("quantidade2")
const mais3 = document.getElementById("mais3")
const menos3 = document.getElementById("menos3")
const quantidade3 = document.getElementById("quantidade3")
const mais4 = document.getElementById("mais4")
const menos4 = document.getElementById("menos4")
const quantidade4 = document.getElementById("quantidade4")
const mais5 = document.getElementById("mais5")
const menos5 = document.getElementById("menos5")
const quantidade5 = document.getElementById("quantidade5")
const mais6 = document.getElementById("mais6")
const menos6 = document.getElementById("menos6")
const quantidade6 = document.getElementById("quantidade6")
const mais7 = document.getElementById("mais7")
const menos7 = document.getElementById("menos7")
const quantidade7 = document.getElementById("quantidade7")
const mais8 = document.getElementById("mais8")
const menos8 = document.getElementById("menos8")
const quantidade8 = document.getElementById("quantidade8")
const mais9 = document.getElementById("mais9")
const menos9 = document.getElementById("menos9")
const quantidade9 = document.getElementById("quantidade9")
const mais10 = document.getElementById("mais10")
const menos10 = document.getElementById("menos10")
const quantidade10 = document.getElementById("quantidade10")
const mais11 = document.getElementById("mais11")
const menos11 = document.getElementById("menos11")
const quantidade11 = document.getElementById("quantidade11")
const mais12 = document.getElementById("mais12")
const menos12 = document.getElementById("menos12")
const quantidade12 = document.getElementById("quantidade12")
const mais13 = document.getElementById("mais13")
const menos13 = document.getElementById("menos13")
const quantidade13 = document.getElementById("quantidade13")
const mais14 = document.getElementById("mais14")
const menos14 = document.getElementById("menos14")
const quantidade14 = document.getElementById("quantidade14")
const valorFinal = document.getElementById("valorFinal")

var ma1 = 0
var ma2 = 0
var ma3 = 0
var ma4 = 0
var ma5 = 0
var ma6 = 0
var ma7 = 0
var ma8 = 0
var ma9 = 0
var ma10 = 0
var ma11 = 0
var ma12 = 0
var ma13 = 0
var ma14 = 0
var valor = 0

mais.addEventListener("click", ()=>{
    ma1++
    quantidade.value = ma1
    valor += 8
    valorFinal.innerHTML = `R$ ${valor}`
})
menos.addEventListener("click", ()=>{
    if(ma1>0){
        ma1--
        quantidade.value = ma1
        valor -= 8
        valorFinal.innerHTML = `R$ ${valor}`
    }
})
mais2.addEventListener("click", ()=>{
    ma2++
    quantidade2.value = ma2
    valor += 9
    valorFinal.innerHTML = `R$ ${valor}`
})
menos2.addEventListener("click", ()=>{
    if(ma2>0){
        ma2--
    quantidade2.value = ma2
    valor -= 9
    valorFinal.innerHTML = `R$ ${valor}`
    }
    
})
mais3.addEventListener("click", ()=>{
    ma3++
    quantidade3.value = ma3
    valor += 9
    valorFinal.innerHTML = `R$ ${valor}`
})
menos3.addEventListener("click", ()=>{
    if(ma3>0){
        ma3--
    quantidade3.value = ma3
    valor -= 9
    valorFinal.innerHTML = `R$ ${valor}`
    }
    
})
mais4.addEventListener("click", ()=>{
    ma4++
    quantidade4.value = ma4
    valor += 7
    valorFinal.innerHTML = `R$ ${valor}`
})
menos4.addEventListener("click", ()=>{
    if(ma4>0){
        ma4--
    quantidade4.value = ma4
    valor -= 7
    valorFinal.innerHTML = `R$ ${valor}`
    }
    
})
mais5.addEventListener("click", ()=>{
    ma5++
    quantidade5.value = ma5
    valor += 8
    valorFinal.innerHTML = `R$ ${valor}`
})
menos5.addEventListener("click", ()=>{
    if(ma5>0){
        ma5--
    quantidade5.value = ma5
    valor -= 8
    valorFinal.innerHTML = `R$ ${valor}`
    }
    
})
mais6.addEventListener("click", ()=>{
    ma6++
    quantidade6.value = ma6
    valor += 9
    valorFinal.innerHTML = `R$ ${valor}`
})
menos6.addEventListener("click", ()=>{
    if(ma6>0){
        ma6--
    quantidade6.value = ma6
    valor -= 9
    valorFinal.innerHTML = `R$ ${valor}`
    }
    
})
mais7.addEventListener("click", ()=>{
    ma7++
    quantidade7.value = ma7
    valor += 10
    valorFinal.innerHTML = `R$ ${valor}`
})
menos7.addEventListener("click", ()=>{
    if(ma7>0){
        ma7--
    quantidade7.value = ma7
    valor -= 10
    valorFinal.innerHTML = `R$ ${valor}`
    }
    
})
mais8.addEventListener("click", ()=>{
    ma8++
    quantidade8.value = ma8
    valor += 9
    valorFinal.innerHTML = `R$ ${valor}`
})
menos8.addEventListener("click", ()=>{
    if(ma8>0){
        ma8--
    quantidade8.value = ma8
    valor -= 9
    valorFinal.innerHTML = `R$ ${valor}`
    }
    
})
mais9.addEventListener("click", ()=>{
    ma9++
    quantidade9.value = ma9
    valor += 12
    valorFinal.innerHTML = `R$ ${valor}`
})
menos9.addEventListener("click", ()=>{
    if(ma9>0){
        ma9--
    quantidade9.value = ma9
    valor -= 12
    valorFinal.innerHTML = `R$ ${valor}`
    }
    
})
mais10.addEventListener("click", ()=>{
    ma10++
    quantidade10.value = ma10
    valor += 11
    valorFinal.innerHTML = `R$ ${valor}`
})
menos10.addEventListener("click", ()=>{
    if(ma10>0){
        ma10--
    quantidade10.value = ma10
    valor -= 11
    valorFinal.innerHTML = `R$ ${valor}`
    }
    
})
mais11.addEventListener("click", ()=>{
    ma11++
    quantidade11.value = ma11
    valor += 12
    valorFinal.innerHTML = `R$ ${valor}`
})
menos11.addEventListener("click", ()=>{
    if(ma11>0){
        ma11--
    quantidade11.value = ma11
    valor -= 12
    valorFinal.innerHTML = `R$ ${valor}`
    }
    
})
mais12.addEventListener("click", ()=>{
    ma12++
    quantidade12.value = ma12
    valor += 9
    valorFinal.innerHTML = `R$ ${valor}`
})
menos12.addEventListener("click", ()=>{
    if(ma12>0){
        ma12--
    quantidade12.value = ma12
    valor -= 9
    valorFinal.innerHTML = `R$ ${valor}`
    }
    
})
mais13.addEventListener("click", ()=>{
    ma13++
    quantidade13.value = ma13
    valor += 10
    valorFinal.innerHTML = `R$ ${valor}`
})
menos13.addEventListener("click", ()=>{
    if(ma13>0){
        ma13--
    quantidade13.value = ma13
    valor -= 10
    valorFinal.innerHTML = `R$ ${valor}`
    }
    
})
mais14.addEventListener("click", ()=>{
    ma14++
    quantidade14.value = ma14
    valor += 13
    valorFinal.innerHTML = `R$ ${valor}`
})
menos14.addEventListener("click", ()=>{
    if(ma14>0){
        ma14--
    quantidade14.value = ma14
    valor -= 13
    valorFinal.innerHTML = `R$ ${valor}`
    }
    
})