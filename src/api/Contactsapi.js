
const url = 'https://64a5872d00c3559aa9bfdad8.mockapi.io/law-app'

export const getContacts = async () => {
    const response = await fetch(url)
  
    return await response.json()
  }

  export const addContact = (contact) =>{
    fetch(url, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(contact)
        })
  }

  export const deleteContact = (id) =>{
    fetch(url`${id}`, {
            method: 'DELETE',
        })
  }

