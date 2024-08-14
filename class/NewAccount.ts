import { DioAccount } from "./DioAccount";

export class NewAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    depositNewAccouunt = (value: number): string => {
        return this.deposit((value + 10), false)
    }
}