export interface Handler {
    handle(firstNumber : number , secondNumber : number, operation : string) : void
    setNextHandler(handler : Handler) : void
}