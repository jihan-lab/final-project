-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 28 Jan 2022 pada 17.46
-- Versi server: 10.4.13-MariaDB
-- Versi PHP: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommerce`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `rentangHarga` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(100) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `products`
--

INSERT INTO `products` (`id`, `name`, `rentangHarga`, `description`, `image`, `createdAt`, `updatedAt`) VALUES
(1, 'Burger', 'Rp. 30.000 - Rp. 50.000', 'Hamburger (atau sering kali disebut dengan burger) adalah sejenis makanan berupa roti berbentuk bundar yang diiris dua dan di tengahnya diisi dengan patty yang biasanya diambil dari daging, kemudian sayur-sayuran berupa selada, tomat dan bawang bombai. Sebagai sausnya, burger diberi berbagai jenis saus seperti mayones, saus tomat dan sambal serta mustard. Beberapa varian burger juga dilengkapi dengan keju, asinan, burger juga makanan khas Amerika', '/images/1643385394237-burger.jpg', '2022-01-28', '2022-01-28'),
(2, 'Pizza', 'Rp. 80.000 - Rp. 120.000', 'Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven. A small pizza is sometimes called a pizzetta. A person who makes pizza is know…', '/images/1643385716526-pizza.jpg', '2022-01-28', '2022-01-28'),
(3, 'French Fries', 'Rp. 20.000', 'French fries (North American English), chips (British English),[1] finger chips (Indian English),[2] French-fried potatoes, or simply fries, are batonnet or allumette-cut[3] deep-fried potatoes, originating from either Belgium or France. They are prepared by cutting the potato into even strips, then drying and frying it, usually in a deep fryer. Most french fries are produced from frozen Russet potatoes.\r\n\r\nFrench fries are served hot, either soft or crispy, and are generally eaten as part of lunch or dinner or by themselves as a snack, and they commonly appear on the menus of diners, fast food restaurants, pubs, and bars. They are often salted and may be served with ketchup, vinegar, mayonnaise, tomato sauce, or other local specialties. Fries can be topped more heavily, as in the dishes of poutine or chili cheese fries. Chips can be made from sweet potatoes instead of potatoes. A baked variant, oven chips, uses less or no oil', '/images/1643385782533-frenchFries.jpg', '2022-01-28', '2022-01-28'),
(4, 'Choco Cake', 'Rp. 100.00 - Rp. 500.000', 'Chocolate cake is made with chocolate. It can also include other ingredients.[1] These include fudge, vanilla creme, and other sweeteners. The history of chocolate cake goes back to the 17th century, when cocoa powder from the Americas were added to traditional cake recipes.[2] In 1828, Coenraad van Houten of the Netherlands developed a mechanical extraction method for extracting the fat from cacao liquor resulting in cacao butter and the partly defatted cacao, a compacted mass of solids that could be sold as it was \"rock cacao\" or ground into powder.[3] The processes transformed chocolate from an exclusive luxury to an inexpensive daily snack.[3] A process for making silkier and smoother chocolate called conching was developed in 1879 by Rodolphe Lindt and made it easier to bake with chocolate, as it amalgamates smoothly and completely with cake batters.[3] Until 1890 to 1900, chocolate recipes were mostly for chocolate drinks,[3] and its presence in cakes was only in fillings and glazes.[4] In 1886, American cooks began adding chocolate to the cake batter, to make the first chocolate cakes in the US', '/images/1643385867036-cake.jpg', '2022-01-28', '2022-01-28'),
(5, 'Jus Buah', 'Rp. 20.000 - Rp. 35.0000', 'adalah jus cair kranberi, biasanya diproduksi mengandung gula, air, dan jus buah lainnya. Kranberi - buah asli Amerika Utara - dikenal dengan warna merah cerah, unik, rasa asam, dan fleksibilitas untuk pembuatan produk. Produk kranberi utama termasuk kranberi kering, saus kranberi, kranberi beku, bubuk kranberi, dan jus kranberi.[1]\r\n\r\nIstilah \"jus kranberi\" atau \"campuran jus kranberi\" mengacu pada produk yang mengandung sekitar 28% jus kranberi, dengan sisanya baik dari konsentrat jus buah lain (biasanya anggur, apel atau pir), air, dan tambahan gula untuk meningkatkan kelezatan. Produk jus kranberi rendah kalori menggunakan pemanis non-kalori. Tingkat keasaman jus cranberry berasal dari kandungan polifenolnya yang dicampur, termasuk flavonoid, proanthocyanidin, anthocyanin, asam fenolik, dan ellagitannin.', '/images/1643386040959-jus.jpg', '2022-01-28', '2022-01-28'),
(6, 'Mie Noodle', 'Rp. 15.000 - Rp. 30.000', 'Noodles are a type of food made from unleavened dough which is rolled flat and cut, stretched or extruded, into long strips or strings. Noodles can be refrigerated for short-term storage or dried and stored for future use.\r\n\r\nNoodles are usually cooked in boiling water, sometimes with cooking oil or salt added. They are also often pan-fried or deep-fried. Noodle dishes can include a sauce or noodles can be put into soup. The material composition and geocultural origin is specific to each type of a wide variety of noodles. Noodles are a staple food in many cultures (see Chinese noodles, Japanese noodles, Korean noodles, Filipino noodles, Vietnamese noodles, and Italian pasta)', '/images/1643386178172-mie.jpg', '2022-01-28', '2022-01-28'),
(7, 'Jihan', '5 jt', 'Coba dulu lagi', '/images/1643386883795-jxdSxqAFrdioKgXwgTs5Qfbazjq.jpg', '2022-01-28', '2022-01-28');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
