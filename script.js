#!/usr/bin/env node

let fs = require("fs");

let cmd = process.argv.slice(2);

(function(){
    let options = [];
    let files = [];
    let str = "";

    for(let x in cmd){
        if(cmd[x].startsWith("-") && cmd [x].length == 2){
            options.push(card[x]);
        }
        else{
            files.push(cmd[x]);
            if(!fs.existsSync(cmd[x])){
                console.log(cmd[x] + " does not exists");
                return;
            }
        }
    }
    for(let x in files){
        str += fs.readFileSync(files[x]).toString(); 
    }

    str = str.split("\n");

    if(options.includes("-s")){
        str = removeLargeSpace(str);
    }

    if(options.includes("-n") && options.includes("-b")){

    if(options,indexOf("-b") > options.indexOf("-n")){
        //
        str = addNum(str);
    }
    else{
        //
        str = addNonEmptyNum(str);
    }
}
    else{
    if(options.includes("-b")){

    //
    str = addNonEmptyNum(str);
}
else if(options.includes("-n")){
//
str = addNum(str);

}
    }
    str = str.join("\n");
    console.log(str);
})();

function removeLargeSpace(arr){
    let ans = [];
    for(let i=0;i<arr.length;i++){
        let prev = arr[i];
        let curr = arr[i +1];
        if((prev =="" && curr == "") || (prev == "\r" && curr == "\r")){

        }  else{
            ans.push(arr[i]);
        } 
     }
     return ans;
}

function addNum(arr){
    let nARR =[];
    for(x in arr){
        let t = Number(X) +1;
        nArr[x] = t + " " + arr[x];
    }
    return nArr;
}

function addNonEmptyNum(arr){

    let lineNumber = 1;
    let nArr = [];
    for(let x in arr){
        if(arr[x] =="\r" || arr[x] == ""){
            nARR[x] = arr[x];
        }
        else{
            nArr[x] = lineNumber + " " + arr[x];
        }
    }
}