import axios from "axios";

type Address = {
  street: string ;
  suite: string ;
  city: string ;
  zipcode: string ;
  geo: {
    lat: string ;
    lng: string ;
  } ;
};

type UserResult = {
  id: number;
  name: string ;
  phone: string ;
  address: Address | null ;
};

export async function addUser(newUserData: any): Promise<UserResult> {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");



  return res.data = {
    name: newUserData.name,
    phone: newUserData.phone,
    address: newUserData.address ?? null,
  };
  }

