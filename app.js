// let a = 123;
// console.log(a);
// console.log(this);

// const test = require("./test");
// console.log(test);
// console.log(test.b);


const path = require("path");
const less = require("less");
// console.log(path.join('gddvx','dgbcrh'));
// console.log(path.resolve('gddvx','dgbcrh'));

const fs = require('fs');
// fs.writeFile("a.txt","hello world",()=>{
//     console.log("写入成功!");
// });

// let result = "";
// for(let j = 1;j<=10;j++){
//     result = result+j+"\n";
// }

// fs.writeFile(path.join('D:','b.txt'),result,()=>{
//     console.log("写入成功!");
// });

// for(let m = 1;m<=10;m++){
//     fs.writeFileSync(path.join('D:','b.txt'),m+"\n",{flag:"a"});
// }

// for(n = 1;n <= 10;n++){
//     url = path.resolve('temp',`hello-${n}.json`);
//     data = {
//         title:`标题${n}`
//     };
//     data = JSON.stringify(data);
//     fs.writeFileSync(url,data);
// }

// for(n = 1;n <= 10;n++){
//     url = path.resolve('temp',`hello-${n}.json`);
    
//     let fileContent=fs.readFileSync(url,"utf-8");
//     // console.log(fileContent);
//     fileContent = JSON.parse(fileContent);
//     fs.mkdirSync(path.resolve('temp',fileContent.title));
// }
url = path.resolve('styles',"main.less");
let lessContent=fs.readFileSync(url,"utf-8");
let promise = less.render(lessContent);
promise.then((output)=>{
    fs.writeFileSync(path.resolve('styles',"main.css"),output.css,{flag:"w"});
});

