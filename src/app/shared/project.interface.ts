export interface Project {
  id: string;
  name: string;
  description: string;
  images: string[];
  price: string;
  measure: string;
  rooms: number;
  bathrooms: number;
  garage: number;
  details: string;
  amenities: string[];
  url_video: string;
  url_map: string;
  location: string;
  pdf: string;
  adivsor: Advisor;
}

export interface Advisor {
  id: string;
  name: string;
  phone: string;
  email: string;
  image: string;
}
