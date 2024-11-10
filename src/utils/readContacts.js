import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';


 export const readContacts =async() => {
    try {let data = await fs.readFile(PATH_DB, 'utf8');
    console.log('Вміст файлу:', data);
 JSON.parse(data)|| [];
 return data;
    }catch (err) {
    console.error('Помилка читання файлу:', err);
  }

 };



