export interface Locations {
  countries: Country[];
  states: State[];
  towns: Town[];
}

export interface Country {
  id: string;
  name_es: string;
  name_en: string;
}

export interface State {
  id: string;
  name: string;
}

export interface Town {
  id: string;
  name: string;
}
