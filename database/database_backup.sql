-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 01, 2024 at 07:49 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rosemont_estates`
--

-- --------------------------------------------------------

--
-- Table structure for table `agent`
--

CREATE TABLE `agent` (
  `agentId` int(11) NOT NULL,
  `realEstateId` int(11) DEFAULT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `agent`
--

INSERT INTO `agent` (`agentId`, `realEstateId`, `firstName`, `lastName`, `phone`, `email`, `password`) VALUES
(1, 1, 'Mimi', 'Jona', '0875452768', 'mimi@gmail.com', '1234'),
(2, 9, 'Tsungai', 'Katsuro', '0875452768', 'tsungai@tsungai.com', '1234'),
(3, NULL, 'Ricard', 'Oosthuizen', '0145678954', 'richard@gmail.com', '1234'),
(4, 2, 'Anemi', 'Breytenbach', '0832594123', 'anemi@aida.co.za', '1234'),
(5, 3, 'Jarryd', 'Carelse', '0115403949', 'jared@engelvolkers.com', '1234'),
(6, 4, 'Joshua', 'Klerk', '0112390018', 'joshua@pamgoldings.co.za', '1234'),
(7, NULL, 'Jason', 'Derulo', '0112390018', 'jason@derulo.com', '1234'),
(8, 6, 'Ngozi', 'Ojukwu', '08431293844', 'ngozi@realnet.com', '1234'),
(9, 5, 'Tshwetso', 'Mokgathle', '0122993843', 'tshwetso@rawson.com', '1234'),
(10, 7, 'Armand', 'Naude', '0717728839', 'armand@remaxsa.co.za', '1234'),
(11, NULL, 'Tristan', 'Storm', '0829928371', 'tristan@gmail.com', '1234'),
(12, 8, 'Phillip', 'Hoven', '0766910288', 'phillipvdhoven@seeff.co.za', '1234'),
(13, NULL, 'Morgan', 'Freeman', '0769981102', 'morgan@gmail.com', '1234'),
(14, 7, 'Katy', 'Perry', '0871192263', 'katy@remax.com', '1234'),
(15, 1, 'Enzo', 'Vittorio', '0921182293', 'enzo@yahoo.com', '1234'),
(16, 1, 'Rosemont', 'Admin', '0983329912', 'admin@rosemont.com', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `house`
--

CREATE TABLE `house` (
  `houseId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `realEstateId` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` varchar(800) NOT NULL,
  `street` varchar(50) NOT NULL,
  `suburb` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `province` varchar(50) NOT NULL,
  `zip` varchar(50) NOT NULL,
  `style` varchar(50) NOT NULL,
  `availabilityStatus` varchar(50) NOT NULL,
  `availableDate` varchar(50) NOT NULL,
  `sellType` varchar(50) NOT NULL,
  `price` int(50) NOT NULL,
  `numFloors` int(50) NOT NULL,
  `floorSize` int(50) NOT NULL,
  `numBed` int(50) NOT NULL,
  `numBath` int(10) NOT NULL,
  `numKitchen` int(10) NOT NULL,
  `numDining` int(10) NOT NULL,
  `numGym` int(50) NOT NULL,
  `numBilliard` int(50) NOT NULL,
  `numBasement` int(50) NOT NULL,
  `numGarage` int(50) NOT NULL,
  `lotSize` int(50) NOT NULL,
  `numPool` int(50) NOT NULL,
  `numCourt` int(50) NOT NULL,
  `numDeck` int(50) NOT NULL,
  `numFlowerGard` int(50) NOT NULL,
  `numVegGard` int(50) NOT NULL,
  `numOrchard` int(50) NOT NULL,
  `internet` tinyint(1) NOT NULL,
  `airCon` tinyint(1) NOT NULL,
  `heating` tinyint(1) NOT NULL,
  `secSys` tinyint(1) NOT NULL,
  `solar` tinyint(1) NOT NULL,
  `gardServ` tinyint(1) NOT NULL,
  `irrigation` tinyint(1) NOT NULL,
  `outdoorLight` tinyint(1) NOT NULL,
  `boma` tinyint(1) NOT NULL,
  `gatedCommunity` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `house`
--

INSERT INTO `house` (`houseId`, `userId`, `realEstateId`, `title`, `description`, `street`, `suburb`, `city`, `province`, `zip`, `style`, `availabilityStatus`, `availableDate`, `sellType`, `price`, `numFloors`, `floorSize`, `numBed`, `numBath`, `numKitchen`, `numDining`, `numGym`, `numBilliard`, `numBasement`, `numGarage`, `lotSize`, `numPool`, `numCourt`, `numDeck`, `numFlowerGard`, `numVegGard`, `numOrchard`, `internet`, `airCon`, `heating`, `secSys`, `solar`, `gardServ`, `irrigation`, `outdoorLight`, `boma`, `gatedCommunity`) VALUES
(47, 1, 7, 'Riversands Villa', 'An exquisite modern Italian inspired mansion with breathtaking river views. Features include spacious living areas, a state-of-the-art kitchen, and a luxurious master suite.', '1 Riverbend Lane', 'Riversands', 'Johannesburg', 'Gauteng', '2191', 'Italian Villa', 'available', '2024-09-01', 'sell', 850000, 3, 1500, 7, 8, 2, 3, 1, 1, 1, 4, 10000, 2, 1, 2, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1),
(48, 5, 4, 'Victorian Manor', 'A stunning Victorian-style mansion with ornate architectural details. The property offers spacious rooms, lush gardens, and a historical charm.', '45 Rosewood Crescent', 'Waterkloof', 'Pretoria', 'Gauteng', '181', 'Victorian', 'available', '2024-06-15', 'sell', 120000000, 2, 2000, 10, 9, 2, 3, 1, 1, 1, 5, 12000, 1, 1, 3, 2, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0),
(49, 8, 6, 'Gothic Castle', 'A majestic Gothic-style castle featuring towering spires, grand halls, and luxurious interiors. The property is perfect for those who appreciate history and grandeur.', '101 Twilight Avenue', 'Constantia', 'Cape Town', 'Western Cape', '7806', 'Gothic', 'available', '2024-10-01', 'sell', 135000000, 4, 3000, 15, 12, 3, 4, 2, 2, 1, 8, 15000, 0, 2, 3, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1),
(50, 2, 9, 'Tuscan Paradise', 'This Tuscan-style villa is an oasis of luxury with its sprawling gardens, elegant architecture, and breathtaking mountain views.', '77 Olive Tree Road', 'Bryanston', 'Johannesburg', 'Gauteng', '2021', 'Italian Villa', 'available', '2024-07-01', 'rent', 250000, 3, 1000, 5, 6, 1, 2, 1, 1, 1, 2, 8000, 0, 0, 2, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0),
(51, 7, 3, 'Mediterranean Villa', 'A lavish Mediterranean-style mansion offering stunning sea views, expansive living areas, and unmatched privacy.', '12 Azure Lane', 'Umhlanga', 'Durban', 'KwaZulu-Natal', '4320', 'Italian Villa', 'available', '2024-11-01', 'sell', 95000000, 3, 1800, 4, 7, 2, 3, 1, 1, 1, 4, 11000, 2, 1, 2, 2, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1),
(52, 6, 2, 'Lusatian Haven', 'A beautifully restored Polish mansion, offering a blend of historical elegance and modern luxury.', '5 Vineyard Street', 'Devon Park', 'Stellenbosch', 'Western Cape', '7600', 'Timber-Framed', 'available', '2024-08-01', 'sell', 100000000, 2, 2200, 10, 7, 2, 3, 0, 0, 1, 6, 13000, 1, 1, 4, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0),
(53, 9, 5, 'French Riviera Retreat', 'An elegant French-style chateau nestled in the heart of South Africa. Features include opulent interiors, manicured gardens, and an expansive outdoor area.', '9 La Belle Avenue', 'Sandhurst', 'Johannesburg', 'Gauteng', '2196', 'French Chateau', 'available', '2024-12-01', 'sell', 110000000, 8, 16000, 7, 8, 2, 3, 1, 1, 1, 5, 90000, 1, 1, 2, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0),
(54, 4, 8, 'Beachfront Modern Marvel', 'A stunning beachfront property with modern architecture, sleek interiors, and uninterrupted ocean views.', '33 Sunset Boulevard', 'Clifton', 'Cape Town', 'Western Cape', '8005', 'Modern', 'available', '2024-05-01', 'rent', 400000, 3, 1200, 6, 7, 1, 2, 1, 0, 1, 3, 7000, 0, 0, 3, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1),
(55, 3, 2, 'Colonial Grandeur', 'A single story, grand colonial-style mansion featuring expansive grounds, luxurious interiors, and classic architectural details.', '21 Monarch Way', 'Hyde Park', 'Johannesburg', 'Gauteng', '2196', 'American Colonial', 'available', '2024-07-01', 'sell', 1050000, 1, 2400, 2, 3, 2, 3, 0, 0, 1, 1, 12500, 0, 1, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(56, 5, 7, 'Contemporary Sanctuary', 'A contemporary masterpiece offering panoramic views, cutting-edge design, and unparalleled luxury.', '16 Skyview Drive', 'Camps Bay', 'Cape Town', 'Western Cape', '8040', 'Modern', 'rented', '2024-09-01', 'rent', 90000, 3, 1500, 4, 4, 1, 2, 1, 1, 1, 4, 8500, 1, 1, 2, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1),
(57, 2, 4, 'Baroque Beauty', 'A Baroque-style mansion adorned with luxurious details, marble finishes, and intricate designs.', '2 Majestic Place', 'Bishopscourt', 'Cape Town', 'Western Cape', '7708', 'Neoclassical', 'available', '2024-04-01', 'sell', 115000000, 4, 2800, 12, 11, 3, 4, 2, 2, 1, 7, 14000, 2, 2, 3, 2, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0),
(58, 1, 3, 'Art Deco Delight', 'An Art Deco-style mansion featuring bold geometric designs, luxurious interiors, and stunning city views.', '14 Deco Drive', 'Houghton Estate', 'Johannesburg', 'Gauteng', '2198', 'Modern', 'sold', '2024-06-01', 'sell', 98000000, 2, 1700, 8, 9, 2, 3, 1, 0, 1, 4, 10000, 1, 0, 2, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0),
(59, 4, 6, 'Spanish Revival Estate', 'A sprawling, bright summer yellow Spanish Revival-style estate with grand arches, beautiful courtyards, and luxurious living spaces.', '55 Sierra Road', 'La Lucia', 'Durban', 'KwaZulu-Natal', '4051', 'Italian Villa', 'available', '2024-08-15', 'sell', 95000000, 2, 1900, 7, 8, 1, 3, 1, 1, 1, 4, 11000, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1),
(60, 6, 2, 'Neo-Classical Elegance', 'A Neo-Classical mansion with elegant columns, grand staircases, and luxurious amenities.', '78 Heritage Lane', 'Silver Lakes', 'Pretoria', 'Gauteng', '54', 'Neoclassical', 'available', '2024-07-01', 'rent', 300000, 2, 2000, 9, 10, 2, 2, 0, 0, 0, 5, 12000, 2, 1, 3, 2, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1),
(61, 8, 7, 'Modern Minimalist', 'A sleek and modern minimalist mansion with open spaces, clean lines, and cutting-edge technology.', '3 Horizon Lane', 'Zimbali', 'Durban', 'KwaZulu-Natal', '4422', 'Modern', 'available', '2024-09-01', 'sell', 87000000, 2, 1400, 6, 7, 1, 2, 1, 0, 0, 3, 7500, 1, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1),
(62, 7, 8, 'Luxurious Loft', 'An ultra-modern loft-style mansion featuring high ceilings, expansive glass walls, and stunning city views.', '99 Skyline Avenue', 'Green Point', 'Cape Town', 'Western Cape', '8051', 'Modern', 'available', '2024-10-01', 'sell', 92000000, 4, 1300, 5, 6, 1, 2, 0, 0, 0, 3, 8000, 1, 0, 2, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0),
(63, 3, 9, 'Hollywood Hills Mansion', 'A glamorous Hollywood-style mansion with panoramic city views, luxurious interiors, and state-of-the-art amenities.', '22 Sunset Boulevard', 'Llandudno', 'Cape Town', 'Western Cape', '7806', 'Modern', 'available', '2024-11-01', 'sell', 130000000, 4, 2500, 10, 11, 2, 4, 2, 2, 1, 6, 13000, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1),
(64, 2, 4, 'Regency Retreat', 'A Regency-style mansion featuring timeless elegance, a haunting feeling, expansive gardens, and luxurious interiors.', '41 Kensington Road', 'Constantia', 'Cape Town', 'Western Cape', '7806', 'Gothic', 'sold', '2024-03-01', 'sell', 105000000, 3, 2100, 8, 9, 2, 3, 1, 1, 1, 4, 11500, 1, 1, 3, 2, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1),
(65, 4, 7, 'Tour le Roux Waterview', 'A traditional French mansion combining various architectural styles, offering unique design elements and beautiful living spaces over a lake view.', '7 Fusion Lane', 'Fresnaye', 'Cape Town', 'Western Cape', '8005', 'French Chateau', 'available', '2024-08-01', 'sell', 97000000, 5, 1600, 12, 16, 1, 3, 1, 1, 1, 5, 9500, 2, 0, 3, 3, 2, 6, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1),
(66, 1, 5, 'Majestic Manor', 'A grand manor house with sprawling lawns, a beautiful garden, and luxurious interiors.', '18 Kingsway', 'Sandhurst', 'Johannesburg', 'Gauteng', '2196', 'Neoclassical', 'available', '2024-12-01', 'sell', 110000000, 3, 2300, 9, 10, 2, 3, 2, 2, 1, 5, 12500, 2, 1, 4, 2, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1),
(67, 9, 6, 'Urban Oasis', 'A modern mansion in the heart of the city, offering luxury and convenience with easy access to urban amenities.', '34 City Lights Avenue', 'Morningside', 'Johannesburg', 'Gauteng', '2196', 'Modern', 'rented', '2024-06-01', 'rent', 280000, 2, 1400, 6, 7, 1, 2, 1, 1, 1, 3, 8000, 1, 0, 2, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1),
(68, 6, 2, 'The Gatsby Estate', 'A luxurious estate reminiscent of The Great Gatsby era, featuring grand rooms, elegant details, and lush gardens.', '88 Gatsby Boulevard', 'Zimbali', 'Durban', 'KwaZulu-Natal', '4422', 'American Colonial', 'available', '2024-07-01', 'sell', 120000000, 3, 2500, 10, 11, 2, 4, 2, 2, 1, 6, 13000, 0, 1, 3, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0),
(87, 1, 7, 'Vous Manor', 'A historical beauty, featuring only what can be described as rustic, French tradition, with a stunning waterway flowing across the yard.', '89 Jutland Street', 'East Bank', 'Port Alfred', 'Eastern Cape', '6170', 'French Chateau', 'available', '2024-10-01', 'sell', 50000000, 6, 3500, 15, 12, 3, 7, 0, 3, 5, 10, 8000, 1, 0, 15, 2, 2, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0),
(100, 13, 9, 'Ravenscroft Manor', 'Step into the timeless elegance of Ravenscroft Manor, where gothic architecture meets modern luxury. This stately home features towering spires, intricate stonework, and grand arched windows that flood the interior with natural light. With its rich history and awe-inspiring design, Ravenscroft Manor is more than just a home—it\'s a work of art.', '23 Retreat Road', 'Eldorado Park', 'Johannesburg', 'Gauteng', '1811', 'Gothic', 'available', '2024-09-02', 'rent', 75000, 5, 2500, 16, 14, 3, 2, 2, 3, 8, 12, 10000, 3, 0, 15, 2, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0),
(101, 14, 3, 'The Woodlands Retreat', 'Nestled in the heart of nature, The Woodlands Retreat is a timber-framed masterpiece that offers a perfect blend of rustic charm and modern luxury. This home features exposed wooden beams, vaulted ceilings, and large windows that bring the beauty of the outdoors inside. With its cozy fireplaces and spacious living areas, The Woodlands Retreat is the perfect sanctuary for those who appreciate the warmth of natural materials.', '9 Mecca Road', 'Daleston', 'Northdale', 'KwaZulu-Natal', '3201', 'Timber-Framed', 'available', '2024-08-07', 'rent', 50000, 3, 2400, 3, 2, 1, 1, 0, 1, 2, 3, 3000, 0, 1, 2, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1),
(102, 9, 4, 'Rosewood Manor', 'Rosewood Manor is a quintessential Victorian home that captures the elegance and charm of a bygone era. With its ornate gables, decorative trim, and wrap-around porch, this residence exudes character and style. Inside, the home features high ceilings, intricate woodwork, and stained glass windows that add a touch of grandeur to every room.', '50 Rosemary Drive', 'Litchie Farm', 'Verulam', 'KwaZulu-Natal', '4339', 'Victorian', 'available', '2024-09-01', 'sell', 4000000, 3, 1500, 2, 2, 1, 2, 0, 1, 0, 2, 2500, 0, 1, 0, 2, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0),
(103, 18, 9, 'The Windsor House', 'The Windsor House is a stunning Victorian residence that offers a perfect blend of historical charm and modern amenities. This home features a turret, bay windows, and a beautifully landscaped garden that add to its curb appeal. Inside, you\'ll find spacious rooms with hardwood floors, detailed moldings, and period fixtures that transport you back to the Victorian era, all while providing the comfort and convenience of modern living.', '43 In Full Flight Avenue', 'Mooikloof', 'Pretoria', 'Gauteng', '0081', 'Victorian', 'available', '2024-06-30', 'rent', 35000, 3, 2250, 4, 4, 1, 2, 0, 2, 2, 6, 6000, 0, 2, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1),
(104, 17, 9, 'Magnolia House', 'Step back in time with Magnolia House, a classic Colonial home that exudes charm and grace. With its symmetrical façade, stately columns, and wrap-around porch, this residence captures the essence of traditional American architecture. Inside, the home offers spacious rooms with hardwood floors, crown moldings, and a fireplace that serves as the heart of the home.', '667 Plettenberg Street', 'Faerie Glen', 'Pretoria', 'Gauteng', '0081', 'American Colonial', 'available', '2024-09-01', 'rent', 30000, 2, 2000, 3, 2, 1, 1, 0, 0, 1, 4, 4000, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1),
(105, 15, 8, 'Villa d\'Este', 'Embrace the allure of the Mediterranean with Villa d\'Este, a stunning Italian villa that exudes warmth and elegance. This residence features terracotta roofs, charming courtyards, and hand-painted frescoes that transport you to the heart of Tuscany. With its spacious interiors and panoramic views, Villa d\'Este is the epitome of luxurious living.', '33 Lombardi Road', 'Deltoidia', 'Centurion', 'Gauteng', '0157', 'Italian Villa', 'available', '2024-05-01', 'rent', 128000, 2, 3000, 7, 6, 2, 3, 1, 1, 4, 2, 70000, 2, 4, 8, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0),
(106, 5, 8, 'Palazzo di Classico', 'A stunning example of neoclassical architecture, with its grand columns, sweeping staircases, and meticulously landscaped grounds. This palatial estate offers the perfect blend of classical elegance and modern amenities, providing a luxurious retreat that is both timeless and sophisticated.', '9 Nel Street', 'Eastleigh', 'Edenvale', 'Gauteng', '1609', 'Neoclassical', 'available', '2024-08-01', 'rent', 200000, 7, 7000, 17, 15, 5, 10, 2, 8, 5, 25, 20000, 8, 5, 35, 2, 4, 2, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0),
(107, 16, 6, 'Shadow\'s Keep', 'The Shadow\'s Keep is a true embodiment of gothic grandeur. This remarkable estate boasts soaring ceilings, elaborate stained glass windows, and intricately carved wood paneling that evoke a sense of mystery and charm. Nestled amidst lush, manicured gardens, this home offers a secluded retreat while still being just moments away from the vibrant city center.', '19 Neebe Street', 'Fichardt Park', 'Bloemfontein', 'Free State', '9301', 'Gothic', 'available', '2024-09-01', 'rent', 20000, 4, 3400, 7, 6, 2, 3, 2, 0, 0, 5, 5000, 1, 0, 2, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0),
(108, 16, 8, 'Regana Estate', 'The Regana Estate is an ode to the grandeur of neoclassical design, featuring a majestic façade with intricate detailing and expansive windows that offer sweeping views of the surrounding landscape. Inside, the home boasts high ceilings, elegant moldings, and luxurious finishes that create an atmosphere of refined elegance and comfort.', '43 Duck Street', 'Villa Liza', 'Boksburg', 'Gauteng', '1459', 'Neoclassical', 'available', '2024-09-01', 'sell', 52750000, 4, 3000, 9, 10, 2, 3, 2, 5, 10, 12, 5720, 1, 0, 0, 0, 2, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1),
(109, 16, 8, 'Cedar Lodge', 'Cedar Lodge is a breathtaking timber-framed home that offers a seamless connection between indoor and outdoor living. With its open floor plan, floor-to-ceiling windows, and expansive decks, this home is designed for those who love to entertain and enjoy the beauty of the natural surroundings. The use of rich wood tones and stone accents throughout the home creates a warm and inviting atmosphere that is both elegant and comfortable.', '782 Wolf Street', 'Booysen Park', 'Bethelsdorp', 'Eastern Cape', '6059', 'Timber-Framed', 'available', '2024-01-01', 'rent', 95000, 3, 2590, 5, 4, 1, 1, 1, 0, 2, 3, 3700, 1, 3, 1, 0, 2, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1),
(110, 19, 9, 'Villa Serenissima', 'Villa Serenissima is a true masterpiece of Italian architecture, featuring classic columns, expansive terraces, and a grand entrance that welcomes you into a world of luxury. The villa\'s beautifully landscaped gardens are perfect for outdoor entertaining, while the interior offers spacious living areas adorned with exquisite details that reflect the essence of Italy.', '1002 Chicago Avenue', 'Guldenland', 'Strand', 'Western Cape', '7140', 'Italian Villa', 'available', '2024-09-01', 'sell', 30000000, 2, 3250, 7, 9, 2, 1, 2, 5, 2, 4, 6000, 4, 0, 2, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `houseImage`
--

CREATE TABLE `houseImage` (
  `houseImageId` int(11) NOT NULL,
  `houseId` int(11) NOT NULL,
  `isPrimary` tinyint(1) NOT NULL DEFAULT 0,
  `imagePath` varchar(800) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `houseImage`
--

INSERT INTO `houseImage` (`houseImageId`, `houseId`, `isPrimary`, `imagePath`) VALUES
(79, 49, 1, 'http://localhost/rosemont/src/assets/uploads/Gothic C1.jpg'),
(82, 48, 1, 'http://localhost/rosemont/src/assets/uploads/Victorian B3.jpg'),
(83, 48, 0, 'http://localhost/rosemont/src/assets/uploads/Victorian B2.jpg'),
(84, 48, 0, 'http://localhost/rosemont/src/assets/uploads/Victorian B1.jpg'),
(85, 50, 1, 'http://localhost/rosemont/src/assets/uploads/Italian Villa A1.jpg'),
(86, 50, 0, 'http://localhost/rosemont/src/assets/uploads/Italian Villa A2.jpg'),
(87, 50, 0, 'http://localhost/rosemont/src/assets/uploads/Italian Villa A3.jpg'),
(88, 50, 0, 'http://localhost/rosemont/src/assets/uploads/Italian Villa A4.jpg'),
(89, 50, 0, 'http://localhost/rosemont/src/assets/uploads/Italian Villa A5.jpg'),
(91, 53, 1, 'http://localhost/rosemont/src/assets/uploads/French Château B1.jpg'),
(92, 53, 0, 'http://localhost/rosemont/src/assets/uploads/French Château B2.jpg'),
(93, 53, 0, 'http://localhost/rosemont/src/assets/uploads/French Château B3.jpg'),
(94, 53, 0, 'http://localhost/rosemont/src/assets/uploads/French Château B4.jpg'),
(95, 53, 0, 'http://localhost/rosemont/src/assets/uploads/French Château B5.jpg'),
(96, 54, 1, 'http://localhost/rosemont/src/assets/uploads/Modern B1.jpg'),
(97, 54, 0, 'http://localhost/rosemont/src/assets/uploads/Modern B2.jpg'),
(98, 54, 0, 'http://localhost/rosemont/src/assets/uploads/Modern B3.jpg'),
(99, 54, 0, 'http://localhost/rosemont/src/assets/uploads/Modern B4.jpg'),
(100, 55, 1, 'http://localhost/rosemont/src/assets/uploads/Colonial A1.jpg'),
(101, 56, 1, 'http://localhost/rosemont/src/assets/uploads/Modern E1.jpg'),
(102, 56, 0, 'http://localhost/rosemont/src/assets/uploads/Modern E2.jpg'),
(103, 57, 1, 'http://localhost/rosemont/src/assets/uploads/Neoclassical A1.jpg'),
(104, 57, 0, 'http://localhost/rosemont/src/assets/uploads/Neoclassical A2.jpg'),
(105, 57, 0, 'http://localhost/rosemont/src/assets/uploads/Neoclassical A3.jpg'),
(106, 58, 1, 'http://localhost/rosemont/src/assets/uploads/Modern A1.jpg'),
(107, 58, 0, 'http://localhost/rosemont/src/assets/uploads/Modern A2.jpg'),
(108, 58, 0, 'http://localhost/rosemont/src/assets/uploads/Modern A3.jpg'),
(109, 59, 1, 'http://localhost/rosemont/src/assets/uploads/Italian Villa B1.jpg'),
(110, 59, 0, 'http://localhost/rosemont/src/assets/uploads/Italian Villa B2.jpg'),
(111, 59, 0, 'http://localhost/rosemont/src/assets/uploads/Italian Villa B3.jpg'),
(112, 59, 0, 'http://localhost/rosemont/src/assets/uploads/Italian Villa B4.jpg'),
(113, 60, 1, 'http://localhost/rosemont/src/assets/uploads/Neoclassical E1.jpg'),
(114, 61, 1, 'http://localhost/rosemont/src/assets/uploads/Modern D1.jpg'),
(117, 63, 1, 'http://localhost/rosemont/src/assets/uploads/Modern G1.jpg'),
(118, 64, 1, 'http://localhost/rosemont/src/assets/uploads/Gothic A1.jpg'),
(119, 64, 0, 'http://localhost/rosemont/src/assets/uploads/Gothic A2.jpg'),
(120, 64, 0, 'http://localhost/rosemont/src/assets/uploads/Gothic A3.jpg'),
(121, 52, 1, 'http://localhost/rosemont/src/assets/uploads/Timber Framed A1.jpg'),
(122, 52, 0, 'http://localhost/rosemont/src/assets/uploads/Timber Framed A2.jpg'),
(123, 65, 1, 'http://localhost/rosemont/src/assets/uploads/French Château A1.jpg'),
(124, 65, 0, 'http://localhost/rosemont/src/assets/uploads/French Château A2.jpg'),
(125, 65, 0, 'http://localhost/rosemont/src/assets/uploads/French Château A3.jpg'),
(126, 65, 0, 'http://localhost/rosemont/src/assets/uploads/French Château A4.jpg'),
(127, 66, 1, 'http://localhost/rosemont/src/assets/uploads/Neoclassical B1.jpg'),
(128, 66, 0, 'http://localhost/rosemont/src/assets/uploads/Neoclassical B2.jpg'),
(129, 66, 0, 'http://localhost/rosemont/src/assets/uploads/Neoclassical B3.jpg'),
(130, 66, 0, 'http://localhost/rosemont/src/assets/uploads/Neoclassical B4.jpg'),
(131, 66, 0, 'http://localhost/rosemont/src/assets/uploads/Neoclassical B5.jpg'),
(132, 68, 1, 'http://localhost/rosemont/src/assets/uploads/Colonial C1.jpg'),
(133, 67, 1, 'http://localhost/rosemont/src/assets/uploads/Modern F1.jpg'),
(134, 67, 0, 'http://localhost/rosemont/src/assets/uploads/Modern F2.jpg'),
(135, 87, 1, 'http://localhost/rosemont/src/assets/uploads/French Château C1.jpg'),
(136, 87, 0, 'http://localhost/rosemont/src/assets/uploads/French Château C2.jpg'),
(137, 87, 0, 'http://localhost/rosemont/src/assets/uploads/French Château C3.jpg'),
(138, 87, 0, 'http://localhost/rosemont/src/assets/uploads/French Château C4.jpg'),
(141, 47, 1, 'http://localhost/rosemont/src/assets/uploads/Italian Villa D2.jpg'),
(142, 47, 0, 'http://localhost/rosemont/src/assets/uploads/Italian Villa D1.jpg'),
(155, 62, 1, 'http://localhost/rosemont/src/assets/uploads/Modern C1.jpg'),
(156, 62, 0, 'http://localhost/rosemont/src/assets/uploads/Modern C2.jpg'),
(159, 51, 1, 'http://localhost/rosemont/src/assets/uploads/Italian Villa C1.jpg'),
(163, 100, 1, 'http://localhost/rosemont/src/assets/uploads/Gothic D1.jpg'),
(164, 101, 1, 'http://localhost/rosemont/src/assets/uploads/Timber Framed B1.jpg'),
(165, 102, 1, 'http://localhost/rosemont/src/assets/uploads/Victorian C1.jpg'),
(166, 102, 0, 'http://localhost/rosemont/src/assets/uploads/Victorian C2.jpg'),
(167, 103, 1, 'http://localhost/rosemont/src/assets/uploads/Victorian A1.jpeg'),
(168, 104, 1, 'http://localhost/rosemont/src/assets/uploads/Colonial B1.jpg'),
(169, 105, 1, 'http://localhost/rosemont/src/assets/uploads/Italian Villa E1.jpg'),
(170, 105, 0, 'http://localhost/rosemont/src/assets/uploads/Italian Villa E2.jpg'),
(171, 105, 0, 'http://localhost/rosemont/src/assets/uploads/Italian Villa E3.jpg'),
(172, 106, 1, 'http://localhost/rosemont/src/assets/uploads/Neoclassical C1.jpg'),
(173, 107, 1, 'http://localhost/rosemont/src/assets/uploads/Gothic E1.jpg'),
(174, 108, 1, 'http://localhost/rosemont/src/assets/uploads/Neoclassical D1.jpg'),
(175, 109, 1, 'http://localhost/rosemont/src/assets/uploads/Timber Framed C1.jpg'),
(176, 110, 1, 'http://localhost/rosemont/src/assets/uploads/Italian Villa G1.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `interested`
--

CREATE TABLE `interested` (
  `interestedId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `houseId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `interested`
--

INSERT INTO `interested` (`interestedId`, `userId`, `houseId`) VALUES
(69, 13, 63),
(72, 14, 47),
(73, 9, 100),
(74, 18, 61),
(76, 17, 54),
(77, 15, 104),
(78, 5, 49),
(79, 16, 53),
(84, 1, 110),
(85, 1, 48);

-- --------------------------------------------------------

--
-- Table structure for table `realEstateAgency`
--

CREATE TABLE `realEstateAgency` (
  `realEstateId` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `logoColour` varchar(250) NOT NULL,
  `logoBeige` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `realEstateAgency`
--

INSERT INTO `realEstateAgency` (`realEstateId`, `name`, `logoColour`, `logoBeige`) VALUES
(1, 'admin', 'assets/logos/agencyLogos/adminLogoColour.png', 'assets/logos/agencyLogos/adminLogoBeige.png'),
(2, 'AIDA', 'assets/logos/agencyLogos/aidaLogoColour.png', 'assets/logos/agencyLogos/aidaLogoBeige.png'),
(3, 'Engel and Völkers', 'assets/logos/agencyLogos/engelLogoColour.png', 'assets/logos/agencyLogos/engelLogoBeige.png'),
(4, 'Pam Golding Properties', 'assets/logos/agencyLogos/pamLogoColour.png', 'assets/logos/agencyLogos/pamLogoBeige.png'),
(5, 'Rawson', 'assets/logos/agencyLogos/rawsonLogoColour.png', 'assets/logos/agencyLogos/rawsonLogoBeige.png'),
(6, 'RealNet', 'assets/logos/agencyLogos/realnetLogoColour.png', 'assets/logos/agencyLogos/realnetLogoBeige.png'),
(7, 'RE/MAX South Africa', 'assets/logos/agencyLogos/remaxLogoColour.png', 'assets/logos/agencyLogos/remaxLogoBeige.png'),
(8, 'Seeff', 'assets/logos/agencyLogos/seeffLogoColour.png', 'assets/logos/agencyLogos/seeffLogoBeige.png'),
(9, 'Tsungai United', 'assets/logos/agencyLogos/tsungaiLogoColour.png', 'assets/logos/agencyLogos/tsungaiLogoBeige.png');

-- --------------------------------------------------------

--
-- Table structure for table `saved`
--

CREATE TABLE `saved` (
  `savedId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `houseId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `saved`
--

INSERT INTO `saved` (`savedId`, `userId`, `houseId`) VALUES
(3, 3, 54),
(4, 5, 51),
(53, 10, 52),
(54, 10, 56),
(57, 1, 48),
(58, 1, 50),
(59, 1, 52),
(60, 1, 53),
(68, 10, 53),
(69, 11, 47),
(76, 2, 49),
(77, 2, 63),
(78, 13, 47),
(79, 13, 57),
(80, 13, 54),
(81, 13, 50),
(82, 14, 47),
(83, 14, 52),
(84, 14, 59),
(85, 9, 100),
(86, 9, 48),
(87, 9, 51),
(88, 9, 52),
(89, 18, 61),
(90, 18, 48),
(91, 18, 60),
(92, 18, 54),
(93, 18, 50),
(94, 15, 51),
(95, 15, 52),
(96, 5, 47),
(97, 19, 53),
(98, 19, 59),
(99, 19, 61),
(100, 1, 109);

-- --------------------------------------------------------

--
-- Table structure for table `submission`
--

CREATE TABLE `submission` (
  `submissionId` int(11) NOT NULL,
  `houseId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `submitStatus` varchar(50) NOT NULL,
  `submitDate` varchar(50) NOT NULL,
  `decisionDate` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `submission`
--

INSERT INTO `submission` (`submissionId`, `houseId`, `userId`, `submitStatus`, `submitDate`, `decisionDate`) VALUES
(1, 47, 1, 'approved', '22-08-2024', '24-08-2024'),
(2, 48, 5, 'approved', '10-06-2024', '26-08-2024'),
(3, 49, 8, 'approved', '15-07-2024', '26-08-2024'),
(4, 50, 2, 'approved', '06-01-2024', '01-02-2024'),
(5, 51, 7, 'approved', '16-01-2024', '17-08-2024'),
(6, 52, 6, 'approved', '17-02-2024', '24-08-2024'),
(7, 53, 9, 'approved', '25-02-2024', '17-03-2024'),
(8, 54, 4, 'approved', '14-03-2024', '12-04-2024'),
(9, 55, 3, 'rejected', '17-04-2024', '01-09-2024'),
(10, 56, 5, 'approved', '18-05-2024', '12-07-2024'),
(11, 57, 2, 'approved', '30-05-2024', '26-06-2024'),
(12, 58, 1, 'rejected', '02-06-2024', '01-09-2024'),
(13, 59, 4, 'approved', '02-07-2024', '30-08-2024'),
(14, 60, 6, 'approved', '03-07-2024', '16-07-2024'),
(15, 61, 8, 'approved', '08-07-2024', '12-07-2024'),
(16, 62, 7, 'approved', '10-08-2024', '12-09-2024'),
(17, 63, 3, 'approved', '11-08-2024', '10-09-2024'),
(18, 64, 2, 'approved', '14-08-2024', '15-08-2024'),
(19, 65, 4, 'pending', '15-08-2024', 'pending'),
(20, 66, 1, 'approved', '30-08-2024', '12-09-2024'),
(21, 67, 9, 'approved', '12-08-2024', '15-08-2024'),
(22, 68, 6, 'pending', '17-08-2024', 'pending'),
(23, 87, 1, 'pending', '09-08-2024', 'pending'),
(34, 100, 13, 'approved', '01-09-2024', '01-09-2024'),
(35, 101, 14, 'approved', '01-09-2024', '01-09-2024'),
(36, 102, 9, 'approved', '01-09-2024', '01-09-2024'),
(37, 103, 18, 'approved', '01-09-2024', '01-09-2024'),
(38, 104, 17, 'approved', '01-09-2024', '01-09-2024'),
(39, 105, 15, 'approved', '01-09-2024', '01-09-2024'),
(40, 106, 5, 'approved', '01-09-2024', '01-09-2024'),
(41, 107, 16, 'approved', '01-09-2024', '01-09-2024'),
(42, 108, 16, 'approved', '01-09-2024', '01-09-2024'),
(43, 109, 16, 'approved', '01-09-2024', '01-09-2024'),
(44, 110, 19, 'approved', '01-09-2024', '01-09-2024');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userId` int(11) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(59) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userId`, `firstName`, `lastName`, `phone`, `email`, `password`) VALUES
(1, 'John', 'Cena', '0123391211', 'john@gmail.com', '123'),
(2, 'Thando', 'Dlamini', '0123456786', 'thando@gmail.com', '123'),
(3, 'Alex', 'Peters', '0123456786', 'alex@theartloft.com', '123'),
(4, 'Lebogang', 'Hlongwane', '0875452768', 'lebo@gmail.com', '123'),
(5, 'Mwape', 'Kurete', '0127749937', 'mwape@yahoo.com', '123'),
(6, 'Ine', 'Smith', '0981234567', 'ine@gmail.com', '123'),
(7, 'Tsungai', 'Katsuro', '0125947305', 'tsungai@gmail.com', '123'),
(8, 'Jaco', 'Mostert', '0715328817', 'jaco@myspace.co.za', 'G00dM0rn1ng'),
(9, 'Rouxan', 'Potgieter', '0176326178', 'rouxan@gmail.com', 'Password123!'),
(10, 'Wolf', 'Botha', '0821229491', 'wolf@gmail.com', '123'),
(11, 'Julia', 'Roberts', '0812293302', 'julia@gmail.com', '123'),
(12, 'Sean', 'Dubbelman', '0762110923', 'sean@email.com', 'chick3nNugg3ts!'),
(13, 'Tebogo', 'Ramolobeng', '0642931102', 'tebogo@gmail.com', '1234567890'),
(14, 'Kurt', 'Schwimmbacher', '0812273392', 'kurt@gmail.com', '123'),
(15, 'Kayla', 'Posthumus', '0829931121', 'kayla@gmail.com', '123'),
(16, 'Ruan', 'Klopper', '0734490090', 'ruan@yahoo.com', '123'),
(17, 'Michaela', 'Kemp', '0832913301', 'michaela@gmail.com', 'I<3Development'),
(18, 'Zander', 'Bezuidenhout', '0981192293', 'zander@gmail.com', 'Fr33d0m!'),
(19, 'Johnny', 'Depp', '0182293304', 'johnny@depp.com', '123'),
(20, 'Taylor', 'Swift', '0839928123', 'taylor@swift.com', '123'),
(21, 'Jim', 'Carrey', '0981172293', 'jim@gmail.com', '123'),
(22, 'Leonardo', 'DiCaprio', '0866920192', 'leo@titanic.com', '123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `agent`
--
ALTER TABLE `agent`
  ADD PRIMARY KEY (`agentId`),
  ADD KEY `realEstateId` (`realEstateId`);

--
-- Indexes for table `house`
--
ALTER TABLE `house`
  ADD PRIMARY KEY (`houseId`),
  ADD KEY `realEstateId` (`realEstateId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `houseImage`
--
ALTER TABLE `houseImage`
  ADD PRIMARY KEY (`houseImageId`),
  ADD KEY `houseimage_ibfk_1` (`houseId`);

--
-- Indexes for table `interested`
--
ALTER TABLE `interested`
  ADD PRIMARY KEY (`interestedId`),
  ADD KEY `userId` (`userId`),
  ADD KEY `houseId` (`houseId`);

--
-- Indexes for table `realEstateAgency`
--
ALTER TABLE `realEstateAgency`
  ADD PRIMARY KEY (`realEstateId`);

--
-- Indexes for table `saved`
--
ALTER TABLE `saved`
  ADD PRIMARY KEY (`savedId`),
  ADD KEY `houseId` (`houseId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `submission`
--
ALTER TABLE `submission`
  ADD PRIMARY KEY (`submissionId`),
  ADD KEY `userId` (`userId`),
  ADD KEY `submission_ibfk_1` (`houseId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `agent`
--
ALTER TABLE `agent`
  MODIFY `agentId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `house`
--
ALTER TABLE `house`
  MODIFY `houseId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=111;

--
-- AUTO_INCREMENT for table `houseImage`
--
ALTER TABLE `houseImage`
  MODIFY `houseImageId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=177;

--
-- AUTO_INCREMENT for table `interested`
--
ALTER TABLE `interested`
  MODIFY `interestedId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;

--
-- AUTO_INCREMENT for table `realEstateAgency`
--
ALTER TABLE `realEstateAgency`
  MODIFY `realEstateId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `saved`
--
ALTER TABLE `saved`
  MODIFY `savedId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `submission`
--
ALTER TABLE `submission`
  MODIFY `submissionId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `agent`
--
ALTER TABLE `agent`
  ADD CONSTRAINT `agent_ibfk_1` FOREIGN KEY (`realEstateId`) REFERENCES `realEstateAgency` (`realEstateId`);

--
-- Constraints for table `house`
--
ALTER TABLE `house`
  ADD CONSTRAINT `house_ibfk_1` FOREIGN KEY (`realEstateId`) REFERENCES `realEstateAgency` (`realEstateId`),
  ADD CONSTRAINT `house_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`);

--
-- Constraints for table `houseImage`
--
ALTER TABLE `houseImage`
  ADD CONSTRAINT `houseimage_ibfk_1` FOREIGN KEY (`houseId`) REFERENCES `house` (`houseId`) ON DELETE CASCADE;

--
-- Constraints for table `interested`
--
ALTER TABLE `interested`
  ADD CONSTRAINT `interested_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`),
  ADD CONSTRAINT `interested_ibfk_2` FOREIGN KEY (`houseId`) REFERENCES `house` (`houseId`);

--
-- Constraints for table `saved`
--
ALTER TABLE `saved`
  ADD CONSTRAINT `saved_ibfk_1` FOREIGN KEY (`houseId`) REFERENCES `house` (`houseId`),
  ADD CONSTRAINT `saved_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`);

--
-- Constraints for table `submission`
--
ALTER TABLE `submission`
  ADD CONSTRAINT `submission_ibfk_1` FOREIGN KEY (`houseId`) REFERENCES `house` (`houseId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `submission_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
