function receivesAFunction(spy) {
  // body...
  spy()
}
function returnsANamedFunction() {
  // body...
    return function x(){
    //console.log("Fuck her !")
  }
}
function returnsAnAnonymousFunction() {
  // body...
  return function(){}
}