-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Produtos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "codigo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "preco" DECIMAL NOT NULL,
    "data_cadastro" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Produtos" ("codigo", "data_cadastro", "descricao", "id", "preco") SELECT "codigo", "data_cadastro", "descricao", "id", "preco" FROM "Produtos";
DROP TABLE "Produtos";
ALTER TABLE "new_Produtos" RENAME TO "Produtos";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
