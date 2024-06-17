export class Member {
    memberId: number;
    memberFirstName: string;
    memberLastName: string;
    memberEmail: string;
    membershipName: string;
    mobile: number;
    gender: string;

    constructor(
        memberId: number,
        memberFirstName: string,
        memberLastName: string,
        memberEmail: string,
        membershipName: string,
        mobile: number,
        gender: string
    ) {
        this.memberId = memberId;
        this.memberFirstName = memberFirstName;
        this.memberLastName = memberLastName;
        this.memberEmail = memberEmail;
        this.membershipName = membershipName;
        this.mobile = mobile;
        this.gender = gender;
    }
}
