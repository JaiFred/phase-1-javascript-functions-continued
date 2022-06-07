// code your solution here
/*function saturdayFun(msg="This Saturday, I want to") {
    return function(activity = "roller-skate!") {
    }
return ;
}
saturdayFun("This Saturday, I want to")("bathe my dog!")*/

function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(workActivity = 'go to the office'){
    return `This Monday, I will ${workActivity}.`
}

function wrapAdjective(highlight ="*") {
    const innerfunction = function(adjective = 'special'){
        return `You are ${highlight}${adjective}${highlight}!`
    }
    return innerfunction
}
wrapAdjective(`||`)('a dedicated programmer')('!')