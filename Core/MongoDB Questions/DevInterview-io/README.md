https://github.com/Devinterview-io/mongodb-interview-questions


# 100 Core MongoDB Interview Questions in 2026

<div>
<p align="center">
<a href="https://devinterview.io/questions/web-and-mobile-development/">
<img src="https://firebasestorage.googleapis.com/v0/b/dev-stack-app.appspot.com/o/github-blog-img%2Fweb-and-mobile-development-github-img.jpg?alt=media&token=1b5eeecc-c9fb-49f5-9e03-50cf2e309555" alt="web-and-mobile-development" width="100%">
</a>
</p>

#### You can also find all 100 answers here 👉 [Devinterview.io - MongoDB](https://devinterview.io/questions/web-and-mobile-development/mongodb-interview-questions)

<br>

## 1. What is _MongoDB_ and what are its main features?

**MongoDB** is a robust, document-oriented NoSQL database designed for high performance, scalability, and developer agility.

### Key Features

#### Flexible Data Model

- Employs **JSON-like documents** (BSON format), facilitating complex data representation, deep nesting, and array structures.
- Provides dynamic schema support, allowing **on-the-fly data definition and data types**.
- Permits multi-document transactions within a replica set (group of nodes). **Sharding** extends this to support large distributed systems.

#### Indexed Queries

- Offers extensive indexing capabilities, such as single and multi-field support, **text**, **geospatial**, and **TTL** (Time to Live) Indexes for data expiration.
- Gives developers the tools needed to design and optimize query performance.

#### High Availability & Horizontal Scalability

- Uses replica sets for data redundancy, ensuring **auto-failover** in the event of a primary node failure.
- Adopts sharding to **distribute data across clusters**, facilitating horizontal scaling for large datasets or high-throughput requirements.

#### Advanced Querying

- Engages in **ad-hoc querying**, making it easy to explore and analyze data.
- Provides **aggregation pipeline**, empowering users to modify and combine data, akin to SQL GROUP BY.
- Specialized query tools like **Map-Reduce** and **Text Search** cater to distinctive data processing needs.

#### Embedded Data Management

- Encourages a rich, document-based data model where you can **embed related data** within a single structure.
- This denormalization can enhance read performance and data retrieval simplicity.

#### Rich Tool Suite

- Further augmented by several desktop and web-supported clients, MongoDB Atlas offers a seamless and unified experience for database management. 
- Web-based MongoDB Compass handles query optimization and schema design.

#### Code Sample: Data Interaction with MongoDB

Here is the Python code:

```python
from pymongo import MongoClient

client = MongoClient()  # Connects to default address and port
db = client.get_database('mydatabase')

# Insert a record
collection = db.get_collection('mycollection')
inserted_id = collection.insert_one({'key1': 'value1', 'key2': 'value2'}).inserted_id

# Query records
for record in collection.find({'key1': 'value1'}):
    print(record)

# Update record
update_result = collection.update_one({'_id': inserted_id}, {'$set': {'key2': 'new_value'}})
print(f"Modified {update_result.modified_count} records")

# Delete record
delete_result = collection.delete_one({'key1': 'value1'})
print(f"Deleted {delete_result.deleted_count} records")
```
<br>

## 2. How does _MongoDB_ differ from relational databases?

While both **MongoDB** and relational databases handle data, they do so in fundamentally different ways. Let's explore the key distinctions.

### Data Model

#### Relational Databases
- Use tables with predefined schemas that **enforce relationships and data types**.
- Often use normalization techniques to minimize data redundancy.

#### MongoDB
- Stores data as **flexible, schema-less** sets of key-value pairs inside documents.
- Relationships can be represented through embedded documents or referencing via keys, providing more granular control and allowing for a more natural representation of real-world data.

### Data Integrity

#### Relational Databases
- Rely on **ACID transactions** to ensure data consistency.

#### MongoDB
- Offers **ACID guarantees** at the document level, though transactions across multiple documents happen within the same cluster to ensure consistency.
- Provides **multi-document transactions** for more complex operations.

### Query Language

#### Relational Databases
- Use SQL, a **declarative** query language.

#### MongoDB
- Employs **JSON-like** queries, which are **imperative** and resemble the structure of the data it operates on.

### Scalability

#### Relational Databases
- Traditionally use a **vertical scaling** approach, featuring limits on a single server's resources such as CPU, storage, and memory.

#### MongoDB
- Designed for **horizontal scaling**, making it easier to handle larger datasets and heavier loads by distributing data across multiple servers. This scalability also supports cloud-based setups.

### Performance

#### Relational Databases
- Can handle complex queries efficiently but might require multiple joins, potentially degrading performance.

#### MongoDB
- Optimized for quick CRUD operations and can efficiently handle large volumes of read and write requests.

### Indexing

#### Relational Databases
- Tables can have a multitude of indexes, which can be a mix of clustered, non-clustered, unique, or composite.

#### MongoDB
- Collections can have several indexes, including single field, compound, and multi-key indexes. 

### Data Joins

#### Relational Databases
- Use joins to merge related data from different tables during a query, ensuring data integrity.

#### MongoDB
- Offers **embedded documents** and **manual reference** to achieve similar results, but multi-collection joins have performance and scalability considerations.
<br>

## 3. Can you describe the structure of data in _MongoDB_?

In **MongoDB**, data units are organized into **collections**, which group related documents. Each **document** corresponds to a single **record** and maps to fields or **key-value pairs**.

### JSON-Like Format

Data in MongoDB is stored using a **BSON** (Binary JSON) format that can handle a maximum depth of 100 levels. This means a BSON object or element can be a document consisting of up to 100 sub-elements, such as fields or values.

#### Example: Nested Document

Here is a nested document:

```json
{
  "_id": "123",
  "title": "My Blog Post",
  "author": {
    "name": "John Doe",
    "bio": "Tech enthusiast"
  },
  "comments": [
    {
      "user": "Alice",
      "text": "Great post"
    },
    {
      "user": "Bob",
      "text": "A bit lengthy!"
    }
  ]
}
```

In the example above, the "author" field is an embedded document (or sub-document), and the "comments" field is an array of documents.

### Key Features

- **Ad-Hoc Schema**: Documents in a collection don't need to have the same fields, providing schema flexibility.

- **Atomicity at the Document Level**: The `ACID` properties (Atomicity, Consistency, Isolation, Durability) of a transaction, which guarantee that the modifications are successful or unsuccessful as a unit of work.

- **Index Support**: Increases query performance.

- **Support for Embedded Data**: You can nest documents and arrays.

- **Reference Resolution**: It allows for processing references across documents. If a referenced document is modified or deleted, any reference to it from another document also needs to be updated or deleted in a multi-step atomic operation.

- **Sharding and Replication**: For horizontal scaling and high availability.

### Data Model Considerations

1. **One-to-One**: Typically achieved with embedded documents.

2. **One-to-Many (Parent-Child)**: This can be modelled using embedded documents in the parent.

3. **One-to-Many (Referenced)**: Achieved through referencing, where several documents contain a field referencing a single document. For better efficiency with frequent updates, consider referencing.

4. **Many-to-Many**: Modeled similarly to "One-to-Many" relationships.

5. **You should avoid** using “repeatable patterns”, such as storing data in separate arrays or collections, to ensure smooth data manipulation and effective query operations.

   For example, using separate collections for similar types of data based on a category like "users" and "admins" instead of a single "roles" array with multiple documents.

The above best practice example prevents **data redundancy** and ensures **consistency** between similar documents. Redundant storage or separating non-redundant data can lead to inconsistencies and increase the effort required for maintenance.
<br>

## 4. What is a _Document_ in _MongoDB_?

In MongoDB, a **document** is the basic data storage unit. It's a JSON-like structure that stores data in key-value pairs known as fields.

### Document Structure

Each **document**:

- Is a top-level entity, analogous to a row in a relational database.
- Is composed of **field-and-value** pairs, where the value can be a variety of data types, including arrays or sub-documents.
- Has a unique `_id` or primary key that is indexed for fast lookups.

Here is the document structure:

```json
{
  "_id": 1,
  "name": "John Doe",
  "age": 30,
  "email": "john.doe@email.com",
  "address": {
    "city": "Example",
    "zip": "12345"
  },
  "hobbies": ["golf", "reading"]
}
```

### Collections

Documents are grouped into **collections**. Each collection acts as a container with a unique namespace within a database. Collections don't enforce a predefined schema, which allows for flexibility in data modeling.

### Key Advantages

1. **Flexibility**: Documents can be tailored to the specific data needs of the application without adherence to a rigid schema.

2. **Data Locality**: Related data, like a user's profile and their posts, can be stored in one document, enhancing performance by minimizing lookups.

3. **JSON Familiarity**: Documents, being JSON-like, enable easier transitions between application objects and database entities.

4. **Indexing**: Fields within documents can be indexed, streamlining search operations.

5. **Transaction Support**: Modern versions of MongoDB offer ACID-compliant, multi-document transactions that ensure data consistency.

### Example Use Case

Consider an online library. Instead of having separate tables for users, books, and checkouts as in a relational database, you could store all the pertinent data about a user, including their checked-out books, in a **single document** within a `users` collection:

```json
{
  "_id": 1,
  "name": "John Doe",
  "email": "john.doe@email.com",
  "address": { "city": "Example", "zip": "12345" },
  "checkedOutBooks": [
    { "bookId": 101, "dueDate": "2022-02-28" },
    { "bookId": 204, "dueDate": "2022-03-15" }
  ]
}
```

This approach enables swift retrieval of all pertinent user information in one go.

### Considerations

- **Atomicity**: While single-document operations are atomic by default in MongoDB, transactions and atomicity guarantee apply to multi-document operations primarily.
- **Size Limitations**: Documents can't exceed 16MB in size. In most cases, this limit should not be a practical concern.
<br>

## 5. How is data stored in _collections_ in _MongoDB_?

In **MongoDB**, data is stored in **types of collections**, ensuring flexibility and efficiency in data modeling.

### Collection Basics

- Collections are the **primary data storage structures** in MongoDB, akin to tables in relational databases.
- They are schema-less, meaning that documents within a collection can have varying structures. This offers superior flexibility, while still allowing for structure validation through the use of JSON schema.

### Documents

- **Documents** serve as the unit of data storage in MongoDB. These are akin to rows in relational databases or objects in languages such as JavaScript.
- Documents are represented in **BSON** (Binary JSON) format, a binary representation closely mirroring JSON's attribute-value data model.

### Data Organization Hierarchy

- Data in MongoDB is organized in a **hierarchical structure**, with each database having one or more **collections**, each of which stores multiple **documents**, all of which can possess distinct structures.

### Key Data Principles

- MongoDB collections are designed to **optimize** data access rather than just serving as containers.
- To maximize efficiency, it's crucial to design collections that cater to common query patterns.

### Types of Database Collections

- By understanding the nuances of each collection type, you can better customize your MongoDB system to **cater to specific use-cases and performance requirements**.

#### AJAX Comments

- To effectively and iteratively store and manage comments, the AJAX Comments feature is engineered to provide a blend of flexibility and ease of access.
- It leverages **JSON-like documents** and the native power of MongoDB, such as **rich indexing** for efficient interactions.

#### Newsfeed Posts

- Tailored for sequential, feed-like content, such as posts from a social media platform or a messaging app.
- It benefits greatly from the ordered nature of **BSON documents**, making sure newer posts are easy to fetch.

#### User Profiles

- Focusing on user-defined, diverse, and possibly unstructured details, the User Profile collection is an ideal repository for self-descriptive user profiles.
- The **flexibility** of schema allows for comprehensive storage with minimal overhead.

#### Metadata

- For persistent and global configurations, the Metadata collection provides a secure space to cache system information.

#### Product Catalog

- Bolsters browsing and shopping activities by housing consistent, structured details related to products or services on offer.
- This attention to **consistency** helps in easy data retrieval and optimized user experiences.

#### Logging

- Ideally suited to record system interactions and debugging info, the Logging collection maintains an organized trail of system activity, nurturing a culture of informed decision-making.
<br>

## 6. Describe what a _MongoDB database_ is.

A **MongoDB database** is a document-oriented, NoSQL database consisting of collections, each of which in turn comprise documents.

### Core Concepts

#### 1. Collection

- A collection is a grouping of MongoDB documents. A collection is the **equivalent of a table** in a relational database.

Advantages of Using Collections:

- **Flexibility**: Each document in a collection can have its own set of fields. Structural changes are easier to manage than in traditional, rigid SQL tables.
- **Scalability**: Collections can be distributed across multiple servers or clusters to handle large data volumes.

#### 2. Document

- Synonymous with a record, a **document** is the main data storage unit in MongoDB. It is a set of key-value pairs.

    - Key: The field name
    - Value: The data

**Document-Key Pairs**:

- Each document maintains a unique ID, known as the **object ID** which is autogenerated. This ensures every document is distinct.

- Unlike SQL databases where each row of a table follows the same schema, a document can be more fluid, accommodating fields as required.

Considerations When Choosing the Level of Normalization:

- **Optimized Reads**: Normalization into separate collections may be beneficial if there are large amounts of data that might not always have to be fetched.
  
- **Batch Inserts and Updates**: Denormalization often leads to simpler write operations. If there will be a lot of changes or inserts, denormalization can be more efficient.

- **Atomicity**: When data that belongs together is split into different collections, ensuring atomicity can become difficult.

#### 3. Field

- A **field** is a single piece of data within a document. It's synonymous with a database column.

  - **Field Type**: MongoDB supports multiple field types, including arrays.

  - **Limit on Nested Fields**: Documents can be nested, which is like being able to have sub-documents within a main document. However, there is a depth limitation: you can't embed documents endlessly.

#### Schema

MongoDB is often regarded as **schema-less**, but a more accurate description is that it's **flexible**. While documents within a single collection can have different fields, a robust schema design process is still essential.

Adapting to Evolving Schemas:

- **Versioning**: Managed schema changes and versioning in the application layer.

- **Schema Validation**: Introduced in MongoDB 3.2, this feature allows for the application of structural rules to documents.

- **Education and Training**: Properly educating developers on the use of a database can minimize potential misuse of its flexibility.

- **Use of Techniques to Ensure Data Integrity**: Techniques such as double-entry bookkeeping can assure data accuracy, especially when dealing with multiple, occasionally outdated records.


### Modeling vs. Tuning Approaches

- **Normalization**: Seeks to reduce redundancy and improve data consistency.

- **Denormalization**: Emphasizes performance gains. Redundancies are knowingly introduced for optimized and rapid reads.

- **Use Cases Dictate**: Neither is definitively superior; their suitability depends on the specific use case.
<br>

## 7. What is the default _port_ on which _MongoDB_ listens?

The default **port number** for MongoDB is 27017. While it is possible to run multiple instances of MongoDB on the same machine, each instance must have its unique port number to ensure they don't conflict.
<br>

## 8. How does _MongoDB_ provide high availability and disaster recovery?

**MongoDB** ensures high availability and disaster recovery through a robust data architecture and a distributed system model. It integrates various mechanisms to maintain data integrity, uptime assurances, and data redundancy.

### Key Components

1. **Replica Sets**: These are clusters of MongoDB nodes that use automatic failover to maintain data consistency.

2. **WiredTiger Storage Engine**: It powers numerous features including data durability, in-memory storage, and compression.

3. **Oplog**: Short for "operations log", it records all write operations in an append-only manner.

4. **Write Concerns**: These are rules that determine the level of acknowledgment required for write operations.

5. **Read Preferences**: They define which nodes in a cluster can satisfy read operations.

6. **Data Centers**: Hardware resilience can be achieved by distributing nodes across multiple data centers.

7. **Backups and Restores**: MongoDB offers built-in mechanisms to backup and restore data, further aiding in disaster recovery.

8. **Monitoring Tools**: For performance tracking and potential issue detection.

9.  **Technology Agnostic**: Can deploy on multi-cloud, hybrid and on-premises architectures.

### Data Recovery Modes

1. **Restore**: Achieved through the backup of data when the config server is the only component that is active and accurate. This method doesn't consider data changes made after the backup was captured.
   
2. **Oplog Replays**: This involves using oplogs that track changes, ensuring that even after a cluster restart, any missed transactions are reinstated.

3. **Snapshotting**: It is a consistent snapshot of data across the nodes in the replica set.

### Code Example: Write Concerns and Oplog

Here is the Python code:

```python
# Import the MongoClient class from pymongo.
from pymongo import MongoClient

# Establish connection to the MongoDB server using MongoClient.
client = MongoClient('mongodb://localhost:27017/')

# Assign the test database to a variable
db = client.test

# Assign the collection within the test database to a variable
collection = db.test_collection

# Insert a document into the collection and set the write concern to 'majority'
result = collection.insert_one({'test_key': 'test_value'}, write_concern={'w': 'majority'})

# Fetch the oplog entry associated with the insert operation.
oplog_cursor = db.local.oplog.rs.find({'ns': 'test.test_collection', 'op': 'i'})

# Access the result and compare the count to ensure the operation was recorded in the oplog.
operation_count = oplog_cursor.count()
```

### Recommendations

- Employ consistent and comprehensive **backup** strategies in conjunction with multi-faceted recovery plans.
<br>

## 9. What are _indexes_ in _MongoDB_, and why are they used?

**Indexes** are employed in **MongoDB** to optimize database queries by providing faster access to data. Without indexes, MongoDB performs full collection scans.

### Common Types of Indexes in MongoDB

- **Single Field Index**: The most basic form of index.
- **Compound Index**: Generated across multiple fields; used for queries involving these fields.
- **Multikey Index**: Specially designed for arrays or embedded documents.

Batch Insert Operations on an Indexed Collection
Describe any performance bottlenecks you anticipate.

- **Text Index**: Suited for text searches, often leveraging stemming and stop words.

Unique
Explain in which situations it's beneficial to manage a unique index.
Discard icon
GEO Index
Describe the purpose of this index type and the type of queries it can optimize.

- **TTL (Time-to-Live) Index**: Deletes documents after a specified duration, suitable for logs and cached data.

### Common Performance Bottlenecks with Indexes

- **Index Overuse**: Too many indexes can degrade write performance.
  
- **Index Size**: Larger indexes consume more RAM and might slow down read and write operations.

- **Index Inefficiency**: Inaccurate or non-selective index usage can render them ineffective.

- **Write Penalties**: Indexes incur an overhead during writes, impacting their efficiency in write-heavy systems.

- **Index Maintenance**: Regular maintenance, like rebuilding or reorganizing indexes, is often necessary.

- **Workload Misalignment**: An index might not be beneficial if it's not aligned with the actual query workload.

Make sure to keep the indexes required and remove any unnecessary ones.
<br>

## 10. What is the role of the _id field_ in _MongoDB documents_?

The `_id` Field in MongoDB serves as a **primary key** and provides several key functionalities:

- **Uniqueness Guarantee**: Each document must have a unique `_id`, which ensures data integrity.
  
- **Automatic Indexing**: Automated indexing based on `_id` enhances query efficiency.

- **Inherent Timestamp**: The `_id` can have an embedded timestamp, useful for time-based operations.

  For instance, with an **ObjectId**, the first 8 characters represent a 4 byte timestamp:

  $\text{timestamp} = \text{substr}(\text{ObjectId}, 0, 8)$

- **Concurrency Control**: If multiple write operations with the same `_id` occur simultaneously, MongoDB uses a technique called **last-write wins** to manage the conflict:

  The document with the most recent `_id` value, or timestamp if using an ObjectId, supersedes the others.

- **_Modify and Return_**: When executing an operation to insert a new document or find & modify an existing one, you can request to return the modified document and its `_id`.

### ObjectId vs. Custom `_id`

While MongoDB provides **automatic ObjectId** generation, documents can also use custom values.

- **Custom Representations**: Unleash flexibility by using custom strings, numbers, or other valid BSON types for the `_id` field.

- **Controlled Uniformity**: Design your own `_id` strategy to align with data, such as employing natural keys for documents originating from specific, external sources.

- **Migrate with Care**: Once an application is live, altering the structure can be intricate. Transition plans are vital for a seamless shift.

- **Custom Indexing**: Managing an index on a uniquely generated custom `_id` turns the data into a compact, high-throughput structure.

### Schema Design and the `_id` Field

The choice between automatic ObjectId and custom `_id` values links back to the **intended data model, data access patterns**, and specific **domain requirements**.

While using the automatic ObjectId brings about benefits like **ease of use** and **embedded timestamp**, custom `_id` generation provides finer control and helps in scenarios where a specific data structure is favored or where external data sources need to be integrated.
<br>

## 11. How do you create a new _MongoDB collection_?

The process for creating a new collection in MongoDB is simple and instantaneous.

### Benefits of Instantaneous Creation

- MongoDB collections are schemaless, leading to immediate collection creation.
- Document structure and content drive schema design.
- No predefined schema requirements allow for dynamic, evolving data models.

### Steps to Create a Collection

1. **Select the Database:** Ensure you are connected to the intended database for the collection's creation. Switch to the desired database using `use` in the `mongo` shell or select the database programmatically in your driver's API.

2. **Perform a Write Operation:** The new collection is created the moment you execute a write operation such as `insert`, `update`, or `save`. 

3. **Check Collection Existence (Optional):** While not necessary for the creation process, you can verify the collection is created using the listCollections method.
<br>

## 12. What is the syntax to insert a _document_ into a _MongoDB collection_?

To **insert a document** into a **MongoDB collection**, you can use the **`insertOne()`** method, which accepts the document as an argument:

```javascript
db.collectionName.insertOne({
  key1: "value1",
  key2: 2,
  key3: [1, 2, 3],
  key4: { nestedKey: "nestedValue" }
});
```

Alternatively, you can use the **`insertOne()`** method, supply an array of documents with **`insertMany()`**:

```javascript
db.collectionName.insertMany([
  { key: "value1" },
  { key: "value2" }
]);
```
<br>

## 13. Describe how to read data from a _MongoDB collection_.

To **read** data from a **MongoDB collection**, you use the `find` method with various options for querying and data manipulation.

### Key Methods

- **find**(filter, projection): Retrieves documents based on filter conditions. You can specify which fields to include or exclude in the result (**projection**).
- **findOne**(filter, projection): Similar to `find` but retrieves only the first matching document.
- **distinct**(field, filter): Returns a list of distinct values for a specific field, optionally filtered.

### Query Operators

- **Comparison**: `$eq`, `$gt`, `$lt`, `$in`, `$nin`, etc.
- **Logical**: `$and`, `$or`, `$not`, `$nor`, etc.
- **Element**: `$exists`, `$type`
- **Evaluation**: `$regex`, `$mod`, `$text`
- **Geospatial**: `$geoNear`, `$geoWithin`, etc.

### Aggregation

MongoDB also provides the **aggregation framework** for complex operations, using a pipeline of various stages like `match`, `group`, `sort`, `limit`, etc.

### Example: Basic Find Query

Here is a Python code:

```python
import pymongo

client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["mydatabase"]
collection = db["mycollection"]

# Retrieve all documents
all_documents = collection.find()

# Alternatively, you can iterate through the cursor:
for doc in all_documents:
    print(doc)
```

### Example: Querying with Filters

Here is a Python code:

```python
# Let's say we have the following documents in the collection:
# [{
#    "name": "John",
#    "age": 30,
#    "country": "USA"
#  },
#  {
#    "name": "Jane",
#    "age": 25,
#    "country": "Canada"
# }]

# Retrieve documents where the name is "John"
john_doc = collection.find_one({"name": "John"})
print(john_doc)  # Output: {"name": "John", "age": 30, "country": "USA"}

# Retrieve documents where age is greater than or equal to 25 and from country "USA"
filter_criteria = {"age": {"$gte": 25}, "country": "USA"}
docs_matching_criteria = collection.find(filter_criteria)
for doc in docs_matching_criteria:
    print(doc)
    # Output: {"name": "John", "age": 30, "country": "USA"}
```

### Projection

**Projection** helps control the fields returned. It uses a dictionary where fields to include are marked with 1, and those to exclude with 0. 

For instance, `{"name": 1, "age": 1, "_id": 0}` only includes `name` and `age` while excluding `_id`:

Here is a Python code:

```python
# Retrieve the name and age fields, ignoring the _id field
docs_with_limited_fields = collection.find({}, {"name": 1, "age": 1, "_id": 0})
for doc in docs_with_limited_fields:
    print(doc)
    # Output: {"name": "John", "age": 30}
    #         {"name": "Jane", "age": 25}
```

### Sort, Skip, and Limit

**`sort`**, **`skip`**, and **`limit`** help in reordering, pagination, and limiting the result size.

Here is a Python code:

```python
# Sort all documents by age in descending order
documents_sorted_by_age = collection.find().sort("age", -1)

# Skip the first two documents and retrieve the rest
documents_after_skipping = collection.find().skip(2)

# Limit the number of documents returned to 3
limited_documents = collection.find().limit(3)
```

### Distinct Values

Here is a Python code:

```python
# Suppose, the collection has a "country" field for each document

# Get a list of distinct countries
distinct_countries = collection.distinct("country")
print(distinct_countries)  # Output: ["USA", "Canada"]
```

### Indexes

Indexes improve read performance. Ensure to use appropriate indexes for frequent and complex queries to speed up data retrieval. If the queries differ from the indexing pattern or if the collection is small, the gain from indexing might be insignificant, or it could even affect the write performance of the database. Choose an indexing strategy based on your data and usage patterns.

For example, if you frequently query documents based on their "country" field, consider creating an index on that field:

Here is a Python, PyMongo code:

```python
collection.create_index("country")
```

This would make lookups based on the "country" field more efficient.
<br>

## 14. Explain how to update _documents_ in _MongoDB_.

**MongoDB** offers several ways to update documents (equivalent to SQL's "rows"). Let’s look at the most common methods.

### Update Methods

- **Replace**: Entire document is updated. This is the closest equivalence to SQL's `UPDATE` statement.
- **Update**: For selective field updates, you use `$set`, `$inc`, `$push`, `$unset`, and more. This resembles SQL's `UPDATE` with selective column updates.

### Replace & Update in _MongoDB_

#### Top-Down Approach Using Replace

- **Method**: `db.collectionName.updateOne()`
- **Code**: 

    ```javascript
    db.collectionName.updateOne(
        {"name": "John Doe"},
        {$set: {"age": 30}}
    );
    ```

- **Use-Case**: When replacing an entire document isn't needed. For example, when changing a user's email address.

#### Bottom-Up Approach Using Update + $set

- **Method**: `db.collectionName.replaceOne()`
- **Code**: 

    ```javascript
    db.collectionName.replaceOne(
        {"name": "John Doe"},
        {"name": "John Doe", "age": 30}
    );
    ```

- **Use-Case**: When an entire document needs updating or replacing, such as a product detail or a user’s information.
<br>

## 15. What are the _MongoDB commands_ for deleting _documents_?

MongoDB offers several methods for deleting documents.

### Deletion Methods in MongoDB

1. **deleteOne()**: Deletes the first matched document.
  
2. **deleteMany()**: Removes all matching documents.

3. **remove()**: Legacy function; use `deleteOne()` or `deleteMany()` instead.

### General Syntax

- For `deleteOne()`, the syntax is: 
  - **db.collection.deleteOne({filter}, {options})**
  
- For `deleteMany()`, the syntax is: 
  - **db.collection.deleteMany({filter}, {options})**

### Code Example: Deleting One or Many

Here is the MongoDB shell script:

```javascript
// Connect to the database
use myDB;

// Delete a single document from 'myCollection'
db.myCollection.deleteOne({ name: "Document1" });

// Delete all documents from 'myCollection' with the condition 'age' greater than 25
db.myCollection.deleteMany({ age: { $gt: 25 } });
```
<br>

Here are questions 16–100 formatted with answers in that style:

```markdown
## 16. Can you join two _collections_ in _MongoDB_? If so, how?

MongoDB does not support joins in the traditional relational sense, but you can achieve similar functionality using the `$lookup` aggregation operator.

### Ways to Join Collections in MongoDB

1. **$lookup**: Performs a left outer join between two collections in the same database.

2. **Embedded Documents**: Denormalize related data by embedding documents within each other.

3. **Manual References**: Store the `_id` of one document in another and resolve the reference in application code.

### General Syntax

- For `$lookup`, the syntax is:
  - **db.collection.aggregate([{ $lookup: { from, localField, foreignField, as } }])**

### Code Example: Using $lookup

Here is the MongoDB shell script:

```javascript
// Connect to the database
use myDB;

// Join 'orders' collection with 'customers' collection
db.orders.aggregate([
  {
    $lookup: {
      from: "customers",        // The collection to join
      localField: "customerId", // Field in orders
      foreignField: "_id",      // Field in customers
      as: "customerDetails"     // Output array field
    }
  }
]);
```
<br>


## 17. How do you limit the number of documents returned by a _MongoDB query_?

MongoDB provides the `limit()` method to restrict the number of documents returned by a query. It is often combined with `skip()` for pagination.

### Methods for Limiting Results

1. **limit()**: Specifies the maximum number of documents to return.

2. **skip()**: Skips a specified number of documents before returning results.

3. **Combining limit() and skip()**: Used together for pagination.

### General Syntax

- For `limit()`, the syntax is:
  - **db.collection.find({filter}).limit(number)**

- For combining with `skip()`, the syntax is:
  - **db.collection.find({filter}).skip(number).limit(number)**

### Code Example: Limiting Results

Here is the MongoDB shell script:

```javascript
// Connect to the database
use myDB;

// Return only 5 documents from 'myCollection'
db.myCollection.find({}).limit(5);

// Skip the first 10 documents and return the next 5
db.myCollection.find({}).skip(10).limit(5);
```
<br>


## 18. What is the difference between _find()_ and _findOne()_ in _MongoDB_?

Both `find()` and `findOne()` are used to query documents from a collection, but they differ in the number of documents they return and how results are handled.

### Key Differences

1. **find()**: Returns a cursor pointing to all matching documents.

2. **findOne()**: Returns only the first matching document as a single object.

3. **Return Type**: `find()` returns a cursor; `findOne()` returns a document or `null`.

### General Syntax

- For `find()`, the syntax is:
  - **db.collection.find({filter}, {projection})**

- For `findOne()`, the syntax is:
  - **db.collection.findOne({filter}, {projection})**

### Code Example: find() vs findOne()

Here is the MongoDB shell script:

```javascript
// Connect to the database
use myDB;

// Returns a cursor with all matching documents
db.myCollection.find({ status: "active" });

// Returns only the first matching document
db.myCollection.findOne({ status: "active" });
```
<br>


## 19. How can you achieve _pagination_ in _MongoDB_?

Pagination in MongoDB is typically achieved using the `skip()` and `limit()` methods, or more efficiently using range-based pagination with an indexed field.

### Pagination Approaches

1. **skip() and limit()**: Simple but can be slow for large offsets.

2. **Range-based Pagination**: Uses a filter on an indexed field (e.g., `_id`) for better performance.

3. **Cursor-based Pagination**: Uses the last seen document's value to fetch the next page.

### General Syntax

- For skip/limit pagination:
  - **db.collection.find({}).skip(pageNumber * pageSize).limit(pageSize)**

- For range-based pagination:
  - **db.collection.find({ _id: { $gt: lastId } }).limit(pageSize)**

### Code Example: Pagination

Here is the MongoDB shell script:

```javascript
// Connect to the database
use myDB;

// Page 1: First 10 documents
db.myCollection.find({}).skip(0).limit(10);

// Page 2: Next 10 documents
db.myCollection.find({}).skip(10).limit(10);

// Range-based pagination (more efficient)
db.myCollection.find({ _id: { $gt: lastSeenId } }).limit(10);
```
<br>


## 20. What are the differences between _MongoDB's insertOne_ and _insertMany methods_?

Both `insertOne()` and `insertMany()` are used to add documents to a collection, but they differ in the number of documents they handle and their return values.

### Key Differences

1. **insertOne()**: Inserts a single document and returns an object with the inserted document's `_id`.

2. **insertMany()**: Inserts multiple documents at once and returns an array of inserted `_id` values.

3. **Error Handling**: `insertMany()` supports an `ordered` option to control behavior when an error occurs mid-insert.

### General Syntax

- For `insertOne()`, the syntax is:
  - **db.collection.insertOne({document}, {options})**

- For `insertMany()`, the syntax is:
  - **db.collection.insertMany([{doc1}, {doc2}], {options})**

### Code Example: insertOne vs insertMany

Here is the MongoDB shell script:

```javascript
// Connect to the database
use myDB;

// Insert a single document
db.myCollection.insertOne({ name: "Alice", age: 30 });

// Insert multiple documents
db.myCollection.insertMany([
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
  { name: "Diana", age: 28 }
]);

// Insert many with unordered option (continues on error)
db.myCollection.insertMany(
  [{ name: "Eve" }, { name: "Frank" }],
  { ordered: false }
);
```
<br>


## 21. Describe a _compound index_ in _MongoDB_.

A compound index is an index that references multiple fields within a collection. It is used to support queries that filter or sort on more than one field.

### Key Characteristics

1. **Multiple Fields**: A compound index includes two or more fields in a specified order.

2. **Field Order Matters**: The order of fields in the index affects which queries can use it.

3. **Sort Direction**: Each field in a compound index can have its own ascending (1) or descending (-1) direction.

### General Syntax

- For creating a compound index, the syntax is:
  - **db.collection.createIndex({ field1: 1, field2: -1 })**

### Code Example: Compound Index

Here is the MongoDB shell script:

```javascript
// Connect to the database
use myDB;

// Create a compound index on 'lastName' (ascending) and 'age' (descending)
db.myCollection.createIndex({ lastName: 1, age: -1 });

// Query that benefits from the compound index
db.myCollection.find({ lastName: "Smith" }).sort({ age: -1 });

// View all indexes on the collection
db.myCollection.getIndexes();
```
<br>


## 22. What is the _aggregation pipeline_ in _MongoDB_?

The aggregation pipeline is a framework for data aggregation, modeled on the concept of data processing pipelines. Documents enter a pipeline consisting of multiple stages, each transforming the data in some way.

### Key Pipeline Stages

1. **$match**: Filters documents to pass only those that meet specified conditions.

2. **$group**: Groups documents by a specified expression and applies accumulators.

3. **$sort**: Sorts documents by one or more fields.

4. **$project**: Reshapes each document by including, excluding, or adding fields.

5. **$lookup**: Performs a join with another collection.

### General Syntax

- For an aggregation pipeline, the syntax is:
  - **db.collection.aggregate([{stage1}, {stage2}, ...])**

### Code Example: Aggregation Pipeline

Here is the MongoDB shell script:

```javascript
// Connect to the database
use myDB;

// Pipeline: filter active users, group by department, sort by count
db.employees.aggregate([
  { $match: { status: "active" } },
  {
    $group: {
      _id: "$department",
      totalEmployees: { $sum: 1 },
      avgSalary: { $avg: "$salary" }
    }
  },
  { $sort: { totalEmployees: -1 } }
]);
```
<br>


## 23. How can you create an _index_ in _MongoDB_ and when should you do it?

Indexes in MongoDB are created using the `createIndex()` method. You should create indexes on fields that are frequently queried, sorted, or used in join conditions.

### When to Create Indexes

1. **Frequent Queries**: Fields that appear in `find()` filter conditions often.

2. **Sorting Fields**: Fields used in `.sort()` operations benefit from indexes.

3. **Unique Constraints**: Use a unique index to enforce field uniqueness.

### General Syntax

- For creating an index, the syntax is:
  - **db.collection.createIndex({ field: 1 }, { options })**

### Code Example: Creating Indexes

Here is the MongoDB shell script:

```javascript
// Connect to the database
use myDB;

// Create a single-field ascending index on 'email'
db.myCollection.createIndex({ email: 1 });

// Create a unique index to enforce uniqueness
db.myCollection.createIndex({ username: 1 }, { unique: true });

// Create a TTL index to auto-delete documents after 3600 seconds
db.myCollection.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 });
```
<br>


## 24. Explain how _MongoDB's $match, $group_ and _$sort operators_ work in an _aggregation pipeline_.

These three operators are among the most commonly used stages in MongoDB's aggregation pipeline. They filter, group, and order data respectively.

### Operator Descriptions

1. **$match**: Acts like a `find()` filter; only documents satisfying the condition pass through.

2. **$group**: Groups documents by a key and computes aggregated values using accumulators like `$sum`, `$avg`, `$min`, and `$max`.

3. **$sort**: Orders the documents in ascending (1) or descending (-1) order based on a field.

### General Syntax

- For `$match`:
  - **{ $match: { field: value } }**

- For `$group`:
  - **{ $group: { _id: "$field", total: { $sum: 1 } } }**

- For `$sort`:
  - **{ $sort: { field: 1 } }**

### Code Example: $match, $group, $sort

Here is the MongoDB shell script:

```javascript
// Connect to the database
use myDB;

// Filter orders over $100, group by category, sort by total revenue
db.orders.aggregate([
  { $match: { amount: { $gt: 100 } } },
  {
    $group: {
      _id: "$category",
      totalRevenue: { $sum: "$amount" },
      orderCount: { $sum: 1 }
    }
  },
  { $sort: { totalRevenue: -1 } }
]);
```
<br>


## 25. What is the purpose of the _explain() method_?

The `explain()` method provides information about how MongoDB executes a query. It is a powerful tool for query optimization and performance analysis.

### What explain() Reveals

1. **Query Plan**: Shows which index (if any) MongoDB chose for the query.

2. **Execution Stats**: Provides metrics like documents examined, documents returned, and execution time.

3. **Verbosity Modes**: Supports `"queryPlanner"`, `"executionStats"`, and `"allPlansExecution"` modes.

### General Syntax

- For `explain()`, the syntax is:
  - **db.collection.find({filter}).explain("executionStats")**

### Code Example: Using explain()

Here is the MongoDB shell script:

```javascript
// Connect to the database
use myDB;

// Analyze query execution with default queryPlanner mode
db.myCollection.find({ age: { $gt: 25 } }).explain();

// Get detailed execution statistics
db.myCollection.find({ age: { $gt: 25 } }).explain("executionStats");

// See all considered plans
db.myCollection.find({ age: { $gt: 25 } }).explain("allPlansExecution");
```
<br>


## 26. Can you explain _MongoDB's replication_?

Replication in MongoDB is the process of synchronizing data across multiple servers to ensure high availability and data redundancy. It is implemented through Replica Sets.

### Key Concepts

1. **Replica Set**: A group of MongoDB instances that maintain the same dataset.

2. **Primary Node**: The main node that receives all write operations.

3. **Secondary Nodes**: Replicate data from the primary and can serve read operations.

4. **Oplog**: A special capped collection that records all write operations on the primary.

### General Syntax

- To initiate a replica set:
  - **rs.initiate()**

- To add a member:
  - **rs.add("hostname:port")**

### Code Example: Replica Set Setup

Here is the MongoDB shell script:

```javascript
// Initiate a replica set
rs.initiate({
  _id: "myReplicaSet",
  members: [
    { _id: 0, host: "mongo1:27017" },
    { _id: 1, host: "mongo2:27017" },
    { _id: 2, host: "mongo3:27017" }
  ]
});

// Check replica set status
rs.status();
```
<br>


## 27. Describe the purpose and components of a _replica set_.

A replica set is a group of MongoDB instances that maintain the same data, providing redundancy and high availability. It is the foundation of MongoDB's fault tolerance strategy.

### Components of a Replica Set

1. **Primary**: Receives all write operations and propagates changes to secondaries via the oplog.

2. **Secondary**: Replicates the primary's oplog and maintains a copy of the data. Can be promoted to primary.

3. **Arbiter**: Participates in elections but holds no data. Used to break ties when an even number of voting members exist.

### General Syntax

- To check the current primary:
  - **rs.isMaster()**

- To step down the primary:
  - **rs.stepDown()**

### Code Example: Replica Set Operations

Here is the MongoDB shell script:

```javascript
// Check which node is the primary
rs.isMaster();

// View the replica set configuration
rs.conf();

// Add an arbiter to the replica set
rs.addArb("mongo4:27017");

// Check the replication status
rs.status();
```
<br>


## 28. What is _sharding_ in _MongoDB_ and when would you use it?

Sharding is MongoDB's approach to horizontal scaling. It distributes data across multiple machines (shards), allowing the database to handle large datasets and high-throughput operations.

### Key Components of Sharding

1. **Shard**: Each shard holds a subset of the sharded data and can itself be a replica set.

2. **mongos**: The query router that directs client requests to the appropriate shard(s).

3. **Config Servers**: Store metadata and configuration settings for the sharded cluster.

4. **Shard Key**: The field used to distribute documents across shards.

### General Syntax

- To enable sharding on a database:
  - **sh.enableSharding("myDB")**

- To shard a collection:
  - **sh.shardCollection("myDB.myCollection", { shardKey: 1 })**

### Code Example: Sharding Setup

Here is the MongoDB shell script:

```javascript
// Enable sharding on a database
sh.enableSharding("myDB");

// Shard a collection using 'userId' as the shard key
sh.shardCollection("myDB.orders", { userId: 1 });

// View sharding status
sh.status();
```
<br>


## 29. How does _MongoDB_ perform automatic failover?

MongoDB performs automatic failover through its replica set election process. When a primary becomes unavailable, the remaining members hold an election to select a new primary.

### Failover Process

1. **Detection**: Secondary nodes detect the primary is unavailable via heartbeat timeouts (default 10 seconds).

2. **Election**: Eligible secondary nodes hold an election; the node with the most up-to-date oplog and highest priority wins.

3. **Promotion**: The winning secondary becomes the new primary and begins accepting writes.

4. **Recovery**: When the old primary recovers, it rejoins as a secondary.

### General Syntax

- To manually trigger a failover (step down the primary):
  - **rs.stepDown()**

### Code Example: Monitoring Failover

Here is the MongoDB shell script:

```javascript
// Check current replica set status
rs.status();

// Manually step down the primary to trigger an election
rs.stepDown(60); // Steps down for 60 seconds

// After failover, check which node is the new primary
rs.isMaster();
```
<br>


## 30. Describe the difference between _horizontal scaling_ and _vertical scaling_, and how _MongoDB_ supports them.

Scaling refers to the ability to handle increased load. MongoDB supports both horizontal and vertical scaling strategies.

### Scaling Approaches

1. **Vertical Scaling (Scale Up)**: Adding more resources (CPU, RAM, storage) to a single server. MongoDB benefits from this but is limited by hardware constraints.

2. **Horizontal Scaling (Scale Out)**: Adding more servers to distribute the load. MongoDB achieves this through **sharding**, distributing data across multiple machines.

### Key Differences

| Aspect | Vertical Scaling | Horizontal Scaling |
|---|---|---|
| Method | Upgrade existing server | Add more servers |
| MongoDB Support | Implicit | Via Sharding |
| Cost | High (hardware limits) | More flexible |
| Complexity | Lower | Higher |

### Code Example: Enabling Horizontal Scaling

Here is the MongoDB shell script:

```javascript
// Enable sharding on the database
sh.enableSharding("myDB");

// Define shard key and shard the collection
sh.shardCollection("myDB.products", { category: 1 });

// Check balancer status
sh.getBalancerState();
```
<br>


## 31. How does _MongoDB_ handle large data volumes?

MongoDB handles large data volumes through a combination of sharding, indexing, efficient storage engines, and aggregation pipelines designed for performance at scale.

### Strategies for Large Data Volumes

1. **Sharding**: Distributes data horizontally across multiple shards.

2. **Indexing**: Reduces the amount of data scanned per query.

3. **WiredTiger Storage Engine**: Provides compression and efficient disk usage.

4. **Aggregation Pipeline**: Processes data server-side to minimize data transfer.

5. **Capped Collections**: Fixed-size collections useful for high-volume log data.

### General Syntax

- To create a capped collection:
  - **db.createCollection("logs", { capped: true, size: 10485760, max: 10000 })**

### Code Example: Handling Large Data

Here is the MongoDB shell script:

```javascript
// Connect to the database
use myDB;

// Create a capped collection for logs (10MB max, 10000 documents max)
db.createCollection("logs", { capped: true, size: 10485760, max: 10000 });

// Use aggregation with $project to reduce result size
db.largeCollection.aggregate([
  { $match: { status: "active" } },
  { $project: { name: 1, status: 1, _id: 0 } },
  { $limit: 1000 }
]);
```
<br>


## 32. What strategies can you use to diagnose and address performance issues in _MongoDB_?

Diagnosing and addressing MongoDB performance issues involves monitoring tools, query analysis, and schema optimization.

### Diagnostic Strategies

1. **explain()**: Analyze query execution plans to detect collection scans.

2. **MongoDB Profiler**: Log slow operations using the database profiler.

3. **mongostat / mongotop**: Command-line tools for real-time performance monitoring.

4. **Index Optimization**: Add or redesign indexes based on slow query patterns.

5. **Schema Redesign**: Adjust embedding vs. referencing to match access patterns.

### General Syntax

- To enable the profiler:
  - **db.setProfilingLevel(1, { slowms: 100 })**

### Code Example: Diagnosing Performance

Here is the MongoDB shell script:

```javascript
// Connect to the database
use myDB;

// Enable profiling for queries slower than 100ms
db.setProfilingLevel(1, { slowms: 100 });

// View profiling results
db.system.profile.find().sort({ ts: -1 }).limit(5).pretty();

// Check query execution plan
db.myCollection.find({ age: { $gt: 30 } }).explain("executionStats");
```
<br>


## 33. How do you ensure that _indexes_ fit into RAM?

Ensuring indexes fit into RAM is critical for MongoDB performance because accessing indexes from disk is significantly slower than from memory.

### Strategies to Keep Indexes in RAM

1. **Monitor Index Size**: Use `db.collection.stats()` to check index sizes.

2. **Use Partial Indexes**: Index only a subset of documents to reduce index size.

3. **Remove Unused Indexes**: Drop indexes that are not used by any queries.

4. **Increase RAM**: Upgrade server memory if indexes are too large.

5. **WiredTiger Cache**: Configure the WiredTiger cache size appropriately.

### General Syntax

- To view index sizes:
  - **db.collection.stats({ indexDetails: true })**

### Code Example: Monitoring Index Memory Usage

Here is the MongoDB shell script:

```javascript
// Connect to the database
use myDB;

// View total index size for a collection
db.myCollection.stats().totalIndexSize;

// View individual index sizes
db.myCollection.stats({ indexDetails: true });

// Create a partial index to reduce size
db.myCollection.createIndex(
  { age: 1 },
  { partialFilterExpression: { status: "active" } }
);

// Drop an unused index
db.myCollection.dropIndex("unusedIndex_1");
```
<br>


## 34. Can you explain _MongoDB's write concern_?

Write concern describes the level of acknowledgment MongoDB requests from the server when performing write operations. It controls the trade-off between performance and data durability.

### Write Concern Levels

1. **w: 0**: No acknowledgment requested. Fire-and-forget; fastest but no guarantee.

2. **w: 1** (default): Acknowledgment from the primary only.

3. **w: "majority"**: Acknowledgment from the majority of replica set members. Most durable.

4. **j: true**: Ensures the write is committed to the journal before acknowledgment.

5. **wtimeout**: Specifies a time limit for the write concern to be satisfied.

### General Syntax

- For write concern, the syntax is:
  - **db.collection.insertOne({doc}, { writeConcern: { w: "majority", j: true } })**

### Code Example: Write Concern

Here is the MongoDB shell script:

```javascript
// Connect to the database
use myDB;

// Insert with majority write concern and journaling
db.myCollection.insertOne(
  { name: "Alice", role: "admin" },
  { writeConcern: { w: "majority", j: true, wtimeout: 5000 } }
);

// Update with w:1 (primary only acknowledgment)
db.myCollection.updateOne(
  { name: "Alice" },
  { $set: { role: "superadmin" } },
  { writeConcern: { w: 1 } }
);
```
<br>


## 35. What is a _covered query_ in _MongoDB_?

A covered query is a query in which all the fields in the query predicate and all the fields returned are part of the same index. MongoDB can satisfy such a query entirely from the index without examining any documents.

### Benefits of Covered Queries

1. **No Document Fetching**: MongoDB satisfies the query from the index alone, reducing I/O.

2. **Faster Execution**: Avoids the overhead of loading full documents into memory.

3. **Lower CPU Usage**: Less data processing required.

### Requirements for a Covered Query

- All fields in the query filter must be part of an index.
- All fields in the projection must be part of the same index.
- The `_id` field must be explicitly excluded if it is not part of the index.

### Code Example: Covered Query

Here is the MongoDB shell script:

```javascript
// Connect to the database
use myDB;

// Create a compound index on 'name' and 'age'
db.myCollection.createIndex({ name: 1, age: 1 });

// Covered query: filter and projection use only indexed fields
// Exclude _id to ensure full coverage
db.myCollection.find(
  { name: "Alice" },
  { name: 1, age: 1, _id: 0 }
);

// Verify coverage using explain
db.myCollection.find(
  { name: "Alice" },
  { name: 1, age: 1, _id: 0 }
).explain("executionStats");
```
<br>


## 36. What are the _security features_ available in _MongoDB_?

MongoDB provides a comprehensive set of security features to protect data at rest, in transit, and at the access level.

### Key Security Features

1. **Authentication**: Verifies the identity of users connecting to MongoDB.

2. **Authorization (RBAC)**: Role-Based Access Control restricts what authenticated users can do.

3. **TLS/SSL Encryption**: Encrypts data in transit between clients and servers.

4. **Encryption at Rest**: Encrypts data stored on disk using WiredTiger encryption.

5. **Auditing**: Tracks and logs database activity for compliance purposes.

6. **IP Whitelisting**: Restricts connections to trusted IP addresses.

### General Syntax

- To create a user with roles:
  - **db.createUser({ user: "name", pwd: "password", roles: [{ role: "readWrite", db: "myDB" }] })**

### Code Example: Security Configuration

Here is the MongoDB shell script:

```javascript
// Switch to the admin database
use admin;

// Create an admin user
db.createUser({
  user: "adminUser",
  pwd: "securePassword123",
  roles: [{ role: "userAdminAnyDatabase", db: "admin" }]
});

// Create a read-only user for a specific database
use myDB;
db.createUser({
  user: "readOnlyUser",
  pwd: "readPass456",
  roles: [{ role: "read", db: "myDB" }]
});
```
<br>


## 37. How do you enable _authentication_ in _MongoDB_?

Authentication in MongoDB is enabled by starting the `mongod` process with the `--auth` flag or by setting `security.authorization: enabled` in the configuration file.

### Steps to Enable Authentication

1. **Start without auth**: Connect and create an admin user first.

2. **Enable auth**: Restart MongoDB with `--auth` or update `mongod.conf`.

3. **Connect with credentials**: Clients must now provide a username and password.

### General Syntax

- In `mongod.conf`:
  - **security: { authorization: "enabled" }**

- To connect with authentication:
  - **mongosh -u username -p password --authenticationDatabase admin**

### Code Example: Enabling Authentication

Here is the MongoDB configuration and shell script:

```yaml
# mongod.conf
security:
  authorization: "enabled"
```

```javascript
// Step 1: Connect without auth and create admin user
use admin;
db.createUser({
  user: "superAdmin",
  pwd: "strongPassword!",
  roles: [{ role: "root", db: "admin" }]
});

// Step 2: Restart mongod with --auth flag, then connect:
// mongosh -u superAdmin -p strongPassword! --authenticationDatabase admin

// Step 3: Verify authentication
db.runCommand({ connectionStatus: 1 });
```
<br>


## 38. Describe _role-based access control_ in _MongoDB_.

Role-Based Access Control (RBAC) in MongoDB allows administrators to grant specific privileges to users based on predefined or custom roles, limiting what each user can read, write, or administer.

### Key RBAC Concepts

1. **Built-in Roles**: MongoDB ships with roles like `read`, `readWrite`, `dbAdmin`, `clusterAdmin`, and `root`.

2. **Custom Roles**: Administrators can define roles with specific privileges.

3. **Database-Level Scope**: Roles are assigned per database, though some apply cluster-wide.

### General Syntax

- To grant a role to a user:
  - **db.grantRolesToUser("username", [{ role: "readWrite", db: "myDB" }])**

- To create a custom role:
  - **db.createRole({ role: "roleName", privileges: [...], roles: [] })**

### Code Example: RBAC in MongoDB

Here is the MongoDB shell script:

```javascript
// Connect to the database
use myDB;

// Create a custom role with limited privileges
db.createRole({
  role: "reportViewer",
  privileges: [
    {
      resource: { db: "myDB", collection: "reports" },
      actions: ["find"]
    }
  ],
  roles: []
});

// Assign the custom role to a user
db.createUser({
  user: "analyst",
  pwd: "analystPass",
  roles: [{ role: "reportViewer", db: "myDB" }]
});

// Revoke a role from a user
db.revokeRolesFromUser("analyst", [{ role: "reportViewer", db: "myDB" }]);
```
<br>


## 39. Explain how to encrypt _MongoDB data_.

MongoDB supports two types of encryption: encryption at rest (protecting stored data) and encryption in transit (protecting data moving between client and server).

### Encryption Types

1. **Encryption at Rest**: Uses WiredTiger's encrypted storage engine (available in MongoDB Enterprise).

2. **TLS/SSL (In Transit)**: Encrypts data transmitted between clients and MongoDB servers.

3. **Client-Side Field Level Encryption (CSFLE)**: Encrypts specific fields in documents before they reach the server.

### General Syntax

- To enable TLS in `mongod.conf`:
  - **net: { tls: { mode: "requireTLS", certificateKeyFile: "/path/to/cert.pem" } }**

### Code Example: Encryption Configuration

Here is the MongoDB configuration:

```yaml
# mongod.conf - Enable TLS
net:
  tls:
    mode: requireTLS
    certificateKeyFile: /etc/ssl/mongodb.pem
    CAFile: /etc/ssl/ca.pem

# Enable encryption at rest (MongoDB Enterprise)
security:
  enableEncryption: true
  encryptionKeyFile: /etc/mongodb/encryption.key
```

```javascript
// Connect using TLS
// mongosh --tls --tlsCertificateKeyFile /etc/ssl/client.pem --host mongo.example.com

// Verify TLS is active
db.adminCommand({ getParameter: 1, sslMode: 1 });
```
<br>


## 40. Can you set up _MongoDB_ to use _TLS/SSL_ for connections?

Yes, MongoDB supports TLS/SSL to encrypt communications between clients and servers. This is configured in the `mongod.conf` file or via command-line flags.

### Steps to Enable TLS/SSL

1. **Generate Certificates**: Create or obtain a TLS certificate and key file.

2. **Configure mongod.conf**: Set the TLS mode and certificate paths.

3. **Restart MongoDB**: Apply the new configuration.

4. **Connect with TLS**: Clients must connect using TLS flags.

### General Syntax

- To start mongod with TLS:
  - **mongod --tlsMode requireTLS --tlsCertificateKeyFile /path/to/cert.pem**

### Code Example: TLS/SSL Setup

Here is the MongoDB configuration and connection:

```yaml
# mongod.conf
net:
  port: 27017
  tls:
    mode: requireTLS
    certificateKeyFile: /etc/ssl/mongodb.pem
    CAFile: /etc/ssl/ca.pem
    allowInvalidHostnames: false
```

```javascript
// Connect to MongoDB with TLS using mongosh
// mongosh --tls \
//   --tlsCertificateKeyFile /etc/ssl/client.pem \
//   --tlsCAFile /etc/ssl/ca.pem \
//   --host mongo.example.com

// Verify TLS connection
db.runCommand({ buildInfo: 1 }).openssl;
```
<br>


## 41. What are the different _storage engines_ available in _MongoDB_?

A storage engine is the component of MongoDB responsible for managing how data is stored in memory and on disk. MongoDB supports multiple storage engines.

### Available Storage Engines

1. **WiredTiger** (default since MongoDB 3.2): Supports document-level concurrency, compression, and encryption. Recommended for most use cases.

2. **In-Memory**: Stores data only in memory, offering extremely low latency. Data does not persist across restarts.

3. **MMAPv1** (deprecated): Used memory-mapped files. Removed in MongoDB 4.2.

### General Syntax

- To check the current storage engine:
  - **db.serverStatus().storageEngine**

- To start MongoDB with a specific engine:
  - **mongod --storageEngine wiredTiger**

### Code Example: Checking Storage Engine

Here is the MongoDB shell script:

```javascript
// Connect to the database
use admin;

// Check the active storage engine
db.serverStatus().storageEngine;

// View WiredTiger cache statistics
db.serverStatus().wiredTiger.cache;

// View collection-level storage stats
use myDB;
db.myCollection.stats().storageSize;
```
<br>


## 42. How does the _WiredTiger storage engine_ differ from _MMAPv1_?

WiredTiger replaced MMAPv1 as the default storage engine in MongoDB 3.2. The two engines differ significantly in concurrency, compression, and performance characteristics.

### Key Differences

| Feature | WiredTiger | MMAPv1 |
|---|---|---|
| Concurrency | Document-level locking | Collection-level locking |
| Compression | Yes (Snappy, zlib, zstd) | No |
| Encryption | Yes (Enterprise) | No |
| Performance | Better for writes | Limited |
| Status | Default (current) | Removed in 4.2 |

### General Syntax

- To view WiredTiger compression settings:
  - **db.myCollection.stats().wiredTiger**

### Code Example: WiredTiger Configuration

Here is the MongoDB configuration:

```yaml
# mongod.conf - WiredTiger configuration
storage:
  engine: wiredTiger
  wiredTiger:
    engineConfig:
      cacheSizeGB: 2
    collectionConfig:
      blockCompressor: snappy
    indexConfig:
      prefixCompression: true
```

```javascript
// Connect to the database and check WiredTiger stats
use myDB;
db.myCollection.stats().wiredTiger;
```
<br>


## 43. Can you switch between _storage engines_ in a _MongoDB database_?

Yes, you can switch storage engines, but it requires a full data export and reimport since the data files are not compatible between engines.

### Steps to Switch Storage Engines

1. **Export Data**: Use `mongodump` to back up all data.

2. **Stop MongoDB**: Shut down the running instance.

3. **Delete Data Files**: Remove the existing `dbPath` data directory.

4. **Reconfigure**: Update `mongod.conf` with the new storage engine.

5. **Restart and Restore**: Start MongoDB and use `mongorestore` to reload data.

### General Syntax

- To export data:
  - **mongodump --out /backup/path**

- To restore data:
  - **mongorestore /backup/path**

### Code Example: Switching Storage Engine

Here is the shell and configuration script:

```bash
# Step 1: Export existing data
mongodump --out /var/backups/mongo_backup

# Step 2: Stop MongoDB
sudo systemctl stop mongod

# Step 3: Remove old data files
sudo rm -rf /var/lib/mongodb/*
```

```yaml
# Step 4: Update mongod.conf
storage:
  dbPath: /var/lib/mongodb
  engine: wiredTiger
```

```bash
# Step 5: Restart MongoDB and restore data
sudo systemctl start mongod
mongorestore /var/backups/mongo_backup
```
<br>


## 44. What is the _oplog_ in _MongoDB_, and how does it work?

The oplog (operations log) is a special capped collection in MongoDB that records all write operations on a primary node. Secondary nodes replicate the oplog to stay in sync.

### Key Characteristics of the Oplog

1. **Capped Collection**: Stored in the `local` database as `local.oplog.rs`. It has a fixed size.

2. **Idempotent Operations**: Each oplog entry can be applied multiple times without changing the result.

3. **Replication Mechanism**: Secondaries continuously read and apply oplog entries from the primary.

4. **Oplog Window**: The time period covered by the oplog; depends on write volume and oplog size.

### General Syntax

- To view the oplog:
  - **use local; db.oplog.rs.find().sort({ $natural: -1 }).limit(5)**

### Code Example: Inspecting the Oplog

Here is the MongoDB shell script:

```javascript
// Switch to the local database
use local;

// View the most recent oplog entries
db.oplog.rs.find().sort({ $natural: -1 }).limit(5).pretty();

// Check oplog size and usage
db.oplog.rs.stats();

// View oplog time range
var first = db.oplog.rs.find().sort({ $natural: 1 }).limit(1).next();
var last = db.oplog.rs.find().sort({ $natural: -1 }).limit(1).next();
print("Oplog covers from:", new Date(first.ts.t * 1000), "to:", new Date(last.ts.t * 1000));
```
<br>


## 45. How do you use the _$lookup operator_ in _MongoDB_?

The `$lookup` operator performs a left outer join between two collections in the same database within an aggregation pipeline, allowing you to combine related data.

### $lookup Fields

1. **from**: The collection to join with.

2. **localField**: The field from the input collection.

3. **foreignField**: The field from the `from` collection to match against.

4. **as**: The name of the output array field containing the joined documents.

### General Syntax

- For `$lookup`, the syntax is:
  - **{ $lookup: { from: "other", localField: "fieldA", foreignField: "fieldB", as: "result" } }**

### Code Example: Using $lookup

Here is the MongoDB shell script:

```javascript
// Connect to the database
use myDB;

// Join 'orders' with 'products' collection
db.orders.aggregate([
  {
    $lookup: {
      from: "products",
      localField: "productId",
      foreignField: "_id",
      as: "productDetails"
    }
  },
  // Unwind the array to get a single product object
  { $unwind: "$productDetails" },
  // Project only needed fields
  {
    $project: {
      orderId: 1,
      quantity: 1,
      "productDetails.name": 1,
      "productDetails.price": 1
    }
  }
]);
```
<br>


## 46. Can you explain the role of a _mongos server_ in a _sharded MongoDB architecture_?

The `mongos` (MongoDB Shard) server acts as a query router in a sharded cluster. It is the interface between client applications and the sharded cluster, directing queries to the appropriate shard(s).

### Key Responsibilities of mongos

1. **Query Routing**: Directs read and write operations to the correct shard(s) based on the shard key.

2. **Result Merging**: Collects and merges results from multiple shards before returning to the client.

3. **Metadata Caching**: Caches cluster metadata from config servers to route queries efficiently.

4. **Transparent Access**: Clients connect to `mongos` as if it were a regular MongoDB instance.

### General Syntax

- To start a mongos instance:
  - **mongos --configdb configRS/cfg1:27019,cfg2:27019,cfg3:27019 --port 27017**

### Code Example: Connecting via mongos

Here is the shell script:

```bash
# Start mongos pointing to config servers
mongos --configdb myConfigRS/cfg1:27019,cfg2:27019,cfg3:27019 --port 27017
```

```javascript
// Connect to mongos (same as connecting to a regular MongoDB instance)
// mongosh --host mongos-server --port 27017

// Check sharding status via mongos
sh.status();

// View which shards are available
use config;
db.shards.find().pretty();
```
<br>


## 47. What is _journaling_ in _MongoDB_ and why is it important?

Journaling is a write-ahead logging mechanism in MongoDB that records all write operations to a journal file before applying them to data files. It ensures data integrity and enables recovery after crashes.

### How Journaling Works

1. **Write-Ahead Log**: Writes are first committed to the journal (a write-ahead log), then applied to data files.

2. **Crash Recovery**: On restart after a crash, MongoDB replays the journal to recover any uncommitted writes.

3. **WiredTiger Integration**: WiredTiger uses its own logging mechanism that functions as journaling.

4. **Default State**: Journaling is enabled by default in MongoDB.

### General Syntax

- To enable journaling in `mongod.conf`:
  - **storage: { journal: { enabled: true } }**

### Code Example: Journaling Configuration

Here is the MongoDB configuration:

```yaml
# mongod.conf - Journaling settings
storage:
  dbPath: /var/lib/mongodb
  journal:
    enabled: true
    commitIntervalMs: 100  # Commit journal every 100ms
```

```javascript
// Verify journaling status
db.adminCommand({ serverStatus: 1 }).dur;

// Check WiredTiger log (journal) statistics
db.serverStatus().wiredTiger.log;
```
<br>


## 48. Explain the _GridFS specification_ in _MongoDB_.

GridFS is a specification for storing and retrieving files that exceed the BSON document size limit of 16MB. It splits files into chunks and stores them across two collections.

### How GridFS Works

1. **fs.files**: Stores file metadata (filename, upload date, content type, size).

2. **fs.chunks**: Stores the binary data chunks (default 255KB per chunk).

3. **Automatic Chunking**: GridFS automatically splits large files into chunks on upload.

4. **Streaming**: Supports streaming reads and writes, useful for media files.

### General Syntax

- To upload a file using `mongofiles`:
  - **mongofiles -d myDB put /path/to/file.mp4**

- To download a file:
  - **mongofiles -d myDB get file.mp4**

### Code Example: GridFS with PyMongo

Here is a Python code example:

```python
import gridfs
from pymongo import MongoClient

# Connect to MongoDB
client = MongoClient("mongodb://localhost:27017/")
db = client["myDB"]
fs = gridfs.GridFS(db)

# Upload a file to GridFS
with open("/path/to/video.mp4", "rb") as f:
    file_id = fs.put(f, filename="video.mp4", content_type="video/mp4")
    print(f"Uploaded with ID: {file_id}")

# Retrieve the file from GridFS
grid_out = fs.get(file_id)
with open("/path/to/output.mp4", "wb") as f:
    f.write(grid_out.read())
    print("File downloaded successfully")
```
<br>


## 49. How does _schema design_ impact performance in _MongoDB_?

Schema design is one of the most critical factors in MongoDB performance. Unlike relational databases, MongoDB's flexible schema requires deliberate design decisions based on access patterns.

### Key Design Decisions and Their Impact

1. **Embedding vs. Referencing**: Embedded documents reduce the need for multiple queries but can increase document size.

2. **Document Size**: Large documents consume more memory and I/O bandwidth.

3. **Index Strategy**: Poorly designed schemas may require complex or missing indexes.

4. **Access Patterns**: Schema should be optimized for the most frequent read/write operations.

5. **Array Growth**: Unbounded arrays within documents can cause performance degradation.

### General Syntax

- To analyze document sizes:
  - **db.myCollection.stats().avgObjSize**

### Code Example: Schema Design Comparison

Here is the MongoDB shell script:

```javascript
// Embedded schema (good for read-heavy, related data)
db.orders.insertOne({
  orderId: "ORD001",
  customer: { name: "Alice", email: "alice@example.com" },
  items: [
    { product: "Laptop", qty: 1, price: 999.99 },
    { product: "Mouse", qty: 2, price: 29.99 }
  ]
});

// Referenced schema (good for frequently updated or shared data)
db.customers.insertOne({ _id: "C001", name: "Alice", email: "alice@example.com" });
db.orders.insertOne({
  orderId: "ORD002",
  customerId: "C001",  // Reference to customer
  total: 1059.97
});
```
<br>


## 50. Compare _embedding_ vs. _linking documents_ in _MongoDB_.

MongoDB offers two main approaches to representing relationships between data: embedding related data within a single document or linking documents across separate collections using references.

### Embedding

- **Definition**: Storing related data as nested sub-documents within a parent document.
- **Best For**: One-to-one or one-to-few relationships where data is frequently accessed together.
- **Advantages**: Single query retrieval, better read performance.
- **Disadvantages**: Document size growth, data duplication.

### Linking (Referencing)

- **Definition**: Storing the `_id` of one document in another and resolving the relationship at query time.
- **Best For**: One-to-many or many-to-many relationships with frequently updated shared data.
- **Advantages**: Avoids duplication, easier to update shared data.
- **Disadvantages**: Requires multiple queries or `$lookup`.

### Code Example: Embedding vs. Linking

Here is the MongoDB shell script:

```javascript
// EMBEDDING APPROACH
db.blogPosts.insertOne({
  title: "MongoDB Tips",
  author: { name: "Alice", email: "alice@example.com" },
  comments: [
    { user: "Bob", text: "Great post!" },
    { user: "Carol", text: "Very helpful." }
  ]
});

// LINKING APPROACH
db.authors.insertOne({ _id: "A001", name: "Alice", email: "alice@example.com" });
db.blogPosts.insertOne({
  title: "MongoDB Tips",
  authorId: "A001",  // Reference to author document
  commentIds: ["CMT001", "CMT002"]
});
```
<br>


## 51. What factors do you consider when designing a _schema for MongoDB_?

Designing a schema for MongoDB requires understanding the application's data access patterns, relationships, and scalability needs rather than just normalizing data as in relational databases.

### Key Factors to Consider

1. **Access Patterns**: Design the schema around how the application queries and writes data.

2. **Read vs. Write Ratio**: Read-heavy apps benefit from embedding; write-heavy apps may prefer references.

3. **Document Growth**: Avoid schemas where documents grow unboundedly over time.

4. **Cardinality**: Consider the cardinality of relationships (one-to-one, one-to-many, many-to-many).

5. **Atomicity**: MongoDB guarantees atomicity at the document level; embed data that needs to be updated atomically.

6. **Index Strategy**: Plan indexes based on query patterns to avoid slow queries.

### Code Example: Schema Design Decisions

Here is the MongoDB shell script:

```javascript
// Schema for a user with embedded address (frequently read together)
db.users.insertOne({
  _id: "U001",
  name: "Alice",
  email: "alice@example.com",
  address: {            // Embedded: always read with user
    street: "123 Main St",
    city: "Kolkata",
    country: "India"
  },
  roles: ["admin", "editor"]  // Small, bounded array - safe to embed
});

// Schema with reference for orders (high volume, independent access)
db.orders.insertOne({
  _id: "ORD001",
  userId: "U001",       // Reference: orders accessed independently
  total: 499.99,
  status: "shipped"
});
```
<br>


## 52. How do you handle _one-to-many relationships_ in _MongoDB data modeling_?

MongoDB offers two main strategies for one-to-many relationships: embedding the "many" side within the "one" document, or referencing documents across collections.

### Approaches

1. **Embed (One-to-Few)**: When the "many" side is small and bounded, embed as an array within the parent document.

2. **Reference from Child (One-to-Many)**: Store the parent's `_id` in each child document.

3. **Reference Array in Parent (One-to-Squillions)**: Avoid storing large arrays in the parent; store parent reference in child instead.

### When to Use Each

| Approach | Use When |
|---|---|
| Embedding | Few related items, read together |
| Child Reference | Many items, independently accessed |
| Parent Reference | Unbounded "many" side |

### Code Example: One-to-Many Relationships

Here is the MongoDB shell script:

```javascript
// ONE-TO-FEW: Embed tags in a blog post
db.posts.insertOne({
  title: "MongoDB Guide",
  tags: ["database", "nosql", "mongodb"]  // Small bounded array
});

// ONE-TO-MANY: Store parent reference in child documents
db.comments.insertMany([
  { postId: "POST001", user: "Bob", text: "Great article!" },
  { postId: "POST001", user: "Carol", text: "Very informative." },
  { postId: "POST001", user: "Dave", text: "Bookmarked!" }
]);

// Query: Get all comments for a post
db.comments.find({ postId: "POST001" });
```
<br>


## 53. How do you perform _backups_ in _MongoDB_?

MongoDB supports several backup strategies depending on the deployment type, data volume, and recovery requirements.

### Backup Methods

1. **mongodump**: Exports BSON data from a running MongoDB instance. Good for smaller datasets.

2. **File System Snapshots**: Use LVM or cloud snapshots (e.g., AWS EBS) for fast, consistent backups of large datasets.

3. **MongoDB Atlas Backups**: Automated continuous backups with point-in-time recovery for Atlas deployments.

4. **Ops Manager / Cloud Manager**: Enterprise backup solutions with scheduling and monitoring.

### General Syntax

- To back up all databases:
  - **mongodump --out /backup/path**

- To back up a specific database:
  - **mongodump --db myDB --out /backup/path**

### Code Example: mongodump Backup

Here is the shell script:

```bash
# Full backup of all databases
mongodump --host localhost --port 27017 --out /var/backups/mongo_full

# Backup a specific database
mongodump --host localhost --port 27017 --db myDB --out /var/backups/myDB_backup

# Backup with authentication
mongodump --host localhost --port 27017 \
  --username adminUser --password securePass \
  --authenticationDatabase admin \
  --db myDB --out /var/backups/myDB_auth_backup

# Compress the backup
mongodump --db myDB --gzip --out /var/backups/myDB_compressed
```
<br>


## 54. What techniques can be used to restore a _MongoDB database_?

MongoDB provides the `mongorestore` tool as the primary method for restoring data backed up with `mongodump`. Other restore methods depend on the backup strategy used.

### Restore Techniques

1. **mongorestore**: Restores BSON data exported by `mongodump`.

2. **File System Snapshot Restore**: Restore LVM or cloud snapshots directly to the data directory.

3. **Atlas Point-in-Time Restore**: Use the Atlas UI to restore to a specific timestamp.

4. **Ops Manager Restore**: Use Ops Manager's restore wizard for enterprise deployments.

### General Syntax

- To restore all databases:
  - **mongorestore /backup/path**

- To restore a specific database:
  - **mongorestore --db myDB /backup/path/myDB**

### Code Example: mongorestore

Here is the shell script:

```bash
# Restore all databases from a backup
mongorestore /var/backups/mongo_full

# Restore a specific database
mongorestore --db myDB /var/backups/myDB_backup/myDB

# Restore with authentication
mongorestore --host localhost --port 27017 \
  --username adminUser --password securePass \
  --authenticationDatabase admin \
  --db myDB /var/backups/myDB_backup/myDB

# Restore compressed backup
mongorestore --gzip --db myDB /var/backups/myDB_compressed/myDB

# Drop existing collections before restoring
mongorestore --drop --db myDB /var/backups/myDB_backup/myDB
```
<br>


## 55. How would you monitor the performance of a _MongoDB instance_?

MongoDB provides several built-in tools and third-party integrations for monitoring performance metrics such as query latency, memory usage, connections, and replication lag.

### Monitoring Tools and Techniques

1. **mongostat**: Real-time statistics on inserts, queries, updates, deletes, and more.

2. **mongotop**: Shows time spent reading and writing per collection.

3. **db.serverStatus()**: Returns a comprehensive snapshot of the server's status.

4. **Database Profiler**: Logs slow operations for analysis.

5. **MongoDB Atlas Monitoring**: Built-in dashboards for Atlas deployments.

6. **Third-party Tools**: Prometheus, Datadog, Grafana integrations.

### General Syntax

- To run mongostat:
  - **mongostat --host localhost --port 27017**

- To run mongotop:
  - **mongotop 5** (updates every 5 seconds)

### Code Example: Monitoring Commands

Here is the MongoDB shell script:

```javascript
// Connect to the admin database
use admin;

// Get server-wide statistics
db.serverStatus();

// Check current connections
db.serverStatus().connections;

// Check memory usage
db.serverStatus().mem;

// Check operation counters
db.serverStatus().opcounters;

// Enable slow query profiling (queries > 50ms)
use myDB;
db.setProfilingLevel(1, { slowms: 50 });

// View recent slow queries
db.system.profile.find().sort({ ts: -1 }).limit(10).pretty();
```
<br>


## 56. What factors would lead you to defragment a _MongoDB collection_?

Defragmentation in MongoDB (compaction) reclaims unused disk space and improves storage efficiency. It becomes necessary after heavy delete or update operations that leave empty space in data files.

### Factors That Indicate Need for Defragmentation

1. **High Delete Volume**: Frequent deletions leave holes in data files that MongoDB does not immediately reclaim.

2. **Large Document Replacements**: Replacing documents with larger ones causes them to move, leaving gaps.

3. **Wasted Storage**: `db.collection.stats().storageSize` is significantly larger than `dataSize`.

4. **Degraded Performance**: Fragmented data can slow sequential disk reads.

### General Syntax

- To compact a collection:
  - **db.runCommand({ compact: "myCollection" })**

### Code Example: Defragmentation

Here is the MongoDB shell script:

```javascript
// Connect to the database
use myDB;

// Check storage efficiency before compaction
var stats = db.myCollection.stats();
print("Data Size:", stats.size);
print("Storage Size:", stats.storageSize);
print("Wasted Space:", stats.storageSize - stats.size);

// Run compaction on the collection (blocks the collection during operation)
db.runCommand({ compact: "myCollection" });

// Check storage efficiency after compaction
db.myCollection.stats().storageSize;
```
<br>


## 57. What are the different _data types_ supported in _MongoDB_?

MongoDB uses BSON (Binary JSON) format to store documents, which extends JSON with additional data types for richer data representation.

### Supported BSON Data Types

1. **String**: UTF-8 encoded text.

2. **Integer**: 32-bit (`int`) or 64-bit (`long`) integers.

3. **Double**: 64-bit floating point numbers.

4. **Boolean**: `true` or `false`.

5. **Date**: 64-bit integer representing milliseconds since the Unix epoch.

6. **ObjectId**: 12-byte unique identifier used as the default `_id`.

7. **Array**: Ordered list of values.

8. **Embedded Document**: Nested BSON document.

9. **Binary Data**: Raw binary data (e.g., images).

10. **Null**: Represents a null value.

11. **Regular Expression**: BSON regex type.

12. **Decimal128**: High-precision decimal for financial data.

### Code Example: Data Types in MongoDB

Here is the MongoDB shell script:

```javascript
// Connect to the database
use myDB;

// Insert a document demonstrating various data types
db.dataTypes.insertOne({
  name: "Alice",               // String
  age: 30,                     // Integer (32-bit)
  score: 98.6,                 // Double
  isActive: true,              // Boolean
  createdAt: new Date(),       // Date
  profilePic: new BinData(0, "base64encodeddata"), // Binary
  tags: ["mongodb", "nosql"], // Array
  address: { city: "Kolkata", country: "India" },  // Embedded Document
  metadata: null,              // Null
  salary: NumberDecimal("75000.50")  // Decimal128
});
```
<br>


## 58. How does _MongoDB_ store different types of numerical data?

MongoDB uses BSON to store numerical data, supporting several distinct numeric types to accommodate different ranges and precision requirements.

### Numeric Types in MongoDB

1. **Integer (int32)**: 32-bit signed integer. Range: -2,147,483,648 to 2,147,483,647.

2. **Long (int64)**: 64-bit signed integer. Range: -9.2 × 10¹⁸ to 9.2 × 10¹⁸.

3. **Double**: 64-bit IEEE 754 floating-point. Default for decimal numbers in the shell.

4. **Decimal128**: 128-bit high-precision decimal. Used for financial and scientific calculations requiring exact precision.

### General Syntax

- To insert specific numeric types:
  - **NumberInt(value)** for 32-bit int
  - **NumberLong(value)** for 64-bit long
  - **NumberDecimal("value")** for Decimal128

### Code Example: Numeric Types

Here is the MongoDB shell script:

```javascript
// Connect to the database
use myDB;

// Insert a document with explicit numeric types
db.products.insertOne({
  name: "Widget",
  quantity: NumberInt(500),          // 32-bit integer
  warehouseId: NumberLong(9876543210123), // 64-bit integer
  price: 19.99,                      // Double (default)
  precisePrice: NumberDecimal("19.9900000000000000"), // Decimal128
  discount: 0.15                     // Double
});

// Check the BSON type of a field
var doc = db.products.findOne({ name: "Widget" });
print(typeof doc.quantity);           // object (BSON type)
```
<br>


## 59. How does _MongoDB_ handle _DateTime data types_?

MongoDB stores dates as 64-bit integers representing milliseconds since the Unix epoch (January 1, 1970 UTC). The BSON Date type is used for all date and time values.

### DateTime Handling in MongoDB

1. **BSON Date**: Stores UTC timestamps as 64-bit integers (milliseconds since epoch).

2. **ISODate()**: The shell helper that creates a BSON Date from an ISO 8601 string.

3. **new Date()**: Creates a Date object representing the current UTC time.

4. **Querying by Date**: Use comparison operators (`$gt`, `$lt`, `$gte`, `$lte`) with Date objects.

### General Syntax

- To insert a date:
  - **db.collection.insertOne({ createdAt: new Date() })**

- To query by date range:
  - **db.collection.find({ date: { $gte: ISODate("2024-01-01"), $lt: ISODate("2025-01-01") } })**

### Code Example: DateTime in MongoDB

Here is the MongoDB shell script:

```javascript
// Connect to the database
use myDB;

// Insert documents with date fields
db.events.insertMany([
  { name: "Event A", scheduledAt: new Date("2024-06-15T10:00:00Z") },
  { name: "Event B", scheduledAt: ISODate("2024-09-20T14:30:00Z") },
  { name: "Event C", scheduledAt: new Date() }  // Current time
]);

// Query events within a date range
db.events.find({
  scheduledAt: {
    $gte: ISODate("2024-01-01T00:00:00Z"),
    $lt: ISODate("2025-01-01T00:00:00Z")
  }
});

// Use $dateToString in aggregation
db.events.aggregate([
  {
    $project: {
      name: 1,
      formattedDate: { $dateToString: { format: "%Y-%m-%d", date: "$scheduledAt" } }
    }
  }
]);
```
<br>


## 60. Can you store multimedia files directly in _MongoDB_?

Yes, MongoDB can store multimedia files directly using either the BSON Binary data type for small files (under 16MB) or the GridFS specification for larger files.

### Storage Options for Multimedia

1. **BinData (Binary)**: Store small files (images, icons) directly as BSON binary fields within a document. Limited to 16MB (BSON document size limit).

2. **GridFS**: MongoDB's specification for storing files larger than 16MB by splitting them into chunks stored across two collections (`fs.files` and `fs.chunks`).

3. **External Storage Reference**: Store files in cloud storage (S3, GCS) and save the URL in MongoDB.

### General Syntax

- To upload a file via GridFS:
  - **mongofiles -d myDB put /path/to/file**

### Code Example: Storing Multimedia

Here is the Python code example:

```python
import gridfs
from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017/")
db = client["myDB"]
fs = gridfs.GridFS(db)

# Store an image file using GridFS
with open("/path/to/photo.jpg", "rb") as img:
    file_id = fs.put(img, filename="photo.jpg", content_type="image/jpeg")
    print(f"Stored file with ID: {file_id}")

# Retrieve the image
grid_out = fs.get(file_id)
with open("/path/to/retrieved_photo.jpg", "wb") as out:
    out.write(grid_out.read())
    print("Image retrieved successfully")
```
<br>


## 61. How do you connect to a _MongoDB database_ from a _Python script_?

Python connects to MongoDB using the official `pymongo` driver. The `MongoClient` class handles the connection and provides access to databases and collections.

### Steps to Connect

1. **Install pymongo**: Use pip to install the driver.

2. **Create a MongoClient**: Pass the connection URI or host/port.

3. **Select a Database**: Access it as an attribute of the client.

4. **Select a Collection**: Access it as an attribute of the database.

### General Syntax

- For a basic connection:
  - **client = MongoClient("mongodb://localhost:27017/")**

- For an authenticated connection:
  - **client = MongoClient("mongodb://user:password@host:27017/dbname")**

### Code Example: Connecting with PyMongo

Here is the Python script:

```python
# Install pymongo: pip install pymongo

from pymongo import MongoClient
from pymongo.errors import ConnectionFailure

# Basic connection
client = MongoClient("mongodb://localhost:27017/")

# Verify connection
try:
    client.admin.command("ping")
    print("Connected to MongoDB successfully!")
except ConnectionFailure as e:
    print(f"Connection failed: {e}")

# Access database and collection
db = client["myDB"]
collection = db["myCollection"]

# Insert a document
result = collection.insert_one({ "name": "Alice", "age": 30 })
print(f"Inserted document ID: {result.inserted_id}")

# Find a document
doc = collection.find_one({ "name": "Alice" })
print(doc)

# Close connection
client.close()
```
<br>


## 62. What is _Mongoose_ and how does it relate to _MongoDB_?

Mongoose is an Object Data Modeling (ODM) library for Node.js that provides a structured, schema-based approach to interact with MongoDB. It acts as an abstraction layer over the native MongoDB driver.

### Key Features of Mongoose

1. **Schema Definition**: Defines the structure, data types, and validation rules for documents.

2. **Model**: A compiled version of the schema used to interact with a MongoDB collection.

3. **Validation**: Built-in and custom validators for fields.

4. **Middleware (Hooks)**: Pre/post hooks for operations like save, find, and delete.

5. **Population**: Automatically replaces document references with actual documents (similar to joins).

### General Syntax

- To define a schema:
  - **const schema = new mongoose.Schema({ field: type })**

- To create a model:
  - **const Model = mongoose.model("ModelName", schema)**

### Code Example: Using Mongoose

Here is the Node.js script:

```javascript
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/myDB");

// Define a schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, min: 0 },
  createdAt: { type: Date, default: Date.now }
});

// Create a model
const User = mongoose.model("User", userSchema);

// Create and save a document
const newUser = new User({ name: "Alice", email: "alice@example.com", age: 30 });
newUser.save()
  .then(doc => console.log("Saved:", doc))
  .catch(err => console.error("Error:", err));

// Find documents
User.find({ age: { $gte: 18 } })
  .then(users => console.log("Users:", users));
```
<br>


## 63. Can you create and use _stored procedures_ in _MongoDB_?

MongoDB does not support traditional stored procedures like relational databases. However, it previously supported server-side JavaScript execution through `db.eval()`, which has been deprecated and removed. Modern alternatives exist.

### Alternatives to Stored Procedures in MongoDB

1. **Application-Layer Logic**: Move stored procedure logic into your application code.

2. **Aggregation Pipeline**: Perform complex data transformations server-side using aggregation stages.

3. **MongoDB Atlas Functions**: Serverless JavaScript functions that run in the Atlas environment (similar to stored procedures).

4. **Triggers (Atlas)**: Automatically execute functions in response to database events.

### General Syntax

- For an Atlas Function (serverless):
  - Functions are defined in the Atlas UI or via the Atlas Admin API.

### Code Example: Aggregation as Alternative

Here is the MongoDB shell script:

```javascript
// Connect to the database
use myDB;

// Instead of a stored procedure, use an aggregation pipeline
// Example: Calculate total sales per category (like a stored procedure would)
db.sales.aggregate([
  { $match: { status: "completed" } },
  {
    $group: {
      _id: "$category",
      totalSales: { $sum: "$amount" },
      count: { $sum: 1 }
    }
  },
  { $sort: { totalSales: -1 } },
  {
    $project: {
      category: "$_id",
      totalSales: 1,
      count: 1,
      _id: 0
    }
  }
]);
```
<br>


## 64. Describe how to use the _Mongo Shell_ for database operations.

The MongoDB Shell (`mongosh`) is an interactive JavaScript interface for connecting to and interacting with MongoDB. It supports all MongoDB CRUD operations, administrative commands, and JavaScript expressions.

### Common Mongo Shell Operations

1. **Connecting**: Launch `mongosh` with a connection URI or host/port.

2. **Switching Databases**: Use `use dbName` to switch context.

3. **CRUD Operations**: Use `insertOne`, `find`, `updateOne`, `deleteOne` and their variants.

4. **Administrative Commands**: Run `db.stats()`, `db.serverStatus()`, and collection management.

### General Syntax

- To connect:
  - **mongosh "mongodb://localhost:27017"**

- To switch database:
  - **use myDB**

### Code Example: Mongo Shell Operations

Here is the MongoDB shell script:

```javascript
// Connect to MongoDB (run from terminal)
// mongosh "mongodb://localhost:27017"

// List all databases
show dbs;

// Switch to a database
use myDB;

// List collections
show collections;

// Insert a document
db.myCollection.insertOne({ name: "Alice", role: "admin" });

// Find documents
db.myCollection.find({ role: "admin" }).pretty();

// Update a document
db.myCollection.updateOne({ name: "Alice" }, { $set: { role: "superadmin" } });

// Delete a document
db.myCollection.deleteOne({ name: "Alice" });

// Drop a collection
db.myCollection.drop();

// Check database stats
db.stats();
```
<br>


## 65. What is the purpose of _MongoDB ODM / ORM frameworks_?

ODM (Object Document Mapper) frameworks for MongoDB map MongoDB documents to application-level objects, providing structure, validation, and a higher-level API for database interactions.

### Key Purposes of ODM Frameworks

1. **Schema Enforcement**: Define schemas in application code, even though MongoDB itself is schema-flexible.

2. **Validation**: Enforce data integrity rules before writes reach the database.

3. **Type Casting**: Automatically convert data types between application and database representations.

4. **Middleware/Hooks**: Execute logic before or after database operations.

5. **Relationship Management**: Handle document references and population (resolving references to full documents).

### Popular MongoDB ODM/ORM Frameworks

| Framework | Language |
|---|---|
| Mongoose | Node.js |
| MongoEngine | Python |
| Mongoid | Ruby |
| Spring Data MongoDB | Java |
| Beanie | Python (async) |

### Code Example: Mongoose ODM

Here is the Node.js script:

```javascript
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/myDB");

// Schema with validation
const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  price: { type: Number, required: true, min: 0 },
  category: { type: String, enum: ["electronics", "clothing", "food"] },
  inStock: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

// Pre-save middleware
productSchema.pre("save", function(next) {
  console.log(`Saving product: ${this.name}`);
  next();
});

const Product = mongoose.model("Product", productSchema);
```
<br>


## 66. How can you perform _MongoDB operations_ using _Node.js_?

Node.js interacts with MongoDB using the official MongoDB Node.js driver (`mongodb` package) or through the Mongoose ODM. The native driver provides direct access to all MongoDB features.

### Steps to Use MongoDB with Node.js

1. **Install the driver**: `npm install mongodb`

2. **Connect**: Use `MongoClient.connect()` with the connection URI.

3. **Access database and collection**: Chain from the client object.

4. **Perform CRUD**: Use async/await with the driver's methods.

### General Syntax

- For connection:
  - **const client = new MongoClient("mongodb://localhost:27017")**

### Code Example: MongoDB with Node.js

Here is the Node.js script:

```javascript
const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("myDB");
    const collection = db.collection("users");

    // Insert
    await collection.insertOne({ name: "Alice", age: 30 });

    // Find
    const users = await collection.find({ age: { $gte: 18 } }).toArray();
    console.log("Users:", users);

    // Update
    await collection.updateOne({ name: "Alice" }, { $set: { age: 31 } });

    // Delete
    await collection.deleteOne({ name: "Alice" });

  } finally {
    await client.close();
  }
}

run().catch(console.error);
```
<br>


## 67. List some popular libraries for integrating _MongoDB_ with web applications.

Many libraries and frameworks exist across different programming languages to simplify MongoDB integration in web applications.

### Popular MongoDB Integration Libraries

1. **Mongoose** (Node.js): ODM library providing schemas, validation, and middleware for MongoDB in Node.js applications.

2. **MongoDB Node.js Driver**: Official native driver for Node.js; low-level but highly flexible.

3. **PyMongo** (Python): Official synchronous MongoDB driver for Python.

4. **Motor** (Python): Asynchronous MongoDB driver for Python, built on top of PyMongo.

5. **MongoEngine** (Python): ODM for Python, similar to Mongoose.

6. **Spring Data MongoDB** (Java): Part of the Spring ecosystem; provides repository abstractions for MongoDB.

7. **Mongoid** (Ruby): ODM for Ruby on Rails applications.

8. **Beanie** (Python): Async ODM built on Motor for Python, using Pydantic models.

### Code Example: PyMongo vs Motor

Here is the Python script:

```python
# Synchronous: PyMongo
from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017/")
db = client["myDB"]
result = db.users.find_one({ "name": "Alice" })
print(result)

# Asynchronous: Motor (for use with asyncio/FastAPI)
import asyncio
import motor.motor_asyncio

async def get_user():
    client = motor.motor_asyncio.AsyncIOMotorClient("mongodb://localhost:27017/")
    db = client["myDB"]
    result = await db.users.find_one({ "name": "Alice" })
    print(result)

asyncio.run(get_user())
```
<br>


## 68. How is _MongoDB_ used in big data analytics?

MongoDB is well-suited for big data analytics due to its flexible schema, horizontal scalability, powerful aggregation framework, and native integration with big data tools.

### MongoDB's Role in Big Data

1. **Data Ingestion**: MongoDB handles high-volume, high-velocity writes from IoT devices, logs, and event streams.

2. **Aggregation Pipeline**: Performs server-side data processing and analytics without moving data to a separate system.

3. **Connector for Spark**: The MongoDB Connector for Apache Spark enables large-scale distributed analytics on MongoDB data.

4. **Atlas Data Federation**: Query data across MongoDB Atlas, S3, and other sources using a unified interface.

5. **Time-Series Collections**: Optimized storage for time-stamped data common in analytics workloads.

### General Syntax

- To create a time-series collection:
  - **db.createCollection("metrics", { timeseries: { timeField: "timestamp", metaField: "sensor" } })**

### Code Example: Analytics Aggregation

Here is the MongoDB shell script:

```javascript
// Connect to the database
use analyticsDB;

// Create a time-series collection for sensor data
db.createCollection("sensorReadings", {
  timeseries: {
    timeField: "timestamp",
    metaField: "sensorId",
    granularity: "minutes"
  }
});

// Aggregation: Average temperature per sensor per hour
db.sensorReadings.aggregate([
  { $match: { timestamp: { $gte: ISODate("2024-01-01") } } },
  {
    $group: {
      _id: {
        sensorId: "$sensorId",
        hour: { $hour: "$timestamp" }
      },
      avgTemp: { $avg: "$temperature" }
    }
  },
  { $sort: { "_id.hour": 1 } }
]);
```
<br>


## 69. Can _MongoDB_ handle real-time analytics workloads?

Yes, MongoDB can handle real-time analytics workloads through its aggregation pipeline, change streams, time-series collections, and Atlas capabilities.

### Features Supporting Real-Time Analytics

1. **Aggregation Pipeline**: Executes complex transformations and computations server-side in near real-time.

2. **Change Streams**: Listen to real-time data changes and trigger analytics processes immediately.

3. **Time-Series Collections**: Optimized for real-time ingestion and querying of time-stamped data.

4. **Atlas Search**: Full-text search indexes enable real-time search analytics.

5. **In-Memory Storage Engine**: For latency-critical analytics, the in-memory engine eliminates disk I/O.

### General Syntax

- To open a change stream:
  - **const changeStream = db.collection.watch()**

### Code Example: Real-Time Analytics with Change Streams

Here is the Node.js script:

```javascript
const { MongoClient } = require("mongodb");

async function watchRealTimeAnalytics() {
  const client = new MongoClient("mongodb://localhost:27017");
  await client.connect();

  const db = client.db("analyticsDB");
  const collection = db.collection("orders");

  // Watch for new orders in real-time
  const changeStream = collection.watch([
    { $match: { operationType: "insert" } }
  ]);

  console.log("Watching for new orders...");

  changeStream.on("change", (change) => {
    const order = change.fullDocument;
    console.log(`New order: ${order._id}, Amount: ${order.amount}`);
    // Trigger real-time analytics processing here
  });
}

watchRealTimeAnalytics();
```
<br>


## 70. How do you stream large quantities of data into and out of _MongoDB_?

Streaming large data volumes into and out of MongoDB requires using cursors, bulk operations, and driver-level streaming features to avoid memory overload.

### Streaming Data In (Write)

1. **Bulk Write Operations**: Use `bulkWrite()` or `insertMany()` to batch inserts efficiently.

2. **mongoimport**: Command-line tool for importing large JSON, CSV, or TSV files.

3. **Driver Streams**: Use Node.js streams or Python generators to process and insert data incrementally.

### Streaming Data Out (Read)

1. **Cursor**: MongoDB queries return cursors; iterate without loading all results into memory.

2. **Aggregation with $out / $merge**: Write aggregation results directly to a collection.

3. **mongoexport**: Export data from MongoDB to JSON or CSV.

### Code Example: Streaming with Cursors

Here is the Node.js script:

```javascript
const { MongoClient } = require("mongodb");

async function streamLargeData() {
  const client = new MongoClient("mongodb://localhost:27017");
  await client.connect();
  const collection = client.db("myDB").collection("largeData");

  // Stream data OUT using cursor (processes one document at a time)
  const cursor = collection.find({}).batchSize(1000);
  let count = 0;

  for await (const doc of cursor) {
    // Process each document without loading all into memory
    count++;
    if (count % 1000 === 0) console.log(`Processed ${count} documents`);
  }

  // Stream data IN using bulk write batches
  const batchSize = 1000;
  const batch = [];
  for (let i = 0; i < 10000; i++) {
    batch.push({ insertOne: { document: { value: i, ts: new Date() } } });
    if (batch.length === batchSize) {
      await collection.bulkWrite(batch);
      batch.length = 0;
    }
  }

  await client.close();
}

streamLargeData();
```
<br>


## 71. How does _MongoDB_ handle locking and concurrency?

MongoDB uses an intent locking system and document-level concurrency control (via the WiredTiger storage engine) to allow multiple operations to run concurrently without excessive blocking.

### Concurrency Mechanisms

1. **Document-Level Locking (WiredTiger)**: Multiple clients can read and write to different documents in the same collection simultaneously.

2. **Intent Locks**: MongoDB uses shared (IS), exclusive (IX), and other intent locks at the global, database, and collection levels to coordinate access.

3. **MVCC (Multi-Version Concurrency Control)**: WiredTiger uses MVCC to allow readers and writers to operate concurrently without blocking each other.

4. **Transactions**: Multi-document ACID transactions use snapshot isolation to maintain consistency.

### General Syntax

- To check current lock information:
  - **db.serverStatus().locks**

### Code Example: Concurrency Monitoring

Here is the MongoDB shell script:

```javascript
// Connect to admin database
use admin;

// Check current lock statistics
db.serverStatus().locks;

// Check currently running operations
db.currentOp({ "active": true });

// Kill a long-running operation if needed
db.killOp(opId);  // Replace opId with the actual operation ID

// Check WiredTiger concurrency settings
db.serverStatus().wiredTiger.concurrentTransactions;
```
<br>


## 72. What is the relationship between _BSON_ and _MongoDB_?

BSON (Binary JSON) is the binary-encoded serialization format that MongoDB uses internally to store and transfer documents. It extends JSON with additional data types and is optimized for speed and space efficiency.

### Key Aspects of BSON in MongoDB

1. **Storage Format**: MongoDB stores all documents on disk and in memory as BSON.

2. **Wire Protocol**: BSON is used to transmit data between MongoDB clients and servers.

3. **Extended Types**: BSON supports types not available in JSON, such as `Date`, `ObjectId`, `Binary`, `Decimal128`, `int32`, and `int64`.

4. **Lightweight Parsing**: BSON is designed for fast traversal and encoding/decoding.

5. **Size Limit**: A single BSON document cannot exceed 16MB.

### Code Example: BSON Types in MongoDB

Here is the MongoDB shell script:

```javascript
// Connect to the database
use myDB;

// Insert a document using BSON-specific types
db.bsonDemo.insertOne({
  _id: new ObjectId(),              // BSON ObjectId
  name: "Alice",                    // String
  age: NumberInt(30),               // BSON int32
  salary: NumberDecimal("75000.50"), // BSON Decimal128
  joinedAt: new Date(),             // BSON Date
  isActive: true,                   // Boolean
  profileImage: new BinData(0, "base64data") // BSON Binary
});

// Check the BSON size of a document
Object.bsonsize(db.bsonDemo.findOne());
```
<br>


## 73. Can you explain the concept of a _cursor_ in _MongoDB_?

A cursor in MongoDB is a pointer to the result set of a query. Instead of returning all matching documents at once, MongoDB returns a cursor that allows the application to iterate over results incrementally.

### Key Characteristics of Cursors

1. **Lazy Evaluation**: Documents are fetched from the server in batches (default 101 documents on first batch, then 16MB per batch).

2. **Iterable**: Cursors can be iterated using `forEach()`, `toArray()`, or a `for...of` loop.

3. **Cursor Methods**: Cursors support chaining methods like `sort()`, `limit()`, `skip()`, and `project()`.

4. **Cursor Timeout**: By default, cursors timeout after 10 minutes of inactivity on the server.

5. **noCursorTimeout**: Option to prevent cursor expiration for long-running operations.

### General Syntax

- To create a cursor:
  - **const cursor = db.collection.find({filter})**

### Code Example: Working with Cursors

Here is the MongoDB shell script:

```javascript
// Connect to the database
use myDB;

// Create a cursor
var cursor = db.myCollection.find({ age: { $gt: 25 } });

// Iterate with forEach
cursor.forEach(function(doc) {
  print(doc.name);
});

// Convert cursor to array (loads all into memory - use carefully)
var results = db.myCollection.find({ status: "active" }).toArray();

// Chain cursor methods
db.myCollection.find({})
  .sort({ age: -1 })
  .skip(10)
  .limit(5)
  .project({ name: 1, age: 1, _id: 0 });

// Check if cursor has more documents
var cur = db.myCollection.find({});
while (cur.hasNext()) {
  printjson(cur.next());
}
```
<br>


## 74. How does _MongoDB_ manage memory?

MongoDB relies primarily on the operating system's virtual memory and the WiredTiger storage engine's internal cache for memory management. Efficient memory usage is critical for performance.

### Memory Management Components

1. **WiredTiger Cache**: WiredTiger maintains an internal cache (default: 50% of RAM minus 1GB, minimum 256MB) for frequently accessed data and indexes.

2. **File System Cache**: MongoDB also benefits from the OS file system cache for additional data buffering.

3. **Index Memory**: Indexes should ideally fit entirely in RAM for fast lookups.

4. **Connection Memory**: Each client connection consumes memory; too many connections can cause memory pressure.

### General Syntax

- To configure WiredTiger cache size in `mongod.conf`:
  - **storage: { wiredTiger: { engineConfig: { cacheSizeGB: 4 } } }**

### Code Example: Monitoring Memory Usage

Here is the MongoDB shell script:

```javascript
// Connect to admin database
use admin;

// Check overall memory usage
db.serverStatus().mem;

// Check WiredTiger cache details
db.serverStatus().wiredTiger.cache;

// Check if indexes fit in cache
use myDB;
db.myCollection.stats().totalIndexSize;

// View current cache configuration
db.adminCommand({ getCmdLineOpts: 1 }).parsed.storage;
```
<br>


## 75. What are some best practices for securing a _MongoDB instance_?

Securing a MongoDB instance involves multiple layers: network security, authentication, authorization, encryption, and auditing.

### Security Best Practices

1. **Enable Authentication**: Always run MongoDB with `--auth` enabled.

2. **Use Role-Based Access Control**: Grant users only the minimum required privileges.

3. **Enable TLS/SSL**: Encrypt all data in transit between clients and servers.

4. **Bind to Specific IPs**: Use `bindIp` to restrict which network interfaces MongoDB listens on.

5. **Enable Encryption at Rest**: Use WiredTiger encryption for sensitive data.

6. **Keep MongoDB Updated**: Apply security patches promptly.

7. **Disable JavaScript Execution**: Set `security.javascriptEnabled: false` if not needed.

8. **Enable Auditing**: Track database activity for compliance and forensics.

### Code Example: Security Configuration

Here is the MongoDB configuration:

```yaml
# mongod.conf - Hardened security configuration
net:
  port: 27017
  bindIp: 127.0.0.1,10.0.0.5  # Restrict to specific IPs
  tls:
    mode: requireTLS
    certificateKeyFile: /etc/ssl/mongodb.pem

security:
  authorization: enabled
  javascriptEnabled: false

operationProfiling:
  slowOpThresholdMs: 100
  mode: slowOp
```

```javascript
// Create a limited-privilege application user
use myDB;
db.createUser({
  user: "appUser",
  pwd: "strongAppPassword!",
  roles: [{ role: "readWrite", db: "myDB" }]
});
```
<br>


## 76. How do you scale a _MongoDB deployment_?

MongoDB supports both vertical scaling (upgrading hardware) and horizontal scaling (sharding). For production deployments, horizontal scaling through sharding is the primary strategy for handling growing data and traffic.

### Scaling Strategies

1. **Vertical Scaling**: Increase CPU, RAM, or storage on existing servers. Simple but limited by hardware.

2. **Read Scaling with Replica Sets**: Direct read operations to secondary nodes using read preferences.

3. **Horizontal Scaling with Sharding**: Distribute data across multiple shards using a shard key.

4. **Connection Pooling**: Use driver-level connection pooling to handle more concurrent clients.

### General Syntax

- To set read preference to secondary:
  - **db.collection.find({}).readPref("secondary")**

### Code Example: Scaling with Sharding

Here is the MongoDB shell script:

```javascript
// Connect to mongos router
// mongosh --host mongos-server --port 27017

// Enable sharding on the database
sh.enableSharding("myDB");

// Choose an appropriate shard key and shard the collection
sh.shardCollection("myDB.users", { region: 1, userId: 1 });

// Check shard distribution
db.users.getShardDistribution();

// Check balancer status
sh.getBalancerState();

// View chunk distribution
use config;
db.chunks.find({ ns: "myDB.users" }).count();
```
<br>


## 77. What is _Ops Manager_ in _MongoDB_?

MongoDB Ops Manager is an on-premises management platform for MongoDB deployments. It provides automation, monitoring, backup, and alerting capabilities for organizations that need to manage MongoDB infrastructure within their own data centers.

### Key Features of Ops Manager

1. **Automation**: Deploy, upgrade, and scale MongoDB instances without manual intervention.

2. **Monitoring**: Real-time performance dashboards with metrics for all MongoDB processes.

3. **Backup**: Continuous backup with point-in-time restore for replica sets and sharded clusters.

4. **Alerting**: Configurable alerts for performance thresholds, replication lag, and more.

5. **Query Analyzer**: Identify and optimize slow-running queries across all monitored deployments.

### Ops Manager vs Atlas

| Feature | Ops Manager | MongoDB Atlas |
|---|---|---|
| Hosting | On-premises | Cloud (managed) |
| Control | Full | Managed by MongoDB |
| Setup | Manual | Automated |
| Best For | Regulated environments | Cloud-native apps |

### Code Example: Ops Manager Agent Configuration

Here is the configuration snippet:

```yaml
# Ops Manager Monitoring Agent configuration
mmsGroupId: "your-group-id"
mmsApiKey: "your-api-key"
mmsBaseUrl: "https://your-ops-manager-host:8080"

# MongoDB connection to monitor
mongo:
  host: localhost
  port: 27017
```

```javascript
// Check if monitoring agent is active via MongoDB shell
db.adminCommand({ getCmdLineOpts: 1 });
db.serverStatus().connections;
```
<br>


## 78. How do you troubleshoot a slow-running _query_ in _MongoDB_?

Troubleshooting slow queries in MongoDB involves identifying the query, analyzing its execution plan, and applying appropriate optimizations such as adding indexes or rewriting the query.

### Troubleshooting Steps

1. **Enable the Profiler**: Capture slow queries automatically.

2. **Use explain()**: Analyze the query execution plan to detect collection scans (COLLSCAN).

3. **Check for Missing Indexes**: If `explain()` shows COLLSCAN, add a suitable index.

4. **Examine mongostat / mongotop**: Identify which collections are experiencing high load.

5. **Review Query Patterns**: Avoid using `$where`, large `$in` arrays, or non-selective filters.

### General Syntax

- To enable profiling:
  - **db.setProfilingLevel(1, { slowms: 50 })**

### Code Example: Troubleshooting Slow Queries

Here is the MongoDB shell script:

```javascript
// Connect to the database
use myDB;

// Step 1: Enable profiler for queries slower than 50ms
db.setProfilingLevel(1, { slowms: 50 });

// Step 2: Run the slow query and inspect with explain()
db.orders.find({ customerId: "C001", status: "pending" })
  .explain("executionStats");

// Step 3: Check if COLLSCAN is present in the plan
// If winningPlan.stage == "COLLSCAN", add an index:
db.orders.createIndex({ customerId: 1, status: 1 });

// Step 4: View recent slow queries from the profiler
db.system.profile.find({ millis: { $gt: 50 } })
  .sort({ ts: -1 })
  .limit(10)
  .pretty();

// Step 5: Disable profiler after investigation
db.setProfilingLevel(0);
```
<br>


## 79. What could cause a _MongoServerError: E11000 duplicate key error_?

The E11000 error occurs when an insert or update operation attempts to create a duplicate value in a field that has a unique index, violating the uniqueness constraint.

### Common Causes

1. **Unique Index Violation**: Inserting a document with a value that already exists in a field with a unique index (e.g., `email`, `username`).

2. **Duplicate `_id`**: Attempting to insert a document with an `_id` that already exists in the collection.

3. **Race Conditions**: Two concurrent inserts with the same unique field value in a high-concurrency environment.

4. **Bulk Insert Failures**: Using `insertMany()` where one or more documents violate a unique constraint.

### General Syntax

- To handle the error in Node.js:
  - **if (error.code === 11000) { // handle duplicate key }**

### Code Example: Handling E11000 Error

Here is the MongoDB shell and Node.js script:

```javascript
// Create a unique index on 'email'
use myDB;
db.users.createIndex({ email: 1 }, { unique: true });

// This will succeed
db.users.insertOne({ name: "Alice", email: "alice@example.com" });

// This will throw E11000 duplicate key error
db.users.insertOne({ name: "Alice2", email: "alice@example.com" });
```

```javascript
// Handle the error gracefully in Node.js
try {
  await collection.insertOne({ name: "Alice2", email: "alice@example.com" });
} catch (error) {
  if (error.code === 11000) {
    console.log("Duplicate key error:", error.keyValue);
    // Handle: return error to user, update instead, etc.
  } else {
    throw error;
  }
}
```
<br>


## 80. How would you handle a scenario where the _MongoDB service_ won't start?

When the MongoDB service fails to start, a systematic diagnostic approach is required to identify and resolve the root cause.

### Common Causes and Solutions

1. **Lock File Present**: A stale `mongod.lock` file from an unclean shutdown. Delete it and restart.

2. **Port Already in Use**: Another process is using port 27017. Change the port or stop the conflicting process.

3. **Insufficient Permissions**: MongoDB cannot write to the `dbPath` directory. Fix ownership/permissions.

4. **Corrupted Data Files**: Run `mongod --repair` to attempt recovery.

5. **Configuration Errors**: Invalid `mongod.conf` settings prevent startup.

6. **Disk Full**: MongoDB cannot write. Free up disk space.

### General Syntax

- To check MongoDB logs:
  - **sudo tail -f /var/log/mongodb/mongod.log**

### Code Example: Troubleshooting Steps

Here is the shell script:

```bash
# Step 1: Check the MongoDB log for error details
sudo tail -100 /var/log/mongodb/mongod.log

# Step 2: Check if port 27017 is in use
sudo lsof -i :27017

# Step 3: Remove stale lock file (if safe to do so)
sudo rm /var/lib/mongodb/mongod.lock

# Step 4: Fix directory permissions
sudo chown -R mongodb:mongodb /var/lib/mongodb
sudo chmod 755 /var/lib/mongodb

# Step 5: Attempt repair if data files are corrupted
mongod --repair --dbpath /var/lib/mongodb

# Step 6: Validate mongod.conf syntax and restart
sudo mongod --config /etc/mongod.conf --fork
sudo systemctl status mongod
```
<br>


## 81. What are some _MongoDB cloud-hosted solutions_?

MongoDB can be deployed and managed in the cloud through various hosted services, ranging from MongoDB's own Atlas platform to cloud provider marketplace offerings.

### Cloud-Hosted MongoDB Solutions

1. **MongoDB Atlas**: MongoDB's fully managed cloud database service. Available on AWS, Google Cloud, and Azure. Offers automated backups, scaling, monitoring, and global clusters.

2. **AWS DocumentDB**: Amazon's managed document database with MongoDB compatibility (not fully feature-equivalent).

3. **MongoDB on AWS EC2/GCP/Azure VMs**: Self-managed MongoDB deployed on cloud virtual machines.

4. **DigitalOcean Managed MongoDB**: Fully managed MongoDB service on DigitalOcean.

5. **ScaleGrid**: Third-party managed MongoDB hosting across multiple cloud providers.

### MongoDB Atlas Tiers

| Tier | Description |
|---|---|
| Free (M0) | 512MB storage, shared cluster |
| Shared (M2/M5) | Up to 5GB, low cost |
| Dedicated (M10+) | Production-grade, full features |
| Serverless | Pay-per-operation model |

### Code Example: Connecting to MongoDB Atlas

Here is the connection script:

```javascript
// Connect to MongoDB Atlas from mongosh
// mongosh "mongodb+srv://cluster0.example.mongodb.net/myDB" \
//   --username myUser --password myPassword

// Connect using Node.js
const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://myUser:myPassword@cluster0.example.mongodb.net/myDB?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function connect() {
  await client.connect();
  console.log("Connected to MongoDB Atlas!");
  const db = client.db("myDB");
  const collections = await db.listCollections().toArray();
  console.log("Collections:", collections.map(c => c.name));
  await client.close();
}

connect().catch(console.error);
```
<br>


## 82. How does _MongoDB Atlas_ enhance _MongoDB_ capabilities?

MongoDB Atlas is a fully managed cloud database service built on MongoDB. It extends core MongoDB functionality with additional services, automation, and integrations that simplify operations and accelerate development.

### Key Atlas Enhancements

1. **Automated Operations**: Automated backups, patching, scaling, and failover without manual intervention.

2. **Global Clusters**: Multi-region deployments with zone-based sharding for data locality and low latency.

3. **Atlas Search**: Full-text search powered by Apache Lucene, integrated directly with MongoDB.

4. **Atlas Data Federation**: Query data across MongoDB, S3, and HTTP sources with a unified interface.

5. **Atlas Functions & Triggers**: Serverless functions and database triggers for event-driven workflows.

6. **Performance Advisor**: Automatically recommends indexes based on query patterns.

7. **Atlas Charts**: Built-in data visualization and dashboarding.

### Code Example: Atlas Search Query

Here is the MongoDB shell script:

```javascript
// Atlas Search: Full-text search on a collection
// (Requires a Search Index to be created in Atlas UI first)
db.products.aggregate([
  {
    $search: {
      index: "default",
      text: {
        query: "wireless headphones",
        path: ["name", "description"]
      }
    }
  },
  {
    $project: {
      name: 1,
      description: 1,
      score: { $meta: "searchScore" }
    }
  },
  { $sort: { score: -1 } },
  { $limit: 10 }
]);
```
<br>


## 83. Describe the use of _Compass_ in _MongoDB_.

MongoDB Compass is the official graphical user interface (GUI) for MongoDB. It allows developers and database administrators to visually explore data, run queries, manage indexes, and analyze performance without writing shell commands.

### Key Features of MongoDB Compass

1. **Data Explorer**: Browse databases, collections, and documents visually with filtering and sorting.

2. **Query Builder**: Build and run queries using a visual form or raw JSON filter.

3. **Aggregation Pipeline Builder**: Construct and visualize aggregation pipelines stage by stage.

4. **Index Management**: View, create, and drop indexes with performance insights.

5. **Schema Analysis**: Automatically analyzes document structures and field distributions.

6. **Performance Monitoring**: Real-time server statistics and slow operation detection.

7. **Embedded MongoDB Shell**: Run shell commands directly within Compass.

### Connection Syntax

- To connect using a URI:
  - **mongodb://localhost:27017**
  - **mongodb+srv://user:password@cluster.mongodb.net/myDB**

### Code Example: Compass Aggregation

Here is the aggregation pipeline as built in Compass:

```javascript
// Aggregation pipeline that can be built visually in Compass
// and exported to code:

db.orders.aggregate([
  // Stage 1: $match - Filter stage
  {
    $match: { status: "completed", amount: { $gt: 50 } }
  },
  // Stage 2: $group - Group stage
  {
    $group: {
      _id: "$customerId",
      totalSpent: { $sum: "$amount" },
      orderCount: { $sum: 1 }
    }
  },
  // Stage 3: $sort - Sort stage
  {
    $sort: { totalSpent: -1 }
  },
  // Stage 4: $limit - Limit stage
  {
    $limit: 10
  }
]);
```
<br>


## 84. Explain the use of _Robo 3T (formerly Robomongo)_.

Robo 3T (now merged into Studio 3T) is a popular open-source MongoDB GUI client that embeds the MongoDB shell and provides a lightweight, shell-centric interface for interacting with MongoDB.

### Key Features of Robo 3T

1. **Embedded Shell**: Run MongoDB shell commands directly within the GUI, providing full shell functionality with a visual interface.

2. **Multiple Views**: Display query results in tree view, table view, or JSON text view.

3. **Connection Manager**: Manage multiple MongoDB connections including replica sets, sharded clusters, and SSH tunnels.

4. **Query History**: Automatically saves recently executed queries for easy reuse.

5. **IntelliShell**: Provides autocompletion for MongoDB shell commands.

### Robo 3T vs MongoDB Compass

| Feature | Robo 3T | MongoDB Compass |
|---|---|---|
| Interface Style | Shell-centric | GUI-centric |
| Aggregation Builder | Limited | Full visual builder |
| Schema Analysis | No | Yes |
| Cost | Free | Free |

### Code Example: Shell Commands in Robo 3T

Here is the MongoDB shell script (run directly in Robo 3T's shell):

```javascript
// Connect and run queries in Robo 3T's embedded shell
use myDB;

// Query with projection
db.users.find(
  { age: { $gte: 18 } },
  { name: 1, email: 1, _id: 0 }
).sort({ name: 1 });

// Aggregation pipeline in shell view
db.orders.aggregate([
  { $match: { status: "shipped" } },
  { $group: { _id: "$customerId", total: { $sum: "$amount" } } },
  { $sort: { total: -1 } }
]);
```
<br>


## 85. Can you work with _MongoDB_ using the _command line_? If so, how?

Yes, MongoDB provides powerful command-line tools for connecting, querying, importing, exporting, backing up, and restoring data.

### Key Command-Line Tools

1. **mongosh**: The MongoDB Shell for interactive querying and administration.

2. **mongodump / mongorestore**: Backup and restore tools using BSON format.

3. **mongoexport / mongoimport**: Export/import data in JSON or CSV format.

4. **mongofiles**: Manage files stored in GridFS from the command line.

5. **mongostat**: Real-time server statistics.

6. **mongotop**: Monitor per-collection read/write activity.

### General Syntax

- To connect:
  - **mongosh "mongodb://localhost:27017/myDB"**

### Code Example: Command-Line Operations

Here is the shell script:

```bash
# Connect to MongoDB shell
mongosh "mongodb://localhost:27017/myDB"

# Export a collection to JSON
mongoexport --db myDB --collection users --out /tmp/users.json

# Import JSON data into a collection
mongoimport --db myDB --collection users --file /tmp/users.json

# Backup a database
mongodump --db myDB --out /var/backups/myDB

# Restore a database
mongorestore --db myDB /var/backups/myDB/myDB

# Monitor real-time stats
mongostat --host localhost --port 27017

# Monitor collection activity
mongotop 5  # Refresh every 5 seconds
```
<br>


## 86. What factors to consider when deploying _MongoDB_ in a containerized environment?

Deploying MongoDB in containers (Docker/Kubernetes) introduces unique challenges around data persistence, networking, performance, and high availability that must be carefully addressed.

### Key Considerations

1. **Data Persistence**: Containers are ephemeral; always use persistent volumes (PVs) to store MongoDB data files outside the container.

2. **Replica Sets**: Always deploy MongoDB as a replica set even for single-node setups to enable transactions and provide failover capability.

3. **Resource Limits**: Set appropriate CPU and memory limits; ensure WiredTiger cache size fits within container memory limits.

4. **Networking**: Use stable, resolvable hostnames for replica set members; avoid relying on IP addresses.

5. **Configuration Management**: Use ConfigMaps or environment variables for MongoDB configuration.

6. **Security**: Never expose MongoDB ports externally; use Kubernetes Secrets for credentials.

### Code Example: Docker and Kubernetes Deployment

Here is the Docker Compose and Kubernetes configuration:

```yaml
# docker-compose.yml - MongoDB with persistent volume
version: "3.8"
services:
  mongodb:
    image: mongo:7.0
    container_name: mongodb
    restart: always
    environment:
      MONGO_INITDB_ROOT_USERNAME: admin
      MONGO_INITDB_ROOT_PASSWORD: securePassword
    ports:
      - "27017:27017"
    volumes:
      - mongodb_data:/data/db   # Persistent volume
    command: mongod --replSet rs0 --auth

volumes:
  mongodb_data:
```

```yaml
# Kubernetes StatefulSet for MongoDB
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: mongodb
spec:
  replicas: 3
  serviceName: "mongodb"
  template:
    spec:
      containers:
      - name: mongodb
        image: mongo:7.0
        resources:
          limits:
            memory: "2Gi"
            cpu: "1"
        volumeMounts:
        - name: mongo-data
          mountPath: /data/db
  volumeClaimTemplates:
  - metadata:
      name: mongo-data
    spec:
      accessModes: ["ReadWriteOnce"]
      resources:
        requests:
          storage: 20Gi
```
<br>


## 87. How does _MongoDB_ work with _microservices architectures_?

MongoDB is well-suited to microservices architectures due to its flexible schema, ability to serve as a dedicated database per service, and native support for diverse data models across services.

### MongoDB in Microservices

1. **Database per Service**: Each microservice can have its own MongoDB database or cluster, ensuring loose coupling and independent scaling.

2. **Flexible Schema**: Different services can store different document structures without schema migration overhead.

3. **Change Streams**: Enable event-driven communication between services by watching for data changes.

4. **MongoDB Atlas**: Simplifies multi-region deployments common in distributed microservices.

5. **Multi-Model Support**: One MongoDB deployment can serve multiple services with different data requirements.

### Code Example: Change Streams for Microservice Events

Here is the Node.js script:

```javascript
const { MongoClient } = require("mongodb");

// Order Service: Watch for new orders and emit events to other services
async function watchOrderEvents() {
  const client = new MongoClient("mongodb://localhost:27017");
  await client.connect();

  const ordersCollection = client.db("orderService").collection("orders");

  // Watch for order insertions and updates
  const changeStream = ordersCollection.watch([
    { $match: { operationType: { $in: ["insert", "update"] } } }
  ]);

  changeStream.on("change", async (change) => {
    if (change.operationType === "insert") {
      const order = change.fullDocument;
      console.log(`New order created: ${order._id}`);
      // Publish event to Inventory Service, Notification Service, etc.
      await publishEvent("order.created", order);
    }
  });
}

async function publishEvent(eventType, payload) {
  // Publish to message queue (Kafka, RabbitMQ, etc.)
  console.log(`Publishing event: ${eventType}`, payload);
}

watchOrderEvents();
```
<br>


## 88. What are _change streams_ in _MongoDB_?

Change streams allow applications to access real-time notifications of changes to MongoDB collections, databases, or entire deployments. They are built on the oplog and provide a high-level API for event-driven programming.

### Key Features of Change Streams

1. **Real-Time Notifications**: Receive events for insert, update, replace, delete, and drop operations immediately as they occur.

2. **Resumable**: Change streams include a resume token that allows applications to resume from where they left off after a failure.

3. **Filterable**: Use aggregation pipeline stages to filter which change events to receive.

4. **Requires Replica Set**: Change streams require MongoDB to be running as a replica set or sharded cluster.

### General Syntax

- To open a change stream:
  - **const changeStream = collection.watch([pipeline], { fullDocument: "updateLookup" })**

### Code Example: Using Change Streams

Here is the Node.js script:

```javascript
const { MongoClient } = require("mongodb");

async function watchChanges() {
  const client = new MongoClient("mongodb://localhost:27017");
  await client.connect();

  const collection = client.db("myDB").collection("inventory");

  // Watch all changes with full document on update
  const changeStream = collection.watch(
    [{ $match: { operationType: { $in: ["insert", "update", "delete"] } } }],
    { fullDocument: "updateLookup" }
  );

  console.log("Listening for changes...");

  changeStream.on("change", (change) => {
    switch (change.operationType) {
      case "insert":
        console.log("New document:", change.fullDocument);
        break;
      case "update":
        console.log("Updated document:", change.fullDocument);
        break;
      case "delete":
        console.log("Deleted document ID:", change.documentKey._id);
        break;
    }
  });

  // Resume from a token after reconnection
  // const resumeStream = collection.watch([], { resumeAfter: savedResumeToken });
}

watchChanges();
```
<br>


## 89. What major features were added in the latest _MongoDB release_?

MongoDB 7.0 (the most recent major release as of mid-2024) introduced several significant features focused on performance, developer productivity, and operational improvements.

### Key Features in MongoDB 7.0

1. **Compound Wildcard Indexes**: Create wildcard indexes combined with other fields for more flexible querying of dynamic schemas.

2. **Improved Time-Series Collections**: Enhanced performance and new operators for time-series data, including secondary indexes on arbitrary fields.

3. **$percentile and $median Accumulators**: New aggregation operators for computing percentile values directly in the pipeline.

4. **Queryable Encryption (GA)**: Client-Side Field Level Encryption with the ability to query on encrypted fields, now generally available.

5. **Multi-Document ACID Transactions Performance**: Improved throughput for workloads using multi-document transactions.

6. **Atlas Search Improvements**: Enhanced full-text search capabilities and new analyzers.

### Code Example: New Aggregation Operators

Here is the MongoDB shell script:

```javascript
// Connect to the database
use myDB;

// Use $percentile accumulator (MongoDB 7.0+)
db.testScores.aggregate([
  {
    $group: {
      _id: "$subject",
      p50: {
        $percentile: {
          input: "$score",
          p: [0.5],
          method: "approximate"
        }
      },
      p95: {
        $percentile: {
          input: "$score",
          p: [0.95],
          method: "approximate"
        }
      },
      medianScore: { $median: { input: "$score", method: "approximate" } }
    }
  }
]);

// Create a compound wildcard index (MongoDB 7.0+)
db.myCollection.createIndex({ category: 1, "$**": 1 });
```
<br>


## 90. How does _MongoDB_ handle version upgrades in a production environment?

MongoDB supports rolling upgrades for replica sets and sharded clusters, allowing the database to remain available throughout the upgrade process with minimal downtime.

### Upgrade Process for Replica Sets

1. **Check Compatibility**: Review the MongoDB upgrade guide and ensure driver compatibility.

2. **Upgrade Secondaries First**: Upgrade secondary members one at a time, restarting each after the upgrade.

3. **Step Down Primary**: Use `rs.stepDown()` to safely demote the current primary.

4. **Upgrade Old Primary**: The stepped-down primary becomes a secondary; upgrade it last.

5. **Set Feature Compatibility Version (FCV)**: After all members are upgraded, update the FCV.

### General Syntax

- To check current FCV:
  - **db.adminCommand({ getParameter: 1, featureCompatibilityVersion: 1 })**

- To set FCV:
  - **db.adminCommand({ setFeatureCompatibilityVersion: "7.0" })**

### Code Example: Rolling Upgrade Steps

Here is the MongoDB shell script:

```javascript
// Step 1: Check current version and FCV
db.version();
db.adminCommand({ getParameter: 1, featureCompatibilityVersion: 1 });

// Step 2: Check replica set status before starting
rs.status();

// Step 3: After upgrading secondary binaries, verify they rejoin
rs.status(); // Confirm all members are SECONDARY or PRIMARY

// Step 4: Step down the primary to trigger election
rs.stepDown(120); // Step down for 120 seconds

// Step 5: After upgrading all members, set the new FCV
// (Run on the new primary)
db.adminCommand({ setFeatureCompatibilityVersion: "7.0" });

// Step 6: Verify the upgrade
db.version();
rs.status();
```
<br>


## 91. In what scenarios is _MongoDB_ favored over a relational database?

MongoDB is preferred over relational databases in scenarios that involve flexible data models, high write throughput, horizontal scalability, and rapidly evolving schemas.

### Scenarios Where MongoDB Excels

1. **Dynamic or Evolving Schemas**: Applications where the data structure changes frequently benefit from MongoDB's schema flexibility.

2. **Document-Oriented Data**: Content management systems, catalogs, and user profiles where data is naturally hierarchical.

3. **High Write Throughput**: Applications ingesting large volumes of data (IoT, logs, events) benefit from MongoDB's write performance.

4. **Horizontal Scalability**: Systems that need to scale across multiple servers using sharding.

5. **Geospatial Data**: Applications requiring location-based queries using MongoDB's native geospatial indexes.

6. **Real-Time Analytics**: Applications needing aggregations on live data without a separate analytics system.

7. **Prototyping and Agile Development**: Faster iteration without strict schema migrations.

### Code Example: Use Case - Product Catalog

Here is the MongoDB shell script:

```javascript
// Product catalog: each product can have different attributes
// This is difficult in relational databases but natural in MongoDB
use ecommerceDB;

db.products.insertMany([
  {
    name: "Laptop",
    category: "Electronics",
    specs: { ram: "16GB", storage: "512GB SSD", processor: "Intel i7" },
    price: 999.99
  },
  {
    name: "T-Shirt",
    category: "Clothing",
    specs: { size: ["S", "M", "L", "XL"], color: ["red", "blue"] },
    price: 29.99
  },
  {
    name: "Coffee Beans",
    category: "Food",
    specs: { weight: "500g", origin: "Ethiopia", roast: "Medium" },
    price: 14.99
  }
]);

// Query: Find all electronics under $1500
db.products.find({ category: "Electronics", price: { $lt: 1500 } });
```
<br>


## 92. What are some common patterns of data access in applications that use _MongoDB_?

Understanding data access patterns is essential for schema design in MongoDB. The way an application reads and writes data should drive modeling decisions.

### Common Data Access Patterns

1. **Find by ID**: Retrieve a single document by its `_id`. Use the default `_id` index.

2. **Find by Attribute**: Query by a specific field value. Requires an index on that field.

3. **Range Queries**: Retrieve documents where a field falls within a range. Supported by B-tree indexes.

4. **Aggregation / Reporting**: Compute summaries, totals, or averages using the aggregation pipeline.

5. **Geospatial Queries**: Find documents near a location using `$near` or `$geoWithin`.

6. **Full-Text Search**: Search within text fields using text indexes or Atlas Search.

7. **Time-Series Access**: Query recent events or data within a time window.

### Code Example: Common Access Patterns

Here is the MongoDB shell script:

```javascript
// Connect to the database
use myDB;

// Pattern 1: Find by ID
db.users.findOne({ _id: ObjectId("64f1a2b3c4d5e6f7a8b9c0d1") });

// Pattern 2: Find by attribute (with index)
db.users.createIndex({ email: 1 });
db.users.findOne({ email: "alice@example.com" });

// Pattern 3: Range query
db.orders.find({ createdAt: { $gte: ISODate("2024-01-01"), $lt: ISODate("2025-01-01") } });

// Pattern 4: Aggregation
db.sales.aggregate([
  { $group: { _id: "$category", total: { $sum: "$amount" } } }
]);

// Pattern 5: Geospatial query (requires 2dsphere index)
db.locations.createIndex({ coords: "2dsphere" });
db.locations.find({
  coords: { $near: { $geometry: { type: "Point", coordinates: [88.36, 22.57] }, $maxDistance: 5000 } }
});
```
<br>


## 93. How can you prevent slow queries in _MongoDB_?

Preventing slow queries requires proactive index design, careful schema planning, query optimization, and ongoing monitoring of query performance.

### Strategies to Prevent Slow Queries

1. **Create Appropriate Indexes**: Index fields used in query filters, sort operations, and join conditions.

2. **Use Covered Queries**: Ensure the index covers both the filter and projection to avoid document fetches.

3. **Avoid Large Skip Values**: Use range-based pagination instead of `skip()` for large offsets.

4. **Limit Result Sets**: Always use `.limit()` when the full result set is not needed.

5. **Use Projection**: Return only the fields needed to reduce data transfer.

6. **Avoid $where and JavaScript**: Server-side JavaScript execution is slow; use native operators instead.

7. **Monitor with the Profiler**: Continuously monitor and address slow queries using the database profiler.

### Code Example: Query Optimization

Here is the MongoDB shell script:

```javascript
// Connect to the database
use myDB;

// BAD: No index, returns all fields
db.orders.find({ customerId: "C001" });

// GOOD: Indexed field, projected fields only
db.orders.createIndex({ customerId: 1, status: 1 });
db.orders.find(
  { customerId: "C001", status: "pending" },
  { orderId: 1, total: 1, _id: 0 }
);

// BAD: Large skip value (slow for high offset)
db.products.find({}).skip(100000).limit(10);

// GOOD: Range-based pagination (fast)
db.products.find({ _id: { $gt: lastSeenId } }).limit(10);

// Use explain to verify index usage
db.orders.find({ customerId: "C001" }).explain("executionStats");
```
<br>


## 94. Explain the role of the _Profiler_ in _MongoDB_.

The MongoDB database profiler is a diagnostic tool that records information about MongoDB operations, enabling administrators to identify and optimize slow or resource-intensive queries.

### Profiler Levels

1. **Level 0 (Off)**: Profiler is disabled. No operations are logged.

2. **Level 1 (Slow Operations)**: Logs only operations that exceed the `slowms` threshold (default: 100ms).

3. **Level 2 (All Operations)**: Logs all operations. Use only for debugging; has significant performance overhead.

### Where Profiler Data Is Stored

- Profiling data is stored in the `system.profile` capped collection within each database.

### General Syntax

- To enable the profiler:
  - **db.setProfilingLevel(1, { slowms: 50 })**

- To query profiler results:
  - **db.system.profile.find().sort({ ts: -1 }).limit(10)**

### Code Example: Using the Profiler

Here is the MongoDB shell script:

```javascript
// Connect to the database
use myDB;

// Enable profiler for operations slower than 50ms
db.setProfilingLevel(1, { slowms: 50 });

// Run some queries (some may be slow)
db.orders.find({ customerId: "C001" }).toArray();

// View profiler results - most recent slow operations
db.system.profile.find(
  { millis: { $gt: 50 } },
  {
    op: 1,          // Operation type
    ns: 1,          // Namespace (db.collection)
    millis: 1,      // Duration in milliseconds
    query: 1,       // Query filter used
    ts: 1           // Timestamp
  }
).sort({ ts: -1 }).limit(10).pretty();

// Check current profiling level
db.getProfilingStatus();

// Disable the profiler
db.setProfilingLevel(0);
```
<br>


## 95. How are _B-tree indexes_ implemented in _MongoDB_?

MongoDB implements indexes using a B-tree (specifically a B+ tree) data structure. This allows for efficient ordered traversal, range queries, and equality lookups with O(log n) time complexity.

### How B-tree Indexes Work in MongoDB

1. **Ordered Structure**: The B-tree maintains index keys in sorted order, enabling efficient range and equality queries.

2. **Leaf Nodes**: Leaf nodes store index key values along with pointers to the corresponding document locations on disk.

3. **Multi-Level Tree**: Internal nodes guide traversal to the correct leaf node; the tree auto-balances on insert/delete.

4. **WiredTiger Integration**: MongoDB's WiredTiger storage engine stores B-tree index structures using its own page-based storage format.

5. **Index Key Limitations**: A single index key cannot exceed 1024 bytes (MongoDB raises an error for larger keys).

### General Syntax

- To create a B-tree index:
  - **db.collection.createIndex({ field: 1 })** (ascending) or **{ field: -1 }** (descending)

### Code Example: B-tree Index Behavior

Here is the MongoDB shell script:

```javascript
// Connect to the database
use myDB;

// Create a B-tree index on 'age' (ascending)
db.users.createIndex({ age: 1 });

// B-tree supports equality queries efficiently
db.users.find({ age: 30 });

// B-tree supports range queries efficiently
db.users.find({ age: { $gte: 25, $lte: 40 } });

// B-tree supports sort operations
db.users.find({}).sort({ age: 1 });

// Verify the index is used (look for IXSCAN in winningPlan)
db.users.find({ age: { $gte: 25 } }).explain("executionStats");

// View index details
db.users.getIndexes();
```
<br>


## 96. How do you handle complex transactions in _MongoDB_?

MongoDB supports multi-document ACID transactions since version 4.0 (for replica sets) and 4.2 (for sharded clusters). They allow multiple operations across one or more collections to be executed atomically.

### Key Transaction Concepts

1. **Session**: Transactions are associated with a client session.

2. **startTransaction()**: Begins a new transaction.

3. **commitTransaction()**: Commits all operations in the transaction atomically.

4. **abortTransaction()**: Rolls back all operations in the transaction.

5. **Snapshot Isolation**: Transactions use snapshot isolation; they see a consistent point-in-time view of the data.

### General Syntax

- To use a transaction:
  - **session.startTransaction(); ... await session.commitTransaction();**

### Code Example: Multi-Document Transaction

Here is the Node.js script:

```javascript
const { MongoClient } = require("mongodb");

async function transferFunds(fromId, toId, amount) {
  const client = new MongoClient("mongodb://localhost:27017");
  await client.connect();

  const session = client.startSession();
  const accounts = client.db("bankDB").collection("accounts");

  try {
    session.startTransaction();

    // Deduct from sender
    await accounts.updateOne(
      { _id: fromId, balance: { $gte: amount } },
      { $inc: { balance: -amount } },
      { session }
    );

    // Add to receiver
    await accounts.updateOne(
      { _id: toId },
      { $inc: { balance: amount } },
      { session }
    );

    await session.commitTransaction();
    console.log("Transfer successful!");

  } catch (error) {
    await session.abortTransaction();
    console.error("Transaction aborted:", error.message);
    throw error;

  } finally {
    await session.endSession();
    await client.close();
  }
}

transferFunds("ACC001", "ACC002", 500);
```
<br>


## 97. Explain the _MongoDB MapReduce operation_.

MapReduce is a data processing paradigm that MongoDB supports for performing batch data transformations and aggregations. However, it has largely been superseded by the more performant Aggregation Pipeline in modern MongoDB versions.

### How MapReduce Works

1. **Map Phase**: A JavaScript function is applied to each document in the collection. It emits key-value pairs.

2. **Reduce Phase**: A JavaScript function aggregates all values emitted for the same key.

3. **Output**: Results are stored in a new collection or returned inline.

### MapReduce vs Aggregation Pipeline

| Aspect | MapReduce | Aggregation Pipeline |
|---|---|---|
| Performance | Slower (JavaScript) | Faster (native C++) |
| Complexity | High | Moderate |
| Flexibility | Very high | High |
| Status | Deprecated (v5.0+) | Recommended |

### Code Example: MapReduce

Here is the MongoDB shell script:

```javascript
// Connect to the database
use myDB;

// MapReduce: Count orders per customer
db.orders.mapReduce(
  // Map function: emit customerId as key, 1 as value
  function() {
    emit(this.customerId, 1);
  },
  // Reduce function: sum all values for each key
  function(key, values) {
    return Array.sum(values);
  },
  // Options: output to a new collection
  {
    out: "orderCountPerCustomer"
  }
);

// View the results
db.orderCountPerCustomer.find().sort({ value: -1 }).limit(10);

// Equivalent Aggregation Pipeline (preferred approach)
db.orders.aggregate([
  { $group: { _id: "$customerId", orderCount: { $sum: 1 } } },
  { $sort: { orderCount: -1 } },
  { $limit: 10 }
]);
```
<br>


## 98. Can you perform text searches in _MongoDB_?

Yes, MongoDB supports full-text search through text indexes. A text index tokenizes and stems the string content of indexed fields, enabling keyword-based search queries.

### Text Search Features

1. **Text Index**: Create a text index on one or more string fields to enable text search.

2. **$text Operator**: Use `$text` with `$search` to perform text queries.

3. **Text Score**: MongoDB assigns a relevance score to each result; sort by score for best matches.

4. **Language Support**: Supports stemming and stop words for multiple languages.

5. **Atlas Search**: For advanced full-text search (fuzzy matching, facets, autocomplete), use MongoDB Atlas Search powered by Apache Lucene.

### General Syntax

- To create a text index:
  - **db.collection.createIndex({ field: "text" })**

- To search:
  - **db.collection.find({ $text: { $search: "keyword" } })**

### Code Example: Text Search in MongoDB

Here is the MongoDB shell script:

```javascript
// Connect to the database
use myDB;

// Create a text index on 'title' and 'description' fields
db.articles.createIndex({ title: "text", description: "text" });

// Insert sample documents
db.articles.insertMany([
  { title: "MongoDB Tutorial", description: "A guide to MongoDB for beginners" },
  { title: "Advanced MongoDB", description: "Deep dive into MongoDB aggregation and indexing" },
  { title: "SQL vs NoSQL", description: "Comparing relational and document databases" }
]);

// Basic text search
db.articles.find({ $text: { $search: "MongoDB" } });

// Search with relevance score
db.articles.find(
  { $text: { $search: "MongoDB aggregation" } },
  { score: { $meta: "textScore" } }
).sort({ score: { $meta: "textScore" } });

// Exclude a word using minus sign
db.articles.find({ $text: { $search: "MongoDB -beginner" } });
```
<br>


## 99. How can you integrate _MongoDB_ with third-party applications?

MongoDB integrates with third-party applications through its official drivers, REST APIs, connectors, and MongoDB Atlas's built-in integration features.

### Integration Methods

1. **Official Drivers**: MongoDB provides drivers for over 10 programming languages (Node.js, Python, Java, C#, Go, etc.).

2. **MongoDB Connector for Apache Kafka**: Stream data between MongoDB and Kafka topics in real time.

3. **MongoDB Connector for Apache Spark**: Run distributed analytics on MongoDB data using Spark.

4. **Atlas App Services**: REST APIs, GraphQL endpoints, and Functions for connecting external apps without a driver.

5. **Atlas Data Federation**: Query MongoDB alongside S3, Atlas Data Lake, and HTTP endpoints.

6. **BI Connector**: Connect MongoDB to SQL-based BI tools (Tableau, Power BI) using a SQL interface.

### Code Example: REST API Integration with Atlas App Services

Here is the HTTP request and Node.js fetch example:

```javascript
// MongoDB Atlas App Services provides a REST Data API
// No driver needed - use standard HTTP requests

const fetch = require("node-fetch");

const APP_ID = "your-atlas-app-id";
const API_KEY = "your-api-key";

// Insert a document via REST API
async function insertDocument() {
  const response = await fetch(
    `https://data.mongodb-api.com/app/${APP_ID}/endpoint/data/v1/action/insertOne`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": API_KEY
      },
      body: JSON.stringify({
        dataSource: "Cluster0",
        database: "myDB",
        collection: "users",
        document: { name: "Alice", email: "alice@example.com" }
      })
    }
  );

  const result = await response.json();
  console.log("Inserted ID:", result.insertedId);
}

insertDocument();
```
<br>

## 100. Describe how to synchronize data between SQL databases and MongoDB.

Data synchronization between SQL and MongoDB can be achieved through Change Data Capture (CDC), ETL pipelines, or dual-write patterns to keep both databases in sync in real time or on a schedule.

### Synchronization Strategies

1. **Change Data Capture (CDC)**: Monitor SQL transaction logs to capture inserts, updates, and deletes, then replay them in MongoDB.

2. **ETL Pipelines**: Extract data from SQL, transform the schema (relational → document), and load into MongoDB periodically.

3. **Dual-Write Pattern**: Application writes to both SQL and MongoDB simultaneously on every mutation.

4. **Event-Driven Sync**: Use a message broker (Kafka, RabbitMQ) as the intermediary — SQL changes publish events, MongoDB consumes them.

5. **MongoDB Relational Migrator**: Official tool to migrate and continuously sync from SQL to MongoDB with schema transformation.

### Code Example: Real-Time CDC Sync using Node.js

Here is the full sync pipeline using `mysql2` and the MongoDB driver:

```javascript
const mysql = require("mysql2/promise");
const { MongoClient } = require("mongodb");

const MYSQL_CONFIG = {
  host: "localhost",
  user: "root",
  password: "password",
  database: "sql_db",
};

const MONGO_URI = "mongodb://localhost:27017";
const MONGO_DB = "mongo_db";

// ─── Helpers ────────────────────────────────────────────────────────────────

/**
 * Transforms a flat SQL row into a nested MongoDB document.
 * Example: { user_id, user_name, order_id } → { _id, name, order: { id } }
 */
function transformRowToDocument(row) {
  return {
    _id: row.id.toString(),          // Use SQL primary key as Mongo _id
    name: row.name,
    email: row.email,
    metadata: {
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    },
  };
}

// ─── Initial Full Sync ───────────────────────────────────────────────────────

/**
 * Performs a one-time full sync from MySQL → MongoDB.
 * Use this on first run or after a long disconnect.
 */
async function fullSync(sqlConn, mongoCollection) {
  console.log("Starting full sync...");

  const [rows] = await sqlConn.execute("SELECT * FROM users");

  const bulkOps = rows.map((row) => ({
    replaceOne: {
      filter: { _id: row.id.toString() },
      replacement: transformRowToDocument(row),
      upsert: true,               // Insert if not exists, replace if exists
    },
  }));

  if (bulkOps.length > 0) {
    const result = await mongoCollection.bulkWrite(bulkOps);
    console.log(`Full sync complete: ${result.upsertedCount} upserted, ${result.modifiedCount} modified`);
  } else {
    console.log("No rows found in SQL.");
  }
}

// ─── Incremental CDC Sync ────────────────────────────────────────────────────

/**
 * Polls MySQL for rows changed since `lastSyncedAt` and upserts into MongoDB.
 * Simulates CDC without a log-based tool like Debezium.
 *
 * @param {mysql2.Connection} sqlConn
 * @param {mongodb.Collection} mongoCollection
 * @param {Date} lastSyncedAt - Only sync rows updated after this timestamp
 * @returns {Date} - New high-water mark for the next poll cycle
 */
async function incrementalSync(sqlConn, mongoCollection, lastSyncedAt) {
  const [rows] = await sqlConn.execute(
    "SELECT * FROM users WHERE updated_at > ? ORDER BY updated_at ASC",
    [lastSyncedAt]
  );

  if (rows.length === 0) {
    console.log(`[${new Date().toISOString()}] No changes detected.`);
    return lastSyncedAt;           // Return unchanged watermark
  }

  const bulkOps = rows.map((row) => ({
    replaceOne: {
      filter: { _id: row.id.toString() },
      replacement: transformRowToDocument(row),
      upsert: true,
    },
  }));

  await mongoCollection.bulkWrite(bulkOps);
  console.log(`Synced ${rows.length} changed row(s) from SQL → MongoDB`);

  // Advance watermark to the latest updated_at in this batch
  return rows[rows.length - 1].updated_at;
}

// ─── Handle SQL Deletes ──────────────────────────────────────────────────────

/**
 * Soft-delete sync: marks Mongo documents as deleted when removed from SQL.
 * Requires a `deleted_at` column (soft delete) in the SQL table.
 */
async function syncDeletions(sqlConn, mongoCollection, lastSyncedAt) {
  const [deletedRows] = await sqlConn.execute(
    "SELECT id FROM users WHERE deleted_at > ?",
    [lastSyncedAt]
  );

  if (deletedRows.length === 0) return;

  const ids = deletedRows.map((r) => r.id.toString());
  await mongoCollection.updateMany(
    { _id: { $in: ids } },
    { $set: { deleted: true, deletedAt: new Date() } }  // Soft delete in Mongo
  );

  console.log(`Marked ${ids.length} document(s) as deleted in MongoDB`);
}

// ─── Main Polling Loop ───────────────────────────────────────────────────────

async function startSyncPipeline() {
  const sqlConn = await mysql.createConnection(MYSQL_CONFIG);
  const mongoClient = new MongoClient(MONGO_URI);

  await mongoClient.connect();
  const mongoCollection = mongoClient.db(MONGO_DB).collection("users");

  // Create index on _id for fast upserts (usually exists by default)
  await mongoCollection.createIndex({ "metadata.updatedAt": 1 });

  try {
    // Step 1: Full sync on startup
    await fullSync(sqlConn, mongoCollection);

    // Step 2: Poll for incremental changes every 5 seconds (simulated CDC)
    let lastSyncedAt = new Date(Date.now() - 60_000); // Start 1 min in the past

    setInterval(async () => {
      try {
        lastSyncedAt = await incrementalSync(sqlConn, mongoCollection, lastSyncedAt);
        await syncDeletions(sqlConn, mongoCollection, lastSyncedAt);
      } catch (err) {
        console.error("Sync error:", err.message);
      }
    }, 5000); // Poll every 5 seconds

  } catch (err) {
    console.error("Pipeline startup failed:", err.message);
    await sqlConn.end();
    await mongoClient.close();
  }
}

startSyncPipeline();
```


#### Explore all 100 answers here 👉 [Devinterview.io - MongoDB](https://devinterview.io/questions/web-and-mobile-development/mongodb-interview-questions)

<br>

<a href="https://devinterview.io/questions/web-and-mobile-development/">
<img src="https://firebasestorage.googleapis.com/v0/b/dev-stack-app.appspot.com/o/github-blog-img%2Fweb-and-mobile-development-github-img.jpg?alt=media&token=1b5eeecc-c9fb-49f5-9e03-50cf2e309555" alt="web-and-mobile-development" width="100%">
</a>
</p>
