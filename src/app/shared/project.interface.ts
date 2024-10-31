export interface Project {
  id: string;
  name: string;
  description: string;
  image: string[];
  price: number;
  measure: string;
  rooms: number;
  bathrooms: number;
  garage: number;
  details: string;
  amenities: string[];
  url_video: string;
  url_map: string;
  location: string;
  adivsor: Advisor;
}

export interface Advisor {
  name: string;
  phone: string;
  email: string;
  image: string;
}
