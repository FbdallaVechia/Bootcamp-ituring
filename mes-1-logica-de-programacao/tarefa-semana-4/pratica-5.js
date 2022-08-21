function ordenando (lista) {
    let ordem = lista.sort(function(a, b){
         return a - b
     })
     return ordem
 }
 
 
 console.log(ordenando ([4, 9, 7, 1, 8, 12]))