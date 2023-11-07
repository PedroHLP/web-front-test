import { calculaDV, validaNumeroXpto } from './numeroXpto';
import { Grupos } from './Grupos';

console.log(calculaDV(4638)); 
console.log(validaNumeroXpto(46387)); 
console.log(validaNumeroXpto(46388)); 

const grupos = new Grupos();

grupos.carrega('caminho/para/o/arquivo/grupos.json').then(() => {
  grupos.busca('nomeUsuario', (gruposEncontrados) => {
    console.log(gruposEncontrados);
  });
}).catch(console.error);
