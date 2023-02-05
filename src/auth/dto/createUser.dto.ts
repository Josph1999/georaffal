export class CreateUserDto {
  id: string;

  first_name: string;

  last_name: string;

  email: string;

  phone_number: string;

  created_at: Date;

  updated_at: Date;

  address: string;

  username: string;

  balance: number;

  password: string;
}

export default CreateUserDto;
