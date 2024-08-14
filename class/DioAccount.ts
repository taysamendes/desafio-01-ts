export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  getStatusOfAccount = (): boolean => {
    return this.status;
  }

  getBalance = (): string => {
    let msg: string = `Saldo em conta: R$ ${this.balance}`
    return msg;
  }

  deposit = (value: number, isLoan?: boolean): string => {
    let type: string = isLoan ? 'pegou um empréstimo de ' : 'depositou';
    let msg: string = `Voce ${type} R$ ${value}`;

    if (this.validateStatus()) this.balance += value;
    return msg;
  }

  withdraw = (value: number): string => {
    if (this.balance >= value) {
      this.balance -= value;
      return `Voce sacou R$ ${value}. ${this.getBalance()}`;
    }
    return `Operação de saque não finalizada. ${this.getBalance()}`;
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
