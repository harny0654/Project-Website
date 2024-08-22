CREATE DATABASE IF NOT EXISTS `event_register_db` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `event_register_db`;

CREATE TABLE `tbl_member` (
  `id` int(11) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `department` varchar(100) NOT NULL,
  `select_level` varchar(100) NOT NULL,
  `role` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO `tbl_member` (`id`, `firstname`, `lastname`,`password`,`department`,`select_level`,`role`) VALUES
(1, '้harny', 'wasd','123456','ปวส.2','สทส.2','teacher');

ALTER TABLE `tbl_member`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `tbl_member`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;