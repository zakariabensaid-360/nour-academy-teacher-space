import { groupes } from "./data";
import { eleves } from "./data";

const FiltreGroupe = document.getElementById("filtre-groupe");
const Recherche = document.getElementById("recherche");

const AllMoyenne = document.getElementById("bilan-moyenne");
const AllAbsences = document.getElementById("bilan-absences");
const AllAlerts = document.getElementById("bilan-alertes");

const AlertList = document.getElementById("liste-parents");
const CreateAlertList = (eleve) => {
  const li = document.createElement("li");
  li.classList = "rounded-xl bg-card px-3 py-2 ring-1 ring-line";
  li.textContent = eleve.telephoneParent + " / " + eleve.parentEmail;

  return li;
};

const alerts = eleves.filter((eleve) => eleve.absences == 3);
const alertsLists = alerts.map(CreateAlertList);
AlertList.append(...alertsLists);

function isValidName(name) {
  const nameRegex = /^[a-zA-ZÀ-ÿ\s-]{2,}$/;
  return nameRegex.test(name.trim());
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

function isValidPhone(phone) {
  const phoneRegex = /^(?:\+212|0)[67]\d{8}$/;
  const cleanPhone = phone.replace(/\s+/g, "");
  return phoneRegex.test(cleanPhone);
}

function isValidCode(code) {
  const codeRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  return codeRegex.test(code);
}

const studentsContainer = document.getElementById("liste-eleves");
studentsContainer.addEventListener("click", (event) => {
  const studentLi = event.target.closest("li");
  if (!studentLi) return;

  if (event.target.classList.contains("btn-absent")) {
    console.log("absent");
    // console.log(studentLi.dataset.id)
    const studentcard = document.querySelector(
      `[data-id="${studentLi.dataset.id}"]`,
    );

    console.log(studentcard.querySelector(".absence-count"));
    studentcard.querySelector(".absence-count").textContent = "2 absent";
    console.log("test");
  }

  if (event.target.classList.contains("btn-note")) {
    const studentcard = document.querySelector(
      `[data-id="${studentLi.dataset.id}"]`,
    );
    let test = studentcard.querySelector("input").value;
    console.log(test);
  }
});

const prenom = document.getElementById("prenom");
const prenomMsg = document.getElementById("prenom-msg");
const nom = document.getElementById("nom");
const nomMsg = document.getElementById("nom-msg");
const email = document.getElementById("email");
const telephone = document.getElementById("telephone");
const telephoneMsg = document.getElementById("telephone-msg");
const code = document.getElementById("code");
const codeMsg = document.getElementById("code-msg");
const submit = document.getElementById("submit");
prenom.addEventListener("input", (e) => {
  if (isValidName(e.target.value)) {
    prenomMsg.classList = " mt-1 text-xs text-green-500";
    prenomMsg.textContent = "Prénom valide.";
    prenom.classList =
      "mt-1 h-11 w-full rounded-xl border border-green-500  px-3";
  } else {
    prenom.classList =
      "mt-1 h-11 w-full rounded-xl border border-red-500  px-3";
    prenomMsg.classList = "text-red-500  mt-1 text-xs text-muted";
    prenomMsg.textContent = "not valide";
  }
});

nom.addEventListener("input", (e) => {
  if (isValidName(e.target.value)) {
    nomMsg.classList = " mt-1 text-xs text-green-500";
    nomMsg.textContent = "Prénom valide.";
    nom.classList = "mt-1 h-11 w-full rounded-xl border border-green-500  px-3";
  } else {
    nom.classList = "mt-1 h-11 w-full rounded-xl border border-red-500  px-3";
    nomMsg.classList = "text-red-500  mt-1 text-xs text-muted";
    nomMsg.textContent = "not valide";
  }
});

email.addEventListener("input", (e) => {
  if (isValidEmail(e.target.value)) {
    emailMsg.classList = " mt-1 text-xs text-green-500";
    emailMsg.textContent = "Prénom valide.";
    email.classList =
      "mt-1 h-11 w-full rounded-xl border border-green-500  px-3";
  } else {
    email.classList = "mt-1 h-11 w-full rounded-xl border border-red-500  px-3";
    emailMsg.classList = "text-red-500  mt-1 text-xs text-muted";
    emailMsg.textContent = "not valide";
  }
});

code.addEventListener("input", (e) => {
  if (isValidCode(e.target.value)) {
    codeMsg.classList = " mt-1 text-xs text-green-500";
    codeMsg.textContent = "Prénom valide.";
    code.classList =
      "mt-1 h-11 w-full rounded-xl border border-green-500  px-3";
  } else {
    code.classList = "mt-1 h-11 w-full rounded-xl border border-red-500  px-3";
    codeMsg.classList = "text-red-500  mt-1 text-xs text-muted";
    codeMsg.textContent = "not valide";
  }
});

telephone.addEventListener("input", (e) => {
  if (isValidPhone(e.target.value)) {
    telephoneMsg.classList = " mt-1 text-xs text-green-500";
    telephoneMsg.textContent = "Prénom valide.";
    telephone.classList =
      "mt-1 h-11 w-full rounded-xl border border-green-500  px-3";
  } else {
    telephone.classList =
      "mt-1 h-11 w-full rounded-xl border border-red-500  px-3";
    telephoneMsg.classList = "text-red-500  mt-1 text-xs text-muted";
    telephoneMsg.textContent = "not valide";
  }
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    isValidName(nom.value) &&
    isValidEmail(email.value) &&
    isValidPhone(telephone.value) &&
    isValidCode(code.value)
  ) {
  } else {
    alert("you cannot submit this form untill all inputs are valid");
  }
});

const listeEleves = document.querySelector("#liste-eleves");
const compteur = document.querySelector("#compteur");
function CreateList(eleve) {
  const li = document.createElement("li");
  const div = document.createElement("div");
  const btn = document.createElement("button");
  const spanAvatar = document.createElement("span");
  const infoSpan = document.createElement("span");
  const nomSpan = document.createElement("span");
  const absenceSpan = document.createElement("span");
  const WarnSpan = document.createElement("span");
  const AVGspan = document.createElement("span");
  const divFooter = document.createElement("div");
  const btnAbsent = document.createElement("button");
  const label = document.createElement("label");
  const NoteInfoSpan = document.createElement("span");
  const inputNote = document.createElement("input");
  const btnNote = document.createElement("button");
  const P = document.createElement("p");

  const nomComplet = eleve.prenom + " " + eleve.nom;
  const absences = eleve.absences;
  const notes = eleve.notes || [];

  const PN = eleve.prenom[0] + eleve.nom[0];

  let avg = "—";

  if (notes.length > 0) {
    const somme = notes.reduce((total, note) => total + note, 0);
    avg = (somme / notes.length).toFixed(1).replace(".", ",") + " / 20";
  }
  li.classList =
    absences !== 3
      ? "rounded-2xl border border-line bg-card p-3"
      : "alerte rounded-2xl border border-line bg-card p-3";
  li.dataset.id = eleve.id;
  div.className = "flex flex-col gap-3 lg:flex-row lg:items-center";
  btn.className = "btn-fiche flex min-h-11 flex-1 items-center gap-3 text-left";
  btn.type = "button";
  spanAvatar.classList =
    absences !== 3
      ? "grid size-10 shrink-0 place-items-center rounded-full bg-brand-soft text-sm font-semibold text-brand"
      : "grid size-10 shrink-0 place-items-center rounded-full bg-alert text-sm font-semibold text-white";
  WarnSpan.classList =
    absences !== 3
      ? ""
      : "badge ml-1 whitespace-nowrap rounded-full bg-alert px-2 py-0.5 text-xs font-medium text-white";
  WarnSpan.textContent = absences !== 3 ? "" : "Prévenir les parents";
  spanAvatar.textContent = PN.toLocaleUpperCase();
  infoSpan.classList = "min-w-0 flex-1";
  nomSpan.classList = "block truncate font-medium";
  nomSpan.textContent = nomComplet;
  absenceSpan.classList = "absence-count block text-sm text-muted";
  absenceSpan.textContent = absences + " absences";
  AVGspan.classList = "font-serif text-xl";
  AVGspan.textContent = avg;
  divFooter.classList = "flex gap-2";
  btnAbsent.classList =
    "btn-absent h-11 rounded-full border border-line px-3 sm:px-4 text-sm font-medium hover:bg-paper";
  btnAbsent.type = "button";
  btnAbsent.textContent = "Absent";
  label.classList = "flex-1";
  NoteInfoSpan.classList = "sr-only";
  NoteInfoSpan.textContent = "Note sur 20";
  inputNote.type = "number";
  inputNote.min = "0";
  inputNote.max = "20";
  inputNote.step = "0.5";
  inputNote.placeholder = "Note";
  inputNote.classList =
    "h-11 w-full rounded-full border border-line bg-paper px-4 text-sm lg:w-24";
  btnNote.type = "button";
  btnNote.classList =
    "btn-note h-11 rounded-full bg-ink px-3 sm:px-4 text-sm font-medium text-white hover:bg-brand";
  btnNote.textContent = "Ajouter la note";
  P.classList = "message mt-2 text-xs text-alert";
  P.textContent =
    avg !== "—" ? "" : "La note doit être un nombre entre 0 et 20.";

  label.append(NoteInfoSpan, inputNote);
  divFooter.append(btnAbsent, label, btnNote);
  infoSpan.append(nomSpan, absenceSpan, WarnSpan);
  btn.append(spanAvatar, infoSpan, AVGspan);
  div.append(btn, divFooter);
  li.append(div, P);

  return li;
}

const Lists = eleves.map(CreateList);

listeEleves.append(...Lists);

const Counter = () => {
  AllMoyenne.textContent = 5;

  AllAbsences.textContent = eleves.reduce((acc, el) => acc + el.absences, 0);
  AllAlerts.textContent = eleves.reduce(
    (acc, el) => (el.absences == 3 ? acc + 1 : acc + 0),
    0,
  );
};

Counter();
const addStudent = (eleve) => {
  eleves.push(eleve);
  const newStudent = creerLigne(eleve);
  listeEleves.append(newStudent);
};

const addAbsence = () => {};

const addNote = () => {};
function FiltersAdd() {
    const search = Recherche.value.trim().toLowerCase();
    const GroupSelect = FiltreGroupe ? FiltreGroupe.value : "";

    const elevesFiltres = eleves.filter((eleve) => {
        const nomComplet = `${eleve.prenom} ${eleve.nom}`.toLowerCase();
        const matchsearch = nomComplet.includes(search);
        const matchgroup = GroupSelect === "" || eleve.groupeId === GroupSelect;
        return matchsearch && matchgroup;
    });

    listeEleves.innerHTML = "";
    const listesFiltrees = elevesFiltres.map(CreateList);
    listeEleves.append(...listesFiltrees);

    
        compteur.textContent = elevesFiltres.length;
    
}

Recherche.addEventListener("input", FiltersAdd);

FiltreGroupe.addEventListener("change", FiltersAdd);


compteur.textContent = eleves.length + " élèves";
