# assignment-2

# Question 1: What is the purpose of creating a model with an interface and schema in MongoDB? How does it help in defining the structure of a collection?
# ans 1 : Creating a model with an interface and schema in MongoDB serves the purpose of defining and enforcing the structure, types, and rules for documents in a collection. It ensures consistency, provides type safety in TypeScript, and facilitates organized database operations through a defined interface. Ensures consistent data structure, type safety, and aids in database interactions.

#  Question 2: Explain the concept of field filtering in MongoDB. How can you specify which fields to include or exclude in the returned documents?
# Include: Specify the fields you want, like selecting specific columns in a table. Exclude: Specify fields to omit, similar to saying, "I don't need these columns."
# db.collection.find({}, { includedField1: 1, includedField2: 1, _id: 0 })
# db.collection.find({}, { excludedField1: 0, excludedField2: 0 })

# Question 3: What are instance methods in MongoDB models? Provide an example of a custom instance method and explain its purpose.
# In MongoDB models, instance methods are functions that you can define on the schema to be used on instances of documents.
# const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
});

// Custom instance method
userSchema.methods.getInfo = function () {
  return `Username: ${this.username}, Email: ${this.email}`;
};

const User = mongoose.model('User', userSchema);

const userInstance = new User({ username: 'John', email: 'john@example.com' });

// Using the custom instance method
const userInfo = userInstance.getInfo();
console.log(userInfo); // Output: "Username: John, Email: john@example.com"
