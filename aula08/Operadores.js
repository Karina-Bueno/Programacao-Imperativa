function PodeSubir1(altura, estaacompanhado) {
    let PodeSubir = False

    if (altura <=2.0 && altura >=1.20) {
        PodeSubir = true
    }
    
}
    if (altura >=1.20 && estaacompanhado) {
        PodeSubir = true
        return PodeSubir
        
    } 
    else {
        return false
        
    }

    function PodeSubir(altura, estaacompanhado) {
        return (altura <=2.0 && altura >=1.20) || (altura >=1.20 && estaacompanhado)
        
    }