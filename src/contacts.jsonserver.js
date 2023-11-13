import { matchSorter } from "match-sorter";
import sortBy from "sort-by";
import axios from "axios";

function jsonserver() {
  const axiosInstance = axios.create({
    baseURL: "http://localhost:3001/api/contacts",
  });

  async function getContacts(query) {
    const response = await axiosInstance.get();
    let contacts = response.data;
    if (!contacts) contacts = [];
    if (query) {
      contacts = matchSorter(contacts, query, { keys: ["first", "last"] });
    }
    return contacts.sort(sortBy("last", "createdAt"));
  }

  async function createContact() {
    let contact = { createdAt: Date.now() };
    const response = await axiosInstance.post("", contact);
    return response.data;
  }

  async function getContact(id) {
    const response = await axiosInstance.get(id);
    return response.data ?? null;
  }

  async function updateContact(id, updates) {
    const response = await axiosInstance.put(id, updates);
    return response.data;
  }

  async function deleteContact(id) {
    await axiosInstance.delete(id);
  }

  return {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact,
  };
}

export default jsonserver();
