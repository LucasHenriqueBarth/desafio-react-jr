/*
  Warnings:

  - You are about to alter the column `data_cadastro` on the `Produtos` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.
  - You are about to alter the column `preco` on the `Produtos` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Produtos" (
    "codigo" TEXT NOT NULL PRIMARY KEY,
    "descricao" TEXT NOT NULL,
    "preco" INTEGER NOT NULL,
    "data_cadastro" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Produtos" ("codigo", "data_cadastro", "descricao", "preco") SELECT "codigo", "data_cadastro", "descricao", "preco" FROM "Produtos";
DROP TABLE "Produtos";
ALTER TABLE "new_Produtos" RENAME TO "Produtos";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
