-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 11, 2022 at 04:20 PM
-- Server version: 8.0.27
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dict`
--

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

DROP TABLE IF EXISTS `contacts`;
CREATE TABLE IF NOT EXISTS `contacts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `contactInfo` varchar(255) DEFAULT NULL,
  `contactPos` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `clusterReg` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `contactNo` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `title`, `contactInfo`, `contactPos`, `image`, `clusterReg`, `address`, `email`, `contactNo`, `createdAt`, `updatedAt`) VALUES
(3, 'Department of Information and Communication Technology', 'Dr. Maria Teresa M. Camba', 'Regional Director', '1643548401605DICT.png', 'Mindanao Cluster 1', 'DICT Bldg, Corcuerra Extension, Port Area, Brgy Zone IV, Zamboanga City', 'mindanaocluster1@dict.gov.ph', '(062) 991-2741', '2022-01-30 13:15:56', '2022-01-30 13:15:56'),
(4, 'Department of Trade and Industry', 'Dir. Ceferino J. Rubio', 'Regional Director', '1643549145800DTI.png', 'Region IX', '4F VHW Bldg, Veterans Avenue, Zamboanga City', 'R09@dti.gov.ph \r\nR09.ZamboangaCity@dti.gov.ph', '(062) 991-3237 / 991-3238', '2022-01-30 13:25:52', '2022-01-30 13:25:52'),
(5, 'Department of Science and Technology', 'Dir. Martin A. Wee', 'Regional Director', '1643549744889DOST.png', 'Region IX', 'Pettit Barracks, Zamboanga City', 'ord@ro9.dost.gov.ph', '(062) 991-1024', '2022-01-30 13:35:46', '2022-01-30 13:35:46'),
(6, 'TESDA Regional Office Region IX', 'Dir. Dan M. Navarro', 'Regional Director', '1643550655466TESDA.png', 'Region IX', '2nd Floor ACC Building, Rizal Avenue, Pagadian City', 'region9@tesda.gov.ph ', '(062) 955-2517', '2022-01-30 13:50:57', '2022-01-30 13:50:57'),
(7, 'Zamboanga City Electric Cooperative', 'Engr. Gannymede B. Tiu', 'General Manager', '1643551144267ZAMCELCO-Logo.png', 'Region IX', 'MCLL Highway Putik, Zamboanga City', 'help-desk@zamcelco.com.ph management@zamcelco.com.ph ', '(062) 991 2117', '2022-01-30 13:59:09', '2022-01-30 13:59:09'),
(8, 'Zamboanga City Water District', 'Leonardo Rey D. Vasquez', 'General Manager', '1643552094963download.png', 'Region IX', 'Pilar Street, Zamboanga City', 'aguaesvida@zcwd.gov.ph', '(062) 991-1556', '2022-01-30 14:14:58', '2022-01-30 14:14:58'),
(9, 'Department of Labor and Employment IX', 'Atty. Roy L. Buenafe', 'OIC-Regional Director', '1643593589635DOLE.png', 'Region IX', '3rd Floor, Cortez Building, Evangelista St, Sta. Catalina, Zamboanga City', 'dole9record@yahoo.com', '(062) 991-2673', '2022-01-31 01:46:32', '2022-01-31 01:46:32'),
(10, 'Commission on Higher Education IX', 'Dr. Rody P. Garcia', 'OIC Director', '1643593661563CHED.png', 'Region IX', 'Baliwasan Chico Road Zamboanga City', 'chedro9@ched.gov.ph', '(062) 991-7648 / 991-7084', '2022-01-31 01:47:43', '2022-01-31 01:47:43'),
(11, 'Department of Education IX', 'Isabelita M. Borres', 'Regional Director', '1643593736868DepEd_2.png', 'Region IX', 'Pres. Corazon C. Aquino, Regional Government Center, Pagadian City Zamboanga del Sur', 'region9@deped.gov.ph', '(062) 215-3753, 215-3751', '2022-01-31 01:49:00', '2022-01-31 01:49:00'),
(12, 'Zamboanga City LGU', 'Maria Isabelle G. ClimacoSalazar', 'Mayor', '1643593802825Zamboanga City LGU.png', 'Region IX', 'Zamboanga City Hall, NS Valderosa Street, Zamboanga City', 'zambocitygovt@gmail.com', '(062) 992-0420 | 991-4525', '2022-01-31 01:50:04', '2022-01-31 01:50:04');

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
CREATE TABLE IF NOT EXISTS `news` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `content` varchar(10000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `title`, `content`, `picture`, `createdAt`, `updatedAt`) VALUES
(20, 'asdasdasd', '<p>asdasdasdasd</p>\n', '1643808719718rsz_4_-_people_of_the_sea.jpg', '2022-02-02 13:32:00', '2022-02-02 13:32:00');

-- --------------------------------------------------------

--
-- Table structure for table `photos`
--

DROP TABLE IF EXISTS `photos`;
CREATE TABLE IF NOT EXISTS `photos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `src` varchar(255) DEFAULT NULL,
  `caption` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `role`, `avatar`, `createdAt`, `updatedAt`) VALUES
(1, 'sojda018@gmail.com', '$2b$10$tDtRg1O4LYdgDgUuxKqRCODhq3EXNV9U7RfXlBa0sPdGF.38M1h8e', 'admin', 'joseph.jpg', '2022-01-27 02:39:58', '2022-01-27 02:39:58');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
