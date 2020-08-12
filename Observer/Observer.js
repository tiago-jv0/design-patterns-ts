var Observable = /** @class */ (function () {
    function Observable() {
        this.observers = [];
        this.state = '';
    }
    Observable.prototype.setNewState = function (newState) {
        this.state = newState;
        this.notifyAll();
    };
    Observable.prototype.addObserver = function (observer) {
        this.observers.push(observer);
    };
    Observable.prototype.removeObserver = function (observerToBeDeleted) {
        this.observers = this.observers.filter(function (observer) { return observer !== observerToBeDeleted; });
    };
    Observable.prototype.notifyAll = function () {
        var _this = this;
        this.observers.forEach(function (observer) {
            observer.update(_this.state);
        });
    };
    return Observable;
}());
var Observer = /** @class */ (function () {
    function Observer() {
    }
    Observer.prototype.update = function (state) {
        console.log(state);
    };
    return Observer;
}());
var subject = new Observable();
var observerNumberOne = new Observer();
var observerNumberTwo = new Observer();
subject.addObserver(observerNumberOne);
subject.addObserver(observerNumberTwo);
subject.setNewState('Some new state');
