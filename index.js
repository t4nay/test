import fetch from 'node-fetch';
import fs from 'fs';
import cheerio  from 'cheerio';
import puppeteer from 'puppeteer';
import * as https from 'https'

var rawdata = fs.readFileSync('json-fixer.json');
let newjson=[{}]
let student = JSON.parse(rawdata);
student = student;
console.log(student.length)
var y=0;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
(async () => {
for(var x =0;x<student.length;x++){
  try{
 var s = await fetch(`https://npiregistry.cms.hhs.gov/api/?version=2.1&number=${student[x].npi}&pretty=on`)
}catch(err){
  continue;
}
  s = await s.json();
    try{
      console.log(s["results"][0]["taxonomies"][0]["state"])
      console.log(x)
}catch(err){
  continue;
}

  newjson[y]=student[x];
    student[x]["state"]=s["results"][0]["addresses"][0]["state"]
  student[x]["doctortype"]=s["results"][0]["taxonomies"][0]["desc"]
  student[x]["full_name"]=s["results"][0]["basic"][0]["first_name"] +" "+s["results"][0]["basic"][0]["last_name"]
  student[x]["city"]=s["results"][0]["addresses"][0]["city"]
  let data = JSON.stringify(newjson[y]);
  console.log(student[x])
  fs.appendFileSync('new.txt', JSON.stringify(student[x]));
    console.log(s["results"][0]["taxonomies"][0]["desc"])


}
})();