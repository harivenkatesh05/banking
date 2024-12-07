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

declare interface signInProps {
	email: string;
  	password: string;
}


declare type SignUpParams = {
	firstName: string;
	lastName: string;
	address1: string;
	city: string;
	state: string;
	postalCode: string;
	dateOfBirth: string;
	ssn: string;
	email: string;
	password: string;
};


declare interface getUserInfoProps {
	userId: string;
} 

declare interface FooterProps {
	user: User;
	type?: 'mobile' | 'desktop'
}	


declare interface SiderbarProps {
	user: User;
}
