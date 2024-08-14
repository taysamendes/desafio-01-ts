import { CompanyAccount } from './class/CompanyAccount'
import { NewAccount } from './class/NewAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log('peopleAccount => ',peopleAccount.deposit(200))
console.log('peopleAccount => ',peopleAccount)
console.log('peopleAccount => ',peopleAccount.withdraw(400))

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log('companyAccount => ', companyAccount.deposit(3900))
console.log('companyAccount => ', companyAccount.withdraw(300))
console.log('companyAccount => ', companyAccount.getLoan(1000))
console.log('companyAccount => ', companyAccount)

const newAccount: NewAccount = new NewAccount('Taysa Mendes', 30);
console.log('newAccount => ', newAccount.depositNewAccouunt(100));
console.log('newAccount => ', newAccount)