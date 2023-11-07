import fs from 'fs/promises';

type Grupo = {
  nome: string;
  usuarios: string[];
  subGrupos?: Grupo[];
};

type GruposJson = {
  grupos: Grupo[];
};

export class Grupos {
  private grupos: Grupo[] = [];

  public async carrega(filePath: string): Promise<void> {
    const data = await fs.readFile(filePath, 'utf-8');
    const json = JSON.parse(data) as GruposJson;
    this.grupos = json.grupos;
  }

  private buscaRecursiva(nome: string, grupo: Grupo, acumulador: Grupo[]): void {
    if (grupo.usuarios.some(usuario => usuario.includes(nome))) {
      acumulador.push(grupo);
    }

    if (grupo.subGrupos) {
      grupo.subGrupos.forEach(subGrupo => this.buscaRecursiva(nome, subGrupo, acumulador));
    }
  } 

  public busca(nomeUsuario: string, callback: (grupos: Grupo[]) => void): void {
    const gruposEncontrados: Grupo[] = [];
    this.grupos.forEach(grupo => this.buscaRecursiva(nomeUsuario, grupo, gruposEncontrados));
    callback(gruposEncontrados);
  }
}
