import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { DB_DEFINITION, DB_NAME } from '../constants/db.constants';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  createDatabase() {

    const db = new Dexie(DB_NAME);

    // Declare tables, IDs and indexes
    db.version(1).stores(DB_DEFINITION);

    db.open().catch((error) => {
      console.error('Failed to open database: ' + error);
    }).then(() => {
      console.log('Database opened successfully');
    });


  }

}
