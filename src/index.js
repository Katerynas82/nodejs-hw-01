import { countContacts } from './scripts/countContacts.js';

import { addOneContact } from './scripts/addOneContact.js';
import { getAllContacts } from './scripts/getAllContacts.js';
// import { removeAllContacts } from './src/scripts/removeAllContacts.js';
// import { removeLastContact } from './src/scripts/removeLastContact.js';
// import { generateContacts } from './src/scripts/generateContacts.js';

async () => {
  console.log('Кількість контактів:', await countContacts());

  await addOneContact();
  console.log('Контакти після додавання одного:', await getAllContacts());
};
