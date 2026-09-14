/*
  Warnings:

  - The values [Yes,No,Maybe] on the enum `Reread` will be removed. If these variants are still used in the database, this will fail.
  - The primary key for the `Book` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `book_id` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `book_title` on the `Book` table. All the data in the column will be lost.
  - The primary key for the `BookGenre` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `BookImage` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `image_id` on the `BookImage` table. All the data in the column will be lost.
  - The primary key for the `Genre` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `genre_id` on the `Genre` table. All the data in the column will be lost.
  - You are about to drop the column `genre_name` on the `Genre` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Genre` will be added. If there are existing duplicate values, this will fail.
  - The required column `id` was added to the `Book` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `title` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `book_id` on the `BookGenre` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `genre_id` on the `BookGenre` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - The required column `id` was added to the `BookImage` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Made the column `image_url` on table `BookImage` required. This step will fail if there are existing NULL values in that column.
  - Changed the type of `book_id` on the `BookImage` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - The required column `id` was added to the `Genre` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `name` to the `Genre` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Reread_new" AS ENUM ('YES', 'NO', 'MAYBE');
ALTER TABLE "public"."Book" ALTER COLUMN "reread" DROP DEFAULT;
ALTER TABLE "Book" ALTER COLUMN "reread" TYPE "Reread_new" USING ("reread"::text::"Reread_new");
ALTER TYPE "Reread" RENAME TO "Reread_old";
ALTER TYPE "Reread_new" RENAME TO "Reread";
DROP TYPE "public"."Reread_old";
ALTER TABLE "Book" ALTER COLUMN "reread" SET DEFAULT 'NO';
COMMIT;

-- DropForeignKey
ALTER TABLE "BookGenre" DROP CONSTRAINT "BookGenre_book_id_fkey";

-- DropForeignKey
ALTER TABLE "BookGenre" DROP CONSTRAINT "BookGenre_genre_id_fkey";

-- DropForeignKey
ALTER TABLE "BookImage" DROP CONSTRAINT "BookImage_book_id_fkey";

-- DropIndex
DROP INDEX "Genre_genre_name_key";

-- AlterTable
ALTER TABLE "Book" DROP CONSTRAINT "Book_pkey",
DROP COLUMN "book_id",
DROP COLUMN "book_title",
ADD COLUMN     "id" UUID NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ALTER COLUMN "reread" SET DEFAULT 'NO',
ADD CONSTRAINT "Book_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "BookGenre" DROP CONSTRAINT "BookGenre_pkey",
DROP COLUMN "book_id",
ADD COLUMN     "book_id" UUID NOT NULL,
DROP COLUMN "genre_id",
ADD COLUMN     "genre_id" UUID NOT NULL,
ADD CONSTRAINT "BookGenre_pkey" PRIMARY KEY ("book_id", "genre_id");

-- AlterTable
ALTER TABLE "BookImage" DROP CONSTRAINT "BookImage_pkey",
DROP COLUMN "image_id",
ADD COLUMN     "id" UUID NOT NULL,
ALTER COLUMN "image_url" SET NOT NULL,
DROP COLUMN "book_id",
ADD COLUMN     "book_id" UUID NOT NULL,
ADD CONSTRAINT "BookImage_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Genre" DROP CONSTRAINT "Genre_pkey",
DROP COLUMN "genre_id",
DROP COLUMN "genre_name",
ADD COLUMN     "id" UUID NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD CONSTRAINT "Genre_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Genre_name_key" ON "Genre"("name");

-- AddForeignKey
ALTER TABLE "BookGenre" ADD CONSTRAINT "BookGenre_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookGenre" ADD CONSTRAINT "BookGenre_genre_id_fkey" FOREIGN KEY ("genre_id") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookImage" ADD CONSTRAINT "BookImage_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;
