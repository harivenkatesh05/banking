declare interface User {
	id: string;
	email: string;
	firstName: string;
	lastName: string;
	name: string;
}


declare type Bank = {
	id: string;
	accountId: string;
	bankId: string;
};
  
declare interface CreditCardProps {
	account: Account;
	userName: string;
	showBalance?: boolean;
}

declare type Account = {
	id: string;
	currentBalance: number;
	name: string;
	mask: string;
};

declare interface RightSidebarProps {
	user : User
	accounts: Account[]
}
