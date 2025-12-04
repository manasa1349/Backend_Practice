function getUserDetails(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({userRoll:"456"})
        },2000);
    })
};

const myfun=async()=>{
    console.log("123");
    const result=await getUserDetails();
    console.log(result);
    console.log("789");
};

myfun();