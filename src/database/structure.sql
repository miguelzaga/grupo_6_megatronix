-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: structure
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `categoryproduct`
--

DROP TABLE IF EXISTS `categoryproduct`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoryproduct` (
  `id_categoryProduct` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  PRIMARY KEY (`id_categoryProduct`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoryproduct`
--

LOCK TABLES `categoryproduct` WRITE;
/*!40000 ALTER TABLE `categoryproduct` DISABLE KEYS */;
/*!40000 ALTER TABLE `categoryproduct` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoryuser`
--

DROP TABLE IF EXISTS `categoryuser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoryuser` (
  `id_CategoryUser` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(10) NOT NULL,
  PRIMARY KEY (`id_CategoryUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoryuser`
--

LOCK TABLES `categoryuser` WRITE;
/*!40000 ALTER TABLE `categoryuser` DISABLE KEYS */;
/*!40000 ALTER TABLE `categoryuser` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id_products` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `descriptionShort` varchar(60) DEFAULT NULL,
  `descritionLong` varchar(8000) DEFAULT NULL,
  `price` decimal(10,0) NOT NULL,
  `image` varchar(45) DEFAULT NULL,
  `categoryProduct_id` int unsigned NOT NULL,
  `userProduct_id` int unsigned NOT NULL,
  PRIMARY KEY (`id_products`),
  KEY `fk_product_categoryProduct_idx` (`categoryProduct_id`),
  KEY `fk_product_userProduct_idx` (`userProduct_id`),
  CONSTRAINT `fk_product_categoryProduct` FOREIGN KEY (`categoryProduct_id`) REFERENCES `categoryproduct` (`id_categoryProduct`),
  CONSTRAINT `fk_product_userProduct` FOREIGN KEY (`userProduct_id`) REFERENCES `usersproducts` (`id_usersProducts`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id_Users` int unsigned NOT NULL AUTO_INCREMENT,
  `firstName` varchar(20) NOT NULL,
  `lastName` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `image` varchar(20) DEFAULT NULL,
  `categoryUser_id` int unsigned NOT NULL,
  `userProduct_id` int unsigned NOT NULL,
  PRIMARY KEY (`id_Users`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `fk_users_usersproducts_idx` (`userProduct_id`),
  KEY `fk_users_categoryUser_idx` (`categoryUser_id`),
  CONSTRAINT `fk_users_categoryUser` FOREIGN KEY (`categoryUser_id`) REFERENCES `categoryuser` (`id_CategoryUser`),
  CONSTRAINT `fk_users_usersproducts` FOREIGN KEY (`userProduct_id`) REFERENCES `usersproducts` (`id_usersProducts`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usersproducts`
--

DROP TABLE IF EXISTS `usersproducts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usersproducts` (
  `id_usersProducts` int unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int unsigned NOT NULL,
  `product_id` int unsigned NOT NULL,
  PRIMARY KEY (`id_usersProducts`),
  KEY `fk_usersproduct_user_idx` (`user_id`),
  KEY `fk_usersproduct_product_idx` (`product_id`),
  CONSTRAINT `fk_usersproduct_product` FOREIGN KEY (`product_id`) REFERENCES `products` (`id_products`),
  CONSTRAINT `fk_usersproduct_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id_Users`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usersproducts`
--

LOCK TABLES `usersproducts` WRITE;
/*!40000 ALTER TABLE `usersproducts` DISABLE KEYS */;
/*!40000 ALTER TABLE `usersproducts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'structure'
--

--
-- Dumping routines for database 'structure'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-12 22:10:56
