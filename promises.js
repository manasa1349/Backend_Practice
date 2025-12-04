const myPromise=new Promise((reslove,reject)=>{
    if(true){
        reslove("success call");
    }else{
        reject("api failed");
    }
});

myPromise.then((result)=>console.log("result:",result))
        .catch((error)=>console.log(error));


function getUserDetails(id,getSubjectDetails){
    return new Promise((resolve,reject)=>{
        console.log("fun1 called");
        resolve({userRoll:"123"});
    })
};

function getSubjectDetails(userRoll,getMarksDetails){
    return new Promise((resolve,reject)=>{
        console.log("fun2 called");
        resolve({userSubId:"en-1"});
    })
};

function getMarksDetails(userSubId){
    return new Promise((resolve,reject)=>{
        console.log("fun3 called");
        resolve("getting marks details by userSubId",userSubId);
    })
};

getUserDetails("123")
    .then((result)=>{
        return getSubjectDetails(result.userRoll)
    })
    .then((result)=>{
        return getMarksDetails(result.userSubId)
    })
    .then((result)=>{
        console.log(result)
    })
    .catch((error)=>{
        console.log(error)
    })
;