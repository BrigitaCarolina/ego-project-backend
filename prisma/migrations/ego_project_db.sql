-- MariaDB dump 10.19  Distrib 10.11.1-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: ego_project_db
-- ------------------------------------------------------
-- Server version	10.11.1-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `client`
--

DROP TABLE IF EXISTS `client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `client` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client`
--

LOCK TABLES `client` WRITE;
/*!40000 ALTER TABLE `client` DISABLE KEYS */;
INSERT INTO `client` VALUES
(1,'Achmad'),
(2,'Brigita'),
(3,'Brigita Tri Carolina'),
(4,'Brigita 2'),
(5,'Brigita'),
(6,'Brigita'),
(7,'Brigita Tri'),
(8,'Brigita'),
(9,'Brigita 2'),
(10,'Test 2'),
(11,'Test'),
(12,'Test4'),
(13,'Brigita'),
(14,'Brigita'),
(15,'Brigita'),
(16,'Test'),
(17,'Brigita'),
(18,'Brigita'),
(19,'Brigita');
/*!40000 ALTER TABLE `client` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clienttherapy`
--

DROP TABLE IF EXISTS `clienttherapy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clienttherapy` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `clientId` int(11) NOT NULL,
  `terapisId` int(11) NOT NULL,
  `therapyType` int(11) NOT NULL,
  `jumlahPertemuan` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ClientTherapy_clientId_fkey` (`clientId`),
  KEY `ClientTherapy_terapisId_fkey` (`terapisId`),
  CONSTRAINT `ClientTherapy_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `client` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `ClientTherapy_terapisId_fkey` FOREIGN KEY (`terapisId`) REFERENCES `terapis` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clienttherapy`
--

LOCK TABLES `clienttherapy` WRITE;
/*!40000 ALTER TABLE `clienttherapy` DISABLE KEYS */;
INSERT INTO `clienttherapy` VALUES
(2,8,2,1,2),
(3,8,7,2,5),
(4,9,1,1,3),
(5,10,2,1,4),
(6,11,1,1,5),
(7,12,1,1,4),
(8,13,3,3,3),
(9,13,9,2,5),
(10,14,3,3,3),
(11,14,9,2,5),
(12,15,3,3,5),
(13,15,1,1,7),
(14,16,7,2,4),
(15,17,1,1,4),
(16,18,1,1,5),
(17,18,7,2,5),
(18,18,3,3,5),
(19,19,1,1,6);
/*!40000 ALTER TABLE `clienttherapy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jenisterapi`
--

DROP TABLE IF EXISTS `jenisterapi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `jenisterapi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jenisterapi`
--

LOCK TABLES `jenisterapi` WRITE;
/*!40000 ALTER TABLE `jenisterapi` DISABLE KEYS */;
INSERT INTO `jenisterapi` VALUES
(1,'Terapi Wicara'),
(2,'Terapi Perilaku'),
(3,'Terapi Motorik');
/*!40000 ALTER TABLE `jenisterapi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meeting`
--

DROP TABLE IF EXISTS `meeting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `meeting` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status` int(11) NOT NULL,
  `meetingDate` bigint(20) NOT NULL,
  `terapisId` int(11) NOT NULL,
  `clientId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Meeting_clientId_fkey` (`clientId`),
  KEY `Meeting_terapisId_fkey` (`terapisId`),
  CONSTRAINT `Meeting_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `client` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `Meeting_terapisId_fkey` FOREIGN KEY (`terapisId`) REFERENCES `terapis` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meeting`
--

LOCK TABLES `meeting` WRITE;
/*!40000 ALTER TABLE `meeting` DISABLE KEYS */;
/*!40000 ALTER TABLE `meeting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `report`
--

DROP TABLE IF EXISTS `report`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `report` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `workHours` int(11) NOT NULL,
  `clientList` int(11) NOT NULL,
  `weekNumber` int(11) NOT NULL,
  `year` int(11) NOT NULL,
  `month` int(11) NOT NULL,
  `terapisId` int(11) NOT NULL,
  `noShowCounts` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `report`
--

LOCK TABLES `report` WRITE;
/*!40000 ALTER TABLE `report` DISABLE KEYS */;
/*!40000 ALTER TABLE `report` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schedule`
--

DROP TABLE IF EXISTS `schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `schedule` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status` int(11) NOT NULL,
  `rescheduleBy` int(11) NOT NULL,
  `isReschedule` int(11) NOT NULL,
  `startTime` int(11) NOT NULL,
  `endTime` int(11) NOT NULL,
  `clientTherapyId` int(11) NOT NULL,
  `clientId` int(11) NOT NULL,
  `terapisCode` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Schedule_clientId_fkey` (`clientId`),
  KEY `Schedule_terapisCode_fkey` (`terapisCode`),
  CONSTRAINT `Schedule_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `client` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `Schedule_terapisCode_fkey` FOREIGN KEY (`terapisCode`) REFERENCES `terapis` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schedule`
--

LOCK TABLES `schedule` WRITE;
/*!40000 ALTER TABLE `schedule` DISABLE KEYS */;
/*!40000 ALTER TABLE `schedule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `terapis`
--

DROP TABLE IF EXISTS `terapis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `terapis` (
  `name` varchar(191) NOT NULL,
  `room` varchar(191) NOT NULL,
  `jenisTerapiId` int(11) NOT NULL,
  `id` int(11) NOT NULL,
  `terapisCode` varchar(191) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Terapis_jenisTerapiId_fkey` (`jenisTerapiId`),
  CONSTRAINT `Terapis_jenisTerapiId_fkey` FOREIGN KEY (`jenisTerapiId`) REFERENCES `jenisterapi` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `terapis`
--

LOCK TABLES `terapis` WRITE;
/*!40000 ALTER TABLE `terapis` DISABLE KEYS */;
INSERT INTO `terapis` VALUES
('Mia','Ruang TW 1',1,1,'TW'),
('Ulim','Ruang TW 2',1,2,'TW 2'),
('Syifa','Ruang Besar',3,3,'FT'),
('Wiwik','Ruang Besar',3,4,'FT 3'),
('Nilam','Ruang Besar',3,5,'FT 4'),
('Nana','Ruang TP 1',2,6,'TP'),
('Mei','Ruang TP 2',2,7,'TP 2'),
('Ela','Ruang TP 3',2,8,'TP 3'),
('Mita','Ruang TP 4',2,9,'TP 4'),
('Yuyun','Ruang TP 5',2,10,'TP 5');
/*!40000 ALTER TABLE `terapis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  `role` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `User_username_key` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `weekly`
--

DROP TABLE IF EXISTS `weekly`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `weekly` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `terapisId` int(11) NOT NULL,
  `startTime` int(11) NOT NULL,
  `dayOfTheWeek` int(11) NOT NULL,
  `endTime` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Weekly_terapisId_fkey` (`terapisId`),
  CONSTRAINT `Weekly_terapisId_fkey` FOREIGN KEY (`terapisId`) REFERENCES `terapis` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `weekly`
--

LOCK TABLES `weekly` WRITE;
/*!40000 ALTER TABLE `weekly` DISABLE KEYS */;
INSERT INTO `weekly` VALUES
(5,2,437400000,2,450000000),
(28,2,10,1,12),
(29,2,14,1,17),
(31,2,14,2,17),
(32,2,9,3,12),
(33,2,14,3,16),
(34,2,10,4,12),
(35,2,14,4,16),
(36,2,8,5,12),
(37,2,14,5,17),
(38,2,8,6,12),
(39,2,14,6,15),
(56,1,8,3,16),
(57,2,8,2,12);
/*!40000 ALTER TABLE `weekly` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-27 11:42:09
