import { SubHandler } from './Sub';
import { AddHandler } from './Add';

const firstNumber = 5 ;
const secondNumber = 6;
const operation = 'sub';

const addHandler = new AddHandler()
const subHandler = new SubHandler()

addHandler.setNextHandler(subHandler);



addHandler.handle(firstNumber, secondNumber, operation)