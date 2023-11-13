//import forage from "./contacts.localforage";
import jsonserver from "./contacts.jsonserver";

//const api = forage;
const api = jsonserver;

export async function getContacts(query) {
  return await api.getContacts(query);
}

export async function createContact() {
  return await api.createContact();
}

export async function getContact(id) {
  return await api.getContact(id);
}

export async function updateContact(id, updates) {
  return await api.updateContact(id, updates);
}

export async function deleteContact(id) {
  console.log("deleted");
  return await api.deleteContact(id);
}
