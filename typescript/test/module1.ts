// export const COMPANY = "SMM";

// export interface IdentityValidate {
// 	isSMMStaff(s: string): boolean;
// }

// export class ErpIdentityValidate implements IdentityValidate{
// 	isSMMStaff(erp: string) {
// 		return 
// 	}
// }

// interface
interface FullName {
	firstName: string;
	lastName: string;
}

function printLabel(name: FullName) {
	console.log(`${name.firstName}   ${name.lastName}`)
}

printLabel({firstName: "wang", lastName: "weiwei"})