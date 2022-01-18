CREATE DATABASE  IF NOT EXISTS `megatronix_db` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `megatronix_db`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: megatronix_db
-- ------------------------------------------------------
-- Server version	5.7.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ProductCategories`
--

DROP TABLE IF EXISTS `ProductCategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ProductCategories` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ProductPromotions`
--

DROP TABLE IF EXISTS `ProductPromotions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ProductPromotions` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Products`
--

DROP TABLE IF EXISTS `Products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Products` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `description_short` varchar(500) DEFAULT NULL,
  `description_long` varchar(1000) DEFAULT NULL,
  `price` int(11) NOT NULL,
  `image` varchar(45) DEFAULT 'default.png',
  `ProductCategories_id` int(11) NOT NULL,
  `ProductPromotions_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`ProductCategories_id`,`ProductPromotions_id`),
  KEY `fk_products_categoryProducts1_idx` (`ProductCategories_id`),
  KEY `fk_products_categorySales1_idx` (`ProductPromotions_id`),
  CONSTRAINT `fk_products_categoryProducts1` FOREIGN KEY (`ProductCategories_id`) REFERENCES `ProductCategories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_categorySales1` FOREIGN KEY (`ProductPromotions_id`) REFERENCES `ProductPromotions` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `UserCategories`
--

DROP TABLE IF EXISTS `UserCategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `UserCategories` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `image` varchar(45) DEFAULT 'default.png',
  `UserCategories_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`UserCategories_id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `fk_Users_UserCategories1_idx` (`UserCategories_id`),
  CONSTRAINT `fk_Users_UserCategories1` FOREIGN KEY (`UserCategories_id`) REFERENCES `UserCategories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `UsersProducts`
--

DROP TABLE IF EXISTS `UsersProducts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `UsersProducts` (
  `id` int(11) NOT NULL,
  `Users_id` int(11) NOT NULL,
  `Products_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_users_has_products_products1_idx` (`Products_id`),
  KEY `fk_users_has_products_users_idx` (`Users_id`),
  CONSTRAINT `fk_users_has_products_products1` FOREIGN KEY (`Products_id`) REFERENCES `Products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_products_users` FOREIGN KEY (`Users_id`) REFERENCES `Users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-17 19:00:07
