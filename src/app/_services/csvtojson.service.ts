import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CsvtojsonService {

  constructor() { }
  CSV2JSON(csv : string){
    return csv;
  }
}
