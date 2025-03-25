-- CreateTable
CREATE TABLE "Topic" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Topic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sub_Topic" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "topicId" INTEGER NOT NULL,

    CONSTRAINT "Sub_Topic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "topicId" INTEGER NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "News" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "topicId" INTEGER NOT NULL,

    CONSTRAINT "News_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_NewsToTopic" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_NewsToTopic_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_NewsToSub_Topic" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_NewsToSub_Topic_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_NewsToTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_NewsToTag_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Topic_title_key" ON "Topic"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Topic_name_key" ON "Topic"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Sub_Topic_title_key" ON "Sub_Topic"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Sub_Topic_name_key" ON "Sub_Topic"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");

-- CreateIndex
CREATE INDEX "_NewsToTopic_B_index" ON "_NewsToTopic"("B");

-- CreateIndex
CREATE INDEX "_NewsToSub_Topic_B_index" ON "_NewsToSub_Topic"("B");

-- CreateIndex
CREATE INDEX "_NewsToTag_B_index" ON "_NewsToTag"("B");

-- AddForeignKey
ALTER TABLE "Sub_Topic" ADD CONSTRAINT "Sub_Topic_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NewsToTopic" ADD CONSTRAINT "_NewsToTopic_A_fkey" FOREIGN KEY ("A") REFERENCES "News"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NewsToTopic" ADD CONSTRAINT "_NewsToTopic_B_fkey" FOREIGN KEY ("B") REFERENCES "Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NewsToSub_Topic" ADD CONSTRAINT "_NewsToSub_Topic_A_fkey" FOREIGN KEY ("A") REFERENCES "News"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NewsToSub_Topic" ADD CONSTRAINT "_NewsToSub_Topic_B_fkey" FOREIGN KEY ("B") REFERENCES "Sub_Topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NewsToTag" ADD CONSTRAINT "_NewsToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "News"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NewsToTag" ADD CONSTRAINT "_NewsToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
