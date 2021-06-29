function receivesAFunction (cb) {
    console.log(cb());
}
receivesAFunction(function() { return "Hello"})

const fun = () => 'hello'

function returnsANamedFunction(){
    return fun
}

function returnsAnAnonymousFunction(){
    return function(){return 'hello'}
}