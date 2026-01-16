import axios from "axios";

type Address = {
  street: string | null;
  suite: string | null;
  city: string | null;
  zipcode: string | null;
  geo: {
    lat: string | null;
    lng: string | null;
  } | null;
};

type UserResult = {
  id: number;
  name: string | null;
  phone: string | null;
  address: Address | null;
};

export async function addUser(newUserData: any): Promise<UserResult> {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  const users = res.data;

  const lastId = users.length > 0 ? users[users.length - 1].id : 0;

  return {
    id: lastId + 1,
    name: newUserData.name ?? null,
    phone: newUserData.phone ?? null,
    address: newUserData.address ?? null,
  
  }
}



