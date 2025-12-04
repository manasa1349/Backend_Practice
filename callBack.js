function getUserDetails(id,getSubjectDetails){
    console.log("getting user details by user Id",id);
    getSubjectDetails({userRoll:"678"});
};

function getSubjectDetails(userRoll,getMarksDetails){
    console.log("getting subject details by userRoll",userRoll);
    getMarksDetails({userSubId:"en-1"});
};

function getMarksDetails(userSubId){
    console.log("getting marks details by userSubId",userSubId);
};

getUserDetails("123",function(userRoll){
    getSubjectDetails(userRoll,function(userSubId){
        getMarksDetails(userSubId)
    })
});