import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(PATH_DB, data, 'utf8');
    console.log('Contacts were successfully written to the database.');
  } catch (error) {
    console.error('Error writing contacts to file:', error);
    throw error;
  }
};
