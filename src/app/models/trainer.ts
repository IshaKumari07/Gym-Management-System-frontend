

export class Trainer {
  trainerId: number;
  trainerName: string;
  trainerEmail: string;
  trainerPhoneNumber: number;
  trainerSpecification: string;
  imageUrl: string ;
  
  constructor(trainerId: number, trainerName: string, trainerEmail: string, trainerPhoneNumber: number, trainerSpecification: string,imageUrl:string) {
      this.trainerId = trainerId;
      this.trainerName = trainerName;
      this.trainerEmail = trainerEmail;
      this.trainerPhoneNumber = trainerPhoneNumber;
      this.trainerSpecification = trainerSpecification;
      this.imageUrl=imageUrl;
  }
}
