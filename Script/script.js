var linha = document.getElementById('linha')
var rome = document.getElementById('romaneio')

rome.addEventListener('change', function(){
    if(rome.checked){
        linha.disabled = true
    }else{
        linha.disabled = false
    }
})