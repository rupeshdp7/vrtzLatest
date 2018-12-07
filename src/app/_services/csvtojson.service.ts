import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CsvtojsonService {

  constructor() { }
  CSV2JSON(csv : string){
    let array = this.CSVToArray(csv);
    //console.log(array);
    let objArray = [];
    for (let i = 1; i < array.length-1; i++) {
        objArray[i - 1] = {};
        for (let k = 0; k < array[0].length && k < array[i].length; k++) {
            let key = array[0][k];
            objArray[i - 1][key] = array[i][k]
        }
    }
    return objArray;
    // return csv;
  }
  CSVToArray(strData, strDelimiter?) {
    let arrData = [[]];
    if("undefined" === typeof strData || ""===strData){
      return (arrData);
    }
    strDelimiter = (strDelimiter || ",");
    let objPattern = new RegExp((
      "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
      "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
      "([^\"\\" + strDelimiter + "\\r\\n]*))"), "gi");
      arrData = [[]];
      let arrMatches = null;
      while (arrMatches = objPattern.exec(strData)) {
          let strMatchedDelimiter = arrMatches[1],strMatchedValue;
          let arr0 = arrData[0]; 
          let curr = arrData[arrData.length - 1];
          if (strMatchedDelimiter.length && (strMatchedDelimiter != strDelimiter) && arr0.length == curr.length) {
              arrData.push([]);
          }
          // Now that we have our delimiter out of the way,
          // let's check to see which kind of value we
          // captured (quoted or unquoted).
          if (arrMatches[2]) {
              // We found a quoted value. When we capture
              // this value, unescape any double quotes.
              strMatchedValue = arrMatches[2].replace(
              new RegExp("\"\"", "g"), "\"");
          } else {
              // We found a non-quoted value.
              strMatchedValue = arrMatches[3];
          }
          // Now that we have our value string, let's add
          // it to the data array.
          if(strMatchedValue){
            var t = strMatchedValue.replace("$", "");
            t = t.replace("(", "");
            t = t.replace(")", "");
            strMatchedValue = t.replace(" ", "");
            arrData[arrData.length - 1].push(strMatchedValue.trim());
          }
          //arrData[arrData.length - 1].push(strMatchedValue);
      }
      // Return the parsed data.
      return (arrData);
  }
}
