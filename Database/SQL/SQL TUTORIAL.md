# Full Database Course




## What Is a Database ?



* any collection of related data.



## Database Types 


### Relational Databases (SQL)

* Organises the data into one or more tables 

* A unique key identifies each row.


### Non Relational, No-SQL, Not Just SQL

* Organize data is anything but in traditional tables.
    * key-value tables
    * graphs
    * documents, JSON, XML




## Key and Tables

### Primary Key
* It makes the row unique by using unique nums or string values.



### Surrogate Key

* a key has no mapping, doesn't necessarily mean anything in real world...


### Natural Key

* a key has mapping and has a purpose in real world like SSNs.



### Foreign Key

* a key stores primary key of a table which links us to 


### Composite Key

* a key consists 2 or more columns.
* these columns are probably gonna be foreign keys, which links to another tables and are their PK.






# Tables 

### Data Types
* INT
* DECIMAL(M,N)
    * M is total digits and N is the digits comeing after decimal points 
* VARCHAR(X): String of text of length X
* BLOB: Binary Large Object. Image and Videos...
* DATE: YYYY-MM-DD
* TIMESTAMP: YYYY-MM-DD HH:MM:SS
------------------


## CREATING TABLE

* CREATE TABLE tablename (columnName DataType PRIMARY KEY, columnName2 DataType, ...)
OR
(columnName DataType, columnName2 DataType, ..., PRIMARY KEY(columName))



### DESCRIBE


* DESCRIBE tableName to describe the table with its datatypes and other info...


### DROP TABLE

* DROP TABLE tableName to delete table.


### Modifing Table

* ALTER TABLE tableName ADD newColumnName DataType

* ALTER TABLE tableName DROP COLUMN columnName  

* ALTER TABLE tableName ColumnName SET DEFAULT is used to change default value for the given column.
-------------------------
## Inserting Values

* INSERT INTO tableName VALUES(column1value, column2value...)

__to specify the columns u wanna add values use this:__

* INSERT INTO tableName(columnName1, columnName2,...) VALUES(valueForColumn1, ValueForColumn2,...)

------------------------------------------------
## Constraints

* Primary Key makes the column unique and not null



* NOT NULL added by colum name to avoid null values for the column.

* DEFAULT 'value' to set default values
    * ...VARCHAR(20) DEFAULT 'undecided'
* Auto_increment to increment int values automatically

----------------------
## UPDATE AND DELETE

* UPDATE tableName SET columnName = value, columnName2 = value... (then condition),


* DELETE FROM tableName => deletes all rows
* add __WHERE__ to specify the row(s)




## Operators

* <> is the important one meaning that is not equal to.


### IN

* allows to select values IN A GROUP something like that.
    * SELECT * FROM ... WHERE name IN ("Furkan", "Gençay", "Esat")
    * means that select all column that name is Furkan or Gençay or Esat.
----------------


## Foreign Key Config

### Adding FK during table creation
* FOREIGN KEY(columnName) __REFERENCES__ referencedTableName(referencedColumnName) ON DELETE CASCADE OR SET NULL
    * Example: FOREIGN KEY(mgr_id) REFERENCES employee(emp_id) ON DELETE SET NULL


### Setting FK using ALTER TABLE

* ALTER TABLE tableName __ADD FOREIGN KEY(columnName)__ _REFERENCES_ tableName(columnName) ON DELETE...



## Functions

* SELECT COUNT(columnName)
    * counts given columns without null value.


* SELECT AVG(columnName); => to get average value of the given column;

* SELECT SUM(columName); => to get the sum of given column.

* REPLACE(column, 'searchedValue', 'replacedValue')

* ROUND(value, decimal places count)

### Aggregation

* using functions and display the data in helpful way

* SELECT FUNCTION(SUM, COUNT etc), column2... GROUP BY column2  => to aggregate both function return and colum2;


## UNIONS 
* allows to list 2 columns in 1 column.
    * datatypes should be same.
* select n column ...
UNION
select n column;


## JOINS

* allows to combine related tables using the columns with same values.

    * SELECT columns(can be both from table1&2)... FROM table __JOIN__ table2 _ON_ table1.columnx = table2.columny
    * columnx and columny can be foreign and primary keys of the tables.

### Inner join
* includes the rows that has the related values.

### LEFT JOIN
* Includes ALL ROWS of column that comes after FROM keyword
    * But rows may have NULL values because they may not have related data.

### RIGHT JOIN 
* Includes ALL ROWS of column that comes after RIGHT JOIN keyword


## NESTED QUERIES
* is using more than 2 select keywords.
* can be used as SELECT ... FROM ... WHERE ... IN (SELECT ...)
    * IN can be other operators like = 

-----------------
## ONDELETE

### ON DELETE SET NULL
* when an entry deleted from db, associated columns will be set null.

### ON DELETE CASCADE
* when an entry deleted from db, associated columns will be deleted.


## TRIGGERS

* any time something happens, then trigger something, it.
* u gotta set triggers using sql terminals.
* normally, we use ; as delimiter to limit our commands.
* since we use ; in trigger, we gotta use another delimiter.
* we use _DELIMITER $$_ for triggers instead of ;
Trigger example:

DELIMITER $$$$(2dollar signs actually)\
$~~~~~~$ CREATE TRIGGER trigger_name BEFORE INSERT\
$~~~~~~$ ON tableName\
$~~~~~~$ FOR EACH ROW BEGIN\
$~~~~~~$ INSERT INTO tableName VALUES(...)\
$~~~~~~$ END$$\
DELIMITER;\

OR \

DELIMITER $$$$(2dollar signs actually)\
$~~~~~~$ CREATE TRIGGER trigger_name BEFORE INSERT\
$~~~~~~$ ON tableName\
$~~~~~~$ FOR EACH ROW BEGIN\
$~~~~~~$ INSERT INTO tableName VALUES(NEW.columnName)\
$~~~~~~$ END$$\
DELIMITER;\

Also column values just added can be used with NEW keyword and .columnName\

* IF ELSE conditions can be used in TRIGGER

DELIMITER $$$$(2dollar signs actually)\
$~~~~~~$ CREATE TRIGGER trigger_name BEFORE INSERT\
$~~~~~~$ ON tableName\
$~~~~~~$ FOR EACH ROW BEGIN\
$~~~~~~$ IF _conditions..._ THEN\
$~~~~~~$ do something...\
$~~~~~~$ ELSEIF _conditions..._ THEN\
$~~~~~~$ do something...\
$~~~~~~$ ELSE do something...\
$~~~~~~$ __END IF;__\
$~~~~~~$ END$$\
DELIMITER;\


## Conditions with WHEN-CASE

CASE\
$~~~~~$ WHEN condition1 THEN result1\
$~~~~~$ WHEN condition2 THEN result2\
$~~~~~$ WHEN conditionN THEN resultN\
$~~~~~$ ELSE result\
END;\