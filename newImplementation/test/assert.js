function assert(arg0, arg1, testDescription){
    arg0 === arg1? success(testDescription): failed(arg0, arg1, testDescription);
}

function failed(arg0, arg1, testDescription){
    console.error("%s FAILED! :( - \nexpected: \n[%s] \ngiven: \n[%s]!",testDescription, arg1, arg0);
}

function success(testDescription){
    console.log("%s: OK! :D",testDescription);
}

module.exports = {assert, failed, success}