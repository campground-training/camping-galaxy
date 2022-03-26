-- CreateTable
CREATE TABLE "Site" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "hasWater" BOOLEAN NOT NULL DEFAULT false,
    "hasElectrical" BOOLEAN NOT NULL DEFAULT false,
    "hasLakefront" BOOLEAN NOT NULL DEFAULT false,
    "hasRvParking" BOOLEAN NOT NULL DEFAULT false
);
