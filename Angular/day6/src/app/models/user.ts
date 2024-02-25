export interface IUser {
  fullName: string;
  email: string;
  mobileNumbers: string[];
  address: {
    city: string;
    postalCode: string;
    street: string;
  };
  password: string;
}
