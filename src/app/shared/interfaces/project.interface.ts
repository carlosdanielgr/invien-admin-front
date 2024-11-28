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
  advisor: Advisor;
}

export interface OriginalData {
  id: string;
  name_es: string;
  name_en: string;
  description_es: string;
  description_en: string;
  images: string[];
  price: string;
  measure: string;
  rooms: number;
  bathrooms: number;
  garage: number;
  details_es: string;
  details_en: string;
  amenities_es: string[];
  amenities_en: string[];
  url_video: string;
  url_map: string;
  location_es: string;
  location_en: string;
  pdf: string;
  advisor: Advisor;
}

export interface Advisor {
  id: string;
  name: string;
  phone: string;
  email: string;
  image: string;
}
