/*
SQLyog Trial v13.1.8 (64 bit)
MySQL - 8.0.35 : Database - pizzareview
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`pizzareview` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `pizzareview`;

/*Table structure for table `best_chef` */

DROP TABLE IF EXISTS `best_chef`;

CREATE TABLE `best_chef` (
  `id` int NOT NULL AUTO_INCREMENT,
  `chef_image` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `chef_full_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `chef_specialty` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `best_chef` */

insert  into `best_chef`(`id`,`chef_image`,`chef_full_name`,`chef_specialty`) values 
(1,'home-bestChef/chef1.jpg','John Doe','sous chef'),
(2,'home-bestChef/chef2.jpg','John Doe','sous chef'),
(3,'home-bestChef/chef3.jpg','John Doe','sous chef'),
(4,'home-bestChef/chef4.jpg','John Doe','sous chef'),
(5,'home-bestChef/chef1.jpg','John Doe','sous chef'),
(6,'home-bestChef/chef2.jpg','John Doe','sous chef'),
(7,'home-bestChef/chef3.jpg','John Doe','sous chef'),
(8,'home-bestChef/chef4.jpg','John Doe','sous chef');

/*Table structure for table `blog_detail_reviews` */

DROP TABLE IF EXISTS `blog_detail_reviews`;

CREATE TABLE `blog_detail_reviews` (
  `id` int NOT NULL AUTO_INCREMENT,
  `commenter_image` varchar(100) NOT NULL,
  `commenter_name` varchar(50) NOT NULL,
  `commenter_review` varchar(300) NOT NULL,
  `reply_button` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `blog_detail_reviews` */

insert  into `blog_detail_reviews`(`id`,`commenter_image`,`commenter_name`,`commenter_review`,`reply_button`) values 
(1,'blog-images/blog-detail/comment-1.jpg','John Doe','But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.','Reply'),
(2,'blog-images/blog-detail/comment-2.jpg','John Doe','But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.','Reply'),
(3,'blog-images/blog-detail/comment-3.jpg','John Doe','But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.','Reply');

/*Table structure for table `blog_sides_posts` */

DROP TABLE IF EXISTS `blog_sides_posts`;

CREATE TABLE `blog_sides_posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image` varchar(100) NOT NULL,
  `author` varchar(30) NOT NULL,
  `comments` json NOT NULL,
  `title` varchar(100) NOT NULL,
  `comment_description` varchar(5000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `blog_sides_posts` */

insert  into `blog_sides_posts`(`id`,`image`,`author`,`comments`,`title`,`comment_description`) values 
(1,'blog-bars-images/blog-2.jpg','John Doe','[]','Possession so comparison inquietude he conviction','There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handfulThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful.'),
(2,'blog-bars-images/blog-2.jpg','John Doe','[]','New Cheese Crusts On Pizzas','There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handfulThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful.'),
(3,'blog-bars-images/blog-2.jpg','John Doe','[]','PEPPE\'S LAUNCHES HEALTHY PIZZA FOR KIDS','There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handfulThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful.');

/*Table structure for table `blog_sides_recent_posts` */

DROP TABLE IF EXISTS `blog_sides_recent_posts`;

CREATE TABLE `blog_sides_recent_posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `post_date` date NOT NULL,
  `post_image` varchar(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `blog_sides_recent_posts` */

insert  into `blog_sides_recent_posts`(`id`,`post_date`,`post_image`,`title`) values 
(1,'2023-11-11','blog-bars-images/recent-1.jpg','Possession so comparison inquietu'),
(2,'2023-11-11','blog-bars-images/recent-2.jpg','OFFERS MADE SPECIALLY FOR KIDS'),
(3,'2023-11-11','blog-bars-images/recent-3.jpg','OUR WONDERFULLY PIZZA NEW TASTES');

/*Table structure for table `customer_reviews` */

DROP TABLE IF EXISTS `customer_reviews`;

CREATE TABLE `customer_reviews` (
  `id` int NOT NULL AUTO_INCREMENT,
  `costumer_text` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `customer_name` varchar(50) NOT NULL,
  `specialty` varchar(50) DEFAULT NULL,
  `customer_image` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `customer_reviews` */

insert  into `customer_reviews`(`id`,`costumer_text`,`customer_name`,`specialty`,`customer_image`) values 
(1,'The one day when the lady met this fellow and they knew it was much more than a hunch\r\n	 the first mate and his Skipper too will do their comforta The one day when the lady met \r\n	 this fellow and they knew it was much more than a hunch the first mate and his Skipper too\r\n	 will do their comforta The one day when the lady met this fellow and they knew it was much','John Doe','- designer','home-reviews/customer1.png'),
(2,'The one day when the lady met this fellow and they knew it was much more than a hunch\r\n	 the first mate and his Skipper too will do their comforta The one day when the lady met \r\n	 this fellow and they knew it was much more than a hunch the first mate and his Skipper too\r\n	 will do their comforta The one day when the lady met this fellow and they knew it was much','John Doe','- designer','home-reviews/customer2.png'),
(3,'The one day when the lady met this fellow and they knew it was much more than a hunch\r\n	 the first mate and his Skipper too will do their comforta The one day when the lady met \r\n	 this fellow and they knew it was much more than a hunch the first mate and his Skipper too\r\n	 will do their comforta The one day when the lady met this fellow and they knew it was much','John Doe','- designer','home-reviews/customer3.png');

/*Table structure for table `filtered_special_menu` */

DROP TABLE IF EXISTS `filtered_special_menu`;

CREATE TABLE `filtered_special_menu` (
  `id` int NOT NULL AUTO_INCREMENT,
  `food_image` varchar(100) NOT NULL,
  `food_name` varchar(100) NOT NULL,
  `food_description` varchar(200) NOT NULL,
  `food_price` decimal(6,2) NOT NULL,
  `food_type` varchar(20) NOT NULL,
  `food_global_type` varchar(10) NOT NULL,
  `food_state` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `filtered_special_menu` */

insert  into `filtered_special_menu`(`id`,`food_image`,`food_name`,`food_description`,`food_price`,`food_type`,`food_global_type`,`food_state`) values 
(1,'header-images/menu-list-images/grilled-blt-salad.png','GRILLED CHICKEN BLT SALAD','Chicken breasts, lemon juice, dried oregano, garlic.',20.50,'salads','all',1),
(2,'header-images/menu-list-images/valentinos-special.png','VALENTINOS SPECIAL PIZZA','Combo pizza with Italian-seasoned ground beef,\r\n	   Italian sausage, pepperoni, honey-cured ham, and sliced mushrooms.',20.50,'pizzas','all',1),
(3,'menu-images/ceaser.png','CEASER SALAD','French baguette, letucce, chicken, parmesan, garlic.',20.50,'salads','all',1),
(4,'header-images/menu-list-images/orange_cocktail.png','ORANGE COCKTAIL','Orange juice, vodka, lemon-lime soda, grand marnier.',20.50,'drinks','all',1),
(5,'menu-images/cookies.png','CHOCOLATE COOKIES','Unsalted butter, brown sugar, egg, vanilla, flour.',20.50,'desserts','all',1),
(6,'header-images/menu-list-images/pepperoni.png','PEPPERONI PIZZA','Tomato sauce, pepperoni, mozzarella,parmezan, garlic, oregano, sugar.',20.50,'pizzas','all',1),
(7,'menu-images/seafood_pasta.png','SEA FOOD PASTA','Peeled shrimp, elbow macaroni, tomato pulp, garlic, medium onion.',20.50,'pasta','all',1),
(8,'header-images/menu-list-images/valdostana.png','VALDOSTANA PIZZA','Tomato sauce, mozzarellam pressed cheese, ham, oregano.',20.50,'pizzas','all',1),
(9,'header-images/menu-list-images/raspberry_cocktail.webp','RASPBERRY COCKTAIL','Vodka, sugar, lime, raspberries.',20.50,'drinks','all',1);

/*Table structure for table `food_menu` */

DROP TABLE IF EXISTS `food_menu`;

CREATE TABLE `food_menu` (
  `id` int NOT NULL AUTO_INCREMENT,
  `food_name` varchar(40) NOT NULL,
  `food_image` varchar(100) NOT NULL,
  `ingredient1` varchar(40) NOT NULL,
  `ingredient2` varchar(40) NOT NULL,
  `ingredient3` varchar(40) NOT NULL,
  `food_description` varchar(500) NOT NULL,
  `order_button` varchar(20) NOT NULL,
  `food_type` varchar(40) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `food_menu` */

insert  into `food_menu`(`id`,`food_name`,`food_image`,`ingredient1`,`ingredient2`,`ingredient3`,`food_description`,`order_button`,`food_type`) values 
(1,'STRAWBERRY SHORTCAKE','menu-images/food-menu/list-13.jpg','Strawberries','CREAM','Salt','There are many variations of passages of Lorem Ipsum available,\r\n	  but the majority have suffered alteration in some form, by injected\r\n	  humour, or','ORDER NOW','dessert'),
(2,'BARBECUE PIZZA','menu-images/food-menu/list-8.jpg','Strawberries','CREAM','Salt','There are many variations of passages of Lorem Ipsum available,\r\n	  but the majority have suffered alteration in some form, by injected\r\n	  humour, or','ORDER NOW','pizza'),
(3,'BARBECUE PIZZA','menu-images/food-menu/list-15.jpg','Strawberries','CREAM','Salt','There are many variations of passages of Lorem Ipsum available,\r\n	  but the majority have suffered alteration in some form, by injected\r\n	  humour, or','ORDER NOW','drink'),
(4,'STRAWBERRY DAIQUIRI','menu-images/food-menu/list-12.jpg','Lime juice','Strawberries','Light rum','There are many variations of passages of Lorem Ipsum available,\r\n	  but the majority have suffered alteration in some form, by injected\r\n	  humour, or','ORDER NOW','burger'),
(5,'BARBECUE PIZZA','menu-images/food-menu/list-2.jpg','Chicken','Olive Oil','Salt','There are many variations of passages of Lorem Ipsum available,\r\n	  but the majority have suffered alteration in some form, by injected\r\n	  humour, or','ORDER NOW','pasta'),
(6,'BARBECUE PIZZA','menu-images/food-menu/list-11.jpg','Chicken','Olive Oil','Salt','There are many variations of passages of Lorem Ipsum available,\r\n	  but the majority have suffered alteration in some form, by injected\r\n	  humour, or','ORDER NOW','pizza'),
(7,'BARBECUE PIZZA','menu-images/food-menu/list-10.jpg','Chicken','Olive Oil','Salt','There are many variations of passages of Lorem Ipsum available,\r\n	  but the majority have suffered alteration in some form, by injected\r\n	  humour, or','ORDER NOW','salad'),
(8,'BARBECUE PIZZA','menu-images/food-menu/list-6.jpg','Chicken','Olive Oil','Salt','There are many variations of passages of Lorem Ipsum available,\r\n	  but the majority have suffered alteration in some form, by injected\r\n	  humour, or','ORDER NOW','pizza'),
(9,'BARBECUE PIZZA','menu-images/food-menu/list-14.jpg','Strawberries','CREAM','Salt','There are many variations of passages of Lorem Ipsum available,\r\n	  but the majority have suffered alteration in some form, by injected\r\n	  humour, or','ORDER NOW','salad');

/*Table structure for table `latest_news` */

DROP TABLE IF EXISTS `latest_news`;

CREATE TABLE `latest_news` (
  `id` int NOT NULL AUTO_INCREMENT,
  `news_image` varchar(100) NOT NULL,
  `news_date` date NOT NULL,
  `news_by` varchar(50) NOT NULL,
  `news_comments` json NOT NULL,
  `news_title` varchar(200) NOT NULL,
  `read_more_button` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `latest_news` */

insert  into `latest_news`(`id`,`news_image`,`news_date`,`news_by`,`news_comments`,`news_title`,`read_more_button`) values 
(1,'home-latestNews/news1.jpg','2023-05-11','By - John Doe','[]','POSSESSION SO COMPARISON INQUIETUDE HE CONVICTION','Read More'),
(2,'home-latestNews/news2.jpg','2023-05-11','By - John Doe','[]','POSSESSION SO COMPARISON INQUIETUDE HE CONVICTION','Read More'),
(3,'home-latestNews/news3.jpg','2023-05-11','By - John Doe','[]','POSSESSION SO COMPARISON INQUIETUDE HE CONVICTION','Read More');

/*Table structure for table `our_specialty` */

DROP TABLE IF EXISTS `our_specialty`;

CREATE TABLE `our_specialty` (
  `id` int NOT NULL AUTO_INCREMENT,
  `specialty_image` varchar(100) NOT NULL,
  `specialty_type` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `our_specialty` */

insert  into `our_specialty`(`id`,`specialty_image`,`specialty_type`) values 
(1,'home/speciality/speciality1.jpg','MEXICAN GREEN WAVE'),
(2,'home/speciality/speciality2.jpg','DOUBLE CHEESE PIZZA'),
(3,'home/speciality/speciality3.jpg','MARGHERITA PIZZA');

/*Table structure for table `pizza_reviews` */

DROP TABLE IF EXISTS `pizza_reviews`;

CREATE TABLE `pizza_reviews` (
  `id` int NOT NULL AUTO_INCREMENT,
  `commenter_image` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `commenter_full_name` varchar(50) NOT NULL,
  `commenter_review` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `reply_button` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `review_date` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `pizza_reviews` */

insert  into `pizza_reviews`(`id`,`commenter_image`,`commenter_full_name`,`commenter_review`,`reply_button`,`review_date`) values 
(1,'header-images/pizza-review/comment1.jpg','Jason Stethem','Lorem ipsum dolor sit amet adipiscing elit labore dolore that sed do eiusmod tempor labore dolore that magna aliqua. Ut enim ad minim veniam, exercitation.','Reply','2023-11-11'),
(2,'header-images/pizza-review/comment2.jpg','Dwayne Johnson','Lorem ipsum dolor sit amet adipiscing elit labore dolore that sed do eiusmod tempor labore dolore that magna aliqua. Ut enim ad minim veniam, exercitation.','Reply','2023-11-11'),
(3,'header-images/pizza-review/comment3.jpg','Vin Diesel','Lorem ipsum dolor sit amet adipiscing elit labore dolore that sed do eiusmod tempor labore dolore that magna aliqua. Ut enim ad minim veniam, exercitation.','Reply','2023-11-11');

/*Table structure for table `pizzas` */

DROP TABLE IF EXISTS `pizzas`;

CREATE TABLE `pizzas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pizza_image` varchar(100) NOT NULL,
  `pizza_name` varchar(100) NOT NULL,
  `pizza_price` decimal(6,2) NOT NULL,
  `pizza_description` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `last_price` varchar(100) NOT NULL,
  `currency` varchar(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=405 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `pizzas` */

insert  into `pizzas`(`id`,`pizza_image`,`pizza_name`,`pizza_price`,`pizza_description`,`last_price`,`currency`) values 
(1,'header-images/menu-list-images/pepperoni.png','Pepperoni',12.99,'Tomato sauce, pepperoni, mozzarella,parmezan, garlic, oregano, sugar.','30.50','USD'),
(2,'header-images/menu-list-images/vegetarian.png','Vegetarian',12.99,'Tomato sauce, purple onion, mushrooms, green pepper, olive fruit.','30.50','USD'),
(3,'header-images/menu-list-images/specialty.png','Speciality',12.99,'Tomato souce, tomato, grated, mozarella, lettuce.','30.50','USD'),
(4,'header-images/menu-list-images/hamCheese.webp','Ham & Cheese',12.99,'Ham, mozzarella, bacon.','30.50','USD'),
(5,'header-images/menu-list-images/onion.png','Onion',12.99,'Sausage, purple onion, marinated cucumber, tomato sauce, mushroom, parsley.','30.50','USD'),
(6,'header-images/menu-list-images/margherita.webp','Margherita pizza',12.99,'Crushed San Marzano tomato sauce, fresh mozzarella and basil, a drizzle of olive oil, and a sprinkle of salt.','30.50','USD');

/*Table structure for table `special_menu` */

DROP TABLE IF EXISTS `special_menu`;

CREATE TABLE `special_menu` (
  `id` int NOT NULL AUTO_INCREMENT,
  `food_image` varchar(100) NOT NULL,
  `food_name` varchar(100) NOT NULL,
  `food_description` varchar(200) NOT NULL,
  `food_price` decimal(6,2) NOT NULL,
  `food_type` varchar(20) NOT NULL,
  `food_global_type` varchar(10) NOT NULL,
  `food_state` int NOT NULL,
  `currency` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `special_menu` */

insert  into `special_menu`(`id`,`food_image`,`food_name`,`food_description`,`food_price`,`food_type`,`food_global_type`,`food_state`,`currency`) values 
(1,'header-images/menu-list-images/grilled-blt-salad.png','GRILLED CHICKEN BLT SALAD','Chicken breasts, lemon juice, dried oregano, garlic.',20.50,'salads','all',1,'USD'),
(2,'header-images/menu-list-images/valentinos-special.png','VALENTINOS SPECIAL PIZZA','Combo pizza with Italian-seasoned ground beef,\r\n	    Italian sausage, pepperoni, honey-cured ham, and sliced mushrooms.',23.99,'pizzas','all',1,'USD'),
(3,'menu-images/ceaser.png','CEASER SALAD','French baguette, letucce, chicken, parmesan, garlic.',20.50,'salads','all',1,'USD'),
(4,'header-images/menu-list-images/orange_cocktail.png','ORANGE COCKTAIL','Orange juice, vodka, lemon-lime soda, grand marnier.',20.50,'drinks','all',1,'USD'),
(5,'menu-images/cookies.png','CHOCOLATE COOKIES','Unsalted butter, brown sugar, egg, vanilla, flour.',20.50,'desserts','all',1,'USD'),
(6,'header-images/menu-list-images/pepperoni.png','PEPPERONI PIZZA','Chicken breasts, lemon juice, dried oregano, garlic.',20.50,'salads','all',1,'USD'),
(7,'menu-images/seafood_pasta.png','SEA FOOD PASTA','Chicken breasts, lemon juice, dried oregano, garlic.',20.50,'salads','all',1,'USD'),
(8,'header-images/menu-list-images/valdostana.png','VALDOSTANA PIZZA','Chicken breasts, lemon juice, dried oregano, garlic.',20.50,'salads','all',1,'USD'),
(9,'header-images/menu-list-images/raspberry_cocktail.webp\'','RASPBERRY COCKTAIL','Chicken breasts, lemon juice, dried oregano, garlic.',20.50,'salads','all',1,'USD'),
(10,'header-images/menu-list-images/mojito.png','BLUEBERRY MOJITO','Chicken breasts, lemon juice, dried oregano, garlic.',20.50,'salads','all',1,'USD'),
(11,'header-images/menu-list-images/med_salad.avif','MED SALAD WITH GRILLED CHICKEN','Chicken breasts, lemon juice, dried oregano, garlic.',20.50,'salads','all',1,'USD'),
(12,'header-images/menu-list-images/greek_salad.png','GREEK SALAD','Chicken breasts, lemon juice, dried oregano, garlic.',20.50,'salads','all',1,'USD'),
(13,'header-images/menu-list-images/burger1.webp','SMASHBURGER','Chicken breasts, lemon juice, dried oregano, garlic.',20.50,'salads','all',1,'USD'),
(14,'header-images/menu-list-images/burger2.png','FLAME-GRILLED BURGER','Chicken breasts, lemon juice, dried oregano, garlic.',20.50,'salads','all',1,'USD'),
(15,'header-images/menu-list-images/kfc_burger.jpg','KFC BURGER','Chicken wings, chilli heatwave doritos, chili powder,\r\n	    garlic flakes, red pepper, onion flakes.',20.50,'burgers','all',1,'USD'),
(16,'header-images/menu-list-images/double_burger.png','DOUBLE BURGER','Burger buns, fresh beef chuck, letucce, tomato, white onion, cheese sauce.',20.50,'burgers','all',1,'USD'),
(17,'header-images/menu-list-images/pasta_with_peanut_sauce.webp','PASTA WITH PEANUT SAUCE','Silky peanut sauce with tender veggies, a splash of lime and\r\n	    organic noodles and real broth base to nourish your body and soul.',20.50,'pasta','all',1,'USD'),
(18,'header-images/menu-list-images/tiramisu.avif','TIRAMISU','Prepared strong coffee, espresso powder, egg, granulated sugar, salt.',20.50,'desserts','all',1,'USD'),
(19,'header-images/menu-list-images/papanasi.png','PAPANASI WITH FOREST FRUIT','Donut with heavy cream, candied forest fruit and cheese.',20.50,'desserts','all',1,'USD'),
(20,'header-images/menu-list-images/lasagne_bolognese.webp','LASAGNE BOLOGNESE','Onion, carrot, celery stalk, beef chuck.',20.50,'pasta','all',1,'USD');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
