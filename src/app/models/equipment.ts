export class Equipment{
equipmentId: number;
equipmentName: string;
description: string;
imageUrl: string;

constructor(equipmentId: number, equipmentName: string, description: string, imageUrl: string) {
    this.equipmentId = equipmentId;
    this.equipmentName = equipmentName;
    this.description = description;
    this.imageUrl = imageUrl;
}
}