/*
  Warnings:

  - The primary key for the `Produtos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `codigo` on the `Produtos` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `preco` on the `Produtos` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal`.
  - Added the required column `id` to the `Produtos` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Produtos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "codigo" INTEGER NOT NULL,
    "descricao" TEXT NOT NULL,
    "preco" DECIMAL NOT NULL,
    "data_cadastro" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Produtos" ("codigo", "data_cadastro", "descricao", "preco") SELECT "codigo", "data_cadastro", "descricao", "preco" FROM "Produtos";
DROP TABLE "Produtos";
ALTER TABLE "new_Produtos" RENAME TO "Produtos";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
