# Tablolar | SQL

----------

## Oluşturmak

* Oluşturmak için gerekli syntax budur:

`CREATE TABLE <table_name>` 

`(<column_name> <data_type> <constraint>`

`...`

`<column_name> <data_type> <constraint>)`

---------------

* Veri eklemek için gerekli syntax:

`INSERT INTO <table_name> (değişkenlerin, sırasını, belirtiyoruz)`

`VALUES`

`(değişkenleri, sırayla, belirtiyoruz)`

-------------

* Bir tablonun başlıklarını kopyalayarak yeni bir tablo oluşturmak için

`CREATE TABLE <table_name> (LIKE <table_name>)`

-----------------

* Başka bir tablodan, bir başka tabloya veri eklemek için:

`INSERT INTO table`

`SELECT FROM table2`

`WHERE...`

----

* Bir tablodan kopya oluşturmak için:

`CREATE TABLE <table_name> AS <table_name>`

-------------------



## Silmek

* Silmek için gerekli syntax(Ayrıca TABLE'dan sonra IF EXIST de koyabiliriz)

`DROP TABLE <table_name>` 











  



