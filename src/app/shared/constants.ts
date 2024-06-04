export const constants = {
    MEDICINES_TITLE: "Gestion des médicaments",
    MEDICINES: "Médicaments",
    CABINETS_TITLE: "Gestion des cabinets et cliniques",
    CABINETS: "Cabinets et cliniques",
    ANTECEDENTS_TITLE: "Gestion des antécédents",
    ANTECEDENTS: "Antécédents",
    BILANTS_TITLE: "Gestion des examens et bilans",
    BILANS: "Examens et bilans",
    PTIS_TITLE: "Gestion des PTI",
    PTIS: "PTI",
    MOTIFS_TITLE: "Gestion des motifs",
    MOTIFS: "Motifs",
    CANVAS_TITLE: "Gestion des canvas et templates",
    CANVAS: "Canvas et templates",
    CREATE_ELEMENT: "Créer",
    UPDATE_ELEMENT: "Modifier",
    LOADING: "Chargement en cours",
    CUSTOM_MODULES: "Form dynamique",
    PATIENTS: "Patients",
    USERS: "Utilisateurs",
    PTSI: "PTSI",
    CONSULTATIONS: "Consultations",
    WOUND: "Plaie",
    PLAIES: "Plaies"
};

export const custom_module_field_types = [
    "text",
    "select",
    "multi-select",
    "long-text"
];

export const cities = [
    "Casablanca",
    "Rabat",
    "Fès",
    "Tanger",
    "Marrakech",
    "Meknès",
    "Salé",
    "Témara",
    "Agadir",
    "Laâyoune",
    "Oujda",
    "Kénitra",
    "Mohammedia"
];

export const cabinets_types = [
    "cabinet",
    "clinique",
    "polyclinique"
];

export const canvas_types = [
    "Ordonnance médicale",
    "Ordonnance chirurgicale",
    "PT",
    "Bilan",
    "Lettre d'arrête de travail",
    "Certificat médical",
    "Lettre d'orientation"
];
export const canvas_account_types = [
    "Médcin",
    "Infirmier"
];

export const medicines_types = [
    "Plaie",
    "Hors plaie"
];

export const specialities = [
    "anesthésiologie",
    "andrologie",
    "cardiologie",
    "chirurgie",
    "cardiaque",
    "chirurgie",
    "esthétique,",
    "plastique",
    "et",
    "reconstructive",
    "chirurgie",
    "générale",
    "chirurgie",
    "maxillo-faciale",
    "chirurgie",
    "pédiatrique",
    "chirurgie",
    "thoracique",
    "chirurgie",
    "vasculaire",
    "neurochirurgie",
    "dermatologie",
    "endocrinologie",
    "gastro-entérologie",
    "gériatrie",
    "gynécologie",
    "hématologie",
    "hépatologie",
    "infectiologie",
    "médecine",
    "aiguë",
    "médecine",
    "du",
    "travail",
    "médecine",
    "générale",
    "médecine",
    "interne",
    "médecine",
    "nucléaire",
    "médecine",
    "palliative",
    "médecine",
    "physique",
    "médecine",
    "préventive",
    "néonatologie",
    "néphrologie",
    "neurologie",
    "odontologie",
    "oncologie",
    "obstétrique.",
    "ophtalmologie.",
    "orthopédie.",
    "Oto-rhino-laryngologie.",
    "pédiatrie.",
    "pneumologie.",
    "psychiatrie.",
    "radiologie.",
    "radiothérapie.",
    "rhumatologie",
    "urologie"
];

export const antecedents_types = [
    "Pathologique",
    "Chirurgicale",
    "Allergies",
    "médicaments",
    "Gynéco-obstétrique",
    "Urogénitaux",
    "Paraclinique",
    "Activité",
    "sexuelle",
    "Hygiéno-diététique"
];

export const motifs_types = [
    "Général et non spécifié",
    "Sang, syst. hématop/immunol.",
    "Syst. Digestif",
    "Oeil",
    "Oreille",
    "Cardio-vasculaire",
    "Ostéo-articulaire",
    "Neurologique",
    "Psychologique",
    "Peau",
    "Respiratoire",
    "Métabol., nutrit.,endocrinien",
    "Système Urinaire",
    "Grossesse, accouchement et PF",
    "Syst.génital féminin et sein",
    "Syst. génital masculin et sein",
    "Social"
];

export const bilans_types = [
    "Biologique",
    "Radiologique"
];

export const prescriptions_types = [
    "Médicale",
    "Chirurgicale"
];

export const ptis_etiologies = [
    "Préventive",
    "Curative",
    "Corrective"
];

export const family_situation = [
    "Célibataire",
    "Marié(e)",
    "Veuf(ve)",
    "Divorcé(e)"
];

export const wound_colorations = [
    "Nécrose",
    "Bourgeonnement",
    "Fibrine",
    "Epidermisation",
    "Infection"
];

export const wound_coloration_codes = {
    "Nécrose": "#555556",
    "Bourgeonnement": "#FF2E00",
    "Fibrine": "#FFE974",
    "Epidermisation": "#FF98C9",
    "Infection": "#C5E4D9"
};

export const wound_phases = [
    "Epidermisation",
    "Nécrose",
    "Bourgeonnement",
    "Fibrine"
];

export const wound_steps = {
    "Epidermisation": ["Vasculaire", "Epithéliale", "Remodelage"],
    "Nécrose": ["Plus noirâtre", "Moins noirâtre"],
    "Bourgeonnement": ["Plus Granulation", "Moins Granulation"],
    "Fibrine": ["Plus fibrineuse", "<M>oins fibrineuse"]
};


export const wound_stades = [
    "Sèche",
    "Exsudative",
    "Cavitaire",
    "Infectée",
    "Hémorragique",
    "Atone"
];

export const wound_tissus = [
    "Molle",
    "Fibrineux",
    "Sèche"
];


export const wound_humidity = [
    "Sèche",
    "Très sèche",
    "Humide",
    "Très humide"
];

export const genders = [
    "Male",
    "Female"
];

export const blood_types = [
    "O+",
    "O-",
    "A+",
    "A-",
    "B+",
    "B-",
    "AB+",
    "AB-"
];

export const wounds_type = [
    "Chronique",
    "Aigue"
];

export const etiologies = [
    "Prévention",
    "Curation",
    "Correction"
];

export const wounds_zones = [
    "Visage",
    "Cou",
    "Poitrine",
    "Ventre",
    "Bras",
    "Avant-bras",
    "Main",
    "Hanches",
    "Genou",
    "Jambe",
    "Pied",
    "Tête",
    "Nuque",
    "Dos partie supérieure",
    "Dos partie inférieure",
    "Coude",
    "Fesses",
    "Cuisse",
    "Mollet",
    "Talon"
];

export const wounds_zones_classes = {
    "Visage": "face",
    "Cou": "neck",
    "Poitrine": "chest",
    "Ventre": "stomach",
    "Bras": "arm",
    "Avant-bras": "forearm",
    "Main": "hand",
    "Hanches": "hips",
    "Genou": "knee",
    "Jambe": "leg",
    "Pied": "foot",
    "Tête": "head",
    "Nuque": "nape",
    "Dos partie supérieure": "upper-back",
    "Dos partie inférieure": "lower-back",
    "Coude": "elbow",
    "Fesses": "buttocks",
    "Cuisse": "thigh",
    "Mollet": "calf",
    "Talon": "heel"
};

export const duration_types = [
    "Jour",
    "Semaine",
    "Mois",
    "Année"
];


export const users_types = {
    "doctor": "Medecin",
    "admin": "Admin",
    "practitioner": "Praticien"
};