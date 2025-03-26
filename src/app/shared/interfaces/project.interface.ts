import { Country, State, Town } from './location.interface';

export interface Project {
  id: string;
  name: string;
  description: string;
  images: string[];
  price_usd: string;
  price_mxn: string;
  amenities: string[];
  url_video: string;
  url_map: string;
  location: string;
  country: Country;
  state: State;
  town: Town;
}

export interface OriginalData {
  id: string;
  name_es: string;
  name_en: string;
  description_es: string;
  description_en: string;
  images: string[];
  price_usd: string;
  price_mxn: string;
  amenities_es: string[];
  amenities_en: string[];
  url_video: string;
  url_map: string;
  location_es: string;
  location_en: string;
  country: Country;
  state: State;
  town: Town;
}
