import{ readFile } from "node:fs";
import chalk from "chalk";
readFile('./readfile.txt','utf8',(err,data)=>{
    if (err) throw err;
    console.log(chalk.red(data));
});