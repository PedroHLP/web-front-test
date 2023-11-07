// numeroXpto.ts

export function calculaDV(numeroQuatroDigitos: number): number {
    const pesos = [4, 5, 6, 7];
    const digitos = numeroQuatroDigitos.toString().split('').map(Number);
    
    if (digitos.length !== 4 || isNaN(numeroQuatroDigitos)) {
      throw new Error('Número deve ter 4 dígitos.');
    }
    
    let soma = digitos.reduce((acc, digito, index) => acc + digito * pesos[index], 0);
    let resto = soma % 20;
    resto = (resto + 7) % 10;
    
    return resto;
  }
  
  export function validaNumeroXpto(numeroCincoDigitos: number): boolean {
    const numeroBase = Math.floor(numeroCincoDigitos / 10);
    const dv = numeroCincoDigitos % 10;
    
    return calculaDV(numeroBase) === dv;
  }
  