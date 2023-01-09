-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_userPreferencesId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "userPreferencesId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userPreferencesId_fkey" FOREIGN KEY ("userPreferencesId") REFERENCES "UserPreferences"("id") ON DELETE SET NULL ON UPDATE CASCADE;
