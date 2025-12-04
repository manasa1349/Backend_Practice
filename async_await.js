function getUserDetails(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({userRoll:"456"})
            console.log(id)
        },2000);
    })
};

const myfun=async()=>{
    console.log("123");
    const result=await getUserDetails(555);
    console.log(result);
    console.log("789");
};

myfun();