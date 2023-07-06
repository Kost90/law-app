import { useEffect } from "react";

export const urlContact =
  "https://64a5872d00c3559aa9bfdad8.mockapi.io/law-app/law-app";
export const urlComments =
  "https://64a5872d00c3559aa9bfdad8.mockapi.io/law-app/comments";


export const getContacts = async () => {
  const response = await fetch(urlContact);

  return await response.json();
};

export const getComments = async () => {
  const response = await fetch(urlComments);

  return await response.json();
};

export const addContact = async (contact) => {
  return await fetch(urlContact, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contact),
  });
};

export const addComments = async (comment) => {
  return await fetch(urlComments, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(comment),
  });
};

export const deleteContact = async (id) => {
  await fetch(`${urlContact}/${id}`, {
    method: "DELETE",
  });
};

export const deleteComment = async (id) => {
  await fetch(`${urlComments}/${id}`, {
    method: "DELETE",
  });
};
