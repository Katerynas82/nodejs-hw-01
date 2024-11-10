import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const fileData = await fs.readFile(PATH_DB, 'utf8');
    const currentContacts = JSON.parse(fileData);
    const newContacts = Array.from({ length: number }, createFakeContact);
    const updatedContacts = [...currentContacts, ...newContacts];

    await writeContacts(updatedContacts);

    console.log(`Added ${number} new contacts successfully.`);
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

generateContacts(5);
