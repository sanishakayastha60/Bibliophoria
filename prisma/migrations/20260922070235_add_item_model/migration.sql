-- CreateEnum
CREATE TYPE "Reread" AS ENUM ('YES', 'NO', 'MAYBE');

-- CreateEnum
CREATE TYPE "ItemType" AS ENUM ('MANGA', 'MANHWA', 'MANHUA', 'WEBNOVEL', 'NOVEL', 'OTHER');

-- CreateEnum
CREATE TYPE "ItemStatus" AS ENUM ('WANT_TO_READ', 'READING', 'COMPLETED', 'DROPPED', 'ON_HOLD');

-- CreateTable
CREATE TABLE "Item" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "altName" TEXT,
    "description" TEXT,
    "author" TEXT,
    "chapters" INTEGER,
    "reread" "Reread" NOT NULL DEFAULT 'NO',
    "status" "ItemStatus" NOT NULL DEFAULT 'WANT_TO_READ',
    "imageUrl" TEXT,
    "genre" TEXT,
    "type" "ItemType",
    "personalReview" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);
