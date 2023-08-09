/*
  Warnings:

  - You are about to drop the `DraftArticleTags` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DraftArticleTags" DROP CONSTRAINT "DraftArticleTags_draftArticleId_fkey";

-- DropForeignKey
ALTER TABLE "DraftArticleTags" DROP CONSTRAINT "DraftArticleTags_tagId_fkey";

-- DropTable
DROP TABLE "DraftArticleTags";

-- CreateTable
CREATE TABLE "DraftArticleTag" (
    "id" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,
    "draftArticleId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DraftArticleTag_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DraftArticleTag" ADD CONSTRAINT "DraftArticleTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DraftArticleTag" ADD CONSTRAINT "DraftArticleTag_draftArticleId_fkey" FOREIGN KEY ("draftArticleId") REFERENCES "DraftArticle"("id") ON DELETE CASCADE ON UPDATE CASCADE;
