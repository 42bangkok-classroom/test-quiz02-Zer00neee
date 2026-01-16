import axios from "axios";
import { get } from "node:http";

const res = await axios.get("https://jsonplaceholder.typicode.com/users");
type User = {
  id: number;
  name: string;
  phone: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  }
}

export function getPostalAddress(user: User): string {
  return `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`;
}

getPostalAddress();