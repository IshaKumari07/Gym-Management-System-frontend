export class Membership {
    membershipId: number;
    memberName: string;
    active: boolean;
    desc: string;
    payment: number;
    
    constructor(
      membershipId: number,
      memberName: string,
      active: boolean,
      desc: string,
      payment: number
    ) {
      this.membershipId = membershipId;
      this.memberName = memberName;
      this.active = active;
      this.desc = desc;
      this.payment = payment;
    }
  }
  