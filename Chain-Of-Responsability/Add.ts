import { Handler } from './Handler';

export class AddHandler implements Handler {
	private nextHandler: Handler;

	setNextHandler(nextHandler: Handler): void {
		this.nextHandler = nextHandler;
	}

	handle(firstNumber: number, secondNumber: number, operation: string): void {
		if (operation === 'add') {
			const result = firstNumber + secondNumber;
			console.log(`Adding : ${firstNumber} and ${secondNumber} : ${result}`);
		}else {
            this.nextHandler.handle(firstNumber, secondNumber, operation)
        }
	}
}
