import jsonFix from 'json-fixer'
import fs from 'fs';

// Get the (potentially malformed) JSON data ready
const jsonContent = fs.readFileSync('newfile.json', 'utf-8')

const {data, changed} = jsonFix(jsonContent) // Lint (and fix) it

if (changed) {
  fs.appendFileSync('newjson.json', data);

}