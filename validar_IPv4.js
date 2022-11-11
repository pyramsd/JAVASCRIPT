function valid_ip(ip){
    try{
        ip = ip.split(".");
        let valid_nums = 0;
        for (let i of ip){
         if (i >= 0 && i <= 255){
            valid_nums += 1;
         }
        }
        if (valid_nums == 4){
            console.log(true);
        }else{
            console.log(false);
        }
    }
    catch (err){
        console.log(false);
    }
}

valid_ip("255.255.255.255");
