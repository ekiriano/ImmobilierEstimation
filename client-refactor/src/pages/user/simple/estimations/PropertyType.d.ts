export interface IApartmentProperty {
  _id: string;
  rue: string;
  code_postal: string;
  ville: string;
  surface: string;
  nombre_pieces: string;
  nombre_salle_bain: string;
  etage: string;
  nombre_etage_total: string;
  annee_construction: string;
  diagnostic_performance_energetique: string;
  etat_bien: string;
  luminosite: string;
  calme: string;
  qualite_appartement: string;
  proximite_transports: string;
  prix_estimation: string;
}

type ApartmentWID = Omit<IApartmentProperty, "_id">;

export interface IHouseProperty {
  _id: string;
  rue: string;
  code_postal: string;
  ville: string;
  surface_habitable: string;
  surface_totale_terrain: string;
  surface_habitable_constructible: string;
  nombre_pieces: string;
  nombre_salle_bain: string;
  nombre_niveaux: string;
  annee_construction: string;
  diagnostic_performance_energetique: string;
  etat_bien: string;
  qualite_maison: string;
  luminosite: string;
  calme: string;
  proximite_transports: string;
  qualite_toiture: string;
  prix_estimation: string;
}

type HouseWID = Omit<IHouseProperty, "_id">;
