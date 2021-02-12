interface Fruta {
  nome: string,
  dataDeValidade: string,
}

interface UserData {
  name?: string,
  email: string,
  password: string,
  techs: Array<string | Fruta>,
}

export default function createUser({ name, email, password }: UserData) {
  const user = {
    name,
    email,
    password,
  }

  return user;
}