interface Observer {
    update(state : string) : void
}

class Observable {
    private observers: Array<Observer> = []
    private state : string = ''
    constructor(){}

    setNewState(newState: string) {
        this.state = newState;
        this.notifyAll()
    }

    addObserver(observer : Observer) : void {
        this.observers.push(observer);
    }

    removeObserver(observerToBeDeleted : Observer) : void {
        this.observers = this.observers.filter((observer) => observer !== observerToBeDeleted )
    }

    notifyAll(){
        this.observers.forEach((observer) => {
            observer.update(this.state)
        })
    }
}

class Observer implements Observer {
    update(state: string) {
        console.log(state)
    }
}

const subject = new Observable();

const observerNumberOne = new Observer();
const observerNumberTwo = new Observer();

subject.addObserver(observerNumberOne);
subject.addObserver(observerNumberTwo);

subject.setNewState('Some new state')

subject.removeObserver(observerNumberOne);

subject.setNewState('Something')