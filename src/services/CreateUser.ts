interface UserData {
  name?: string,
  email: string,
  password: string,
}

export default function createUser({ name, email, password }: UserData) {
  const user = {
    name,
    email,
    password,
  }

  return user;
}