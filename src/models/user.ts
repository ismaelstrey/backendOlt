interface Empresa {
    id: number;
    nome: string;
    endereco: string;
    telefone: string;
    email: string;
    olts: OLT[];
    bairroId: number;
    bairro: Bairro;
    usuarios: User[];
}

interface OLT {
    id: number;
    name: string;
    oltIp: string;
    reachableViaVpn: boolean;
    telnetTcpPort: string;
    oltTelnetUsername: string;
    oltTelnetPassword: string;
    snmpReadOnlyCommunity: string;
    snmpReadWriteCommunity: string;
    snmpUdpPort: string;
    iptvModule: boolean;
    oltHardwareVersion: string;
    oltSoftwareVersion: string;
    supportedPonTypes: string;
    empresaId?: number;
    empresa?: Empresa;
}

export interface User {
    id: number;
    nome: string;
    email: string;
    senha?: string;
    dataDeNascimento?: Date;
    telefone?: string;
    empresaId?: number;
    empresa?: Empresa;
}

interface Cidade {
    id: number;
    nome: string;
    bairros: Bairro[];
}

interface Bairro {
    id: number;
    nome: string;
    cidadeId: number;
    cidade: Cidade;
    empresas: Empresa[];
}