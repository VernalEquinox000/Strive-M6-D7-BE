DROP TABLE IF EXISTS authors;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS articles;

CREATE TABLE
authors (
	author_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	name VARCHAR (50) NOT NULL,
	img VARCHAR (100));

CREATE TABLE
categories (
	category_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	name VARCHAR (50) NOT NULL,
	img VARCHAR (100),
	postedAt TIMESTAMP default NOW());

CREATE TABLE
articles (
    _id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    headLine VARCHAR(100) NOT NULL,
    subHead VARCHAR(200),
    content VARCHAR(2000),
    category INTEGER NOT NULL,
    author INTEGER NOT NULL,
	cover VARCHAR(20),
	postedAt TIMESTAMP default NOW(),
	modifiedAt TIMESTAMP default NOW(),
      FOREIGN KEY(author) 
	  REFERENCES authors(author_id),
      FOREIGN KEY(category) 
	  REFERENCES categories(category_id)
	)
