const groupes = [
  { id: "g1", nom: "2nd Bac - Math", cours: "Mathématiques" },
  { id: "g2", nom: "2nd Bac - PC", cours: "Physique-Chimie" },
  { id: "g3", nom: "1ère Bac - SVT", cours: "Sciences de la Vie et de la Terre" }
];

const eleves = [
  {
    id: "e101",
    prenom: "Youssef",
    nom: "Amrani",
    groupeId: "g1",
    telephoneParent: "+212661234567",
    absences: 1,
    notes: [16, 17.5, 15]
  },
  {
    id: "e102",
    prenom: "Salma",
    nom: "El Fassi",
    groupeId: "g1",
    telephoneParent: "0662987654",
    absences: 3,
    notes: [14, 12, 13]
  },
  {
    id: "e103",
    prenom: "Karim",
    nom: "Bennani",
    groupeId: "g1",
    telephoneParent: "+212707112233",
    absences: 0,
    notes: [18.5, 19, 17]
  },
  {
    id: "e104",
    prenom: "Amina",
    nom: "Chraibi",
    groupeId: "g1",
    telephoneParent: "0701445566",
    absences: 4,
    notes: [9.5, 10, 8.5]
  },
  {
    id: "e105",
    prenom: "Omar",
    nom: "Alami",
    groupeId: "g1",
    telephoneParent: "+212663998877",
    absences: 2,
    notes: []
  },
  {
    id: "e201",
    prenom: "Mehdi",
    nom: "Bouazzawi",
    groupeId: "g2",
    telephoneParent: "0664123987",
    absences: 0,
    notes: [15, 16]
  },
  {
    id: "e202",
    prenom: "Fatima-Zohra",
    nom: "Tahiri",
    groupeId: "g2",
    telephoneParent: "+212708334455",
    absences: 5,
    notes: [11, 10.5]
  },
  {
    id: "e203",
    prenom: "Reda",
    nom: "Berrada",
    groupeId: "g2",
    telephoneParent: "0665778899",
    absences: 1,
    notes: [13, 14.5, 12]
  },
  {
    id: "e204",
    prenom: "Noura",
    nom: "Zaki",
    groupeId: "g2",
    telephoneParent: "+212666001122",
    absences: 3,
    notes: [16.5, 17]
  },
  {
    id: "e205",
    prenom: "Hamza",
    nom: "Kabbaj",
    groupeId: "g2",
    telephoneParent: "0702334411",
    absences: 2,
    notes: [7, 9, 11]
  },
  {
    id: "e301",
    prenom: "Sarra",
    nom: "Benjelloun",
    groupeId: "g3",
    telephoneParent: "+212667445566",
    absences: 0,
    notes: [18, 17, 19]
  },
  {
    id: "e302",
    prenom: "Walid",
    nom: "Sefrioui",
    groupeId: "g3",
    telephoneParent: "0668990011",
    absences: 1,
    notes: [12.5, 13]
  },
  {
    id: "e303",
    prenom: "Imane",
    nom: "Ouarzazi",
    groupeId: "g3",
    telephoneParent: "+212709223344",
    absences: 4,
    notes: [10, 11.5]
  },
  {
    id: "e304",
    prenom: "Yassine",
    nom: "Tazi",
    groupeId: "g3",
    telephoneParent: "0703556677",
    absences: 2,
    notes: []
  },
  {
    id: "e305",
    prenom: "Kenzo",
    nom: "Naciri",
    groupeId: "g3",
    telephoneParent: "+212669887766",
    absences: 0,
    notes: [14, 15.5, 16]
  }
];