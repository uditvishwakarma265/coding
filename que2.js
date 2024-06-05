//map


var arr=[{color:"red",price:100},{color:"red",price:200},
        {color:"blue",price:250},{color:"blue",price:300},
        {color:"black",price:650},{color:"red",price:500},
        {color:"skyblue",price:1050},{color:"black",price:1020}]

        const mall=arr.map((value,index)=>{
            return value.price+100;
        })

        console.log(mall);


//filters 

var arr=[{color:"red",price:100},{color:"red",price:200},
        {color:"blue",price:250},{color:"blue",price:300},
        {color:"black",price:650},{color:"red",price:500},
        {color:"skyblue",price:1050},{color:"black",price:1020}]

        var mall1=arr.filter((value,index)=>{
            return value.color == "red" && value.price <200;
        })

        console.log(mall1);

