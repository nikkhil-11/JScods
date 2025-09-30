 function outer (){
        const a = 10;
        function inner(){
            console.log(a);
            
        }
        inner()
    }
    outer()