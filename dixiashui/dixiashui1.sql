/*
Navicat MySQL Data Transfer

Source Server         : dixiashui
Source Server Version : 50532
Source Host           : localhost:3306
Source Database       : dixiashui

Target Server Type    : MYSQL
Target Server Version : 50532
File Encoding         : 65001

Date: 2017-07-11 17:50:17
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `b_user`
-- ----------------------------
DROP TABLE IF EXISTS `b_user`;
CREATE TABLE `b_user` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(20) NOT NULL COMMENT '用户名',
  `PASSWORD` varchar(64) NOT NULL COMMENT '密码',
  `sim` varchar(15) NOT NULL COMMENT '电话',
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of b_user
-- ----------------------------
INSERT INTO `b_user` VALUES ('1', '张艳芳', '123', '12345678956');
INSERT INTO `b_user` VALUES ('2', '李行亮', '234', '78945612354');
INSERT INTO `b_user` VALUES ('3', '郑浩佳', '345', '56987412365');
INSERT INTO `b_user` VALUES ('4', '郑志明', '567', '78956321456');
INSERT INTO `b_user` VALUES ('5', '张志明', '567', '85632145698');

-- ----------------------------
-- Table structure for `n_gourndstation`
-- ----------------------------
DROP TABLE IF EXISTS `n_gourndstation`;
CREATE TABLE `n_gourndstation` (
  `AUTOID` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `CODE` varchar(20) NOT NULL COMMENT '站号',
  `NAME` varchar(20) NOT NULL COMMENT '站名',
  `ADDRESS` varchar(100) NOT NULL COMMENT '站的地点',
  PRIMARY KEY (`AUTOID`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of n_gourndstation
-- ----------------------------
INSERT INTO `n_gourndstation` VALUES ('11', '0001', '1站', '西安市袁家村');
INSERT INTO `n_gourndstation` VALUES ('12', '0002', '2站', '郑州市长兴村');
INSERT INTO `n_gourndstation` VALUES ('13', '0003', '3站', '咸阳市李家村');
INSERT INTO `n_gourndstation` VALUES ('14', '0004', '4站', '汉台市淘沙村');
INSERT INTO `n_gourndstation` VALUES ('15', '0005', '5站', '海口市冯家村');

-- ----------------------------
-- Table structure for `n_groundhisdata`
-- ----------------------------
DROP TABLE IF EXISTS `n_groundhisdata`;
CREATE TABLE `n_groundhisdata` (
  `AUTOID` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `CODE` varchar(8) NOT NULL COMMENT '站号',
  `DATETIME` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '时间',
  `V1` float NOT NULL COMMENT '埋深',
  `V2` float NOT NULL COMMENT '温度',
  `V3` float NOT NULL COMMENT '标高',
  `V4` float NOT NULL COMMENT '分站电量',
  `V5` float NOT NULL COMMENT '传感器电量',
  `V6` float NOT NULL COMMENT '气压',
  PRIMARY KEY (`AUTOID`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of n_groundhisdata
-- ----------------------------
INSERT INTO `n_groundhisdata` VALUES ('11', '0001', '2016-07-13 17:17:27', '6.7594', '26.302', '-2.214', '6.3102', '7.1516', '100.21');
INSERT INTO `n_groundhisdata` VALUES ('12', '0002', '2016-06-16 17:17:31', '6.7593', '26.301', '-2.211', '6.3101', '7.1513', '100.01');
INSERT INTO `n_groundhisdata` VALUES ('13', '0003', '2016-05-19 17:17:35', '6.7592', '26.303', '-2.212', '6.3103', '7.1514', '100.31');
INSERT INTO `n_groundhisdata` VALUES ('14', '0004', '2016-04-21 17:17:39', '6.7591', '26.304', '-2.213', '6.3104', '7.1515', '100.41');
INSERT INTO `n_groundhisdata` VALUES ('15', '0005', '2016-03-16 17:17:49', '6.7801', '26.305', '-2.215', '6.3105', '7.1512', '100.51');

-- ----------------------------
-- Table structure for `n_groundhis_real`
-- ----------------------------
DROP TABLE IF EXISTS `n_groundhis_real`;
CREATE TABLE `n_groundhis_real` (
  `AUTOID` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `CODE` varchar(8) NOT NULL COMMENT '站号',
  `DATETIME` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '时间',
  `V1` float NOT NULL COMMENT '埋深',
  `V2` float NOT NULL COMMENT '温度',
  `V3` float NOT NULL COMMENT '标高',
  `V4` float NOT NULL COMMENT '分站电量',
  `V5` float NOT NULL COMMENT '传感器电量',
  `V6` float NOT NULL COMMENT '气压',
  PRIMARY KEY (`AUTOID`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of n_groundhis_real
-- ----------------------------
INSERT INTO `n_groundhis_real` VALUES ('11', '0001', '2017-02-08 17:02:12', '6.5799', '27.302', '-2.224', '6.3012', '7.1526', '100.12');
INSERT INTO `n_groundhis_real` VALUES ('12', '0002', '2017-03-08 17:05:39', '6.5798', '27.301', '-2.221', '6.3011', '7.1523', '100.11');
INSERT INTO `n_groundhis_real` VALUES ('13', '0003', '2017-04-04 17:06:46', '6.5797', '27.303', '-2.222', '6.3013', '7.1524', '100.13');
INSERT INTO `n_groundhis_real` VALUES ('14', '0004', '2017-05-10 17:08:27', '6.5796', '27.304', '-2.223', '6.3014', '7.1525', '100.14');
INSERT INTO `n_groundhis_real` VALUES ('15', '0005', '2017-06-07 17:09:30', '6.5795', '27.305', '-2.225', '6.3015', '7.1522', '100.15');
