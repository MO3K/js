function sum(...arg) {
    var sum = 0;
    for (i = 0; i < arg.length; i++) {
        sum += arg[i];
    }
    return sum;
}

// console.log(sum(1, 2, 3, 4));
// Task 2;

var ninja1 = {
    whoAmI: function () {
        return this;
    }
};

var ninja2 = {
    whoAmI: ninja1.whoAmI
};

var identify = ninja2.whoAmI;

// console.log(ninja1.whoAmI() === ninja1);
// console.log(ninja2.whoAmI() === ninja1);

// console.log(identify() === ninja1);
// console.log(ninja1.whoAmI.call(ninja2) === ninja2);

//Task 3

function Ninja() {
    this.whoAmI = function () {
        return this;
    }.bind(this);
}

var ninja1 = new Ninja();
var ninja2 = {
    whoAmI: ninja1.whoAmI
};

// console.log(ninja1.whoAmI() === ninja1);
// console.log(ninja2.whoAmI() === ninja2);

//Task 4

function animateIt(elementId) {
    var elem = document.getElementById(elementId);
    var tick = 0;
    var timer = setInterval(function () {
        if (tick < 300) {
            elem.style.left = elem.style.top = tick + "px";
            tick = tick + 10;
            console.log(tick);
        }
        else {
            clearInterval(timer);
            console.log('tick = 300 ? ', tick === 300);
            console.log('elem ? ', elem);
            console.log('tiemr ? ', timer);
        }
    }, 100);
}
animateIt('box1');
animateIt('box2');