class Notifier {
	constructor() {}

	send(message: string): void {
		console.log(`The message is : ${message}`);

		console.log('Sending the message via email...');
	}
}

abstract class BaseDecorator implements Notifier {
	private wrappee: Notifier;

	constructor(wrappee: Notifier) {
		this.wrappee = wrappee;
	}

	send(message: string): void {
		this.wrappee.send(message);
	}
}

class SMSDecorator extends BaseDecorator {
	send(message: string): void {
		super.send(message);
		console.log('Sending the message via SMS...');
	}
}

class SlackDecorator extends BaseDecorator {
    send(message: string) : void {
        super.send(message);
        console.log('Sending the message via Slack...')
    }
}

let stack = new Notifier();
stack = new SMSDecorator(stack);
stack = new SlackDecorator(stack)
stack.send('Today I am a little busy, could you put the meeting forward ?');
