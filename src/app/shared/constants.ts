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


export const medicines_variants = [
    "Pharma",
    "Parapharma"
];

export const medicines_categories = [
    {
        name: "Analgésiques et Anti-inflammatoires",
        sub_categories: [
            "Analgésiques d’action périphérique prépondérante",
            "Analgésiques d’action centrale prépondérante",
            "Antispasmodiques",
            "Anti-inflammatoires non stéroïdiens (AINS)",
            "Anti-inflammatoires stéroïdiens (Corticoïdes)"
        ]
    },
    {
        name: "Antibiotiques et Antibactériens",
        sub_categories: [
            "Bêta-lactamines",
            "Aminosides (Aminoglycosides)",
            "Macrolides et apparentés",
            "Antibiotiques ayant une action antistaphylococcique conservée",
            "Tétracyclines (Cyclines)",
            "Phénicolés",
            "Polypeptides cycliques (Polymyxines)",
            "Sulfamides et Diaminopyrimidines",
            "Quinolones",
            "Dérivés nitro-imidazolés",
            "Antibiotiques divers",
            "Autres antibactériens"
        ]
    },
    {
        name: "Antituberculeux et Antilépreux",
        sub_categories: [
            "Antituberculeux",
            "Antilépreux"
        ]
    },
    {
        name: "Antimycosiques",
        sub_categories: [
            "Antifongiques peu ou pas résorbés par voie orale",
            "Antifongiques ayant une action systémique",
            "Antifongiques à usage local",
            "Antifongiques à usage gynécologique"
        ]
    },
    {
        name: "Antiviraux",
        sub_categories: [
            "Antiviraux généraux actifs sur le VIH (Antirétroviraux)",
            "Autres antiviraux généraux",
            "Antiviraux à usage local"
        ]
    },
    {
        name: "Cardiologie",
        sub_categories: [
            "Bêta-bloquants",
            "Dérivés nitrés",
            "Sydnonimines",
            "Activateurs des canaux potassiques",
            "Agents ionotropes ou tonicardiaques",
            "Diurétiques",
            "Antagonistes de l’angiotensine II (ARA II / Sartans)",
            "Inhibiteurs calciques",
            "Antihypertenseurs vasodilatateurs",
            "Antihypertenseurs d’action centrale",
            "Antiarythmiques",
            "Correcteurs des bradycardies",
            "Correcteurs des hypotensions",
            "Anti-ischémiques",
            "Veinotropes et antihémorroïdaires",
            "Médicaments de l’hypertension artérielle pulmonaire (HTAP)",
            "Divers"
        ]
    },
    {
        name: "Dermatologie",
        sub_categories: [
            "Dermocorticoïdes (Corticoïdes percutanés)",
            "Antiacnéiques",
            "Médicaments des affections du cuir chevelu",
            "Antiseptiques à usage externe",
            "Antibiotiques à usage local en dermatologie",
            "Antiviraux à usage local en dermatologie (Antiherpétiques)",
            "Agents de détersion des plaies et cicatrisants",
            "Kératolytiques, réducteurs et antipsoriasiques",
            "Médicaments agissant sur la pigmentation",
            "Autres médicaments utilisés en dermatologie"
        ]
    },
    {
        name: "Diététique et Nutrition",
        sub_categories: [
            "Éléments de diététique et nutrition",
            "Diététique pharmaceutique",
            "Médicaments utilisés dans les surcharges pondérales",
            "Orexigènes (stimulants de l’appétit)",
            "Produits divers",
            "Nutrition artificielle"
        ]
    },
    {
        name: "Endocrinologie",
        sub_categories: [
            "Hormones thyroïdiennes et antithyroïdiennes",
            "Hormones surrénaliennes et anticortisoliques",
            "Antioestrogènes",
            "Androgènes",
            "Antiandrogènes",
            "Antigonadotropes",
            "Agonistes de la LH-RH (Analogues de la Gn-RH)",
            "Inhibiteurs de l’hormone de croissance",
            "Hormone de croissance (GH)",
            "Inhibiteurs de la sécrétion de prolactine",
            "Analogues de l’hormone antidiurétique (Desmopressine)",
            "Inhibiteurs de la sécrétion de parathormone (PTH)",
            "Produits divers"
        ]
    },
    {
        name: "Gastro-entérologie et Hépatologie",
        sub_categories: [
            "Antireflux gastro-œsophagien",
            "Antiémétiques",
            "Antiulcéreux",
            "Antidiarrhéiques",
            "Antiinfectieux intestinaux",
            "Antiinflammatoires coliques",
            "Laxatifs (accélérateurs du transit intestinal)",
            "Pansements gastriques",
            "Pansements gastro-intestinaux",
            "Extraits pancréatiques",
            "Médicaments des infections hépato-biliaires",
            "Médicaments utilisés en soins intensifs"
        ]
    },
    {
        name: "Gynécologie obstétrique et contraception",
        sub_categories: [
            "Contraception",
            "Interruption de la grossesse",
            "Œstrogènes, progestérone et progestatifs de synthèse",
            "Inducteurs de l’ovulation",
            "Ocytociques",
            "Utérorelaxants",
            "Anti-infectieux locaux à usage gynécologique",
            "Autres produits"
        ]
    },
    {
        name: "Hématologie",
        sub_categories: [
            "Antianémiques",
            "Anticoagulants et antithrombotiques",
            "Antiagrégants plaquettaires",
            "Thrombolytiques",
            "Hémostatiques généraux",
            "Autres médicaments"
        ]
    },
    {
        name: "Immunologie et Allergologie",
        sub_categories: [
            "Antihistaminiques",
            "Immunodépresseurs",
            "Inhibiteurs de la C1 estérase",
            "Immunostimulants divers"
        ]
    },
    {
        name: "Médicaments des troubles métaboliques",
        sub_categories: [
            "Troubles de la glycorégulation",
            "Troubles du métabolisme des lipides",
            "Troubles du métabolisme du potassium",
            "Troubles du métabolisme phosphocalcique",
            "Vitamines",
            "Apports d’eau, d’ions et d’oligo-éléments",
            "Médicaments de troubles métaboliques rares"
        ]
    },
    {
        name: "Neurologie",
        sub_categories: [
            "Analgésiques spécifiques de certaines douleurs rebelles",
            "Antiépileptiques",
            "Antimigraineux",
            "Antiparkinsoniens",
            "Produits utilisés dans le syndrome des jambes sans repos",
            "Antioedémateux cérébraux",
            "Anticholinestérasiques utilisés dans la myasthénie",
            "Produits utilisés dans la maladie d’Alzheimer",
            "Produits utilisés dans la sclérose latérale amyotrophique",
            "Antispastiques",
            "Toxines botuliques",
            "Immunomodulateurs utilisés dans la sclérose en plaques",
            "Autres médicaments"
        ]
    },
    {
        name: "Ophtalmologie",
        sub_categories: [
            "Collyres d’examen et mydriatiques",
            "Anti-infectieux locaux, cicatrisants, antioedémateux cornéens",
            "Antiviraux locaux en ophtalmologie",
            "Antiglaucomateux",
            "Médicaments divers utilisés en ophtalmologie"
        ]
    },
    {
        name: "Oto-rhino-laryngologie",
        sub_categories: [
            "Décongestionnants ORL (Vasoconstricteurs ORL)",
            "Autres médicaments utilisés par voie nasale",
            "Gouttes auriculaires",
            "Antivertigineux"
        ]
    },
    {
        name: "Parasitologie",
        sub_categories: [
            "Antifongiques",
            "Médicaments des protozooses",
            "Antihelminthiques",
            "Antiparasitaires d’usage externe",
            "Produits divers"
        ]
    },
    {
        name: "Pneumologie",
        sub_categories: [
            "Bronchodilatateurs et antiasthmatiques",
            "Fluidifiants ou Mucolytiques",
            "Analeptiques respiratoires",
            "Antitussifs",
            "Autres médicaments utilisés en pneumologie"
        ]
    },
    {
        name: "Psychiatrie",
        sub_categories: [
            "Anxiolytiques (Tranquillisants dits mineurs)",
            "Hypnotiques",
            "Antidépresseurs (Thymoanaleptiques)",
            "Normothymiques (Thymorégulateurs)",
            "Neuroleptiques (Tranquillisants dits majeurs)",
            "Psychostimulants (Nooanaleptiques)",
            "Antiasthéniques divers",
            "Psychotropes divers non classables",
            "Médicaments utilisés contre les toxicomanies"
        ]
    },
    {
        name: "Réanimation et toxicologie",
        sub_categories: [
            "Apport d’eau, d’ions et d’oligo-éléments",
            "Solutés de remplissage vasculaire",
            "Nutrition entérale et parentérale",
            "Traitements utilisés dans les intoxications",
            "Divers"
        ]
    },
    {
        name: "Rhumatologie",
        sub_categories: [
            "Analgésiques et anti-inflammatoires",
            "Troubles de métabolisme phosphocalcique",
            "Antigoutteux et Hypouricémiants",
            "Traitements des ostéopathies",
            "Traitements de fond de la polyarthrite rhumatoïde",
            "Myorelaxants et antispastiques",
            "Enzymes utilisés pour la destruction des hernies discales",
            "Antiarthrosiques symptomatiques d’action lente",
            "Médicaments divers"
        ]
    },
    {
        name: "Stomatologie",
        sub_categories: [
            "Médicaments anti-infectieux locaux",
            "Prévention des caries dentaires (fluor en stomatologie)",
            "Correcteurs des hyposialies et xérostomies",
            "Produits utilisés dans les aphtes buccaux",
            "Produits utilisés dans les parodontopathies"
        ]
    },
    {
        name: "Urologie",
        sub_categories: [
            "Antibactériens et antiseptiques urinaires",
            "Modificateurs du pH urinaire",
            "Traitements des lithiases urinaires",
            "Médicaments de l’adénome prostatique",
            "Médicaments de la vessie instable",
            "Médicaments antiénurétiques",
            "Médicaments des impuissances",
            "Autres médicaments"
        ]
    },
    {
        name: "Vaccins, immunoglobulines, sérothérapie",
        sub_categories: [
            "Vaccins",
            "Immunoglobulines humaines d’origine plasmatique",
            "Sérums hétérologues d’origine équine",
            "Divers"
        ]
    },
    {
        name: "Cancérologie",
        sub_categories: [
            "Antimétabolites",
            "Alkylants",
            "Intercalants",
            "Médicaments interagissant avec la tubuline",
            "Agents différenciateurs",
            "Anticorps monoclonaux et radio-isotopes en cancérologie",
            "Inhibiteurs du protéasome",
            "Anticancéreux divers",
            "Hormonothérapie en cancérologie",
            "Cytokines",
            "Cytoprotecteurs"
        ]
    },
    {
        name: "Anesthésiques locaux",
        sub_categories: [
            "Anesthésiques locaux injectables",
            "Anesthésiques locaux de surface (non injectables)"
        ]
    }
];