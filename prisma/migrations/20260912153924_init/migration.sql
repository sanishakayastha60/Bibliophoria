-- CreateEnum
CREATE TYPE "Reread" AS ENUM ('Yes', 'No', 'Maybe');

-- CreateTable
CREATE TABLE "Book" (
    "book_id" TEXT NOT NULL,
    "book_title" TEXT NOT NULL,
    "author" TEXT,
    "description" TEXT,
    "review" TEXT,
    "reread" "Reread" NOT NULL DEFAULT 'No',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("book_id")
);

-- CreateTable
CREATE TABLE "Genre" (
    "genre_id" TEXT NOT NULL,
    "genre_name" TEXT NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("genre_id")
);

-- CreateTable
CREATE TABLE "BookGenre" (
    "book_id" TEXT NOT NULL,
    "genre_id" TEXT NOT NULL,

    CONSTRAINT "BookGenre_pkey" PRIMARY KEY ("book_id","genre_id")
);

-- CreateTable
CREATE TABLE "BookImage" (
    "image_id" TEXT NOT NULL,
    "image_url" TEXT,
    "book_id" TEXT NOT NULL,

    CONSTRAINT "BookImage_pkey" PRIMARY KEY ("image_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Genre_genre_name_key" ON "Genre"("genre_name");

-- AddForeignKey
ALTER TABLE "BookGenre" ADD CONSTRAINT "BookGenre_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "Book"("book_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookGenre" ADD CONSTRAINT "BookGenre_genre_id_fkey" FOREIGN KEY ("genre_id") REFERENCES "Genre"("genre_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookImage" ADD CONSTRAINT "BookImage_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "Book"("book_id") ON DELETE RESTRICT ON UPDATE CASCADE;
