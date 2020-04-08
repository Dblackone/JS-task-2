let data = 
        [
            {
                principal: 2500,
                time: 1.8
            },
            {
                principal: 1000,
                time: 5
            },
            {
                principal: 3000,
                time: 1
            },
            {
                principal: 2000,
                time: 3
            }
        ]
    console.log(data)
        function interestCalculator() {
            for (let obj of data) {   
                if (obj.principal>=2500 && obj.time>1 && obj.time<3){
                    return "rate = 3"
            } 
        else if (obj.principal>=2500 && obj.time>=3){    
           return "rate = 4"
            } 
        else if (obj.principal<2500 && obj.time<=1 ){    
            return "rate = 2"
            } 

        return "rate = 1"            
    }
}