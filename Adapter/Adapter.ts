interface ITarget {
	request(): string;
}

class Target implements ITarget {
	public request(): string {
		return 'Target: The default target\'s behavior.';
	}
}

class Adaptee {
	public specificRequest(): string {
		return '.eetpadA eht fo roivaheb laicepS';
	}
}

class Adapter implements ITarget {
	constructor(private readonly adaptee: Adaptee) {}
	request(): string {
		return this.adaptee.specificRequest().split('').reverse().join('');
	}
}

const clientCode = (target: Target) : void => console.log(target.request()) 

console.log('Client: I can work just fine with the Target objects:');
const target: ITarget = new Target;
clientCode(target)

const adaptee : Adaptee = new Adaptee();
console.log('Client: The Adaptee class has a weird interface. See, I don\'t understand it:');
console.log(`Adaptee: ${adaptee.specificRequest()}`);


console.log('Client: But I can work with it via the Adapter:');
const adapter = new Adapter(adaptee);
clientCode(adapter);

