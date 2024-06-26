-- CreateTable
CREATE TABLE "Empresa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "bairroId" INTEGER NOT NULL,
    CONSTRAINT "Empresa_bairroId_fkey" FOREIGN KEY ("bairroId") REFERENCES "Bairro" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "OLT" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "oltIp" TEXT NOT NULL,
    "reachableViaVpn" BOOLEAN NOT NULL DEFAULT false,
    "telnetTcpPort" TEXT NOT NULL,
    "oltTelnetUsername" TEXT NOT NULL,
    "oltTelnetPassword" TEXT NOT NULL,
    "snmpReadOnlyCommunity" TEXT NOT NULL,
    "snmpReadWriteCommunity" TEXT NOT NULL,
    "snmpUdpPort" TEXT NOT NULL,
    "iptvModule" BOOLEAN NOT NULL DEFAULT false,
    "oltHardwareVersion" TEXT NOT NULL,
    "oltSoftwareVersion" TEXT NOT NULL,
    "supportedPonTypes" TEXT NOT NULL,
    "empresaId" INTEGER,
    CONSTRAINT "OLT_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresa" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "dataDeNascimento" DATETIME NOT NULL,
    "telefone" TEXT NOT NULL,
    "empresaId" INTEGER,
    CONSTRAINT "Usuario_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresa" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Cidade" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Bairro" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cidadeId" INTEGER NOT NULL,
    CONSTRAINT "Bairro_cidadeId_fkey" FOREIGN KEY ("cidadeId") REFERENCES "Cidade" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
