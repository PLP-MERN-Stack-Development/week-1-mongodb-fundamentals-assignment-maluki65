// On finding all books in a specific genre
db.books.find({ genre: "Fiction" })

// On finding published after a certain year
db.books.find({ published_year: { $gt: 2015 } })

// On finding by a specific author
db.books.find({ author: "Alice Johnson" })

// On updating the price of a specific book
db.books.updateOne({ title: "The Great Adventure" }, { $set: { price: 24.99 } })

// on deleting a book by its title
db.books.deleteOne({ title: "The Great Adventure" })

// On finding books that are in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } })

// On returning only title, author, and price
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 })

// On sorting by price (ascending)
db.books.find().sort({ price: 1 })

// On sorting by price (descending)
db.books.find().sort({ price: -1 })

// On pagination: page 1 (first 5 books)
db.books.find().skip(0).limit(5)

// On pagination: page 2
db.books.find().skip(5).limit(5)

// On aggregation: average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
])

// On aggregation: author with the most books
db.books.aggregate([
  { $group: { _id: "$author", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
])

// Group books by decade
db.books.aggregate([
  {
    $group: {
      _id: { $floor: { $divide: ["$published_year", 10] } },
      count: { $sum: 1 }
    }
  },
  {
    $project: {
      decade: { $multiply: ["$_id", 10] },
      count: 1,
      _id: 0
    }
  }
])

// On creating index on title
db.books.createIndex({ title: 1 })

// On creating compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 })

// On using explain() to show index usage
db.books.find({ title: "Code the Future" }).explain("executionStats")
