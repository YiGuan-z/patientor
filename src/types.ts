//set Diagnosis and latin and code
export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}
//set Patient Gender enmu
export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other"
}
//set Patient infomation
export interface Patient {
  id: string;
  name: string;
  occupation: string;
  gender: Gender;
  ssn?: string;
  dateOfBirth?: string;
}
