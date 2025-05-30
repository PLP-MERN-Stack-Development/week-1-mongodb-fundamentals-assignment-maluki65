# PLP Bookstore MongoDB Project

## 📦 Setup

### Option 1: MongoDB Locally
1. Run `mongosh`
2. Use: `load("insert_books.js")` to insert book data.
3. Run queries from `queries.js`

### Option 2: MongoDB Atlas
1. Connect to your Atlas cluster
2. Use `plp_bookstore` database
3. Run commands in `insert_books.js` and `queries.js` using Atlas Shell or Compass

### Option 3: Using VS Code
1. cd to week-1-mongodb-fundamentals-assignment-maluki65
2.Run npm install to add dependacies.
3. run node App.js 

## 📂 Files Included
- `insert_books.js`: Adds 10 sample books to `books` collection
- `queries.js`: All queries for CRUD, advanced filters, aggregations, and indexing
- `screenshot.png`: Snapshot of MongoDB Compass showing collections

## 💡 Notes
- All queries tested using `mongosh` and Compass
- Indexing improves query performance (see explain results in queries.js)
