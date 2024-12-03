export interface Locations {
  countries: Country[];
  states: State[];
  towns: Town[];
}

export interface Country {
  id: string;
  country_es: string;
  country_en: string;
}

export interface State {
  id: string;
  state_es: string;
  state_en: string;
}

export interface Town {
  id: string;
  town_es: string;
  town_en: string;
}
