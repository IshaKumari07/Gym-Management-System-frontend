export class Offer {
    offerId: number;
    offerName: string;
    description: string;
    registrationdeadline: string;
    status: string;
    schedule: string;
    payment:number;
  
    constructor(
      offerId: number,
      offerName: string,
      description: string,
      registrationdeadline: string,
      status: string,
      schedule: string,
      payment:number
    ) {
      this.offerId = offerId;
      this.offerName = offerName;
      this.description = description;
      this.registrationdeadline = registrationdeadline;
      this.status = status;
      this.schedule = schedule;
      this.payment=payment;
    }
  }
  