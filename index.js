console.log("chegou aqui");

const { exec } = require('child_process');
exec(`git add .`);
console.log("passo 1");
exec(`git commit -m "atualizações de tokens"`);
exec(`git push`);
