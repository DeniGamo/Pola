leader = num =>{
    for(i = 1;i <= num;i++){
        if(i % 3 === 0){
            console.log("* * * * *")
        }else{
            console.log("* = = = *")
        }
    }
};

leader(5);
