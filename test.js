//

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

const doSomething = function(t) {
    return new Promise(function(resolve,reject) { if (t) { wait(1000).then( () => {resolve(t);} ); } else {reject("hoge");} });
};

const trySomething = function() {
    return doSomething(1).then( m => {
        console.log("try ok:" + m);
        return doSomething(2);
    });
}

const startSomething = function() {
    return trySomething().then( m => {
        console.log("start ok:" + m);
        return doSomething(0);
    });
};

const req = startSomething();
req.then( () => {
    console.log("final");
}).catch( e => { console.log("err:" + e)});


