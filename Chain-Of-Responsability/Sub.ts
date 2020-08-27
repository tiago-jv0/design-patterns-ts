import { Handler } from './Handler';

export class SubHandler implements Handler {
	private nextHandler: Handler;

	setNextHandler(nextHandler: Handler): void {
		this.nextHandler = nextHandler;
	}

	handle(firstNumber: number, secondNumber: number, operation: string): void {
		if (operation === 'sub') {
			const result = firstNumber - secondNumber;
			console.log(`Subtracting : ${firstNumber} and ${secondNumber} : ${result}`);
		}else {
            this.nextHandler.handle(firstNumber, secondNumber, operation)
        }
	}
}
