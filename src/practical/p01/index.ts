import axios from "axios";

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

type User = {
  id: number;
  name: string;
  phone: string;
  address: Address;
};

export async function getPostalAddress(): Promise<User[]> {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");

  return res.data.map((user: any) => ({
    id: user.id,
    name: user.name,
    phone: user.phone,
    address: user.address,
  }));
}
