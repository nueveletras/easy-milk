-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema easymilk_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema easymilk_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `easymilk_db` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin ;
USE `easymilk_db` ;

-- -----------------------------------------------------
-- Table `easymilk_db`.`GROUPS_COWS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `easymilk_db`.`GROUPS_COWS` (
  `ID_GROUP_COW` INT NOT NULL AUTO_INCREMENT,
  `NAME` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`ID_GROUP_COW`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `easymilk_db`.`COWS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `easymilk_db`.`COWS` (
  `ID_COW` INT NOT NULL,
  `NAME` VARCHAR(20) NULL,
  `BIRTH_DATE` DATE NOT NULL,
  `BUY_DATE` DATE NULL,
  `ID_GROUP_COW` INT NOT NULL,
  PRIMARY KEY (`ID_COW`),
  INDEX `fk_COWS_GROUP_COW1_idx` (`ID_GROUP_COW` ASC),
  CONSTRAINT `fk_COWS_GROUP_COW1`
    FOREIGN KEY (`ID_GROUP_COW`)
    REFERENCES `easymilk_db`.`GROUPS_COWS` (`ID_GROUP_COW`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `easymilk_db`.`PASTURES`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `easymilk_db`.`PASTURES` (
  `ID_PASTURES` INT NOT NULL AUTO_INCREMENT,
  `DESCRIPTION` TEXT NOT NULL,
  `AREA` DOUBLE NOT NULL,
  PRIMARY KEY (`ID_PASTURES`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `easymilk_db`.`PASTURES_HAS_GROUPS_COWS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `easymilk_db`.`PASTURES_HAS_GROUPS_COWS` (
  `ID_PASTURES` INT NOT NULL,
  `ID_GROUP_COW` INT NOT NULL,
  `START_DATE` DATE NOT NULL,
  `END_DATE` DATE NULL,
  PRIMARY KEY (`ID_PASTURES`, `ID_GROUP_COW`, `START_DATE`),
  INDEX `fk_PASTURES_has_GROUP_COW_GROUP_COW1_idx` (`ID_GROUP_COW` ASC),
  INDEX `fk_PASTURES_has_GROUP_COW_PASTURES_idx` (`ID_PASTURES` ASC),
  CONSTRAINT `fk_PASTURES_has_GROUP_COW_PASTURES`
    FOREIGN KEY (`ID_PASTURES`)
    REFERENCES `easymilk_db`.`PASTURES` (`ID_PASTURES`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_PASTURES_has_GROUP_COW_GROUP_COW1`
    FOREIGN KEY (`ID_GROUP_COW`)
    REFERENCES `easymilk_db`.`GROUPS_COWS` (`ID_GROUP_COW`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `easymilk_db`.`QUALITIES`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `easymilk_db`.`QUALITIES` (
  `ID_QUALITY` INT NOT NULL AUTO_INCREMENT,
  `DESCRIPTION` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`ID_QUALITY`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `easymilk_db`.`USERS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `easymilk_db`.`USERS` (
  `ID_USER` INT NOT NULL AUTO_INCREMENT,
  `DOCUMENT_TYPE` ENUM('CC', 'CE', 'PT', 'TI', 'NIT') NOT NULL,
  `DOCUMENT` VARCHAR(12) NOT NULL,
  `NAME` VARCHAR(20) NOT NULL,
  `LAST_NAME` VARCHAR(20) NULL,
  `ADDRESS` VARCHAR(80) NULL,
  `PHONE` VARCHAR(15) NOT NULL,
  `ROL` VARCHAR(20) NULL,
  `HIRE_DATE` DATE NULL,
  `FIRE_DATE` DATE NULL,
  PRIMARY KEY (`ID_USER`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `easymilk_db`.`PRODUCTIONS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `easymilk_db`.`PRODUCTIONS` (
  `ID_PRODUCTION` INT NOT NULL AUTO_INCREMENT,
  `ID_COW` INT NOT NULL,
  `REGISTER_DATE` DATETIME NOT NULL,
  `LITERS` DOUBLE NOT NULL,
  `ID_QUALITY` INT NOT NULL,
  `ID_USER_REGISTER` INT NOT NULL,
  PRIMARY KEY (`ID_PRODUCTION`),
  INDEX `fk_PRODUCTIONS_COWS1_idx` (`ID_COW` ASC),
  INDEX `fk_PRODUCTIONS_QUALITIES1_idx` (`ID_QUALITY` ASC),
  INDEX `fk_PRODUCTIONS_USERS1_idx` (`ID_USER_REGISTER` ASC),
  CONSTRAINT `fk_PRODUCTIONS_COWS1`
    FOREIGN KEY (`ID_COW`)
    REFERENCES `easymilk_db`.`COWS` (`ID_COW`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_PRODUCTIONS_QUALITIES1`
    FOREIGN KEY (`ID_QUALITY`)
    REFERENCES `easymilk_db`.`QUALITIES` (`ID_QUALITY`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_PRODUCTIONS_USERS1`
    FOREIGN KEY (`ID_USER_REGISTER`)
    REFERENCES `easymilk_db`.`USERS` (`ID_USER`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `easymilk_db`.`NEWS_TYPES`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `easymilk_db`.`NEWS_TYPES` (
  `ID_NEW_TYPE` INT NOT NULL AUTO_INCREMENT,
  `DESCRIPTION` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`ID_NEW_TYPE`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `easymilk_db`.`NEWS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `easymilk_db`.`NEWS` (
  `ID_NEW` INT NOT NULL AUTO_INCREMENT,
  `ID_NEW_TYPE` INT NOT NULL,
  `ID_COW` INT NOT NULL,
  `DESCRIPTION` TEXT NOT NULL,
  `REGISTER_DATE` DATETIME NOT NULL,
  `ID_USER_REGISTER` INT NOT NULL,
  PRIMARY KEY (`ID_NEW`),
  INDEX `fk_NEWS_NEWS_TYPES1_idx` (`ID_NEW_TYPE` ASC),
  INDEX `fk_NEWS_COWS1_idx` (`ID_COW` ASC),
  INDEX `fk_NEWS_USERS1_idx` (`ID_USER_REGISTER` ASC),
  CONSTRAINT `fk_NEWS_NEWS_TYPES1`
    FOREIGN KEY (`ID_NEW_TYPE`)
    REFERENCES `easymilk_db`.`NEWS_TYPES` (`ID_NEW_TYPE`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_NEWS_COWS1`
    FOREIGN KEY (`ID_COW`)
    REFERENCES `easymilk_db`.`COWS` (`ID_COW`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_NEWS_USERS1`
    FOREIGN KEY (`ID_USER_REGISTER`)
    REFERENCES `easymilk_db`.`USERS` (`ID_USER`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `easymilk_db`.`NEWS_TYPES`
-- -----------------------------------------------------
START TRANSACTION;
USE `easymilk_db`;
INSERT INTO `easymilk_db`.`NEWS_TYPES` (`ID_NEW_TYPE`, `DESCRIPTION`) VALUES (1, 'PARTO');
INSERT INTO `easymilk_db`.`NEWS_TYPES` (`ID_NEW_TYPE`, `DESCRIPTION`) VALUES (2, 'ENFERMEDAD');
INSERT INTO `easymilk_db`.`NEWS_TYPES` (`ID_NEW_TYPE`, `DESCRIPTION`) VALUES (3, 'VACUNA');
INSERT INTO `easymilk_db`.`NEWS_TYPES` (`ID_NEW_TYPE`, `DESCRIPTION`) VALUES (4, 'ACCIDENTE');
INSERT INTO `easymilk_db`.`NEWS_TYPES` (`ID_NEW_TYPE`, `DESCRIPTION`) VALUES (5, 'OTRAS');

COMMIT;

