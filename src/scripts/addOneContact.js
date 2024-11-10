import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
try {const fileData = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(fileData);
const newContact = createFakeContact();
contacts.push(newContact);
await writeContacts(contacts);
console.log('One contact added successfully.');
  } catch (error) {
    console.error('Error adding a contact:', error);
  }
};

addOneContact();
