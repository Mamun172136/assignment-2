# assignment-2

# Routes
# task 2 http://localhost:5000/api/v1//booksByGenre/:genre
# task 3  http://localhost:5000/api/v1/booksByGenreAndPublishedBy
# task 4 http://localhost:5000/api/v1/booksByRating
# task 5 http://localhost:5000/api/v1/updatePrice

# Question 1: What is the purpose of creating a model with an interface and schema in MongoDB? How does it help in defining the structure of a collection?
# ans 1 : Creating a model with an interface and schema in MongoDB serves the purpose of defining and enforcing the structure, types, and rules for documents in a collection. It ensures consistency, provides type safety in TypeScript, and facilitates organized database operations through a defined interface. Ensures consistent data structure, type safety, and aids in database interactions.

#  Question 2: Explain the concept of field filtering in MongoDB. How can you specify which fields to include or exclude in the returned documents?
# Include: Specify the fields you want, like selecting specific columns in a table. Exclude: Specify fields to omit, similar to saying, "I don't need these columns."
# db.collection.find({}, { includedField1: 1, includedField2: 1, _id: 0 })
# db.collection.find({}, { excludedField1: 0, excludedField2: 0 })

# Question 3: What are instance methods in MongoDB models? Provide an example of a custom instance method and explain its purpose.
# ans 3 :  In MongoDB models, instance methods are functions that you can define on the schema to be used on instances of documents.
# const mongoose = require('mongoose');
# const userSchema = new mongoose.Schema({
#  username: String,
#  email: String,
 # });
  
# userSchema.methods.getInfo = function () {
#  return `Username: ${this.username}, Email: ${this.email}`;
# };

# const User = mongoose.model('User', userSchema);

# const userInstance = new User({ username: 'John', email: 'john@example.com' });

# const userInfo = userInstance.getInfo();
# console.log(userInfo); // Output: "Username: John, Email: john@example.com"

#  questtion 4 : How do you use comparison operators like "$ne," "$gt," "$lt," "$gte," and "$lte" in MongoDB queries? Provide examples to illustrate their usage.
# ans 4: In MongoDB queries, comparison operators like "$ne" (not equal), "$gt" (greater than), "$lt" (less than), "$gte" (greater than or equal to), and "$lte" (less than or equal to) are used to filter documents based on field values. Here are examples illustrating their usage:

# db.products.find({ price: { $ne: 20 } });
# db.products.find({ price: { $gt: 50 } });
# db.products.find({ price: { $lt: 30 } });
# db.products.find({ price: { $gte: 30 } });
# db.products.find({ price: { $lte: 50 } });

# What are MongoDB’s “$in” and “$nin” operators? How can you use them to match values against an array of values or exclude values from a given array?
# ans 5 In MongoDB, the "$in" and "$nin" operators are used for matching values against an array of values or excluding values from a given array, respectively.

# db.products.find({ category: { $in: ["Electronics", "Clothing"] } });
# db.products.find({ category: { $nin: ["Furniture", "Toys"] } });

