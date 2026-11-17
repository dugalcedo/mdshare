# Laura — Python Web Dev Roadmap

All the section projects build ONE app that grows over time. Theme: **TBD** (recipes, books, workouts, journal...).

---

## Requirements

- [ ] Python 3 installed — https://www.python.org/downloads/
- [ ] Visual Studio Code — https://code.visualstudio.com/
    - Python extension — https://code.visualstudio.com/docs/python/python-tutorial
- [ ] GitHub account — https://github.com/
- [ ] Working microphone (if taking lessons)

## Prerequisite knowledge

- [ ] How to type (ideally 30+ WPM) — https://www.keybr.com/
- [ ] How to use VSCode
- [ ] How to use the Live Share extension (if taking lessons) — https://code.visualstudio.com/learn/collaboration/live-share
- [ ] How to study on w3schools — https://www.w3schools.com/python/

---

## 1. Python Foundations

Main reference: the official tutorial — https://docs.python.org/3/tutorial/
Beginner-friendly reference: https://www.w3schools.com/python/

- [ ] Running Python
    - the REPL (`python` / `python3`)
    - running a `.py` file
    - `print()`
- [ ] Reading errors
    - what a traceback is and how to read it (bottom-up)
    - common errors: `SyntaxError`, `NameError`, `TypeError`, `IndentationError`
    - https://docs.python.org/3/tutorial/errors.html
- [ ] Data types
    - `str`, `int`, `float`, `bool`, `None`
    - `type()`
    - converting types (`int()`, `str()`, `float()`)
- [ ] Variables
    - naming rules & conventions (snake_case)
    - reassignment, `+=`, `-=`
- [ ] Strings
    - concatenation
    - f-strings — https://docs.python.org/3/tutorial/inputoutput.html#formatted-string-literals
    - common methods (`.upper()`, `.lower()`, `.strip()`, `.split()`, `.replace()`)
    - indexing & slicing
- [ ] Math
    - `+ - * / // % **`
    - operator precedence
- [ ] `input()`
    - getting user input (always a string!)
- [ ] Conditionals
    - `if` / `elif` / `else`
    - comparison operators (`==`, `!=`, `>`, `<`, `>=`, `<=`)
    - logical operators (`and`, `or`, `not`)
    - truthy & falsy values
    - indentation matters
- [ ] Loops
    - `for` and `range()`
    - `while`
    - `break` & `continue`
- [ ] Lists
    - creating & indexing (zero-based)
    - `len()`
    - `.append()`, `.pop()`, `.remove()`, `.insert()`
    - looping over a list
    - `in`
    - https://docs.python.org/3/tutorial/datastructures.html
- [ ] Tuples
    - like lists, but can't be changed
    - unpacking (`a, b = (1, 2)`)
- [ ] Dictionaries
    - key/value pairs
    - reading, adding, updating, deleting
    - `.get()`
    - looping (`.keys()`, `.values()`, `.items()`)
    - lists of dicts (this is what database rows will look like later!)
- [ ] Functions
    - `def`, calling
    - parameters vs arguments
    - `return`
    - default parameters & keyword arguments
    - scope (local vs global)
- [ ] Comprehensions
    - list comprehensions
    - dict comprehensions
- [ ] Modules & imports
    - `import x`, `from x import y`
    - the standard library (`random`, `datetime`, `os`)
    - splitting your code into multiple files
    - `if __name__ == "__main__":`
    - https://docs.python.org/3/tutorial/modules.html
- [ ] Error handling
    - `try` / `except` / `else` / `finally`
    - `raise`
- [ ] Files & JSON
    - `open()` and the `with` statement
    - reading & writing text files — https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files
    - the `json` module (`json.load`, `json.dump`) — https://docs.python.org/3/library/json.html
- [ ] Classes (light intro)
    - `class`, `__init__`, `self`
    - instance attributes & methods
    - https://docs.python.org/3/tutorial/classes.html

### 🛠 Project: Command-line app
A CLI version of the app. A menu loop that lets you add, list, edit, and delete items. Items are stored as a list of dicts and saved to a JSON file so they survive between runs.

---

## 2. Tooling

- [ ] Using a terminal
    - navigating (`cd`, `ls`, `pwd`)
    - creating & removing files/folders (`mkdir`, `touch`, `rm`)
- [ ] Virtual environments
    - why they exist
    - `python -m venv .venv`
    - activating / deactivating
    - https://docs.python.org/3/tutorial/venv.html
- [ ] pip
    - `pip install`
    - `pip freeze > requirements.txt`
    - `pip install -r requirements.txt`
    - https://pip.pypa.io/en/stable/user_guide/
    - PyPI (where packages live) — https://pypi.org/
- [ ] Git & GitHub
    - `git init`, `add`, `commit`, `push`
    - `.gitignore` (ignore `.venv` and `.env`!)
    - https://docs.github.com/en/get-started
    - Pro Git book (free) — https://git-scm.com/book/en/v2

### 🛠 Project: Put the CLI app on GitHub
Move the CLI app into a proper project folder with a venv, a `requirements.txt`, a `.gitignore`, and push it to a GitHub repo.

---

## 3. HTTP Basics

- [ ] How the web works
    - client & server
    - request / response
    - https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview
- [ ] HTTP methods
    - GET vs POST (the two we'll actually use)
    - PUT, PATCH, DELETE (good to know)
    - https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
- [ ] Status codes
    - 200, 302, 404, 500
    - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
- [ ] URLs
    - the parts of a URL
    - query strings (`?search=pasta&page=2`)
- [ ] Headers & body
- [ ] Looking at requests in the browser's dev tools (Network tab)

---

## 4. HTML (just enough)

Jinja produces HTML and Flask receives data from HTML forms, so we need the basics.

- MDN — https://developer.mozilla.org/en-US/docs/Learn/HTML
- w3schools — https://www.w3schools.com/html/

- [ ] Vocabulary
    - element, tag, attribute, content
    - parent, child, sibling
- [ ] Boilerplate
- [ ] `<head>` vs `<body>`
- [ ] Text elements (`p`, `h1`–`h6`, `strong`, `em`)
- [ ] Links (`a`) & images (`img`)
- [ ] Relative vs absolute paths
- [ ] Lists (`ul`, `ol`, `li`)
- [ ] Tables
- [ ] Semantic layout (`header`, `nav`, `main`, `footer`)
- [ ] Forms
    - `form`, `action`, `method` (GET vs POST)
    - `input` types, `textarea`, `select`, `button`
    - `label` + `for`/`id`
    - the `name` attribute (no name = not submitted!)
    - `required`, `min`, `max`
    - https://developer.mozilla.org/en-US/docs/Learn/Forms
- [ ] (Optional) A little CSS
    - linking a stylesheet
    - basic selectors, colors, fonts
    - https://www.w3schools.com/css/

### 🛠 Project: Static mockup
Hand-write the HTML pages the app will need: a list page, a detail page, and an "add new" form. They're static for now and get turned into templates later.

---

## 5. Flask

- Quickstart — https://flask.palletsprojects.com/en/stable/quickstart/
- Official tutorial — https://flask.palletsprojects.com/en/stable/tutorial/

- [ ] What Flask is (a micro web framework)
- [ ] Installing Flask in a venv
- [ ] Hello world
    - `app = Flask(__name__)`
    - `flask --app app run --debug`
    - debug mode & the reloader
- [ ] Routes
    - `@app.route`
    - returning strings, HTML, and JSON (dicts)
    - variable rules (`/items/<int:id>`)
- [ ] The request object
    - `request.method`
    - `request.args` (query strings)
    - `request.form` (form data)
    - https://flask.palletsprojects.com/en/stable/api/#flask.Request
- [ ] Handling GET and POST
    - `methods=["GET", "POST"]`
    - the POST → redirect → GET pattern
- [ ] `redirect()` & `url_for()`
- [ ] `abort()` & error pages (404)
- [ ] Static files (`/static`)
- [ ] Project structure

### 🛠 Project: Flask version (no templates yet)
Serve the app with Flask. Routes list items, show one item, and accept a POST from a form to add an item. Data still comes from the JSON file.

---

## 6. Jinja

- Template designer docs — https://jinja.palletsprojects.com/en/stable/templates/
- Flask templating — https://flask.palletsprojects.com/en/stable/templating/

- [ ] `render_template()` & the `templates/` folder
- [ ] Printing variables `{{ }}`
- [ ] Control flow `{% %}`
    - `{% if %}` / `{% elif %}` / `{% else %}`
    - `{% for %}` (and `{% else %}` for empty lists)
    - `loop.index`
- [ ] Filters
    - `upper`, `lower`, `title`, `length`, `default`, `join`
- [ ] Template inheritance
    - `base.html`
    - `{% block %}` & `{% extends %}`
- [ ] `{% include %}` for reusable pieces
- [ ] `url_for()` inside templates (links, static files)
- [ ] Autoescaping (why `<script>` in user input doesn't run)
- [ ] Flashing messages — https://flask.palletsprojects.com/en/stable/patterns/flashing/

### 🛠 Project: Turn the mockup into templates
Turn the static mockup into Jinja templates with a shared `base.html`. Wire them up to the Flask routes, so adding, editing, and deleting work through real forms. Data is still in JSON.

---

## 7. SQL & PostgreSQL

- PostgreSQL tutorial — https://www.postgresql.org/docs/current/tutorial.html
- SQLBolt (interactive practice) — https://sqlbolt.com/
- w3schools — https://www.w3schools.com/sql/

- [ ] Why a database
    - why the JSON file isn't enough
    - what a relational database is
- [ ] Installing Postgres — https://www.postgresql.org/download/
- [ ] `psql`
    - connecting
    - `\l`, `\c`, `\dt`, `\d table`, `\q`
    - https://www.postgresql.org/docs/current/app-psql.html
- [ ] Tables, rows & columns
- [ ] Data types
    - `INTEGER`, `TEXT`, `VARCHAR`, `BOOLEAN`, `TIMESTAMP`, `NUMERIC`
    - https://www.postgresql.org/docs/current/datatype.html
- [ ] `CREATE TABLE` / `DROP TABLE`
    - primary keys (`id SERIAL PRIMARY KEY` / `GENERATED ALWAYS AS IDENTITY`)
    - `NOT NULL`, `UNIQUE`, `DEFAULT`
- [ ] CRUD
    - `INSERT`
    - `SELECT`
    - `UPDATE`
    - `DELETE` (and the danger of forgetting `WHERE`)
- [ ] Filtering & sorting
    - `WHERE`, `AND`, `OR`, `LIKE` / `ILIKE`
    - `ORDER BY`, `LIMIT`, `OFFSET`
- [ ] Aggregates
    - `COUNT`, `SUM`, `AVG`
    - `GROUP BY`
- [ ] Relationships
    - foreign keys (`REFERENCES`)
    - one-to-many
    - many-to-many (join tables)
- [ ] JOINs
    - `INNER JOIN`, `LEFT JOIN`
    - https://www.postgresql.org/docs/current/tutorial-join.html
- [ ] Writing a `schema.sql` file and running it

### 🛠 Project: Design the database
Design the app's schema in a `schema.sql` file, with at least two related tables. Seed it with sample data and write queries in `psql` for everything the app needs, including at least one JOIN.

---

## 8. psycopg (Python ↔ Postgres)

- Docs — https://www.psycopg.org/psycopg3/docs/
- Install — https://www.psycopg.org/psycopg3/docs/basic/install.html

- [ ] Installing (`pip install "psycopg[binary]"`)
- [ ] Connection strings
- [ ] Environment variables & `.env`
    - `python-dotenv` — https://pypi.org/project/python-dotenv/
    - never commit `.env`!
- [ ] Connecting & cursors
    - `psycopg.connect()` 
    - `conn.execute()` / `cur.execute()`
    - `fetchone()`, `fetchall()`
    - https://www.psycopg.org/psycopg3/docs/basic/usage.html
- [ ] Passing parameters safely
    - `%s` placeholders
    - **SQL injection** (why you never use f-strings for SQL)
    - https://www.psycopg.org/psycopg3/docs/basic/params.html
    - https://owasp.org/www-community/attacks/SQL_Injection
- [ ] Transactions
    - `commit()` & `rollback()`
    - using `with` blocks
    - https://www.psycopg.org/psycopg3/docs/basic/transactions.html
- [ ] Rows as dicts (`row_factory=dict_row`)
    - https://www.psycopg.org/psycopg3/docs/advanced/rows.html
- [ ] Organizing queries
    - a `db.py` module with one function per query

### 🛠 Project: Data layer
Write a `db.py` module with functions like `get_all_items()`, `get_item(id)`, `create_item(...)`, `update_item(...)`, and `delete_item(id)`. Test them from a plain Python script.

---

## 9. Putting It All Together

- [ ] Using `db.py` in Flask routes
- [ ] Opening/closing connections per request
    - https://flask.palletsprojects.com/en/stable/appcontext/
- [ ] Handling "not found" (404 when a row doesn't exist)
- [ ] Form validation on the server
- [ ] (Optional) Users & login
    - Flask sessions — https://flask.palletsprojects.com/en/stable/quickstart/#sessions
    - `SECRET_KEY`
    - hashing passwords (`generate_password_hash`, `check_password_hash`) — https://werkzeug.palletsprojects.com/en/stable/utils/#module-werkzeug.security
    - protecting routes
- [ ] (Optional) Deployment
    - Render — https://render.com/docs/deploy-flask

### 🛠 Final project: Full app
Replace the JSON file with Postgres. The finished app is a full CRUD Flask + Jinja + psycopg app with related data, safe queries, and credentials in `.env`, pushed to GitHub.
