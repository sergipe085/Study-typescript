interface UserData {
  name?: string,
  email: string,
  password: string,
  techs: Array<string | object>,
}

export default function createUser({ name, email, password }: UserData) {
  const user = {
    name,
    email,
    password,
  }

  return user;
}