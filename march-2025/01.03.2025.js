/* function mask(cc) {
  
    let getArray = cc.split('')
    let newStringWith = ''
    let newStringWith2 = ''

    for (let i = getArray.length - 1; i >= 0; i--) {
       newStringWith += getArray[i]
    } 

    let saveResult =  newStringWith.slice(0, 4)
    for (let j = saveResult.length - 1; j >= 0; j--){
        newStringWith2 += saveResult[j]
    }


    return newStringWith2
    
}

console.log(mask('4556364607935616')) // '############5616 */
/* 
function mask(cc) {
    let saveNew = cc.split('').reverse().join('').slice(0, 4)
    let newResult = ''
    for (let i = 0; i < cc.length; i++){
        newResult += '*'
    }
    return saveNew
} */
 
function mask(cc){

    let newResult = ''
    let getReverse = cc.split('').reverse().join('')
    for (let j = 0; j <= getReverse.length; i++){
        
    }
    if (cc.length <= 4){
        return cc
    }else{
        for (let i = 0; i <= cc.length - 5; i++){
            newResult += '#'
            }
        }


      return newResult + getReverse.slice(0, 4) 

    }
