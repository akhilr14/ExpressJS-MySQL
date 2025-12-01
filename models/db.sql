-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 01, 2025 at 08:14 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db`
--

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `EventId` int(11) NOT NULL,
  `Title` varchar(250) NOT NULL,
  `Details` varchar(1000) NOT NULL,
  `OnDate` date NOT NULL,
  `Venue` varchar(100) NOT NULL,
  `RegistrationLink` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`EventId`, `Title`, `Details`, `OnDate`, `Venue`, `RegistrationLink`) VALUES
(1, 'dance', 'this is sub-junior and senior', '2025-07-05', 'kochi', 'www.dance.com'),
(3, 'kathakali', 'sub-junior', '2025-07-10', 'kochi', 'www.kathakali.com'),
(4, 'mimicri&monoact', 'juniors & senior', '2025-07-04', 'kaloor & kochi', 'www.mimicri.com'),
(9, 'abc', 'sub-junior & senior', '2025-07-20', 'ernakulam', 'www.abc.com'),
(10, 'kathakali', 'sub-junior', '2025-07-10', 'kochi', 'www.kathakali.com'),
(12, 'mym', 'sub-junior', '2025-07-20', 'ernakulam', 'www.mym.com'),
(15, 'Dance', 'Registeration closed', '2024-08-10', 'Trivandrum', 'www.dance.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`EventId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `EventId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
