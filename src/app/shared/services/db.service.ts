import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { DB_DEFINITION, DB_NAME } from '../constants/db.constants';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  static swConected = false;
  private db = new Dexie(DB_NAME);

  async createDatabase() {
    this.closeDatabase();
    // Declare tables, IDs and indexes
    this.db.version(2).stores(DB_DEFINITION);

    this.db.open().catch((error) => {
      DatabaseService.swConected = false;
      console.error('Failed to open database: ' + error);
    }).then(() => {
      DatabaseService.swConected = true;
      console.log('Database opened successfully');
    });
  }

  async closeDatabase() {
    this.db.close();
  }

  async saveData(table: string, data: any) {
    return this.db.table(table).put(data);
  }

  async getData(table: string, id: number) {
    return this.db.table(table).get(id);
  }

}
