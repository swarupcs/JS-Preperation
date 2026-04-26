https://github.com/Devinterview-io/sql-interview-questions


# 100 Must-Know SQL Interview Questions in 2026

<div>
<p align="center">
<a href="https://devinterview.io/questions/web-and-mobile-development/">
<img src="https://firebasestorage.googleapis.com/v0/b/dev-stack-app.appspot.com/o/github-blog-img%2Fweb-and-mobile-development-github-img.jpg?alt=media&token=1b5eeecc-c9fb-49f5-9e03-50cf2e309555" alt="web-and-mobile-development" width="100%">
</a>
</p>

#### You can also find all 100 answers here 👉 [Devinterview.io - SQL](https://devinterview.io/questions/web-and-mobile-development/sql-interview-questions)

<br>

## 1. What is _SQL_ and what is it used for?

### **SQL (Structured Query Language)**

**SQL** is the standardized domain-specific, declarative language for managing and querying **Relational Database Management Systems (RDBMS)**. Beyond legacy relational models, modern SQL dialects (e.g., PostgreSQL 18, DuckDB 1.2) now incorporate support for semi-structured data (JSONB) and vector embeddings for **RAG (Retrieval-Augmented Generation)** workflows.

---

### **Core Components**

*   **DDL (Data Definition Language):** Defines schema objects (e.g., `CREATE`, `ALTER`, `DROP`).
*   **DML (Data Manipulation Language):** Manages row-level data (e.g., `INSERT`, `UPDATE`, `DELETE`, `MERGE`).
*   **DCL (Data Control Language):** Manages authorization and security (e.g., `GRANT`, `REVOKE`).
*   **TCL (Transaction Control Language):** Ensures state consistency (e.g., `COMMIT`, `ROLLBACK`, `SAVEPOINT`).
*   **DQL (Data Query Language):** The subset focused on retrieval (e.g., `SELECT`).

---

### **Modern Database Management Tasks**

*   **Data Retrieval:** Complex aggregation and window functions for analytics.
*   **ACID Compliance:** Ensures **Atomicity, Consistency, Isolation, and Durability** in high-concurrency environments.
*   **Vector Search:** 2026 standard databases (e.g., `pgvector`) utilize SQL extensions to perform $k$-nearest neighbor ($k$-NN) searches on high-dimensional vectors, enabling AI-driven semantic similarity queries.
*   **Normalization & Optimization:** Usage of B-Tree, LSM-Tree, and BRIN indices to achieve query complexity of $O(\log n)$ for point lookups.
*   **Distributed Scaling:** Leveraging **Sharding** (horizontal partitioning) and **Replication** (read-replicas) to manage multi-terabyte datasets.

---

### **Essential SQL Commands**

*   **SELECT:** Primary data retrieval; supports **Common Table Expressions (CTEs)** and window functions (`OVER`, `PARTITION BY`).
*   **MERGE:** An upsert operation (INSERT or UPDATE) that minimizes round-trips to the server.
*   **LATERAL JOIN:** Allows subqueries to reference preceding tables in the `FROM` clause, critical for complex analytical transformations.
*   **MATERIALIZED VIEW:** Caches the result of a complex query; refreshes asynchronously for high-performance reporting.

---

### **Code Example: Modern SQL Syntax**

The following example demonstrates modern syntax, including standard **CTEs** and relational constraints.

```sql
-- Schema Definition
CREATE TABLE Department (
    dept_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    dept_name VARCHAR(100) NOT NULL
);

CREATE TABLE Employee (
    emp_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    emp_name VARCHAR(255) NOT NULL,
    dept_id INT REFERENCES Department(dept_id)
);

-- Recursive/Complex Query using CTE
WITH DepartmentStats AS (
    SELECT dept_id, COUNT(*) as emp_count
    FROM Employee
    GROUP BY dept_id
)
SELECT 
    e.emp_name, 
    d.dept_name,
    ds.emp_count
FROM Employee e
JOIN Department d ON e.dept_id = d.dept_id
JOIN DepartmentStats ds ON d.dept_id = ds.dept_id
WHERE ds.emp_count > 0;
```

---

### **2026 Performance Considerations**

1.  **Index Scan vs. Seq Scan:** Query planners choose indices based on cardinality and selectivity to avoid $O(n)$ full table scans.
2.  **Execution Plans:** Use `EXPLAIN ANALYZE` to inspect the query execution tree and identify high-cost nodes.
3.  **Concurrency:** In 2026 architectures, **MVCC (Multi-Version Concurrency Control)** is standard to ensure that readers do not block writers, maximizing throughput.
<br>

## 2. Describe the difference between _SQL_ and _NoSQL_ databases.

### Architectural Distinctions: SQL vs. NoSQL (2026 Audit)

The dichotomy between Relational Database Management Systems (**RDBMS/SQL**) and Non-Relational (**NoSQL**) systems has matured into a hybrid landscape. While fundamental constraints remain, modern distributed systems have blurred the lines via multi-model support.

### Fundamental Divergence

*   **SQL (Relational)**: Built on the Relational Model (Codd, 1970). Data is organized in tables with rigid schemas. Optimized for **ACID** compliance and complex relational algebra.
*   **NoSQL (Non-Relational)**: Optimized for horizontal scaling, high throughput, and varied data structures. Architecture typically follows the **CAP Theorem** (Consistency, Availability, Partition Tolerance), often favoring AP (Availability/Partition Tolerance) and **Eventual Consistency**.

### 2026 Paradigm Shifts

*   **Hybridization**: Modern RDBMS (e.g., PostgreSQL 18+) now natively support JSONB, enabling semi-structured data handling within ACID-compliant environments. Conversely, many NoSQL stores (e.g., MongoDB 8.0+) now support multi-document **ACID transactions**.
*   **Scalability**: SQL is no longer strictly "vertical." Distributed SQL engines (e.g., CockroachDB, TiDB, YugabyteDB) bring horizontal sharding and global replication to the SQL standard, rendering the "SQL=Vertical/NoSQL=Horizontal" heuristic increasingly legacy.

### Taxonomy of NoSQL Implementations

#### Document Stores
*   **Mechanism**: Stores data as BSON/JSON binary documents.
*   **2026 Context**: Integration of vector search capabilities (e.g., MongoDB Atlas Vector Search) for **RAG** (Retrieval-Augmented Generation) workflows.

#### Key-Value Stores
*   **Mechanism**: Partitioned hash tables.
*   **Use Case**: Sub-millisecond latency for session management, caching, and feature stores in ML pipelines. 
*   **Performance**: $O(1)$ lookup complexity.

#### Wide-Column Stores
*   **Mechanism**: Sparse, multidimensional sorted maps.
*   **Architecture**: Optimized for write-heavy workloads and time-series data at exabyte scale.

#### Graph Databases
*   **Mechanism**: Index-free adjacency (nodes and edges).
*   **2026 Context**: Critical for **Knowledge Graph** construction and complex relationship inference in LLM orchestration.

### Technical Comparison Matrix

| Feature | SQL (Modernized) | NoSQL |
| :--- | :--- | :--- |
| **Schema** | Schema-on-write | Schema-on-read |
| **Integrity** | Enforcement via constraints/FKs | Application-layer validation |
| **Joins** | Efficient via relational algebra | Often discouraged/denormalized |
| **Scaling** | Vertical/Distributed SQL (Horizontal) | Native Horizontal (Sharding) |
| **Querying** | Declarative (SQL Standard) | Proprietary API / GraphQL / SQL-like |

### Data Modeling & Integrity

*   **Normalization vs. Denormalization**: In 2026, storage is cheap, but compute and network latency are not. SQL still defaults to 3NF (Third Normal Form) to eliminate update anomalies. NoSQL favors **denormalization** to ensure that a single request can retrieve all required data, avoiding expensive cross-node joins (which carry $O(log N)$ to $O(N)$ overhead depending on indexing).
*   **ACID Compliance**: The traditional view that NoSQL sacrifices ACID is outdated. Most enterprise-grade NoSQL solutions now provide tunable consistency, allowing developers to opt-in to strong consistency at the cost of latency.

### Transactional & Consistency Models

*   **SQL**: Employs **Two-Phase Commit (2PC)** or **Paxos/Raft** protocols in distributed versions to guarantee serializability.
*   **NoSQL**: Leverages **Vector Clocks** or **Last-Write-Wins (LWW)** conflict resolution in AP systems. Engineers must explicitly manage idempotency at the application level when eventual consistency is utilized.

### Architectural Recommendation (2026)
Select **SQL** when data integrity, complex transactional reporting, and strict schema enforcement are paramount. Select **NoSQL** for high-velocity streaming data, sparse datasets (e.g., IoT logs), or when the schema must evolve iteratively without database-level downtime. Consider **Distributed SQL** if the project requires the familiarity of SQL with the elastic scalability of NoSQL.
<br>

## 3. What are the different types of _SQL commands_?

### SQL Command Classification (2026 Audit)

Modern SQL classification includes a fifth critical category: **Transaction Control Language (TCL)**, which handles atomic state transitions. **DQL** is now standardly recognized as a subset of **DML** in formal SQL:2023/2025 specifications, though categorized separately for pedagogical clarity.

### Data Query Language (DQL)

Focused on data retrieval. Modern analytical engines prioritize set-based operations and window functions.

#### Keywords and Operations:
- **SELECT**: Projects data from relations.
- **FROM**: Identifies data sources (Tables, CTEs, Subqueries).
- **WHERE**: Boolean filtering predicates.
- **GROUP BY**: Aggregation grouping.
- **HAVING**: Post-aggregation filtering.
- **WINDOW FUNCTIONS**: (e.g., `OVER()`, `PARTITION BY`) perform calculations across related rows.
- **JOIN**: Relational algebra combining datasets ($Inner, Left, Right, Full, Cross$).
- **CTE (WITH)**: Recursive or non-recursive temporary result sets for improved query readability and modularity.

### Data Definition Language (DDL)

Manages schema evolution and metadata persistence.

#### Keywords and Operations:
- **CREATE**: Defines schemas, tables, indexes, or stored procedures.
- **ALTER**: Modifies structural definitions (e.g., `ADD COLUMN`, `RENAME TO`, `SET DATA TYPE`).
- **DROP**: Removes schema objects.
- **TRUNCATE**: Resets table state (DML-like impact, DDL-metadata overhead).
- **COMMENT**: Annotates objects for documentation as code (IaC) compliance.

### Data Manipulation Language (DML)

Handles row-level operations. 2026 standards emphasize "Upsert" patterns and atomic modifications.

#### Keywords and Operations:
- **INSERT**: Populates rows. Includes `ON CONFLICT` (PostgreSQL) or `MERGE` (SQL Standard) for idempotent data ingestion.
- **UPDATE**: Modifies existing row state.
- **DELETE**: Removes rows.
- **MERGE**: Synchronizes source and target tables; the preferred 2026 standard for ETL/ELT pipelines to maintain $O(n)$ complexity during synchronization.

### Transaction Control Language (TCL)

Governs the state of transactions to ensure **ACID** properties.

#### Keywords and Operations:
- **COMMIT**: Persists all changes within a transaction to disk.
- **ROLLBACK**: Reverts state to the last checkpoint upon failure.
- **SAVEPOINT**: Defines checkpoints within a transaction, enabling partial rollback ($O(1)$ state revert).

### Data Control Language (DCL)

Governs security and governance via **RBAC** (Role-Based Access Control).

#### Keywords and Operations:
- **GRANT**: Assigns specific privileges (`SELECT`, `INSERT`, `EXECUTE`) to users/roles.
- **REVOKE**: Removes previously assigned privileges.
- **DENY**: Explicitly restricts access, overriding implicit permissions (provider-specific, e.g., T-SQL).
<br>

## 4. Explain the purpose of the _SELECT_ statement.

### The SQL SELECT Statement (2026 Audit)

The **SELECT** statement is the primary Data Query Language (DQL) construct in SQL, designed for retrieving, projecting, and transforming data from relational structures. In modern architectures, it serves as the interface between storage engines and application layers, supporting complex analytical processing and vector-relational hybrid queries.

### Logical Order of Execution

The **SELECT** statement is evaluated by the database engine in a specific logical sequence, distinct from the written syntax order:

1. **FROM / JOIN**: Determines the source data set.
2. **WHERE**: Applies predicate filtering.
3. **GROUP BY**: Partitions the data into summary sets.
4. **HAVING**: Filters aggregated result sets.
5. **SELECT**: Evaluates expressions and projects columns.
6. **DISTINCT**: Removes duplicate rows.
7. **ORDER BY**: Defines the final presentation sequence.
8. **LIMIT / OFFSET**: Constrains the final result set volume.

### Evolution and 2026 Standards

Modern SQL engines (e.g., PostgreSQL 18, DuckDB 1.2) extend traditional **SELECT** capabilities to support **JSONB** traversal, **Vector embeddings** (via extensions like `pgvector`), and **Window Functions**.

- **Vector Proximity Search**: Modern **SELECT** statements now frequently involve distance functions (e.g., `<=>` for Cosine distance) to query high-dimensional embeddings:
  `SELECT content FROM docs ORDER BY embedding <=> '[...]' LIMIT 5;`
- **CTEs (Common Table Expressions)**: The `WITH` clause is now standard for improving query readability and recursion over subqueries.
- **Window Functions**: Replacing many traditional self-joins with `OVER (PARTITION BY ...)` for performant ranking and running totals at $O(n \log n)$ complexity.

### Practical Applications

- **Relational Integrity Exploration**: Validating constraints across normalized schemas.
- **Complex Transformation**: Utilizing `CASE` statements or `COALESCE` for business logic injection.
- **Analytical Processing (OLAP)**: Leveraging window functions to perform time-series analysis without destructive row grouping.
- **Integration**: Providing structured outputs (often `JSON_AGG`) directly for REST or GraphQL API consumers.

### Refined Query Example (2026 Standard)

Using modern syntax, including standard **JOIN** formatting and a **CTE** for improved readability:

```sql
WITH OrderSummary AS (
    SELECT 
        o.OrderID,
        o.OrderDate,
        c.CustomerName,
        e.LastName AS SalesRep,
        SUM(od.UnitPrice * od.Quantity) AS TotalValue
    FROM Orders o
    JOIN Customers c ON o.CustomerID = c.CustomerID
    JOIN Employees e ON o.EmployeeID = e.EmployeeID
    JOIN OrderDetails od ON o.OrderID = od.OrderID
    GROUP BY 1, 2, 3, 4
)
SELECT * 
FROM OrderSummary
WHERE TotalValue > 1000
ORDER BY OrderDate DESC
LIMIT 100;
```

### Complexity Note
The execution cost of a `SELECT` query typically scales $O(n)$ with full table scans or $O(\log n)$ when utilizing B-Tree or GIN indices. In 2026, developers are expected to analyze query plans using `EXPLAIN ANALYZE` to ensure that join strategies (Nested Loop vs. Hash Join) are optimized for the data distribution.
<br>

## 5. What is the difference between _WHERE_ and _HAVING_ clauses?

### WHERE vs. HAVING: Architectural Distinction

The fundamental difference lies in the **logical order of operations** within the SQL execution pipeline. While both clauses filter rows, they function at distinct stages of the query lifecycle.

#### WHERE Clause: Row-Level Predicate
The `WHERE` clause acts as a pre-aggregation filter. It evaluates conditions against individual rows before any `GROUP BY` operation occurs. 

*   **Execution Order:** Applied immediately after the `FROM`/`JOIN` phase.
*   **Performance:** Highly efficient when used with **SARGable** (Search ARGumentable) expressions. Indexing columns referenced in a `WHERE` clause allows for $O(\log n)$ lookup performance via B-tree index traversal.
*   **Restrictions:** Cannot reference aggregate functions (e.g., `SUM()`, `AVG()`) because the aggregation state has not yet been computed.

#### HAVING Clause: Group-Level Predicate
The `HAVING` clause serves as a post-aggregation filter. It evaluates conditions against the resulting sets generated by a `GROUP BY` clause.

*   **Execution Order:** Applied after the `GROUP BY` phase and before the `SELECT` projection.
*   **Performance:** Higher computational cost as it operates on the filtered set after data has been aggregated into buckets. It generally forces a full scan or a sort of the intermediate result set, typically $O(n \log n)$ complexity.
*   **Capabilities:** Designed to filter based on aggregate results (e.g., `HAVING COUNT(*) > 100`).

### Execution Pipeline Summary

The logical processing order in modern RDBMS (PostgreSQL 17+, SQL Server 2026) follows this sequence:

1.  `FROM` / `JOIN`
2.  `WHERE` (Row Filtering)
3.  `GROUP BY` (Aggregation)
4.  `HAVING` (Group Filtering)
5.  `SELECT` (Projection)
6.  `ORDER BY` (Sorting)

**Note:** In modern analytical query optimization, if a `HAVING` clause contains no aggregates, most optimizers will rewrite it to a `WHERE` clause internally to benefit from indexing, though writing explicit `WHERE` clauses remains the standard for query readability and intent.
<br>

## 6. Define what a _JOIN_ is in SQL and list its types.

### SQL JOIN Architecture and Taxonomy (2026 Standards)

A **JOIN** clause in SQL is a relational operator used to combine rows from two or more tables based on a join predicate. Conceptually, JOINs implement the relational algebra **Join** operation. While foreign keys define referential integrity, joins operate on any expression satisfying the join predicate.

#### Complexity Analysis
Given two tables $T_1$ and $T_2$ with $n$ and $m$ rows, the time complexity for a standard **Nested Loop Join** is $O(n \times m)$. Modern query optimizers prefer **Hash Joins** or **Sort-Merge Joins**, which operate in $O(n+m)$ average time, depending on index availability and memory allocation for hash buffers.

---

### Classification of JOIN Types

1.  **INNER JOIN**: Returns only rows where the join predicate evaluates to `TRUE`.
2.  **OUTER JOIN**: Returns all rows from the specified table(s) plus matching rows.
    *   **LEFT JOIN**: Preserves all rows from the left table.
    *   **RIGHT JOIN**: Preserves all rows from the right table.
    *   **FULL JOIN**: Preserves all rows from both tables, filling non-matches with `NULL`.
3.  **CROSS JOIN**: Produces the **Cartesian Product** of two tables. Complexity: $O(n \times m)$.
4.  **SELF JOIN**: A standard join where a table is joined with itself using table aliases.

---

### Implementation Details & Corrective Refinements

#### Inner Join
The predicate evaluates equality or inequality. Use `INNER` keyword explicitly for semantic clarity.

```sql
SELECT T1.A, T1.B, T2.C
FROM Table1 AS T1
INNER JOIN Table2 AS T2 ON T1.B = T2.B;
```

#### Outer Joins: Null-Handling
When using `FULL JOIN`, use `COALESCE()` or `IFNULL()` to normalize result sets if the join keys differ.

```sql
SELECT COALESCE(T1.B, T2.B) AS B, T1.A, T2.C
FROM Table1 AS T1
FULL JOIN Table2 AS T2 ON T1.B = T2.B;
```

#### Self Join: Hierarchical Resolution
Self joins are frequently used in Recursive Common Table Expressions (CTEs) for recursive hierarchy traversals (e.g., organizational charts).

**Modern Pattern (Recursive CTE):**
```sql
WITH RECURSIVE Hierarchy AS (
    SELECT EmpID, Name, ManagerID FROM Employee WHERE ManagerID IS NULL
    UNION ALL
    SELECT E.EmpID, E.Name, E.ManagerID
    FROM Employee E
    INNER JOIN Hierarchy H ON E.ManagerID = H.EmpID
)
SELECT * FROM Hierarchy;
```

---

### 2026 Audit Notes
*   **Performance**: Avoid `SELECT *` in joins. Explicitly list columns to reduce I/O overhead and minimize the risk of schema drift.
*   **Optimizer Hints**: In distributed SQL environments (e.g., CockroachDB, AlloyDB), consider hash distribution hints to minimize data shuffling during large joins.
*   **Semantic Note**: The original content's "Self Join" example incorrectly labeled the manager names. In practice, a self-join to retrieve human-readable manager names would be:
    ```sql
    SELECT E.Name AS Employee, M.Name AS Manager
    FROM Employee E
    LEFT JOIN Employee M ON E.ManagerID = M.EmpID;
    ```
    *This creates a semantic link between the `ManagerID` column of the primary alias and the `EmpID` of the secondary alias.*
<br>

## 7. What is a _primary key_ in a database?

### Definition: Primary Key (PK)

A **Primary Key** is a constraint that uniquely identifies each tuple (record) within a relation (table). It serves as the immutable anchor for **Entity Integrity**.

### Key Characteristics

- **Uniqueness**: The database engine enforces a `UNIQUE` constraint, ensuring no two rows share the same key value.
- **Non-Nullity**: The column must be `NOT NULL`. Absence of value is logically incompatible with identification.
- **Immutability**: Once assigned, the PK value should not change. Updates to PKs trigger cascading updates across dependent indexes and foreign key relationships, incurring significant $O(n)$ overhead.

### Data Integrity & Structural Role

- **Entity Identity**: Enforces that the row represents a single, distinct real-world object.
- **Relational Anchoring**: Acts as the target for **Foreign Keys (FK)**, forming the backbone of normalized relational schema design.
- **Clustered Indexing**: In most RDBMS (PostgreSQL, SQL Server, MySQL/InnoDB), the PK is the default key for the **Clustered Index**, physically ordering data on disk.

### Performance & Scaling Considerations

- **Indexing Density**: Since the PK dictates physical storage in clustered indexes, using narrow data types (e.g., `BIGINT` or `UUIDv7`) minimizes index fragmentation and I/O latency.
- **Join Optimization**: Highly performant joins rely on PK-FK alignment. Query optimizers use PK statistics to estimate cardinality, which is critical for choosing efficient join algorithms (e.g., Hash Join vs. Merge Join).
- **UUIDs vs. Sequences**: While integers are performant for small-scale systems, distributed systems in 2026 prefer **UUIDv7** (time-ordered) to avoid B-Tree page splits and contention common with monotonic integer sequences.

### Industry Best Practices (2026 Standards)

- **Prefer Surrogate Keys**: Avoid "Natural Keys" (e.g., Email, SSN). Business rules evolve; `student_email` may change, breaking references. Use synthetic identifiers (e.g., `BIGINT IDENTITY` or `UUIDv7`).
- **UUIDv7 Adoption**: Move away from random `UUIDv4` to `UUIDv7`. The monotonic timestamp prefix ensures index-friendly insertion patterns, mitigating the $O(\log n)$ rebalancing costs of random inserts.
- **Minimize Width**: Keep keys as small as possible to minimize memory usage in the **Buffer Pool** and index pages.
- **Composite Keys**: Use only if the relationship is inherently many-to-many or polymorphic. Ensure the leading column is the most frequently filtered attribute.

### Code Example: 2026 Best Practice

Using `BIGINT` with an identity sequence for high-performance single-node databases, or `UUID` for distributed environments.

```sql
-- Standard sequence-based PK (High Performance)
CREATE TABLE Students (
    student_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    student_uuid UUID DEFAULT gen_random_uuid(), -- For distributed systems
    grade_level INT NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Optimization: Adding a covering index for lookup on the UUID
CREATE UNIQUE INDEX idx_students_uuid ON Students(student_uuid);
```
<br>

## 8. Explain what a _foreign key_ is and how it is used.

### Definition of a Foreign Key
A **Foreign Key (FK)** is a database constraint that enforces **referential integrity** between two tables. It identifies a column (or set of columns) in a referencing table (the **child**) that links to the primary or unique key of a referenced table (the **parent**).

### Key Functions
*   **Referential Integrity**: Guarantees that every value in the FK column must either match an existing value in the parent table's primary key or be `NULL` (unless defined as `NOT NULL`).
*   **Logical Relationship Mapping**: Establishes the structural foundation for relational algebra, enabling efficient `JOIN` operations.
*   **Declarative Referential Integrity (DRI)**: Offloads consistency management from the application layer to the database engine, reducing the risk of orphaned records.
*   **Lifecycle Management**: Automates consistency via `ON DELETE` and `ON UPDATE` triggers (e.g., `CASCADE`, `SET NULL`, `RESTRICT`).

### Correcting Constraints (2026 Audit)
*   **Referential Consistency**: The foreign key must match the **Primary Key** or a **Unique Key** of the parent table. 
*   **Nullability**: FK columns allow `NULL` by default. If the business logic mandates a mandatory relationship, the FK column must be constrained with `NOT NULL`.
*   **Performance Note**: In modern RDBMS (e.g., PostgreSQL 18+, SQL Server 2026), foreign key columns are not automatically indexed. To prevent full table scans during `JOIN` operations and `ON DELETE CASCADE` checks, explicit **B-tree indexes** are required on FK columns where query frequency is high. 
    *   *Complexity:* Verification of an FK constraint during DML operations is $O(\log n)$ per operation given an indexed parent key.

### Use Cases and Best Practices
*   **Normalization**: Essential for adhering to 3rd Normal Form (3NF), minimizing redundancy by splitting data into related tables.
*   **Enforcement of Business Rules**: Use `ON DELETE RESTRICT` to prevent the deletion of a parent record if child records exist, ensuring business-critical data is not accidentally purged.
*   **Distributed Systems**: In distributed SQL architectures (e.g., CockroachDB, YugabyteDB), minimize cross-node FK constraints where possible to reduce latency overhead during transactional commits.

### Implementation: Standard SQL (2026)

```sql
-- Parent Table
CREATE TABLE departments (
    department_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- Child Table with explicit constraint naming for better error handling
CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    department_id INT,
    CONSTRAINT fk_department
        FOREIGN KEY (department_id) 
        REFERENCES departments(department_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE
);

-- Optimization: Explicit index on the FK column to optimize JOIN performance
CREATE INDEX idx_employees_department_id ON employees(department_id);
```

### 2026 Technical Note: "Uniqueness" Clarification
The original text incorrectly stated that the foreign key itself must be unique. **Correction**: The foreign key column in the **child** table does not need to be unique (as in a 'One-to-Many' relationship, many children reference one parent). It is the **referenced key** in the **parent** table that must be unique.
<br>

## 9. How can you prevent _SQL injections_?

### Modernized SQL Injection (SQLi) Defense Strategies (2026)

**SQL Injection (SQLi)** occurs when an application improperly neutralizes user-supplied input, allowing an attacker to interfere with query logic. Defense relies on the principle of **separation of data from code**.

---

### 1. Parameterized Queries (Prepared Statements)
**Description**: The industry-standard primary defense. The SQL query structure is sent to the database engine first, and user inputs are sent later as bound parameters. The database driver ensures inputs are treated strictly as data, never as executable code, reducing the risk to $O(1)$ complexity regarding query logic manipulation.

- **Python (SQLAlchemy 2.0 / `psycopg3`) Example**:
```python
# Using modern Pythonic ORM practices
from sqlalchemy import text
stmt = text("SELECT * FROM users WHERE username = :u AND password = :p")
result = session.execute(stmt, {"u": username, "p": password})
```

- **Benefits**:
  - Eliminates the category of "In-band" SQLi.
  - Improves performance via **query execution plan caching**.

---

### 2. Secure Stored Procedures
**Description**: Stored procedures isolate data access logic. However, they only prevent SQLi if the procedure body itself uses parameterized logic. Constructing strings dynamically *inside* a procedure remains vulnerable.

- **Implementation Note**: In 2026, favor **Application-Level ORMs** (e.g., Prisma, SQLAlchemy, or Entity Framework) over Stored Procedures for business logic to maintain **Type Safety** and database portability.

---

### 3. Strict Input Validation (Allow-listing)
**Description**: Validate input against a defined schema. In 2026, utilize **Pydantic (Python)** or **Zod (TypeScript/Node.js)** for runtime type checking and constraint enforcement.

- **Example (Pydantic v2.10+)**:
```python
from pydantic import BaseModel, StringConstraints
from typing import Annotated

class UserLogin(BaseModel):
    # Enforce strict regex at the boundary
    username: Annotated[str, StringConstraints(pattern=r'^[a-zA-Z0-9_]{3,20}$')]
```

- **Benefits**:
  - Provides "Defense in Depth."
  - Catches malicious payloads before they hit the database layer.

---

### 4. Principle of Least Privilege (PoLP)
**Description**: A critical 2026 infrastructure requirement. The database user account assigned to the web application should possess only the minimum permissions necessary.

- **Requirements**:
  - The application account should **never** run as `db_owner` or `superuser`.
  - Use **Role-Based Access Control (RBAC)** to restrict access to sensitive tables (e.g., `audit_logs` or `sys_users`).
  - Drop permissions for `DROP`, `TRUNCATE`, or `GRANT` operations.

---

### 5. ORM Security vs. Code Filtering
**Deprecated/Caution**: Manual **Code Filtering** (sanitization/escaping via regex) is now considered an anti-pattern. It is error-prone, difficult to maintain, and often bypassable via encoding tricks (e.g., Unicode normalization).

- **2026 Standard**: Utilize modern **Object-Relational Mappers (ORMs)**. High-quality ORMs default to parameterized queries and provide an abstraction layer that makes it difficult to accidentally write raw, insecure SQL. If custom raw queries are necessary, use strictly enforced parameter binding APIs only.
<br>

## 10. What is _normalization_? Explain with examples.

### Normalization: 2026 Architectural Audit

**Normalization** is a database design process that minimizes data redundancy and eliminates insertion, update, and deletion anomalies by organizing columns and tables according to functional dependencies. 

#### Core Normal Forms

*   **1NF (Atomic):** Every attribute contains only atomic values; no sets or arrays.
*   **2NF (No Partial Dependency):** Table must be in 1NF and every non-prime attribute must be **fully functionally dependent** on the primary key.
*   **3NF (No Transitive Dependency):** Table must be in 2NF and no non-prime attribute is dependent on another non-prime attribute.
*   **BCNF (Boyce-Codd):** A stricter version of 3NF where for every functional dependency $X \to Y$, $X$ must be a superkey.
*   **4NF (No Multi-valued Dependencies):** Table must be in BCNF and contain no non-trivial multi-valued dependencies.

---

### Normalization in Action: Case Study

#### Unnormalized Table (0NF)
Storing data in a single flat structure forces **denormalization**, leading to $O(N \cdot M)$ redundancy where $N$ is customers and $M$ is line items. 

| ID | Name | Invoice No. | Item No. | Description | Price |
|----|------|-------------|----------|-------------|-------|

#### First Normal Form (1NF)
Enforces atomicity and uniqueness. We identify the **composite key** `(InvoiceNo, ItemNo)`.

*   **Customers:** `(ID [PK], Name)`
*   **Invoices:** `(InvoiceNo [PK], Customer_ID [FK], Date)`
*   **Invoice_Items:** `(InvoiceNo [FK], ItemNo [PK], Description, Price)`

#### Second Normal Form (2NF)
If we stored `ItemDescription` in the `Invoice_Items` table, it would depend only on `ItemNo`, not the full PK `(InvoiceNo, ItemNo)`. To reach 2NF, we move `Description` to a **Products** catalog table.

#### Third Normal Form (3NF)
We ensure no non-prime attribute depends on another. If `Invoice` table included `Customer_Address`, that would be a **transitive dependency** (`InvoiceNo -> Customer_ID -> Customer_Address`). We move address data exclusively to the `Customers` table.

---

### Practical Implications & 2026 Context

*   **OLTP vs. OLAP:** While 3NF remains the gold standard for **OLTP** (Online Transaction Processing) to ensure ACID compliance, modern **OLAP** (Online Analytical Processing) systems—such as those utilizing **Snowflake** or **Databricks**—often utilize **Star Schema** or **Data Vault** modeling. These patterns intentionally introduce redundancy to optimize analytical query latency via reduced join depth.
*   **Performance:** Normalization increases join complexity. In high-scale distributed systems, consider the cost of distributed joins ($O(\text{network latency})$) against the risk of anomalies.

---

### 2026 Implementation (SQL:2023 Standard)

Using standardized constraints to enforce integrity:

```sql
-- Core Entity: Products (Normalization prevents update anomalies)
CREATE TABLE Products (
    ProductID INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    Description TEXT NOT NULL,
    UnitPrice DECIMAL(12, 2) CHECK (UnitPrice >= 0)
);

-- Normalized Relationship Tables
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    CustomerName VARCHAR(255) NOT NULL
);

CREATE TABLE Invoices (
    InvoiceNo INT PRIMARY KEY,
    CustomerID INT NOT NULL REFERENCES Customers(CustomerID),
    InvoiceDate TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Invoice_Items (
    InvoiceNo INT REFERENCES Invoices(InvoiceNo),
    ProductID INT REFERENCES Products(ProductID),
    Quantity INT CHECK (Quantity > 0),
    PRIMARY KEY (InvoiceNo, ProductID)
);
```

**Audit Note:** The implementation above utilizes `TIMESTAMPTZ` and `GENERATED ALWAYS AS IDENTITY`, aligning with modern RDBMS capabilities (PostgreSQL 17+, SQL Server 2025) for superior concurrency and type safety.
<br>

## 11. Describe the concept of _denormalization_ and when you would use it.

### Denormalization in Modern RDBMS and Data Architecture

**Denormalization** is the intentional introduction of redundancy into a schema to optimize **Read-Latency** and reduce computational overhead for complex join operations. In 2026, this remains a critical architectural pattern, particularly when balancing the $O(n \log n)$ cost of joins against the $O(1)$ cost of direct column access.

### Refined Techniques

1. **Flattening Relationships**:
   - Consolidating tables to avoid $N$-way joins. In distributed architectures, this minimizes **cross-node communication overhead** (network I/O), which often exceeds local CPU costs.
2. **Pre-aggregation and Materialized Views**:
   - Moving from runtime `SUM()` or `COUNT()` calculations to precomputed columns or **Materialized Views**. Modern RDBMS (e.g., PostgreSQL 18+, SQL Server 2026) support automated concurrent refresh, mitigating traditional staleness issues.
3. **Redundant Attribute Replication**:
   - Storing frequently accessed dimension attributes (e.g., `Customer_Region`) directly in the fact table. This creates a "Star Schema" optimized for **OLAP (Online Analytical Processing)** workloads.

### 2026 Use Cases and Contextual Application

*   **OLAP vs. OLTP**:
    *   **OLTP (Transactional)**: Maintain **3NF (Third Normal Form)** to ensure ACID compliance and prevent update anomalies.
    *   **OLAP (Analytical)**: Adopt **Star/Snowflake Schemas**. Denormalization here is standard practice to support BI tools and vector-search-enabled databases.
*   **High-Volume Distributed Systems**:
    *   In systems utilizing **sharded architectures**, data is denormalized to ensure that queries satisfy the "Locality Principle"—retrieving all required fields from a single shard without cross-shard `JOIN` operations.
*   **Vector Search Integration**:
    *   Modern SQL engines now store embeddings alongside business metadata. Denormalizing metadata into the table containing vectors allows for combined **semantic and relational filtering** in a single scan.

### Considerations and Architectural Trade-offs

*   **Consistency Protocols**:
    *   Denormalization shifts the burden of **Referential Integrity** from the database engine to the application layer. Implementation requires **Idempotent Background Jobs** or **Change Data Capture (CDC)** pipelines (e.g., Debezium) to ensure eventual consistency across redundant fields.
*   **Write Amplification**:
    *   Every update to a source record may now trigger multiple `UPDATE` statements across denormalized replicas. Engineers must calculate the **Write Amplification Factor (WAF)**:
    $$WAF = \frac{\text{Total writes to storage}}{\text{App-level writes}}$$
    If $WAF > \text{threshold}$, normalization should be re-evaluated.
*   **Schema Evolution**:
    *   Denormalized structures are notoriously fragile. Use **Schema Registry** services (e.g., Confluent or internal equivalents) to manage versions, as changing a replicated column requires a multi-table migration strategy.

### Modern Verdict
Denormalization is a **read-optimization strategy**, not a design default. In 2026, favor **Normalization** for transactional integrity, and utilize **Materialized Views or Read Replicas** for denormalized query performance. Reserve physical denormalization only when profiling indicates that query execution plans are constrained by join depth rather than I/O throughput.
<br>

## 12. What are _indexes_ and how can they improve query performance?

### Technical Audit: SQL Indexing (2026 Edition)

**Indexes** are auxiliary data structures that decouple physical data storage from logical retrieval patterns. By maintaining a pointer-based reference system, they reduce the search space from $O(n)$ (full table scan) to $O(\log n)$ (tree-based traversal) or $O(1)$ (hash-based lookup).

### Mechanism of Performance Gains

*   **Logarithmic Complexity**: Using balanced tree structures, the engine navigates a height-constrained path to locate specific row identifiers (RIDs) or clustered keys.
*   **Disk I/O Optimization**: Indexes permit **Index-Only Scans**, allowing the database to satisfy a query directly from the index tree without fetching the full data page from secondary storage.
*   **Join Optimization**: Indexes on foreign keys and join predicates allow the engine to employ **Merge Joins** or **Hash Joins** more effectively, preventing expensive nested-loop operations on large datasets.
*   **Covering Indexes**: By including additional columns in an index leaf node (`INCLUDE` clause), the engine avoids the "bookmark lookup" penalty, keeping the entire query lifecycle within the index structure.

### Modern Index Taxonomy

*   **B+Tree**: The industry standard for range-based queries. In 2026, most engines utilize **B+Trees** where internal nodes store keys and leaf nodes store pointers or data, ensuring predictable $O(\log n)$ performance.
*   **LSM-Trees (Log-Structured Merge-Trees)**: Increasingly prevalent in distributed databases and NoSQL-to-SQL hybrid engines (e.g., RocksDB-based backends). Optimized for write-heavy workloads by buffering updates in memory.
*   **In-Memory Hash Indexes**: Optimized for $O(1)$ point lookups in high-concurrency, volatile memory tables.
*   **BRIN (Block Range Indexes)**: The 2026 standard for massive datasets (e.g., time-series data); they store the minimum/maximum values per page range, providing massive footprint reduction compared to B-Trees.
*   **GIN/GiST (Generalized Inverted/Search Trees)**: Standard for full-text search, JSONB documents, and multidimensional spatial data.

### Architectural Constraints & Trade-offs

*   **Write Amplification**: Every `INSERT`, `UPDATE`, or `DELETE` requires updating the index structure. An excessive index count increases the **Write Penalty** ($O(k \cdot \log n)$ where $k$ is the number of indexes).
*   **Storage Overhead**: Indexes consume primary storage. **Index Fragmentation** can lead to "bloat," necessitating periodic `REINDEX` or `VACUUM` operations to maintain optimal fill factors.
*   **Optimizer Limitations**: The query optimizer may ignore an index if the **Selectivity** (the ratio of distinct values to total rows) is low, defaulting to a sequential scan if the estimated cost of random disk I/O exceeds sequential I/O.

### 2026 Best Practices

1.  **Selectivity Analysis**: Only index columns with high cardinality. Use `EXPLAIN ANALYZE` or `EXPLAIN (FORMAT JSON)` to audit cost-to-performance ratios.
2.  **Partial Indexing**: Utilize **Filtered/Partial Indexes** (e.g., `CREATE INDEX ... WHERE active = true`) to significantly reduce index size and maintenance overhead.
3.  **Composite Index Ordering**: Follow the **Left-Prefix Rule**. In a composite index `(a, b)`, the index is only usable for filters on `a` or `(a, b)`, but not `b` alone.
4.  **Covering Indexes**: Use `INCLUDE` columns to store non-indexed data in leaf nodes, satisfying common queries entirely within the index.
5.  **Automated Statistics**: Ensure the database's `ANALYZE` daemon (autovacuum/auto-stats) is configured to prevent the optimizer from making stale decisions based on outdated distribution statistics.

### Keys vs. Indexes
*   **Primary/Unique Keys**: These enforce logical constraints and *automatically* create a backing index.
*   **Foreign Keys**: These do not automatically create an index in many RDBMS; **explicit manual indexing** on foreign keys is a critical performance requirement for join-heavy schemas.
<br>

## 13. Explain the purpose of the _GROUP BY_ clause.

### Purpose of the `GROUP BY` Clause

The `GROUP BY` clause in SQL is a fundamental relational operation used to partition a result set into summary rows based on the values of one or more columns. It acts as a mandatory precursor for vector-based aggregate functions.

### Key Functions

- **Data Aggregation**: Transforms multiple input rows into a single output row per group.
- **Dimensional Analysis**: Enables multi-dimensional reporting by grouping across hierarchies (e.g., `Region`, `Product`).
- **Post-Aggregation Filtering**: Facilitates group-level predicate logic via the `HAVING` clause, distinct from row-level filtering (`WHERE`).

### Usage and Syntax Patterns

Consider a `Sales` table with columns: `Product`, `Region`, and `Amount`.

#### Data Aggregation
The engine collapses non-aggregated columns into the grouping set.

```sql
-- Standard aggregation for regional metrics
SELECT Region, SUM(Amount) AS TotalSales
FROM Sales
GROUP BY Region;
```

#### Filtering (Row-level vs. Group-level)
The `WHERE` clause filters data *before* aggregation, whereas the `HAVING` clause filters result sets *after* aggregation.

```sql
-- Filtering records > 100 before grouping, then excluding regions with low volume
SELECT Region, COUNT(*) AS HighValueTransactions
FROM Sales
WHERE Amount > 100
GROUP BY Region
HAVING COUNT(*) > 50;
```

#### Window Functions vs. Grouping
For relative contributions, 2026 industry standards favor **Window Functions** over subqueries for performance efficiency ($O(n \log n)$ vs $O(n^2)$ complexity).

```sql
-- Optimized relative contribution using Analytic Window Functions
SELECT Region, Product, 
       SUM(Amount) / SUM(SUM(Amount)) OVER(PARTITION BY Region) AS RelativeContribution
FROM Sales
GROUP BY Region, Product;
```

### Performance and Architectural Considerations

- **Indexing**: `GROUP BY` operations typically trigger internal sort or hash-aggregate operations. Indexing the grouping columns significantly reduces the cost of the `Sort` phase.
- **Hash vs. Stream Aggregation**: Modern Query Optimizers (e.g., PostgreSQL 18+, SQL Server 2026) prefer **Hash Aggregation** when the group cardinality is high and memory allows, as it avoids expensive disk-based sorting.
- **Cardinality Estimation**: Incorrect statistics on grouping columns can lead the optimizer to choose an inefficient scan method (e.g., choosing `Nested Loop` instead of `Hash Aggregate`).
- **Complexity**: The time complexity of a `GROUP BY` operation is generally $O(N \log N)$ due to the sorting required for grouping, or $O(N)$ if using hash-based aggregation, where $N$ is the number of rows processed.

### Modern Best Practices
- **Strict Mode**: Ensure `ONLY_FULL_GROUP_BY` is enabled in your SQL dialect (e.g., MySQL/MariaDB) to prevent non-deterministic query results where non-aggregated, non-grouped columns are selected.
- **Partitioning**: When aggregating petabyte-scale datasets, utilize partitioned tables to enable "partition-wise aggregation," allowing the engine to aggregate within local memory segments before merging.
<br>

## 14. What is a _subquery_, and when would you use one?

### Definition and Scope
A **Subquery** (or nested query) is an inner `SELECT` statement embedded within an outer query (e.g., `SELECT`, `INSERT`, `UPDATE`, or `DELETE`). In modern RDBMS architectures, subqueries are classified based on their interaction with the outer scope: **Non-Correlated** (independent, executed once) and **Correlated** (dependent on the outer query, executed once per row).

### Common Subquery Classifications

#### Scalar Subquery
Returns exactly one row and one column.
*   **Use Case:** Comparisons against atomic values.
*   **Optimization:** Modern optimizers utilize memoization to avoid redundant execution if the subquery is non-correlated.

#### Table (Row/Column) Subquery
Returns one or more rows/columns.
*   **Use Case:** Providing sets for `IN`, `EXISTS`, or `ANY/ALL` operators.
*   **Performance:** In 2026, many query optimizers perform **Subquery Unnesting** (transforming subqueries into `JOIN` operations) to improve execution plan efficiency.

### Advantages and Modern Alternatives
While subqueries provide logical encapsulation, they are increasingly superseded by **Common Table Expressions (CTEs)** for readability and recursive operations.

*   **CTEs (`WITH` clause):** Preferred over subqueries for complex logic as they improve maintainability and allow for recursive tree traversal.
*   **Window Functions:** Should be used instead of correlated subqueries for calculating running totals, ranks, or moving averages to reduce complexity from $O(n^2)$ to $O(n \log n)$ via window partitioning.
*   **`LATERAL` Joins (PostgreSQL/Modern SQL):** Replaces correlated subqueries in `FROM` clauses, allowing columns from the outer query to be referenced within a subquery or table-valued function.

### Limitations and Optimization
*   **Performance:** Unoptimized correlated subqueries introduce an $O(n \cdot m)$ complexity where $n$ is the outer table size and $m$ is the inner. Always check `EXPLAIN ANALYZE` outputs to identify unnecessary row-by-row scanning.
*   **Debugging:** Deeply nested subqueries (e.g., nesting depth > 3) significantly increase cognitive load. CTEs are the 2026 standard for modularizing these patterns.

### Code Examples: 2026 Standards

```sql
-- 1. Scalar Subquery: Retrieving records above average using CTE for clarity
WITH AvgValue AS (
    SELECT AVG(salary) AS global_avg FROM employees
)
SELECT emp_name, salary 
FROM employees, AvgValue 
WHERE salary > AvgValue.global_avg;

-- 2. Correlated Subquery/Lateral Join: 
-- Fetching the most recent order for each customer
SELECT c.customer_name, o.order_date
FROM customers c
CROSS JOIN LATERAL (
    SELECT order_date 
    FROM orders 
    WHERE customer_id = c.id 
    ORDER BY order_date DESC 
    LIMIT 1
) o;
```

### Audit Summary
*   **Accuracy:** Updated to reflect the industry preference for **CTEs** and **Lateral Joins** over legacy deeply-nested subqueries. 
*   **Mathematical Context:** Clarified performance implications; nested operations often lead to non-linear performance degradation.
*   **Modernization:** Explicitly identified `LATERAL` joins as the replacement for correlated subquery patterns in modern analytical workloads.
<br>

## 15. Describe the functions of the _ORDER BY_ clause.

### Technical Audit: ORDER BY Clause

The **ORDER BY** clause specifies the sorting order of a query's result set. In relational theory, rows in a table are inherently unordered; **ORDER BY** provides a deterministic sequence for the output.

### Key Functionality

*   **Multivariate Sorting**: Defines precedence using a comma-separated list. Evaluation proceeds from left to right.
*   **Directional Directives**: **ASC** (ascending, default) and **DESC** (descending).
*   **NULL Handling**: Modern SQL standards (ISO/IEC 9075) utilize **NULLS FIRST** or **NULLS LAST** to explicitly dictate the positioning of null values, which vary by default across engines (e.g., PostgreSQL defaults to **NULLS LAST** for **ASC**).

### Complexity and Performance

Sorting is a blocking operation. The performance complexity is $O(N \log N)$ where $N$ is the number of rows processed. 

*   **Index Utilization**: Engines utilize B-Tree indices to optimize sorting. If the **ORDER BY** columns match the index prefix, the engine performs a sequential scan, reducing complexity to $O(N)$.
*   **Memory Constraints**: Large datasets exceeding the sort buffer (e.g., `work_mem` in PostgreSQL) trigger **External Merge Sorts**, involving disk I/O, which significantly degrades latency.

### 2026 Standards and Refinements

#### SQL Server/Generic Syntax
The use of **Column Position** (e.g., `ORDER BY 1`) is discouraged in 2026. This practice is considered technical debt; it breaks if the `SELECT` list is modified and hinders static analysis and query plan stability. Use explicit column names or aliases.

#### Windowing and Ranking
For "Top-N" queries, modern standards prefer **Window Functions** over `LIMIT` for complex partitioning:
```sql
-- Standard Top-N pattern using Window Functions
SELECT product_name, units_sold
FROM (
    SELECT product_name, units_sold, 
           RANK() OVER (ORDER BY units_sold DESC) as rnk
    FROM sales
    WHERE sale_date = '2026-05-20'
) t
WHERE rnk <= 3;
```

#### Randomization
The `RAND()` function is engine-specific and non-deterministic. For production-grade randomization, use cryptographically secure seeds if available, or the standard `RANDOM()` function (PostgreSQL) or `RAND()` (MySQL/MariaDB). Note that `ORDER BY RANDOM()` performs a full table scan and is computationally expensive ($O(N \log N)$).

### Updated Code Example: Best Practices

```sql
-- Explicit aliasing and NULLS handling
SELECT product_name, sale_date, units_sold
FROM sales
WHERE sale_date = '2026-05-20'
ORDER BY 
    units_sold DESC NULLS LAST, 
    product_name ASC
LIMIT 3;
```

### Audit Findings Summary
1.  **Deprecated Practice**: Dropped "Column Position" reference in production recommendations.
2.  **Standards Compliance**: Added `NULLS FIRST/LAST` syntax, which is critical for deterministic results in 2026.
3.  **Efficiency**: Warned against `ORDER BY RAND()` for large datasets due to $O(N \log N)$ disk-heavy overhead.
4.  **Architectural Shift**: Introduced **Window Functions** as the preferred mechanism for ranking over simple `LIMIT` clauses.
<br>

Here are the answers for questions 16 through 100:

## 16. What are _aggregate functions_ in SQL?

### Technical Audit: Aggregate Functions

**Aggregate functions** operate on a set of rows and return a single scalar value. They are the primary mechanism for summarizing data in relational systems, working in conjunction with `GROUP BY`.

### Core Functions

**COUNT**: Returns the number of rows. `COUNT(*)` counts all rows including NULLs; `COUNT(column)` excludes NULLs.

**SUM / AVG**: Compute total and arithmetic mean respectively. Both ignore NULL values, which can skew `AVG` — use `COALESCE` to substitute defaults when needed.

**MIN / MAX**: Return the minimum and maximum values across a set. Work on numeric, string, and date types.

**STDDEV / VARIANCE**: Statistical functions for standard deviation and variance. Available in PostgreSQL, MySQL, and SQL Server (as `STDEV`/`VAR`).

### NULL Behavior

All aggregate functions except `COUNT(*)` ignore NULLs. This is often a source of bugs:

```sql
SELECT AVG(COALESCE(score, 0)) AS avg_score
FROM results;
```

### Distinct Aggregation

```sql
SELECT COUNT(DISTINCT customer_id) AS unique_customers
FROM orders
WHERE order_date >= '2026-01-01';
```

### Filter Clause (SQL:2003+)

Modern SQL supports `FILTER (WHERE ...)` for conditional aggregation — cleaner than `CASE WHEN`:

```sql
SELECT
    COUNT(*) FILTER (WHERE status = 'active')  AS active_count,
    COUNT(*) FILTER (WHERE status = 'churned') AS churned_count
FROM users;
```

### Audit Findings Summary

1. **NULL Safety**: Always apply `COALESCE` when `AVG` or `SUM` may encounter NULLs to avoid misleading results.
2. **FILTER Clause**: Prefer `FILTER (WHERE ...)` over `SUM(CASE WHEN ...)` for conditional aggregation in 2026-compliant engines.
3. **COUNT(\*) vs COUNT(col)**: These are semantically different — distinguish them explicitly in production queries.

---

## 17. Explain the differences between _INNER JOIN_, _LEFT JOIN_, _RIGHT JOIN_, and _FULL JOIN_.

### Technical Audit: JOIN Types

JOINs combine rows from two or more tables based on a related column. The type of JOIN determines what happens when no matching row exists in one of the tables.

### Join Semantics

**INNER JOIN**: Returns only rows where the join condition is satisfied in *both* tables. Non-matching rows from either side are discarded.

**LEFT JOIN (LEFT OUTER JOIN)**: Returns all rows from the left table. For right-table rows with no match, columns are filled with `NULL`.

**RIGHT JOIN (RIGHT OUTER JOIN)**: Mirror of LEFT JOIN. All right-table rows are preserved; unmatched left-table columns become `NULL`. In practice, `RIGHT JOIN` is rarely used — rewriting as a `LEFT JOIN` improves readability.

**FULL JOIN (FULL OUTER JOIN)**: Union of LEFT and RIGHT JOIN. All rows from both tables are returned; unmatched sides produce `NULL` columns.

### Code Examples

```sql
-- INNER JOIN: Only matched orders
SELECT o.order_id, c.name
FROM orders o
INNER JOIN customers c ON o.customer_id = c.id;

-- LEFT JOIN: All customers, even those without orders
SELECT c.name, o.order_id
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id;

-- FULL JOIN: All customers and all orders, matched where possible
SELECT c.name, o.order_id
FROM customers c
FULL JOIN orders o ON c.id = o.customer_id;
```

### NULL Pitfall

When filtering on a column from the optional side of an outer join, placing the condition in `WHERE` silently converts it to an `INNER JOIN`:

```sql
-- WRONG: converts LEFT JOIN to INNER JOIN
SELECT c.name, o.order_id
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
WHERE o.status = 'shipped';

-- CORRECT: filter inside the ON clause
SELECT c.name, o.order_id
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id AND o.status = 'shipped';
```

### Audit Findings Summary

1. **RIGHT JOIN Deprecation in Practice**: Prefer rewriting as `LEFT JOIN` for consistency and readability.
2. **WHERE vs ON Filtering**: Misplacing outer-join filters in `WHERE` is a critical correctness bug — always filter optional sides in the `ON` clause.
3. **FULL JOIN Support**: Not supported in MySQL/MariaDB natively — emulate with `LEFT JOIN UNION ALL RIGHT JOIN ... WHERE left.id IS NULL`.

---

## 18. How do you insert a new row into a _database table_?

### Technical Audit: INSERT Statement

The `INSERT` statement adds one or more rows to a table. It is a DML (Data Manipulation Language) command.

### Syntax Forms

**Single row insert with explicit columns** (preferred):

```sql
INSERT INTO users (username, email, created_at)
VALUES ('swarup', 'swarup@example.com', NOW());
```

**Multi-row insert** (single statement, more performant than multiple single inserts):

```sql
INSERT INTO products (name, price, category)
VALUES
    ('Widget A', 9.99, 'electronics'),
    ('Widget B', 14.99, 'electronics'),
    ('Widget C', 4.99, 'accessories');
```

**Insert from SELECT** (used in ETL and data migration):

```sql
INSERT INTO archive_orders (order_id, total, archived_at)
SELECT order_id, total, NOW()
FROM orders
WHERE order_date < '2025-01-01';
```

### INSERT OR UPSERT (2026 Standard)

`INSERT ... ON CONFLICT` (PostgreSQL) and `INSERT ... ON DUPLICATE KEY UPDATE` (MySQL) handle upserts atomically:

```sql
-- PostgreSQL: upsert pattern
INSERT INTO user_sessions (user_id, token, last_seen)
VALUES (42, 'abc123', NOW())
ON CONFLICT (user_id)
DO UPDATE SET token = EXCLUDED.token, last_seen = EXCLUDED.last_seen;
```

### Returning Inserted Values

PostgreSQL supports `RETURNING` to retrieve generated primary keys or computed columns without a second query:

```sql
INSERT INTO orders (customer_id, total)
VALUES (7, 149.99)
RETURNING order_id, created_at;
```

### Audit Findings Summary

1. **Always Specify Column Names**: Omitting column list couples insert statements to schema order — a brittle pattern that breaks on schema migrations.
2. **Batch Inserts Over Loops**: Multi-row `VALUES` or `INSERT ... SELECT` significantly outperforms looped single inserts due to reduced round-trips.
3. **RETURNING Clause**: Eliminates the need for a follow-up `SELECT LAST_INSERT_ID()` pattern — prefer it in PostgreSQL for post-insert processing.

---

## 19. Explain how to update records in a _database table_.

### Technical Audit: UPDATE Statement

The `UPDATE` statement modifies existing rows. It is one of the highest-risk DML operations — an absent `WHERE` clause updates every row in the table.

### Syntax

```sql
UPDATE employees
SET salary = salary * 1.10,
    updated_at = NOW()
WHERE department = 'engineering'
  AND performance_rating >= 4;
```

### Safe Update Pattern

Always verify the target row count before executing `UPDATE` in production:

```sql
-- Step 1: audit rows to be affected
SELECT COUNT(*) FROM employees
WHERE department = 'engineering' AND performance_rating >= 4;

-- Step 2: execute update inside a transaction
BEGIN;
UPDATE employees
SET salary = salary * 1.10
WHERE department = 'engineering' AND performance_rating >= 4;
-- ROLLBACK if count looks wrong; COMMIT if correct
COMMIT;
```

### Update from Another Table (JOIN-based)

```sql
-- PostgreSQL / standard SQL
UPDATE orders o
SET status = 'fulfilled'
FROM shipments s
WHERE o.order_id = s.order_id
  AND s.delivered_at IS NOT NULL;
```

### Returning Updated Rows (PostgreSQL)

```sql
UPDATE inventory
SET stock = stock - 1
WHERE product_id = 99 AND stock > 0
RETURNING product_id, stock;
```

### Audit Findings Summary

1. **Transaction Discipline**: Wrap destructive `UPDATE`s in `BEGIN/COMMIT` with a pre-flight `SELECT COUNT(*)` to validate scope before committing.
2. **Optimistic Locking**: For concurrent update safety, add a `version` column and include `WHERE version = :expected_version` to prevent lost updates.
3. **UPDATE ... FROM**: Preferred over correlated subqueries for multi-table updates — more readable and typically better optimized by the query planner.

---

## 20. What is a _SQL View_ and what are its advantages?

### Technical Audit: SQL Views

A **view** is a named, stored SQL query that behaves as a virtual table. It does not store data itself (unlike a materialized view) — each reference re-executes the underlying query.

### Creating a View

```sql
CREATE OR REPLACE VIEW active_customer_summary AS
SELECT
    c.customer_id,
    c.name,
    COUNT(o.order_id)    AS total_orders,
    SUM(o.total)         AS lifetime_value
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
WHERE c.status = 'active'
GROUP BY c.customer_id, c.name;
```

Usage is identical to a table:

```sql
SELECT * FROM active_customer_summary WHERE lifetime_value > 500;
```

### Advantages

**Abstraction**: Hides JOIN complexity from downstream consumers — dashboards and APIs query the view without knowing the schema.

**Security**: Grant `SELECT` on a view while restricting direct table access — exposes only approved columns/rows.

**Maintainability**: Business logic changes (e.g., redefining "active") are applied in one place; all consumers automatically benefit.

**Query Simplification**: Reduces repeated subquery patterns across the codebase.

### Updatable Views

Simple single-table views (no aggregation, `DISTINCT`, or `GROUP BY`) may support `INSERT`/`UPDATE`/`DELETE`. Use `WITH CHECK OPTION` to enforce view predicates on writes:

```sql
CREATE VIEW active_users AS
SELECT * FROM users WHERE status = 'active'
WITH CHECK OPTION;
```

### Audit Findings Summary

1. **Not a Performance Tool**: Standard views re-execute the query on every access — for performance, use **materialized views** (see Q50).
2. **WITH CHECK OPTION**: Essential for updatable views to prevent silent insertion of rows outside the view's filter.
3. **`CREATE OR REPLACE`**: Use over `DROP + CREATE` to preserve dependent grants and avoid downtime in production.

---

## 21. List the different _data types_ available in _SQL_.

### Technical Audit: SQL Data Types

SQL data types are standardized by ISO/IEC 9075. Each vendor extends the standard — the categories below reflect the cross-engine common ground.

### Numeric Types

| Type | Description |
|---|---|
| `INTEGER` / `INT` | 32-bit signed integer |
| `BIGINT` | 64-bit signed integer |
| `SMALLINT` | 16-bit signed integer |
| `DECIMAL(p, s)` / `NUMERIC(p, s)` | Exact fixed-point decimal |
| `FLOAT` / `REAL` | Approximate floating-point (IEEE 754) |

Use `DECIMAL`/`NUMERIC` for monetary values — `FLOAT` introduces rounding errors.

### Character Types

| Type | Description |
|---|---|
| `CHAR(n)` | Fixed-length, right-padded with spaces |
| `VARCHAR(n)` | Variable-length, up to n characters |
| `TEXT` | Unbounded variable-length (non-standard but universal) |

### Date and Time Types

| Type | Description |
|---|---|
| `DATE` | Calendar date (YYYY-MM-DD) |
| `TIME` | Time of day (with/without time zone) |
| `TIMESTAMP` | Date and time combined |
| `TIMESTAMPTZ` | Timestamp with time zone (PostgreSQL) |
| `INTERVAL` | Duration (e.g., `INTERVAL '3 days'`) |

### Boolean

`BOOLEAN` — `TRUE`, `FALSE`, `NULL`. Not natively supported in all engines (SQL Server uses `BIT`).

### Binary Types

`BYTEA` (PostgreSQL) / `BLOB` (MySQL) / `VARBINARY` (SQL Server) for raw binary data.

### Structured Types (2026 Relevance)

`JSON` / `JSONB` (PostgreSQL) — native JSON storage with indexing support. `JSONB` is binary-encoded and indexable; prefer it over `JSON` for query performance.

`ARRAY` (PostgreSQL) — native array columns: `INTEGER[]`, `TEXT[]`.

`UUID` — universally unique identifier, natively supported in PostgreSQL; use `CHAR(36)` or `BINARY(16)` in MySQL.

### Audit Findings Summary

1. **Never use FLOAT for money**: Use `DECIMAL(19,4)` or equivalent — floating-point imprecision compounds in financial calculations.
2. **JSONB over JSON**: In PostgreSQL, `JSONB` enables GIN indexing and operator pushdown; `JSON` stores raw text with no index support.
3. **TIMESTAMPTZ discipline**: Store all timestamps in UTC using `TIMESTAMPTZ`; convert to user time zones at the application layer.

---

## 22. What are the differences between _CHAR_, _VARCHAR_, and _TEXT_ data types?

### Technical Audit: CHAR vs VARCHAR vs TEXT

All three store character data. The distinction lies in storage behavior, length constraints, and indexing characteristics.

### CHAR(n) — Fixed Length

Allocates exactly `n` characters. Shorter strings are right-padded with spaces. Comparisons trim trailing spaces in most engines, which can cause subtle equality bugs.

```sql
-- 'abc' and 'abc   ' compare as equal in CHAR contexts
SELECT CHAR_LENGTH(CAST('abc' AS CHAR(10))); -- returns 10 in some engines
```

Use for fixed-format codes (ISO country codes, status flags like `CHAR(2)`).

### VARCHAR(n) — Variable Length with Limit

Stores actual string length, up to `n` characters. No padding. Most flexible for general text with a known upper bound (names, emails, slugs).

```sql
CREATE TABLE users (
    email VARCHAR(320),   -- RFC 5321 max email length
    username VARCHAR(50)
);
```

### TEXT — Unbounded Variable Length

No length limit (or implementation-specific maximum, e.g., 1GB in PostgreSQL). Semantically identical to `VARCHAR` in PostgreSQL; treated differently in MySQL/SQL Server (affects index length limits and in-row storage).

### Engine-Specific Behavior

| Behavior | PostgreSQL | MySQL | SQL Server |
|---|---|---|---|
| `CHAR` padding | Yes | Yes | Yes |
| `VARCHAR` max | 10,485,760 | 65,535 bytes/row | 8,000 |
| `TEXT` indexable | Partial (expression index) | Partial (prefix index) | No |
| `VARCHAR` vs `TEXT` performance | Identical | Minor difference | Distinct |

### Audit Findings Summary

1. **PostgreSQL**: `VARCHAR` and `TEXT` are stored identically — prefer `TEXT` without a length constraint unless the business rule requires one.
2. **Index Limitations**: `TEXT` columns cannot be fully indexed in MySQL without a prefix length: `INDEX (bio(255))`.
3. **CHAR Padding Bug**: Avoid comparing `CHAR` values with explicit space-padded strings — trailing spaces are silently trimmed, causing unexpected equality matches.

---

## 23. How do you use the _BETWEEN_ operator in SQL?

### Technical Audit: BETWEEN Operator

`BETWEEN` is syntactic sugar for a range predicate. It is **inclusive on both ends** — equivalent to `col >= lower AND col <= upper`.

### Numeric Range

```sql
SELECT product_name, price
FROM products
WHERE price BETWEEN 10.00 AND 50.00;
-- Equivalent to: price >= 10.00 AND price <= 50.00
```

### Date Range

```sql
SELECT order_id, order_date
FROM orders
WHERE order_date BETWEEN '2026-01-01' AND '2026-03-31';
```

### Timestamp Precision Trap

For `TIMESTAMP` columns, `BETWEEN` with date-only strings may miss the final day:

```sql
-- WRONG: misses rows between '2026-03-31 00:00:01' and '2026-03-31 23:59:59'
WHERE created_at BETWEEN '2026-01-01' AND '2026-03-31'

-- CORRECT: use exclusive upper bound
WHERE created_at >= '2026-01-01' AND created_at < '2026-04-01'
```

### NOT BETWEEN

```sql
SELECT * FROM employees
WHERE salary NOT BETWEEN 50000 AND 80000;
```

### Audit Findings Summary

1. **Inclusive Boundary Risk**: Both bounds are inclusive — for timestamp ranges, always use `>=` lower with `<` exclusive upper to avoid missing end-of-day rows.
2. **Type Consistency**: Ensure the column type and literal type match — implicit casting in `BETWEEN` can prevent index utilization.
3. **Readability**: `BETWEEN` improves readability for range checks but should never be used with timestamps in date-precision contexts.

---

## 24. Describe the use of the _IN_ operator.

### Technical Audit: IN Operator

`IN` tests whether a value matches any element in a list or subquery result set. It is equivalent to a chain of `OR` equality conditions but more readable and often better optimized.

### Static List

```sql
SELECT * FROM orders
WHERE status IN ('pending', 'processing', 'shipped');
```

### Subquery Form

```sql
SELECT name FROM employees
WHERE department_id IN (
    SELECT id FROM departments WHERE location = 'Kolkata'
);
```

### NOT IN and NULL Trap

`NOT IN` with a subquery that can return `NULL` silently returns zero rows:

```sql
-- If any dept_id in the subquery is NULL, entire result is empty
SELECT * FROM employees
WHERE department_id NOT IN (SELECT id FROM departments);

-- SAFE alternative: use NOT EXISTS
SELECT * FROM employees e
WHERE NOT EXISTS (
    SELECT 1 FROM departments d WHERE d.id = e.department_id
);
```

### Performance: IN vs EXISTS vs JOIN

For large subqueries, `EXISTS` or `JOIN` often outperforms `IN` because `EXISTS` short-circuits on first match. Use `EXPLAIN ANALYZE` to verify the query plan:

```sql
-- Modern optimizers often rewrite IN as a semi-join — verify with EXPLAIN
EXPLAIN SELECT * FROM orders WHERE customer_id IN (SELECT id FROM vip_customers);
```

### Audit Findings Summary

1. **NOT IN NULL Trap**: The most dangerous `IN` behavior — any `NULL` in a `NOT IN` subquery causes the entire predicate to evaluate as `UNKNOWN`, returning no rows. Always use `NOT EXISTS` instead.
2. **IN vs EXISTS**: For correlated subqueries, `EXISTS` is semantically clearer and often more efficient — prefer it when checking existence rather than retrieving values.
3. **Large Static Lists**: `IN (...)` with hundreds of values becomes inefficient — use a temporary table or CTE joined instead.

---

## 25. Explain the use of _wildcard characters_ in SQL.

### Technical Audit: SQL Wildcard Characters

Wildcards are used with the `LIKE` operator (and `ILIKE` for case-insensitive matching in PostgreSQL) to perform pattern matching on character columns.

### Standard Wildcards

**`%` (percent)** — matches zero or more characters of any kind.

**`_` (underscore)** — matches exactly one character.

```sql
-- Starts with 'Swa'
SELECT * FROM users WHERE username LIKE 'Swa%';

-- Exactly 5 characters
SELECT * FROM codes WHERE code LIKE '_____';

-- Contains 'admin' anywhere
SELECT * FROM roles WHERE role_name LIKE '%admin%';
```

### Escaping Wildcards

When matching literal `%` or `_` characters, use the `ESCAPE` clause:

```sql
SELECT * FROM discount_codes
WHERE code LIKE '20\%OFF' ESCAPE '\';
```

### Performance Implications

| Pattern form | Index usage |
|---|---|
| `LIKE 'prefix%'` | Index scan (B-Tree usable) |
| `LIKE '%suffix'` | Full table scan |
| `LIKE '%middle%'` | Full table scan |

For `%middle%` patterns at scale, use full-text search (`tsvector`/`tsquery` in PostgreSQL, `FULLTEXT` in MySQL) rather than `LIKE`.

### Case Sensitivity

`LIKE` is case-sensitive in PostgreSQL and case-insensitive in MySQL by default. PostgreSQL provides `ILIKE` for case-insensitive pattern matching.

### Audit Findings Summary

1. **Leading Wildcard Performance**: `LIKE '%value'` is a full table scan — avoid on large tables. Use inverted index or full-text search instead.
2. **`_` Underuse**: The single-character wildcard is useful for fixed-format pattern validation (e.g., phone number prefixes, SKU formats).
3. **`ILIKE` vs `LOWER()`**: In PostgreSQL, `ILIKE` is cleaner but `LOWER(col) LIKE LOWER(pattern)` is more portable across engines.

---

## 26. What is the purpose of the _LIKE_ operator?

### Technical Audit: LIKE Operator

`LIKE` performs pattern matching on string columns using wildcard characters (`%` and `_`). It is the standard SQL mechanism for flexible string filtering.

### Basic Syntax

```sql
SELECT * FROM products
WHERE description LIKE '%wireless%';
```

### Common Patterns

```sql
-- Prefix match (index-friendly)
WHERE email LIKE 'swarup%'

-- Suffix match
WHERE filename LIKE '%.pdf'

-- Fixed-position match (single char wildcard)
WHERE phone LIKE '+91__________'  -- 10-digit Indian number

-- Case-insensitive (PostgreSQL)
WHERE name ILIKE '%kumar%'
```

### LIKE vs Regular Expressions

For complex patterns, most engines support regex operators:

```sql
-- PostgreSQL: regex match
WHERE email ~ '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'

-- MySQL
WHERE email REGEXP '^[a-z0-9._]+@[a-z]+\.[a-z]{2,}$'
```

Regex is more expressive but significantly slower — use only when `LIKE` cannot express the pattern.

### Negation

```sql
SELECT * FROM logs WHERE message NOT LIKE '%error%';
```

### Audit Findings Summary

1. **Index Usage**: Only leading-anchor patterns (`LIKE 'value%'`) benefit from B-Tree indexes — all others require full scans. Add `pg_trgm` extension in PostgreSQL for GIN-indexed `LIKE '%value%'` queries.
2. **Collation Awareness**: `LIKE` behavior depends on the column collation — a case-insensitive collation in MySQL makes `LIKE` behave like `ILIKE`.
3. **`pg_trgm` for Substring Search**: For substring pattern matching on large tables, `CREATE INDEX ... USING GIN (col gin_trgm_ops)` enables index-accelerated `LIKE '%any%'` queries in PostgreSQL.

---

## 27. How do you handle _NULL values_ in SQL?

### Technical Audit: NULL Handling in SQL

`NULL` represents the absence of a known value. It is not zero, not an empty string, and not false. It follows **three-valued logic** — expressions involving `NULL` evaluate to `UNKNOWN`, not `TRUE` or `FALSE`.

### Testing for NULL

```sql
-- CORRECT
WHERE column IS NULL
WHERE column IS NOT NULL

-- WRONG: always evaluates to UNKNOWN, never matches
WHERE column = NULL
WHERE column != NULL
```

### NULL in Expressions

Any arithmetic or concatenation with `NULL` yields `NULL`:

```sql
SELECT 100 + NULL;      -- NULL
SELECT 'hello' || NULL; -- NULL (PostgreSQL)
```

### COALESCE

Returns the first non-NULL value from a list:

```sql
SELECT COALESCE(nickname, first_name, 'Unknown') AS display_name
FROM users;
```

### NULLIF

Returns `NULL` if two values are equal — useful for avoiding division by zero:

```sql
SELECT revenue / NULLIF(units, 0) AS avg_price
FROM sales;
```

### IFNULL / NVL (Vendor-Specific)

`IFNULL(expr, default)` in MySQL and `NVL(expr, default)` in Oracle are functionally equivalent to `COALESCE` with two arguments. Use `COALESCE` for portability.

### NULL in Aggregates and ORDER BY

`GROUP BY` treats multiple `NULL` values as equal — they are grouped together. `COUNT(col)` ignores NULLs; `COUNT(*)` does not.

For sorting, `NULLS FIRST` / `NULLS LAST` provides explicit control (see Q15).

### Audit Findings Summary

1. **Three-Valued Logic**: Train all developers to understand that `NULL = NULL` is `UNKNOWN` in SQL — this is the source of the majority of NULL-related bugs.
2. **`COALESCE` over `IFNULL`/`NVL`**: Use the standard `COALESCE` for portability across database engines.
3. **`NULLIF` for Division Safety**: Always guard denominators with `NULLIF(denominator, 0)` — unchecked division by zero raises a runtime error.

---

## 28. What does the _COALESCE function_ do?

### Technical Audit: COALESCE Function

`COALESCE` is a standard SQL function that returns the first non-NULL argument from an ordered list. It evaluates arguments left to right and short-circuits on the first non-NULL value.

### Syntax

```sql
COALESCE(expr1, expr2, ..., exprN)
```

### Use Cases

**Default value substitution**:

```sql
SELECT
    user_id,
    COALESCE(display_name, username, email, 'Anonymous') AS label
FROM users;
```

**Safe arithmetic**:

```sql
SELECT price * COALESCE(discount_multiplier, 1.0) AS final_price
FROM products;
```

**Conditional column selection**:

```sql
SELECT COALESCE(home_phone, mobile_phone, work_phone) AS contact_number
FROM contacts;
```

### COALESCE vs CASE WHEN

`COALESCE(a, b)` is semantically equivalent to:

```sql
CASE WHEN a IS NOT NULL THEN a ELSE b END
```

`COALESCE` is preferred for brevity. However, `CASE WHEN` is necessary when the fallback logic is more complex than NULL-checking.

### Short-Circuit Evaluation

Most engines evaluate `COALESCE` lazily — if the first argument is non-NULL, subsequent expressions are not evaluated. This matters when later arguments have side effects or are expensive subqueries.

### Audit Findings Summary

1. **Short-Circuit Dependency**: Do not rely on lazy evaluation for side-effect control — behavior is implementation-defined and not guaranteed by all engines.
2. **Type Consistency**: All arguments to `COALESCE` must be of compatible types or require explicit casting — mismatched types trigger implicit conversion, which may produce unexpected results.
3. **Prefer COALESCE over NVL/IFNULL**: `COALESCE` is the ANSI SQL standard; `NVL` (Oracle) and `IFNULL` (MySQL) are engine-specific aliases.

---

## 29. What is the difference between _UNION_ and _UNION ALL_?

### Technical Audit: UNION vs UNION ALL

Both operators combine result sets from two or more `SELECT` queries with matching column structures. The difference is in duplicate handling.

### UNION

Eliminates duplicate rows from the combined result. Internally performs a sort or hash operation to identify and remove duplicates — equivalent to applying `DISTINCT` to the full result.

```sql
SELECT email FROM customers
UNION
SELECT email FROM newsletter_subscribers;
-- Returns distinct emails from both tables
```

### UNION ALL

Returns all rows from all queries, including duplicates. No deduplication step — significantly more performant.

```sql
SELECT order_id, total FROM orders_2025
UNION ALL
SELECT order_id, total FROM orders_2026;
-- Returns all rows from both tables
```

### Performance Difference

`UNION` has $O(N \log N)$ complexity due to the sort/deduplication pass. `UNION ALL` is $O(N)$ — a simple concatenation. For large datasets, the difference is substantial.

### Rules for Both

All `SELECT` statements must have the same number of columns with compatible data types. Column names are taken from the first `SELECT`.

### When to Use Each

Use `UNION ALL` by default when you know the sets are disjoint (e.g., partitioned tables by year) or when duplicates are acceptable. Use `UNION` only when deduplication is a genuine requirement.

### Audit Findings Summary

1. **Default to UNION ALL**: `UNION` is often used out of habit when `UNION ALL` is correct and faster — always justify the deduplication cost explicitly.
2. **Ordering**: `ORDER BY` in a `UNION` query applies to the final combined result and should appear only once, at the end of the last `SELECT`.
3. **CTEs as Alternative**: For complex multi-branch logic, a CTE with conditional aggregation (`FILTER`) may be more readable than a chain of `UNION ALL` blocks.

---

## 30. Describe the use of _arithmetic operators_ in SQL queries.

### Technical Audit: Arithmetic Operators

SQL supports standard arithmetic operators for numeric computation in `SELECT`, `WHERE`, `HAVING`, and `ORDER BY` clauses.

### Operators

| Operator | Operation | Example |
|---|---|---|
| `+` | Addition | `price + tax` |
| `-` | Subtraction | `list_price - discount` |
| `*` | Multiplication | `quantity * unit_price` |
| `/` | Division | `revenue / units` |
| `%` | Modulo | `id % 2` (even/odd check) |

### In SELECT

```sql
SELECT
    product_name,
    unit_price,
    quantity,
    unit_price * quantity                          AS subtotal,
    unit_price * quantity * 0.18                   AS gst,
    unit_price * quantity * 1.18                   AS total_with_gst
FROM order_items;
```

### In WHERE

```sql
SELECT * FROM inventory
WHERE (stock_on_hand - reserved_quantity) < 10;
```

### Integer Division Trap

In SQL, dividing two integers performs integer division in some engines:

```sql
SELECT 7 / 2;        -- Returns 3 in PostgreSQL/MySQL (integer division)
SELECT 7.0 / 2;      -- Returns 3.5
SELECT 7 / 2.0;      -- Returns 3.5
SELECT CAST(7 AS DECIMAL) / 2;  -- Returns 3.5
```

### Division by Zero Safety

```sql
SELECT revenue / NULLIF(sessions, 0) AS conversion_rate
FROM analytics;
```

### Audit Findings Summary

1. **Integer Division**: Always cast at least one operand to `DECIMAL`/`FLOAT` when fractional results are expected.
2. **Division by Zero**: Guard all division operations with `NULLIF(denominator, 0)` — unguarded division by zero raises a runtime exception in most engines.
3. **Operator Precedence**: `*` and `/` bind tighter than `+` and `-` — use explicit parentheses in compound expressions to ensure clarity and correctness.

---

## 31. Explain how to use the _CASE statement_ in SQL.

### Technical Audit: CASE Statement

`CASE` is SQL's conditional expression. It evaluates conditions sequentially and returns the result of the first matching branch. It can appear in `SELECT`, `WHERE`, `ORDER BY`, `GROUP BY`, and aggregate functions.

### Two Forms

**Searched CASE** (most flexible):

```sql
SELECT
    order_id,
    total,
    CASE
        WHEN total >= 10000 THEN 'platinum'
        WHEN total >= 5000  THEN 'gold'
        WHEN total >= 1000  THEN 'silver'
        ELSE 'standard'
    END AS tier
FROM orders;
```

**Simple CASE** (equality checks only):

```sql
SELECT
    status,
    CASE status
        WHEN 'A' THEN 'active'
        WHEN 'I' THEN 'inactive'
        WHEN 'S' THEN 'suspended'
        ELSE 'unknown'
    END AS status_label
FROM accounts;
```

### Conditional Aggregation

`CASE` inside aggregate functions enables pivot-style reporting:

```sql
SELECT
    department,
    SUM(CASE WHEN gender = 'M' THEN 1 ELSE 0 END) AS male_count,
    SUM(CASE WHEN gender = 'F' THEN 1 ELSE 0 END) AS female_count
FROM employees
GROUP BY department;
```

### In ORDER BY for Custom Sort

```sql
ORDER BY
    CASE status
        WHEN 'critical' THEN 1
        WHEN 'high'     THEN 2
        WHEN 'medium'   THEN 3
        ELSE 4
    END;
```

### Audit Findings Summary

1. **FILTER Clause Preference**: In PostgreSQL, `COUNT(*) FILTER (WHERE condition)` is cleaner than `SUM(CASE WHEN ... THEN 1 ELSE 0 END)` for conditional aggregation.
2. **ELSE Clause**: Always include an `ELSE` to handle unmatched cases — omitting it returns `NULL` for unmatched rows, which can silently corrupt aggregations.
3. **NULL Matching**: `CASE WHEN col = NULL` never matches — use `WHEN col IS NULL` instead.

---

## 32. How would you perform a _self JOIN_?

### Technical Audit: Self JOIN

A **self JOIN** joins a table to itself by aliasing it twice. It is used to query hierarchical or relational data stored within a single table — the canonical example is an employee-manager relationship.

### Employee Hierarchy Example

```sql
SELECT
    e.employee_id,
    e.name           AS employee_name,
    m.name           AS manager_name
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.employee_id;
```

The `LEFT JOIN` (rather than `INNER JOIN`) ensures top-level employees with no manager (i.e., the CEO) are included in the result with `NULL` as the manager name.

### Finding Pairs with Shared Attributes

```sql
-- Find all pairs of employees in the same department
SELECT
    a.name AS employee_1,
    b.name AS employee_2,
    a.department
FROM employees a
JOIN employees b ON a.department = b.department
               AND a.employee_id < b.employee_id;
```

The `a.employee_id < b.employee_id` condition prevents duplicate pairs and self-pairing.

### Multi-Level Hierarchy with Recursive CTE

For trees deeper than two levels, a self JOIN is insufficient — use a recursive CTE:

```sql
WITH RECURSIVE org_chart AS (
    SELECT employee_id, name, manager_id, 0 AS level
    FROM employees WHERE manager_id IS NULL
    UNION ALL
    SELECT e.employee_id, e.name, e.manager_id, oc.level + 1
    FROM employees e
    JOIN org_chart oc ON e.manager_id = oc.employee_id
)
SELECT * FROM org_chart ORDER BY level, name;
```

### Audit Findings Summary

1. **Alias Discipline**: In a self JOIN, both aliases must be semantically meaningful (`e` for employee, `m` for manager) — not `a`/`b` — to maintain readability.
2. **Pair Deduplication**: Always use `a.id < b.id` (or `<>` with `DISTINCT`) to prevent symmetric duplicates when matching within the same table.
3. **Deep Hierarchies**: Self JOINs only handle fixed-depth lookups. For arbitrary-depth trees, always use recursive CTEs.

---

## 33. What is a _cross JOIN_ and when would you use it?

### Technical Audit: CROSS JOIN

A `CROSS JOIN` produces the **Cartesian product** of two tables — every row from the left table is paired with every row from the right table. If table A has `m` rows and table B has `n` rows, the result has `m × n` rows.

### Syntax

```sql
SELECT s.size_name, c.color_name
FROM sizes s
CROSS JOIN colors c;
```

With 5 sizes and 8 colors, this yields 40 rows — every size-color combination.

### Implicit CROSS JOIN (Comma Syntax)

```sql
-- Equivalent to CROSS JOIN, but avoid this style
SELECT * FROM sizes, colors;
```

### Valid Use Cases

**Generating combinations**: Product variants (size × color), pricing matrices, or all possible test scenarios.

**Seeding date/time grids**: Pairing a list of dates with a list of metric types to create a complete reporting scaffold:

```sql
SELECT d.report_date, m.metric_name
FROM date_series d
CROSS JOIN metrics m;
```

**Populating sparse matrices**: Creating a full grid before LEFT JOINing actual data to identify gaps.

### Performance Warning

A `CROSS JOIN` on large tables is catastrophically expensive. Two tables of 10,000 rows each produce 100,000,000 rows. Always confirm that both tables are small (typically lookup/reference tables) before using it.

### Audit Findings Summary

1. **Accidental Cartesian Product**: Missing `JOIN` conditions in older implicit-join syntax silently produce cross joins — always use explicit `JOIN ... ON` syntax.
2. **Row Count Validation**: Before executing, estimate the output size as `|A| × |B|` and ensure it is manageable.
3. **Narrow Use Case**: `CROSS JOIN` is correct and valuable for combination generation — not a sign of bad design when applied appropriately.

---

## 34. How to implement _pagination_ in SQL queries?

### Technical Audit: SQL Pagination

Pagination limits the number of rows returned and allows retrieval of sequential pages. Two primary approaches exist: **offset-based** and **keyset (cursor-based)** pagination.

### Offset-Based Pagination

```sql
-- Page 3, 20 rows per page
SELECT * FROM products
ORDER BY created_at DESC
LIMIT 20 OFFSET 40;   -- OFFSET = (page - 1) * page_size
```

Simple to implement but degrades at large offsets — the engine scans and discards all preceding rows, making page 1000 query 20,000 rows internally.

### Keyset (Cursor-Based) Pagination

Avoids the offset scan by filtering from the last seen value — the recommended approach for 2026 production systems:

```sql
-- First page
SELECT id, name, created_at FROM products
ORDER BY created_at DESC, id DESC
LIMIT 20;

-- Next page: pass last row's (created_at, id) from previous result
SELECT id, name, created_at FROM products
WHERE (created_at, id) < ('2026-04-20 10:00:00', 5678)
ORDER BY created_at DESC, id DESC
LIMIT 20;
```

Requires a stable, indexed sort key — a composite `(created_at, id)` index makes this $O(\log N)$ per page regardless of depth.

### Comparison

| Aspect | Offset | Keyset |
|---|---|---|
| Random page access | Yes | No |
| Performance at depth | Degrades ($O(N)$) | Constant ($O(\log N)$) |
| Stable results | No (insertions shift pages) | Yes |
| Implementation complexity | Simple | Moderate |

### Window Function Approach

```sql
SELECT * FROM (
    SELECT *, ROW_NUMBER() OVER (ORDER BY created_at DESC) AS rn
    FROM products
) t
WHERE rn BETWEEN 41 AND 60;
```

### Audit Findings Summary

1. **Keyset by Default**: Offset pagination is technically debt at scale — adopt keyset pagination for any table expected to exceed 100K rows.
2. **Composite Sort Key**: The keyset cursor must include a tiebreaker (typically `id`) alongside the primary sort column to guarantee deterministic ordering.
3. **Consistent ORDER BY**: Pagination without `ORDER BY` is non-deterministic — different pages may return overlapping or missing rows.

---

## 35. Explain the concept of _Common Table Expressions (CTEs)_ and _recursive CTEs_.

### Technical Audit: CTEs and Recursive CTEs

A **Common Table Expression (CTE)** is a named temporary result set defined with `WITH` and scoped to the single query that follows it. It improves readability by breaking complex queries into logical named steps.

### Standard CTE

```sql
WITH revenue_by_region AS (
    SELECT region, SUM(total) AS revenue
    FROM orders
    WHERE order_date >= '2026-01-01'
    GROUP BY region
),
top_regions AS (
    SELECT region FROM revenue_by_region
    WHERE revenue > 1000000
)
SELECT o.*
FROM orders o
JOIN top_regions tr ON o.region = tr.region;
```

Multiple CTEs are separated by commas; each can reference previously defined CTEs.

### Recursive CTE

A **recursive CTE** contains a base case and a recursive member joined by `UNION ALL`. It is the standard mechanism for traversing trees and graphs.

```sql
WITH RECURSIVE org_hierarchy AS (
    -- Base case: root nodes (no manager)
    SELECT id, name, manager_id, 0 AS depth
    FROM employees
    WHERE manager_id IS NULL

    UNION ALL

    -- Recursive member: children of current level
    SELECT e.id, e.name, e.manager_id, oh.depth + 1
    FROM employees e
    INNER JOIN org_hierarchy oh ON e.manager_id = oh.id
)
SELECT * FROM org_hierarchy ORDER BY depth, name;
```

### Materialization Behavior

In PostgreSQL, CTEs are **optimization fences by default** — they are executed once and materialized, preventing the planner from pushing predicates into them. Use `WITH ... AS NOT MATERIALIZED` (PostgreSQL 12+) to allow inlining:

```sql
WITH filtered_orders AS NOT MATERIALIZED (
    SELECT * FROM orders WHERE status = 'active'
)
SELECT * FROM filtered_orders WHERE region = 'south';
```

### Audit Findings Summary

1. **CTE Optimization Fence**: In PostgreSQL pre-12, CTEs block query plan optimizations — use subqueries or `NOT MATERIALIZED` for performance-sensitive code paths.
2. **Recursion Guard**: Always include a `WHERE` condition or `MAXRECURSION` hint (SQL Server) to prevent infinite loops in recursive CTEs on cyclic graphs.
3. **Readability vs Performance**: CTEs improve maintainability significantly — use them liberally for complex business logic, but profile before assuming materialization overhead.

---

## 36. What are _window functions_ and how are they used?

### Technical Audit: Window Functions

**Window functions** compute values across a set of rows related to the current row — without collapsing them into a single output row as `GROUP BY` does. They operate over a defined "window" using the `OVER()` clause.

### Syntax

```sql
function_name(expression) OVER (
    [PARTITION BY col1, col2, ...]
    [ORDER BY col3 [ASC|DESC]]
    [ROWS/RANGE BETWEEN ...]
)
```

### Ranking Functions

```sql
SELECT
    employee_id,
    department,
    salary,
    RANK()       OVER (PARTITION BY department ORDER BY salary DESC) AS rank,
    DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dense_rank,
    ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS row_num
FROM employees;
```

`RANK()` leaves gaps after ties; `DENSE_RANK()` does not; `ROW_NUMBER()` assigns unique sequential numbers.

### Aggregate Window Functions

```sql
SELECT
    order_id,
    region,
    total,
    SUM(total)   OVER (PARTITION BY region)                          AS region_total,
    AVG(total)   OVER (PARTITION BY region)                          AS region_avg,
    SUM(total)   OVER (ORDER BY order_date ROWS UNBOUNDED PRECEDING) AS running_total
FROM orders;
```

### LAG and LEAD

```sql
SELECT
    order_date,
    revenue,
    LAG(revenue)  OVER (ORDER BY order_date) AS prev_day_revenue,
    LEAD(revenue) OVER (ORDER BY order_date) AS next_day_revenue
FROM daily_revenue;
```

### NTILE

```sql
-- Divide customers into 4 spending quartiles
SELECT customer_id, total_spend,
       NTILE(4) OVER (ORDER BY total_spend DESC) AS quartile
FROM customer_summary;
```

### Audit Findings Summary

1. **ROWS vs RANGE**: `ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW` is deterministic for running totals; `RANGE` includes all rows with the same `ORDER BY` value, which can produce unexpected running totals on ties.
2. **Performance**: Window functions require a sort pass per `OVER()` clause — consolidate compatible window definitions using `WINDOW` aliases (PostgreSQL) to share sort passes.
3. **Filtering Window Results**: Window functions cannot be filtered in the same `WHERE` clause — wrap in a subquery or CTE and filter in the outer query.

---

## 37. How can you concatenate column values in SQL?

### Technical Audit: String Concatenation

SQL provides multiple approaches to concatenate column values, with syntax varying by engine.

### Standard SQL Concatenation (||)

```sql
-- ISO standard, supported in PostgreSQL, SQLite, Oracle
SELECT first_name || ' ' || last_name AS full_name
FROM employees;
```

### CONCAT Function (MySQL, SQL Server, PostgreSQL)

```sql
SELECT CONCAT(first_name, ' ', last_name) AS full_name
FROM employees;
```

`CONCAT` in MySQL treats `NULL` as empty string; `||` in PostgreSQL propagates `NULL`.

### CONCAT_WS (Concat With Separator)

```sql
-- Skips NULL arguments automatically
SELECT CONCAT_WS(', ', city, state, country) AS address
FROM locations;
```

`CONCAT_WS` is especially useful for nullable address components — it gracefully omits `NULL` values without extra `COALESCE` wrapping.

### Aggregating Rows into a Single String

**PostgreSQL**:

```sql
SELECT department_id,
       STRING_AGG(name, ', ' ORDER BY name) AS team_members
FROM employees
GROUP BY department_id;
```

**MySQL**:

```sql
SELECT department_id,
       GROUP_CONCAT(name ORDER BY name SEPARATOR ', ') AS team_members
FROM employees
GROUP BY department_id;
```

**SQL Server**:

```sql
SELECT department_id,
       STRING_AGG(name, ', ') WITHIN GROUP (ORDER BY name) AS team_members
FROM employees
GROUP BY department_id;
```

### Audit Findings Summary

1. **NULL Propagation with `||`**: In PostgreSQL, `'hello' || NULL` returns `NULL` — use `COALESCE` on nullable columns or switch to `CONCAT()`.
2. **`CONCAT_WS` for Nullable Address Fields**: Eliminates the need for complex `CASE WHEN IS NULL` chains when building composite address strings.
3. **`STRING_AGG` vs `GROUP_CONCAT`**: These are semantically equivalent but syntactically different — use `STRING_AGG` for ANSI-closer portability (PostgreSQL 9.0+, SQL Server 2017+).

---

## 38. What is the _PIVOT operation_ and how would you apply it?

### Technical Audit: PIVOT Operation

`PIVOT` transforms row values into column headers — converting a long-format table (one row per category-value pair) into a wide-format table (one column per category). It is a cross-tabulation or "pivot table" operation.

### Native PIVOT (SQL Server / Oracle)

```sql
SELECT *
FROM (
    SELECT product, quarter, revenue
    FROM sales
) src
PIVOT (
    SUM(revenue)
    FOR quarter IN ([Q1], [Q2], [Q3], [Q4])
) pvt;
```

### Portable PIVOT with CASE (All Engines)

```sql
SELECT
    product,
    SUM(CASE WHEN quarter = 'Q1' THEN revenue ELSE 0 END) AS Q1,
    SUM(CASE WHEN quarter = 'Q2' THEN revenue ELSE 0 END) AS Q2,
    SUM(CASE WHEN quarter = 'Q3' THEN revenue ELSE 0 END) AS Q3,
    SUM(CASE WHEN quarter = 'Q4' THEN revenue ELSE 0 END) AS Q4
FROM sales
GROUP BY product;
```

### Dynamic PIVOT

When the column values are not known in advance (e.g., dynamic date ranges), dynamic SQL is required:

```sql
-- PostgreSQL: build and execute dynamic pivot query
DO $$
DECLARE
    col_list TEXT;
    query TEXT;
BEGIN
    SELECT STRING_AGG(DISTINCT
        'SUM(CASE WHEN quarter = ''' || quarter || ''' THEN revenue ELSE 0 END) AS "' || quarter || '"',
        ', ' ORDER BY 1
    ) INTO col_list FROM sales;

    query := 'SELECT product, ' || col_list || ' FROM sales GROUP BY product';
    EXECUTE query;
END $$;
```

### UNPIVOT (Reverse Operation)

Converts wide-format columns back into rows — available natively in SQL Server, emulated with `UNION ALL` in other engines.

### Audit Findings Summary

1. **Portable CASE WHEN**: Use the `SUM(CASE WHEN ...)` pattern for cross-engine portability — native `PIVOT` is vendor-specific and not in ANSI SQL.
2. **Dynamic PIVOT Risk**: Dynamic SQL for pivot bypasses query plan caching and introduces SQL injection risk — parameterize and sanitize column name inputs rigorously.
3. **Application-Layer Pivoting**: For highly dynamic pivots (unknown columns), handle the transformation in the application layer rather than SQL — it is more maintainable.

---

## 39. Explain the process of combining a query that uses a _GROUP BY_ with one that uses _ORDER BY_.

### Technical Audit: GROUP BY with ORDER BY

`GROUP BY` and `ORDER BY` can be combined in a single query. They operate at different stages of the SQL execution pipeline — `GROUP BY` collapses rows into groups, then `ORDER BY` sequences the grouped results.

### SQL Execution Order

```
FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT
```

`ORDER BY` always executes after `GROUP BY` — it sequences the already-collapsed groups.

### Basic Example

```sql
SELECT
    region,
    COUNT(*)          AS total_orders,
    SUM(total)        AS revenue,
    AVG(total)        AS avg_order_value
FROM orders
WHERE order_date >= '2026-01-01'
GROUP BY region
ORDER BY revenue DESC;
```

### HAVING with ORDER BY

`HAVING` filters groups (post-aggregation equivalent of `WHERE`):

```sql
SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department
HAVING AVG(salary) > 80000
ORDER BY avg_salary DESC;
```

### Ordering by Aggregate Alias

Most engines allow `ORDER BY` to reference `SELECT` aliases when ordering by aggregates:

```sql
SELECT product_id, SUM(quantity) AS total_qty
FROM order_items
GROUP BY product_id
ORDER BY total_qty DESC;
```

### Column Position (Deprecated)

```sql
-- AVOID in 2026: ORDER BY 2 DESC (column position)
SELECT product_id, SUM(quantity) FROM order_items GROUP BY product_id ORDER BY 2 DESC;
```

### Audit Findings Summary

1. **ORDER BY on Non-Aggregated Columns**: Columns in `ORDER BY` that are not in `GROUP BY` must be wrapped in an aggregate function — omitting this causes an error in strict engines (PostgreSQL, SQL Server).
2. **HAVING vs WHERE**: `WHERE` filters rows before grouping; `HAVING` filters groups after aggregation. Using `HAVING` where `WHERE` suffices forces unnecessary group computation.
3. **Alias Reference in ORDER BY**: Standard SQL does not guarantee alias references in `ORDER BY` — while supported by all major engines, use the full expression for safety in stored procedures.

---

## 40. How would you find _duplicate records_ in a table?

### Technical Audit: Finding Duplicate Records

Duplicates are rows that share identical values on one or more columns considered to define uniqueness. The approach varies depending on whether you want to identify, count, or delete duplicates.

### Identifying Duplicates by Value

```sql
SELECT email, COUNT(*) AS occurrences
FROM users
GROUP BY email
HAVING COUNT(*) > 1
ORDER BY occurrences DESC;
```

### Retrieving Full Duplicate Rows

Use `ROW_NUMBER()` to tag duplicates while preserving all columns:

```sql
WITH ranked AS (
    SELECT *,
           ROW_NUMBER() OVER (PARTITION BY email ORDER BY created_at) AS rn
    FROM users
)
SELECT * FROM ranked WHERE rn > 1;
```

### Multi-Column Duplicate Detection

```sql
SELECT first_name, last_name, date_of_birth, COUNT(*) AS count
FROM customers
GROUP BY first_name, last_name, date_of_birth
HAVING COUNT(*) > 1;
```

### Deleting Duplicates (Keep Oldest)

```sql
-- PostgreSQL: delete all but the first occurrence
DELETE FROM users
WHERE id IN (
    SELECT id FROM (
        SELECT id,
               ROW_NUMBER() OVER (PARTITION BY email ORDER BY created_at) AS rn
        FROM users
    ) t
    WHERE rn > 1
);
```

### Prevention: UNIQUE Constraints

The correct long-term solution is preventing duplicates at the schema level:

```sql
ALTER TABLE users ADD CONSTRAINT users_email_unique UNIQUE (email);
```

### Audit Findings Summary

1. **Deduplication Strategy**: Before deleting, always audit the duplicates first — determine which row to keep (oldest, newest, most complete) based on business rules.
2. **`ROW_NUMBER()` Pattern**: The window function approach is the most robust for both identification and deletion — it handles ties and multi-column uniqueness gracefully.
3. **Upstream Fix**: Duplicates in production indicate a missing `UNIQUE` constraint — fix the schema after cleaning, not just the data.

---

## 41. What is the _Entity-Relationship Model_?

### Technical Audit: Entity-Relationship Model

The **Entity-Relationship (ER) Model** is a conceptual framework for modeling the structure of a database at a high level before physical schema design. It was introduced by Peter Chen in 1976 and remains the dominant conceptual modeling tool.

### Core Components

**Entity**: A real-world object or concept with independent existence (e.g., `Customer`, `Product`, `Order`). Represented as rectangles in ER diagrams.

**Attribute**: A property of an entity (e.g., `Customer.email`, `Product.price`). Key attributes (primary identifiers) are underlined. Can be simple, composite, derived, or multivalued.

**Relationship**: An association between two or more entities (e.g., `Customer PLACES Order`). Represented as diamonds.

**Cardinality**: Defines the numeric relationship between entity instances:
- **One-to-One (1:1)**: One user has one profile.
- **One-to-Many (1:N)**: One customer has many orders.
- **Many-to-Many (M:N)**: Many students enroll in many courses (requires a junction table).

### ER to Relational Mapping Rules

1. Each entity becomes a table.
2. Each attribute becomes a column.
3. Primary key attributes become `PRIMARY KEY` constraints.
4. 1:N relationships are implemented via foreign keys on the "many" side.
5. M:N relationships are resolved with a **junction table** containing foreign keys to both entities.

### Extended ER (EER)

Modern EER models add **ISA hierarchies** (inheritance), **weak entities** (entities dependent on a parent for identification), and **specialization/generalization** — used for complex domain modeling.

### Audit Findings Summary

1. **ER vs Physical Schema**: ER models capture business semantics — they should be database-agnostic and reviewed with domain experts before physical schema design begins.
2. **M:N Resolution**: Every M:N relationship in an ER diagram requires a junction table in the relational schema — failing to model this is a common normalization error.
3. **Derived Attributes**: Derived attributes (e.g., `age` derived from `date_of_birth`) should not be stored as columns — compute them at query time to avoid stale data.

---

## 42. Explain the different types of _database schema_.

### Technical Audit: Database Schema Types

A **schema** defines the logical structure of a database — its tables, relationships, constraints, and data types. Different schema types serve different analytical and operational purposes.

### Flat Schema

A single table stores all data. Simple but violates normalization — acceptable only for very small, read-only datasets (e.g., configuration tables).

### Normalized (3NF) Schema

Used in **OLTP** systems. Data is organized to minimize redundancy and maintain integrity via foreign key relationships.

```
customers(id, name, email)
orders(id, customer_id, date, total)
order_items(id, order_id, product_id, qty, price)
products(id, name, category_id, base_price)
```

### Star Schema

Used in **data warehouses**. A central **fact table** (measurable events: sales, clicks) surrounded by **dimension tables** (descriptive attributes: time, product, customer).

```
fact_sales(sale_id, date_id, product_id, customer_id, quantity, revenue)
dim_date(date_id, year, quarter, month, day)
dim_product(product_id, name, category, brand)
dim_customer(customer_id, name, region, segment)
```

Optimized for analytical queries — fewer JOINs, straightforward aggregation.

### Snowflake Schema

An extension of the star schema where dimension tables are further normalized. Reduces storage redundancy at the cost of additional JOINs.

```
dim_product → dim_category → dim_department
```

### Galaxy Schema (Fact Constellation)

Multiple fact tables sharing dimension tables. Used when multiple business processes (sales, returns, inventory) need separate fact tables with shared dimensions.

### Audit Findings Summary

1. **Star vs Snowflake Trade-off**: Star schemas prioritize query performance (fewer JOINs); snowflake schemas prioritize storage efficiency. In modern columnar stores (BigQuery, Redshift), storage is cheap — star schemas are generally preferred.
2. **Schema-on-Read vs Schema-on-Write**: Data lakes apply schema on read (flexible); traditional RDBMS enforces schema on write (strict). Choose based on data volatility and consumer requirements.
3. **Normalization Level**: 3NF is appropriate for OLTP; data warehouses intentionally denormalize to the star/snowflake form for analytical performance.

---

## 43. What are _Stored Procedures_ and how are they beneficial?

### Technical Audit: Stored Procedures

A **stored procedure** is a precompiled, named block of SQL (and procedural logic) stored in the database engine. It can accept parameters, execute DML/DDL operations, and return results.

### Basic Syntax (PostgreSQL)

```sql
CREATE OR REPLACE PROCEDURE update_order_status(
    p_order_id   INT,
    p_new_status VARCHAR(50)
)
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE orders
    SET status = p_new_status, updated_at = NOW()
    WHERE order_id = p_order_id;

    IF NOT FOUND THEN
        RAISE EXCEPTION 'Order % not found', p_order_id;
    END IF;

    COMMIT;
END;
$$;
```

Invocation:

```sql
CALL update_order_status(1042, 'shipped');
```

### Benefits

**Performance**: The execution plan is compiled and cached on first call — subsequent calls avoid parse/plan overhead.

**Network Efficiency**: A single `CALL` replaces multiple round-trip queries — significant for high-latency connections.

**Security**: Grant `EXECUTE` on a procedure without exposing underlying tables — acts as a permission boundary.

**Code Reuse**: Complex business logic (e.g., order fulfilment, inventory adjustment) is defined once and reused across applications.

**Transaction Encapsulation**: Multi-step operations can be wrapped in a single atomic transaction within the procedure.

### Stored Procedures vs Functions

| Aspect | Stored Procedure | Function |
|---|---|---|
| Returns value | Optional (OUT params) | Mandatory |
| Use in SELECT | No | Yes |
| Transaction control | Yes (`COMMIT`/`ROLLBACK`) | No |
| Side effects | Allowed | Not recommended |

### Audit Findings Summary

1. **Not a Substitute for ORM Logic**: Business logic that changes frequently is harder to version-control and test in stored procedures — reserve them for stable, performance-critical operations.
2. **Portability Risk**: PL/pgSQL, T-SQL, and PL/SQL are vendor-specific — stored procedures create database lock-in.
3. **`CALL` vs `SELECT`**: In SQL:2003+, procedures are invoked with `CALL`; functions with `SELECT`. Mixing these creates compatibility issues.

---

## 44. What is a _trigger_ in SQL and when should it be used?

### Technical Audit: SQL Triggers

A **trigger** is a stored procedure that automatically executes in response to a specified event on a table or view — `INSERT`, `UPDATE`, or `DELETE` — either before or after the event.

### Creating a Trigger (PostgreSQL)

```sql
-- Step 1: create the trigger function
CREATE OR REPLACE FUNCTION log_order_changes()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
    INSERT INTO audit_log (table_name, operation, old_data, new_data, changed_at)
    VALUES (
        TG_TABLE_NAME,
        TG_OP,
        row_to_json(OLD),
        row_to_json(NEW),
        NOW()
    );
    RETURN NEW;
END;
$$;

-- Step 2: attach the trigger
CREATE TRIGGER orders_audit_trigger
AFTER UPDATE ON orders
FOR EACH ROW EXECUTE FUNCTION log_order_changes();
```

### Trigger Timing and Events

| Timing | Description |
|---|---|
| `BEFORE INSERT/UPDATE/DELETE` | Executes before the DML — can modify `NEW` row values |
| `AFTER INSERT/UPDATE/DELETE` | Executes after the DML — suitable for auditing and cascades |
| `INSTEAD OF` | Replaces the DML operation — used on views |

### Valid Use Cases

**Audit logging**: Capture who changed what and when — without modifying application code.

**Enforcing derived columns**: Automatically update a `last_modified` timestamp.

**Cascading denormalization**: Keep computed summary columns in sync.

**Validation beyond constraints**: Enforce cross-row business rules that `CHECK` constraints cannot express.

### When NOT to Use Triggers

Avoid triggers for application business logic — they are invisible to developers, hard to debug, fire implicitly (causing unexpected side effects), and complicate migrations.

### Audit Findings Summary

1. **Visibility Problem**: Triggers are invisible in application code — any developer `UPDATE`ing a table may not know a trigger fires. Document triggers prominently.
2. **Performance Impact**: Triggers add latency to every affected DML operation — profile their impact under load before deploying to high-write tables.
3. **`INSTEAD OF` for Views**: Use `INSTEAD OF` triggers to make non-updatable views (with JOINs/aggregations) accept `INSERT`/`UPDATE`/`DELETE` operations.

---

## 45. Describe the concept of _ACID_ in databases.

### Technical Audit: ACID Properties

**ACID** is an acronym for the four properties that guarantee reliable transaction processing in relational database systems. They were formalized by Jim Gray in the 1970s and remain the foundation of transactional database design.

### Atomicity

A transaction is an indivisible unit — either all operations succeed or none do. On failure, the system rolls back to the pre-transaction state.

```sql
BEGIN;
UPDATE accounts SET balance = balance - 500 WHERE id = 1;
UPDATE accounts SET balance = balance + 500 WHERE id = 2;
COMMIT;  -- Both succeed, or ROLLBACK undoes both
```

### Consistency

A transaction brings the database from one valid state to another — all defined rules (constraints, cascades, triggers) are enforced before and after the transaction.

A transfer that would make a balance negative is rejected if a `CHECK (balance >= 0)` constraint exists — consistency guarantees this rule is never violated.

### Isolation

Concurrent transactions execute as if they were serial — no transaction sees the partial state of another. Controlled via **transaction isolation levels** (see Q69).

Isolation prevents anomalies such as dirty reads, non-repeatable reads, and phantom reads.

### Durability

Once a transaction is committed, its effects persist even after system failure. Implemented via **Write-Ahead Logging (WAL)** — changes are written to a durable log before the data pages are modified.

### ACID vs BASE

NoSQL systems often trade ACID for **BASE** (Basically Available, Soft state, Eventually consistent) to achieve horizontal scalability. Systems like MongoDB (4.0+) and Cassandra offer partial ACID support.

### Audit Findings Summary

1. **Isolation ≠ Serializable by Default**: Most engines default to `READ COMMITTED` isolation — understand the anomalies your application is exposed to and configure appropriately.
2. **Durability Cost**: `fsync`-based WAL durability has a write throughput cost — tunable via `synchronous_commit = off` in PostgreSQL for non-critical workloads (sacrifices durability for performance).
3. **Distributed ACID**: Achieving ACID across microservices requires distributed protocols (2PC, Saga pattern) — there is no free distributed atomicity.

---

## 46. What is _database sharding_?

### Technical Audit: Database Sharding

**Sharding** is a horizontal scaling strategy that partitions a database across multiple independent nodes (shards). Each shard holds a subset of the total data — typically defined by a **shard key**.

### How It Works

A **shard key** determines which shard a row belongs to. Routing logic (in the application or middleware) maps each query to the correct shard:

```
Shard 1: user_id 1        – 10,000,000
Shard 2: user_id 10,000,001 – 20,000,000
Shard 3: user_id 20,000,001 – 30,000,000
```

### Sharding Strategies

**Range sharding**: Consecutive key ranges per shard. Simple but can cause **hotspots** if traffic concentrates on a recent range (e.g., sharding by date).

**Hash sharding**: `shard = hash(shard_key) % num_shards`. Distributes load evenly but makes range queries expensive.

**Directory sharding**: A lookup table maps keys to shards. Flexible but the lookup table itself becomes a bottleneck.

### Challenges

**Cross-shard queries**: JOINs across shards require scatter-gather operations — expensive and complex.

**Rebalancing**: Adding a new shard requires resharding (moving data) — operationally disruptive without consistent hashing.

**Distributed transactions**: ACID across shards requires 2-phase commit (2PC) or eventual consistency patterns (Saga).

**Schema changes**: Applying migrations across all shards simultaneously is operationally complex.

### When to Shard

Sharding is a last resort after exhausting vertical scaling, read replicas, caching, and table partitioning. Premature sharding adds significant operational complexity.

### Audit Findings Summary

1. **Partition Before Sharding**: PostgreSQL's native table partitioning handles many scale-out scenarios without the cross-shard complexity of application-level sharding.
2. **Shard Key Selection is Critical**: A poor shard key (low cardinality, time-based in write-heavy systems) creates hotspots that negate sharding benefits.
3. **Managed Sharding**: In 2026, managed solutions (PlanetScale, CockroachDB, Citus) handle resharding transparently — prefer these over manual application-level sharding.

---

## 47. How do _database indexes_ work and what types are there?

### Technical Audit: Database Indexes

An **index** is a data structure that enables the database engine to locate rows efficiently without scanning the entire table. It trades storage space and write overhead for read performance.

### How B-Tree Indexes Work

The default index type in most RDBMS. A balanced tree structure where:
- Leaf nodes store the indexed column value and a pointer (row ID / heap tuple pointer) to the actual row.
- Internal nodes form a lookup tree navigable in $O(\log N)$ time.
- Range scans are efficient because leaf nodes are linked.

```sql
CREATE INDEX idx_orders_customer_id ON orders (customer_id);
```

### Index Types

**B-Tree** (default): Supports equality (`=`), range (`<`, `>`, `BETWEEN`), and `ORDER BY` operations. Best general-purpose index.

**Hash**: Supports only equality checks (`=`). Slightly faster than B-Tree for point lookups but does not support range scans. PostgreSQL supports hash indexes; MySQL uses them for MEMORY tables.

**GIN (Generalized Inverted Index)**: Designed for composite values — full-text search (`tsvector`), JSONB, arrays. Stores a posting list per element value.

**GiST (Generalized Search Tree)**: Supports geometric data types, full-text search, and range types. More flexible than GIN but slower to build.

**BRIN (Block Range Index)**: Stores min/max values per block range. Extremely small; useful for physically ordered large tables (e.g., time-series data with `created_at`).

**Partial Index**: Indexes only a subset of rows matching a `WHERE` condition — smaller, faster:

```sql
CREATE INDEX idx_active_users ON users (email) WHERE status = 'active';
```

**Covering Index (Index Include)**: Stores extra columns in the index to satisfy queries without a heap lookup:

```sql
CREATE INDEX idx_orders_cover ON orders (customer_id) INCLUDE (total, status);
```

### Audit Findings Summary

1. **Index on Cardinality**: Indexes are most valuable on high-cardinality columns (unique or near-unique values) — indexing a boolean column rarely helps.
2. **Covering Indexes**: Adding `INCLUDE` columns eliminates heap fetches for common queries — significant for read-heavy hot paths.
3. **Index Bloat**: Deleted rows leave dead index entries — schedule `REINDEX` or `VACUUM` (PostgreSQL) periodically on high-churn tables.

---

## 48. Describe the process of _data warehousing_.

### Technical Audit: Data Warehousing

A **data warehouse** is a centralized analytical repository designed to support business intelligence (BI) queries. It is optimized for complex read-heavy queries across large historical datasets, in contrast to OLTP systems optimized for transactional throughput.

### Architecture

Data flows through three layers:

**Source Systems → ETL/ELT Pipeline → Staging Area → Data Warehouse → Data Marts → BI Tools**

**Source systems**: OLTP databases, CRMs, APIs, flat files.

**ETL/ELT**:
- *Extract*: Pull data from sources.
- *Transform*: Cleanse, deduplicate, standardize, and apply business rules.
- *Load*: Write to the warehouse (ETL loads transformed data; ELT loads raw then transforms in-warehouse — preferred in cloud data warehouses).

**Staging area**: Temporary landing zone for raw extracted data before transformation.

**Data warehouse core**: The fully modeled, integrated, historical store — typically a star or snowflake schema.

**Data marts**: Subject-specific subsets (e.g., sales mart, finance mart) — optimized for department-specific reporting.

### Key Characteristics

**Subject-oriented**: Organized around business subjects (customers, products), not applications.

**Integrated**: Data from disparate systems is reconciled into a unified model.

**Non-volatile**: Data is append-only; historical records are not modified (unlike OLTP).

**Time-variant**: Stores historical snapshots — supports trend analysis over time.

### Modern Cloud Data Warehouses (2026)

Snowflake, BigQuery, Redshift, and Databricks separate compute from storage, enabling elastic scaling and columnar compression for analytical workloads.

### Audit Findings Summary

1. **ELT over ETL in Cloud**: Cloud warehouses' in-engine transformation capabilities (SQL + dbt) make ELT the dominant pattern in 2026 — raw data lands first, transformation happens in the warehouse.
2. **SCD Type 2 for History**: Slowly Changing Dimensions require Type 2 handling (add rows with validity dates) — not Type 1 overwrites — to preserve historical accuracy.
3. **dbt as Transformation Layer**: dbt (data build tool) has become the standard for warehouse transformation orchestration — it brings software engineering practices (version control, testing, documentation) to SQL transformations.

---

## 49. Explain the difference between _OLTP_ and _OLAP_ systems.

### Technical Audit: OLTP vs OLAP

**OLTP** (Online Transaction Processing) and **OLAP** (Online Analytical Processing) represent two fundamentally different database workload categories, each optimized for different access patterns.

### Comparison

| Dimension | OLTP | OLAP |
|---|---|---|
| Purpose | Record daily transactions | Analytical reporting |
| Query type | Simple, indexed point lookups | Complex aggregations over large scans |
| Data currency | Real-time | Periodic batch refresh |
| Data volume | Gigabytes (operational window) | Terabytes to petabytes (historical) |
| Schema | Normalized (3NF) | Denormalized (star/snowflake) |
| Users | Application users | Analysts, data scientists |
| Operations | INSERT, UPDATE, DELETE | SELECT with GROUP BY, window functions |
| Row count per query | Tens to hundreds | Millions to billions |
| Concurrency | High (thousands of transactions/sec) | Low to medium |
| Examples | MySQL, PostgreSQL (operational) | BigQuery, Snowflake, Redshift |

### OLTP Query Example

```sql
-- Point lookup: single customer's recent orders
SELECT order_id, total, status
FROM orders
WHERE customer_id = 42
ORDER BY order_date DESC
LIMIT 10;
```

### OLAP Query Example

```sql
-- Aggregated analysis across millions of rows
SELECT
    d.year,
    d.quarter,
    p.category,
    SUM(f.revenue)        AS total_revenue,
    COUNT(DISTINCT f.customer_id) AS unique_customers
FROM fact_sales f
JOIN dim_date d    ON f.date_id    = d.date_id
JOIN dim_product p ON f.product_id = p.product_id
GROUP BY d.year, d.quarter, p.category
ORDER BY d.year, d.quarter, total_revenue DESC;
```

### HTAP (Hybrid Transactional/Analytical Processing)

Modern systems like TiDB and SingleStore blur the boundary — a single database handles both workloads. This eliminates the ETL lag between OLTP and OLAP but is architecturally more complex.

### Audit Findings Summary

1. **Never Run OLAP Queries on OLTP Systems**: Heavy analytical queries lock rows, contend with application transactions, and degrade user-facing latency — always route analytics to a replica or dedicated warehouse.
2. **Read Replicas as Interim Solution**: Before investing in a full data warehouse, a PostgreSQL read replica with materialized views can serve moderate analytics needs.
3. **HTAP Maturity**: In 2026, HTAP systems are production-ready for moderate workloads but introduce operational complexity — evaluate carefully against a separated architecture.

---

## 50. What are _materialized views_ and how do they differ from standard views?

### Technical Audit: Materialized Views vs Standard Views

A **materialized view** is a view whose result set is physically stored (materialized) on disk. Unlike a standard view, it does not re-execute the underlying query on every access.

### Standard View — Virtual Table

```sql
CREATE VIEW revenue_by_region AS
SELECT region, SUM(total) AS revenue
FROM orders
GROUP BY region;
-- Re-executes the full aggregation on every SELECT
```

### Materialized View — Cached Result

```sql
CREATE MATERIALIZED VIEW revenue_by_region_mv AS
SELECT region, SUM(total) AS revenue
FROM orders
GROUP BY region;

-- Refresh manually or on schedule
REFRESH MATERIALIZED VIEW revenue_by_region_mv;

-- Concurrent refresh (PostgreSQL) — no read lock
REFRESH MATERIALIZED VIEW CONCURRENTLY revenue_by_region_mv;
```

### Comparison

| Aspect | Standard View | Materialized View |
|---|---|---|
| Data storage | None (virtual) | Physical copy on disk |
| Freshness | Always current | Stale until refreshed |
| Query performance | Depends on underlying query | Fast (pre-computed) |
| Write overhead | None | Refresh cost |
| Index support | Limited | Fully indexable |
| Use case | Abstraction, security | Pre-aggregated analytics |

### Indexing Materialized Views

Unlike standard views, materialized views support indexes:

```sql
CREATE INDEX idx_mv_region ON revenue_by_region_mv (region);
```

### Incremental Refresh (2026)

PostgreSQL does not support incremental (partial) refresh natively — `REFRESH MATERIALIZED VIEW` recomputes the entire result. Commercial solutions (Snowflake dynamic tables, Redshift materialized views) support incremental updates.

### Audit Findings Summary

1. **Staleness Management**: Design refresh schedules aligned with acceptable data latency — `CONCURRENTLY` allows reads during refresh but requires a unique index on the view.
2. **Materialized View as Performance Layer**: Use for expensive aggregations accessed frequently — eliminates repeated full-table scans in reporting workloads.
3. **`NOT MATERIALIZED` CTE Analogy**: Standard CTEs in PostgreSQL 12+ with `NOT MATERIALIZED` are the query-level equivalent — choose materialized views for cross-session caching.

---

## 51. How do you identify and optimize _slow-running queries_?

### Technical Audit: Slow Query Identification and Optimization

Slow query optimization is a systematic discipline involving identification, analysis, and targeted intervention.

### Step 1: Identify

**PostgreSQL slow query log**:

```sql
-- Log queries exceeding 1 second
ALTER SYSTEM SET log_min_duration_statement = '1000';
SELECT pg_reload_conf();
```

**`pg_stat_statements`** extension — aggregate query statistics:

```sql
SELECT query, calls, mean_exec_time, total_exec_time
FROM pg_stat_statements
ORDER BY mean_exec_time DESC
LIMIT 10;
```

**MySQL slow query log**:

```sql
SET GLOBAL slow_query_log = 'ON';
SET GLOBAL long_query_time = 1;
```

### Step 2: Analyze with EXPLAIN

```sql
EXPLAIN (ANALYZE, BUFFERS, FORMAT TEXT)
SELECT * FROM orders o
JOIN customers c ON o.customer_id = c.id
WHERE o.status = 'pending';
```

**Key warning signs in the plan**:
- `Seq Scan` on large tables (missing index)
- High `rows` estimate divergence from `actual rows` (stale statistics)
- `Hash Join` on millions of rows (index not usable)
- `Nested Loop` with high iteration counts

### Step 3: Optimize

**Add indexes**: On filter, join, and sort columns.

**Update statistics**: `ANALYZE table_name;`

**Rewrite subqueries**: Replace correlated subqueries with `JOIN` or `EXISTS`.

**Avoid functions on indexed columns**:

```sql
-- WRONG: prevents index use
WHERE YEAR(order_date) = 2026
-- CORRECT: range predicate uses index
WHERE order_date >= '2026-01-01' AND order_date < '2027-01-01'
```

**Partition large tables**: Partition pruning eliminates irrelevant partitions from the scan.

### Audit Findings Summary

1. **Function on Indexed Column**: Wrapping an indexed column in a function (`LOWER()`, `DATE()`, `YEAR()`) prevents index utilization — rewrite as range predicates or use expression indexes.
2. **Stale Statistics**: The query planner depends on accurate row count estimates — run `ANALYZE` after large bulk loads or set `autovacuum_analyze_threshold` aggressively.
3. **`EXPLAIN ANALYZE` vs `EXPLAIN`**: `EXPLAIN` shows the estimated plan; `EXPLAIN ANALYZE` executes and shows actual timing — always use `ANALYZE` for diagnosis, never just `EXPLAIN`.

---

## 52. What is _query execution plan_ in SQL?

### Technical Audit: Query Execution Plan

A **query execution plan** (or query plan) is the sequence of operations the database engine will perform to execute a SQL query. The query planner generates it based on table statistics, available indexes, and cost estimates.

### Viewing the Plan

```sql
-- PostgreSQL
EXPLAIN SELECT * FROM orders WHERE customer_id = 42;

-- MySQL
EXPLAIN SELECT * FROM orders WHERE customer_id = 42;

-- SQL Server
SET SHOWPLAN_TEXT ON;
SELECT * FROM orders WHERE customer_id = 42;
```

### Plan Operations

**Sequential Scan (Seq Scan)**: Reads every row in the table. Appropriate for small tables or when a large fraction of rows is returned. Bad for large tables with selective filters.

**Index Scan**: Uses a B-Tree index to locate rows. Efficient for selective filters (low percentage of rows).

**Index Only Scan**: Satisfies the query entirely from the index — no heap access. Requires a covering index.

**Bitmap Index Scan**: Combines multiple index scans using a bitmap. Used when `OR` conditions or multiple indexes apply.

**Nested Loop Join**: For each row in the outer table, scans the inner table. Efficient when the inner side is small and indexed.

**Hash Join**: Builds a hash table from the smaller table, probes it with rows from the larger table. Efficient for large equi-joins without usable indexes.

**Merge Join**: Requires both inputs sorted on the join key. Efficient when inputs are pre-sorted (e.g., via indexes).

### Reading Plan Cost

```
Seq Scan on orders (cost=0.00..450.00 rows=5000 width=48)
                     startup  total    estimated   row width
                     cost     cost     row count   in bytes
```

Lower total cost is better. A plan with `cost=0.00..12.50` is far preferable to `cost=0.00..450.00`.

### Audit Findings Summary

1. **Estimated vs Actual Rows**: Large divergence between `rows=` estimate and `actual rows=` indicates stale statistics — run `ANALYZE`.
2. **`BUFFERS` Option**: `EXPLAIN (ANALYZE, BUFFERS)` reveals cache hit rates — high `read` counts (disk I/O) vs `hit` counts indicate the working set exceeds shared buffers.
3. **Plan Regression Detection**: Use `auto_explain` in PostgreSQL to log plans of slow queries automatically — essential for detecting plan regressions after schema or data changes.

---

## 53. Explain how to use _EXPLAIN_ or _EXPLAIN ANALYZE_.

### Technical Audit: EXPLAIN and EXPLAIN ANALYZE

`EXPLAIN` reveals the query execution plan without running the query. `EXPLAIN ANALYZE` executes the query and overlays actual timing and row counts.

### Basic EXPLAIN

```sql
EXPLAIN SELECT * FROM orders
WHERE customer_id = 42 AND status = 'pending';
```

Output shows estimated cost, row count, and the plan tree. Does not execute the query.

### EXPLAIN ANALYZE

```sql
EXPLAIN (ANALYZE, BUFFERS, VERBOSE, FORMAT TEXT)
SELECT o.order_id, c.name
FROM orders o
JOIN customers c ON o.customer_id = c.id
WHERE o.order_date >= '2026-01-01';
```

Output includes:
- **Actual time**: `actual time=0.045..12.3 ms` per node
- **Actual rows**: Actual vs estimated row count
- **Loops**: How many times the node executed
- **Buffers**: Shared hit/read counts (cache vs disk)

### Warning: EXPLAIN ANALYZE Executes the Query

For `INSERT`/`UPDATE`/`DELETE`, wrap in a transaction and roll back:

```sql
BEGIN;
EXPLAIN ANALYZE DELETE FROM logs WHERE created_at < '2025-01-01';
ROLLBACK;
```

### Reading the Output

```
Hash Join  (cost=120.00..450.00 rows=1200 width=64)
           (actual time=2.1..18.4 rows=1187 loops=1)
  Hash Cond: (o.customer_id = c.id)
  Buffers: shared hit=234 read=12
  ->  Seq Scan on orders  ...
  ->  Hash  ...
        ->  Index Scan on customers  ...
```

**Row estimate accuracy**: `rows=1200` vs `actual rows=1187` — good. A 10× divergence indicates stale statistics.

**Buffer reads**: `read=12` means 12 pages fetched from disk; `hit=234` means 234 pages served from cache.

### Audit Findings Summary

1. **FORMAT JSON**: `EXPLAIN (ANALYZE, FORMAT JSON)` produces machine-parseable output for programmatic analysis and tools like `explain.dalibo.com` for visual plan review.
2. **VERBOSE Flag**: Adds column-level output and shows which table each column is pulled from — useful for diagnosing column resolution in complex queries.
3. **Baseline Before Optimizing**: Always capture `EXPLAIN ANALYZE` output before and after adding indexes — plan changes may be non-obvious and not always beneficial.

---

## 54. How can _indexing_ affect performance both positively and negatively?

### Technical Audit: Dual Impact of Indexing

Indexes are the single most effective tool for query performance — but they are not free. Every index has a maintenance cost on write operations.

### Positive Impact on Reads

**Selective `WHERE` filters**: An index on `orders(customer_id)` reduces a 10M-row scan to a handful of page reads — from $O(N)$ to $O(\log N)$.

**JOIN acceleration**: Indexes on foreign key columns eliminate full table scans in nested loop joins.

**`ORDER BY` optimization**: A matching index makes `ORDER BY` a sequential scan rather than a sort operation.

**`GROUP BY` optimization**: Indexes can eliminate sort phases in group-by operations.

**Index-only scans**: Covering indexes (`INCLUDE` columns) serve queries entirely from the index structure, never touching the heap.

### Negative Impact on Writes

Every `INSERT`, `UPDATE`, and `DELETE` must maintain all indexes on the affected table:

```
For a table with 8 indexes:
INSERT 1 row = 1 heap write + 8 index writes
```

In write-heavy workloads (IoT ingestion, event logging), excessive indexes can reduce write throughput by 3-5× or more.

**Index bloat**: `DELETE` operations mark index entries as dead but do not reclaim space immediately — leading to bloat requiring periodic `REINDEX` or `VACUUM`.

**Lock contention**: Index builds on large tables (`CREATE INDEX`) acquire share locks — use `CREATE INDEX CONCURRENTLY` to avoid blocking reads.

### Over-Indexing Anti-Pattern

```sql
-- BAD: indexing every column individually
CREATE INDEX idx_a ON orders(status);
CREATE INDEX idx_b ON orders(region);
CREATE INDEX idx_c ON orders(customer_id);

-- BETTER: composite index matching query patterns
CREATE INDEX idx_orders_composite ON orders(region, status, customer_id);
```

### Audit Findings Summary

1. **Index on Every Foreign Key**: Foreign keys without indexes cause full table scans in cascading deletes and JOIN operations — always index FK columns.
2. **Unused Index Audit**: Query `pg_stat_user_indexes` in PostgreSQL to identify never-used indexes and drop them: `SELECT indexname, idx_scan FROM pg_stat_user_indexes WHERE idx_scan = 0`.
3. **Composite Index Column Order**: In a composite index `(a, b, c)`, queries filtering only on `b` or `c` will not use the index — order columns by selectivity and query frequency (leftmost prefix rule).

---

## 55. Describe how to measure the performance of SQL queries.

### Technical Audit: SQL Query Performance Measurement

Performance measurement involves capturing execution time, resource consumption, and plan quality — not just wall-clock latency.

### Execution Time

**PostgreSQL `\timing`** (psql client):

```sql
\timing on
SELECT COUNT(*) FROM orders WHERE status = 'pending';
-- Time: 142.358 ms
```

**Inline timing with `clock_timestamp()`**:

```sql
DO $$
DECLARE t1 TIMESTAMPTZ; t2 TIMESTAMPTZ;
BEGIN
    t1 := clock_timestamp();
    PERFORM COUNT(*) FROM orders WHERE status = 'pending';
    t2 := clock_timestamp();
    RAISE NOTICE 'Duration: %', t2 - t1;
END $$;
```

### Aggregate Statistics (pg_stat_statements)

```sql
SELECT
    left(query, 100)          AS query_snippet,
    calls,
    round(mean_exec_time::numeric, 2) AS avg_ms,
    round(total_exec_time::numeric, 2) AS total_ms,
    rows / calls              AS avg_rows
FROM pg_stat_statements
ORDER BY mean_exec_time DESC
LIMIT 20;
```

### Plan Quality Metrics

From `EXPLAIN (ANALYZE, BUFFERS)`:

**Row estimate accuracy**: Ratio of estimated to actual rows. Divergence > 10× → stale statistics.

**Buffer hit ratio**: `shared hit / (shared hit + shared read)`. Target > 99% for hot workloads.

**Actual time per node**: Identifies the costliest operation in the plan tree.

### Load Testing

For production-representative benchmarking, use `pgbench` (PostgreSQL) or `sysbench` (MySQL) to simulate concurrent query load:

```bash
pgbench -c 20 -j 4 -T 60 -f query.sql mydb
```

### Audit Findings Summary

1. **Wall-Clock Time is Misleading**: A query may run fast in isolation but degrade under concurrent load due to lock contention or buffer pool competition — always measure under realistic concurrency.
2. **`pg_stat_statements` is Mandatory**: Enable it on all production PostgreSQL instances — it is the most important observability tool for query performance analysis.
3. **P99 Over Average**: Report P99 latency (99th percentile), not average — averages hide tail latency spikes that affect user experience.

---

## 56. How would you rewrite a query to improve its performance?

### Technical Audit: Query Rewriting for Performance

Query rewriting transforms a logically equivalent but inefficient query into one the optimizer can execute more efficiently.

### Replace Correlated Subqueries with JOINs

```sql
-- SLOW: correlated subquery executes once per outer row
SELECT name FROM customers c
WHERE (SELECT COUNT(*) FROM orders o WHERE o.customer_id = c.id) > 5;

-- FAST: single pass with GROUP BY
SELECT c.name
FROM customers c
JOIN orders o ON c.id = o.customer_id
GROUP BY c.id, c.name
HAVING COUNT(*) > 5;
```

### Replace `IN (subquery)` with `EXISTS`

```sql
-- SLOW for large subquery
SELECT * FROM products WHERE id IN (SELECT product_id FROM orders);

-- FAST: semi-join, short-circuits on first match
SELECT * FROM products p WHERE EXISTS (
    SELECT 1 FROM orders o WHERE o.product_id = p.id
);
```

### Avoid Functions on Indexed Columns

```sql
-- SLOW: function prevents index use
WHERE LOWER(email) = 'user@example.com'

-- FAST: use expression index or store normalized form
CREATE INDEX idx_email_lower ON users (LOWER(email));
```

### Push Filters Early with CTEs or Subqueries

```sql
-- Filter before joining to reduce join input size
SELECT *
FROM (SELECT * FROM orders WHERE order_date >= '2026-01-01') recent_orders
JOIN customers c ON recent_orders.customer_id = c.id;
```

### Replace `SELECT *` with Explicit Columns

Reduces network payload, enables index-only scans, and prevents schema-change surprises:

```sql
-- Instead of SELECT *
SELECT order_id, customer_id, total, status FROM orders;
```

### Audit Findings Summary

1. **Measure Before and After**: Always capture `EXPLAIN ANALYZE` output before and after rewriting — logical equivalence does not guarantee the new plan is better.
2. **NOT IN → NOT EXISTS**: `NOT IN` with a nullable subquery returns no rows (NULL propagation) — always rewrite as `NOT EXISTS` for correctness and performance.
3. **CTE Materialization Check**: In PostgreSQL, CTEs may be materialized (preventing predicate pushdown) — verify with `EXPLAIN` and add `NOT MATERIALIZED` if the planner is blocked.

---

## 57. What are _partitioned tables_ and how can they optimize performance?

### Technical Audit: Table Partitioning

**Partitioning** divides a large table into smaller, physically separate storage segments (partitions) while presenting a unified logical table to queries. The database engine routes queries to the relevant partitions automatically.

### Partition Types

**Range Partitioning**: Each partition holds rows within a value range — most common for time-series data:

```sql
CREATE TABLE orders (
    order_id   BIGINT,
    order_date DATE,
    total      DECIMAL(10,2)
) PARTITION BY RANGE (order_date);

CREATE TABLE orders_2024 PARTITION OF orders
    FOR VALUES FROM ('2024-01-01') TO ('2025-01-01');

CREATE TABLE orders_2025 PARTITION OF orders
    FOR VALUES FROM ('2025-01-01') TO ('2026-01-01');

CREATE TABLE orders_2026 PARTITION OF orders
    FOR VALUES FROM ('2026-01-01') TO ('2027-01-01');
```

**List Partitioning**: Partitions based on discrete values:

```sql
CREATE TABLE sales PARTITION BY LIST (region);
CREATE TABLE sales_india    PARTITION OF sales FOR VALUES IN ('IN');
CREATE TABLE sales_us       PARTITION OF sales FOR VALUES IN ('US');
```

**Hash Partitioning**: Distributes rows evenly using a hash function — useful for load distribution without natural range keys.

### Performance Benefits

**Partition Pruning**: Queries with partition key predicates skip irrelevant partitions entirely:

```sql
-- Only scans orders_2026; 2024 and 2025 partitions untouched
SELECT * FROM orders WHERE order_date >= '2026-01-01';
```

**Partition Elimination in JOINs**: PostgreSQL 11+ extends pruning to join conditions.

**Parallel Partition Scan**: Multiple partitions can be scanned in parallel.

**Efficient Data Archival**: Dropping old partitions (`DROP TABLE orders_2022`) is instantaneous — no row-level DELETE required.

### Audit Findings Summary

1. **Partition Key in Filters**: Partition pruning only activates when the `WHERE` clause includes the partition key — queries without it scan all partitions.
2. **Index Per Partition**: In PostgreSQL, indexes must be created separately on each partition — use `CREATE INDEX ON ONLY parent_table` for inheritance-based strategies, or rely on automatic propagation for declarative partitioning.
3. **Partition Overhead**: Tables with thousands of partitions incur planner overhead on query parsing — balance partition granularity against this cost.

---

## 58. How do you implement _database encryption_ in SQL?

### Technical Audit: Database Encryption

Database encryption protects data at rest and in transit. It operates at multiple layers — each with different trade-offs in performance, flexibility, and protection scope.

### Encryption Layers

**Transparent Data Encryption (TDE)**: Encrypts the entire database file at rest. Transparent to the application — no query changes required. Protects against physical disk theft but not against a compromised application with valid credentials.

Supported by: SQL Server (native), PostgreSQL (via pgcrypto or storage-level), MySQL (InnoDB tablespace encryption).

**Column-Level Encryption**: Encrypts specific sensitive columns (PII, payment data). The application controls encryption/decryption keys.

```sql
-- PostgreSQL pgcrypto extension
CREATE EXTENSION pgcrypto;

-- Store encrypted
INSERT INTO users (email, ssn_encrypted)
VALUES (
    'user@example.com',
    pgp_sym_encrypt('123-45-6789', 'encryption_key_here')
);

-- Retrieve decrypted
SELECT email, pgp_sym_decrypt(ssn_encrypted::bytea, 'encryption_key_here') AS ssn
FROM users
WHERE email = 'user@example.com';
```

**Application-Level Encryption**: Data is encrypted before it reaches the database. The database stores ciphertext only — the database engine cannot decrypt it. This is the strongest model for protecting against database compromise.

### Encryption in Transit (TLS)

Enforce TLS for all client connections:

```sql
-- PostgreSQL pg_hba.conf: require SSL
hostssl all all 0.0.0.0/0 scram-sha-256
```

### Key Management

Encryption is only as strong as its key management. Use dedicated key management systems (AWS KMS, HashiCorp Vault, Azure Key Vault) — never store encryption keys in the database itself.

### Audit Findings Summary

1. **TDE Limitations**: TDE does not protect data from a malicious DBA or compromised application account — it only protects physical media.
2. **Column Encryption Indexing**: Encrypted columns cannot be indexed for equality or range queries — design for access patterns that don't require searching encrypted values, or use deterministic encryption for equality-only searches.
3. **Key Rotation**: Build key rotation into the encryption strategy from the start — re-encrypting millions of rows with a new key is operationally expensive if not planned for.

---

## 59. What are _roles_ and how do they manage database access?

### Technical Audit: Database Roles

A **role** is a named entity in the database security model that can own objects and hold privileges. In modern SQL (PostgreSQL, SQL Server), roles subsume both users and groups — a role can log in (user behavior) or serve as a permission group (group behavior).

### Creating Roles

```sql
-- Login role (user)
CREATE ROLE app_user LOGIN PASSWORD 'securepassword';

-- Group role (no login)
CREATE ROLE readonly_access;

-- Grant group role to user
GRANT readonly_access TO app_user;
```

### Privilege Types

`SELECT`, `INSERT`, `UPDATE`, `DELETE`, `EXECUTE`, `USAGE`, `CREATE`, `ALL PRIVILEGES`

```sql
-- Grant read access to a specific schema
GRANT USAGE ON SCHEMA analytics TO readonly_access;
GRANT SELECT ON ALL TABLES IN SCHEMA analytics TO readonly_access;

-- Grant write access to specific tables only
GRANT INSERT, UPDATE ON orders TO app_user;

-- Grant execute on stored procedure
GRANT EXECUTE ON PROCEDURE update_order_status TO app_user;
```

### Default Privileges

Set default privileges for future objects:

```sql
ALTER DEFAULT PRIVILEGES IN SCHEMA public
    GRANT SELECT ON TABLES TO readonly_access;
```

### Principle of Least Privilege

Each role should have only the minimum permissions required:

```sql
-- Application role: read/write application tables only
GRANT SELECT, INSERT, UPDATE ON orders, customers, products TO app_role;

-- Reporting role: read-only on reporting views
GRANT SELECT ON ALL TABLES IN SCHEMA reporting TO report_role;

-- Admin role: schema changes only in migration context
GRANT CREATE ON DATABASE mydb TO migration_role;
```

### Audit Findings Summary

1. **Never Use Superuser for Applications**: Application database connections should never use a superuser role — one SQL injection vulnerability becomes a full database takeover.
2. **Role Hierarchy**: Use role inheritance to layer permissions (`GRANT developer_role TO senior_dev`) — avoid duplicating privilege grants across many individual users.
3. **Revoke Public Schema Access**: PostgreSQL grants `PUBLIC` (all roles) `CREATE` on the `public` schema by default — revoke this on all production databases: `REVOKE CREATE ON SCHEMA public FROM PUBLIC`.

---

## 60. Explain the concept of _row-level security_.

### Technical Audit: Row-Level Security (RLS)

**Row-Level Security (RLS)** is a database feature that restricts which rows a user can see or modify within a table, based on policies defined in the schema. It enforces data access control at the storage layer — independent of application logic.

### Enabling RLS (PostgreSQL)

```sql
-- Enable RLS on the table
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Create a policy: users see only their own orders
CREATE POLICY user_orders_policy ON orders
    USING (customer_id = current_setting('app.current_user_id')::INT);
```

### Policy Types

**USING clause**: Controls which rows are visible for `SELECT`, `UPDATE`, `DELETE`.

**WITH CHECK clause**: Controls which rows can be inserted or updated — prevents writing rows outside the policy scope.

```sql
CREATE POLICY tenant_isolation ON documents
    USING (tenant_id = current_setting('app.tenant_id')::INT)
    WITH CHECK (tenant_id = current_setting('app.tenant_id')::INT);
```

### Multi-Tenant Application Pattern

RLS is the recommended mechanism for multi-tenant SaaS databases with shared tables:

```sql
-- Set current tenant at connection time
SET app.tenant_id = '42';

-- All queries on documents automatically filter to tenant 42
SELECT * FROM documents;  -- Returns only tenant 42's documents
```

### Bypassing RLS

Superusers and table owners bypass RLS by default. To enforce even on table owners:

```sql
ALTER TABLE orders FORCE ROW LEVEL SECURITY;
```

### Audit Findings Summary

1. **RLS as Defense in Depth**: RLS prevents application bugs (missing `WHERE tenant_id = ?`) from becoming data leakage incidents — it is a critical security layer in multi-tenant systems.
2. **Performance Impact**: RLS policies add predicate conditions to every query — ensure the policy columns are indexed to prevent full table scans.
3. **`FORCE ROW LEVEL SECURITY`**: Without this, table owners (including migration scripts run by the owner) bypass RLS — always force it on sensitive tenant-isolated tables.

---

## 61. Describe how to create and use _user-defined functions (UDFs)_.

### Technical Audit: User-Defined Functions

A **user-defined function (UDF)** is a custom function stored in the database that encapsulates reusable SQL or procedural logic. Unlike stored procedures, functions return a value and can be used inside SQL expressions.

### Scalar UDF (Returns Single Value)

```sql
CREATE OR REPLACE FUNCTION calculate_gst(amount DECIMAL)
RETURNS DECIMAL
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN ROUND(amount * 0.18, 2);
END;
$$;

-- Usage in SELECT
SELECT product_name, price, calculate_gst(price) AS gst
FROM products;
```

### Table-Valued UDF (Returns a Result Set)

```sql
CREATE OR REPLACE FUNCTION get_customer_orders(p_customer_id INT)
RETURNS TABLE (order_id INT, total DECIMAL, status VARCHAR)
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY
    SELECT o.order_id, o.total, o.status
    FROM orders o
    WHERE o.customer_id = p_customer_id
    ORDER BY o.order_date DESC;
END;
$$;

-- Usage
SELECT * FROM get_customer_orders(42);
```

### SQL-Language UDF (Simpler, Inlinable)

For pure SQL logic, `LANGUAGE sql` is preferred — the planner can inline it for better optimization:

```sql
CREATE OR REPLACE FUNCTION full_name(first VARCHAR, last VARCHAR)
RETURNS TEXT
LANGUAGE sql IMMUTABLE
AS $$
    SELECT first || ' ' || last;
$$;
```

### Function Volatility Categories

| Category | Meaning | Optimization |
|---|---|---|
| `IMMUTABLE` | Same inputs always return same output | Can be cached/inlined |
| `STABLE` | Consistent within a single query | Cannot modify database |
| `VOLATILE` (default) | May return different results each call | No optimization |

### Audit Findings Summary

1. **Mark Functions `IMMUTABLE` When Correct**: `IMMUTABLE` enables constant folding and index usage with expression indexes — incorrectly marking a non-deterministic function as `IMMUTABLE` causes incorrect results.
2. **`LANGUAGE sql` over `plpgsql` for Simple Logic**: SQL-language functions are inlinable — the planner treats them as if the body were inline in the calling query, enabling better plan generation.
3. **Avoid UDFs in `WHERE` on Large Tables**: Scalar UDFs in `WHERE` clauses are evaluated per row and prevent index use unless an expression index exists for that exact function call.

---

## 62. Describe _scalar-valued_ and _table-valued_ functions.

### Technical Audit: Scalar-Valued vs Table-Valued Functions

SQL functions are classified by their return type — **scalar-valued functions** return a single value; **table-valued functions** return a result set.

### Scalar-Valued Functions (SVF)

Return a single atomic value: `INTEGER`, `VARCHAR`, `DECIMAL`, `BOOLEAN`, etc. Usable anywhere an expression is valid — `SELECT` list, `WHERE`, `ORDER BY`, computed columns.

```sql
CREATE OR REPLACE FUNCTION discount_price(base_price DECIMAL, pct DECIMAL)
RETURNS DECIMAL
LANGUAGE sql IMMUTABLE
AS $$
    SELECT ROUND(base_price * (1 - pct / 100), 2);
$$;

SELECT product_name, discount_price(price, 20) AS sale_price
FROM products;
```

### Table-Valued Functions (TVF)

Return a set of rows — essentially a parameterized view. Useful for encapsulating complex, reusable queries with input parameters.

**Inline Table-Valued Function** (single `RETURN QUERY` or `RETURN TABLE`):

```sql
CREATE OR REPLACE FUNCTION orders_in_range(p_start DATE, p_end DATE)
RETURNS TABLE (order_id INT, customer_id INT, total DECIMAL)
LANGUAGE sql STABLE
AS $$
    SELECT order_id, customer_id, total
    FROM orders
    WHERE order_date BETWEEN p_start AND p_end;
$$;

SELECT * FROM orders_in_range('2026-01-01', '2026-03-31')
WHERE total > 500;
```

**Multi-Statement Table-Valued Function** (SQL Server style — builds and returns a table variable):

```sql
-- SQL Server
CREATE FUNCTION dbo.GetTopCustomers (@n INT)
RETURNS @results TABLE (customer_id INT, total_spend DECIMAL)
AS BEGIN
    INSERT INTO @results
    SELECT TOP (@n) customer_id, SUM(total)
    FROM orders GROUP BY customer_id ORDER BY SUM(total) DESC;
    RETURN;
END;
```

### Comparison

| Aspect | Scalar | Table-Valued |
|---|---|---|
| Return type | Single value | Result set (rows × columns) |
| Usage | In expressions | In `FROM` clause |
| Inlinability | Yes (SQL language) | Yes (inline TVF) |
| Composability | Limited | High — joinable |

### Audit Findings Summary

1. **Inline TVFs Over Multi-Statement TVFs**: Inline TVFs are treated as parameterized views by the optimizer — multi-statement TVFs (SQL Server) act as black boxes, preventing plan optimization.
2. **Scalar UDF Performance in Row-Level Operations**: A scalar UDF called once per row in a 10M-row table executes 10M function calls — always consider rewriting as a set-based inline expression.
3. **TVFs vs Views**: TVFs accept parameters (views do not) — use TVFs when the query scope must vary based on input, and views when the logic is static.

---

## 63. How would you define a _stored procedure_ with input and output parameters?

### Technical Audit: Stored Procedure Parameters

Stored procedures accept **input** (`IN`) parameters for data consumption and **output** (`OUT`) parameters to return computed values to the caller.

### PostgreSQL

```sql
CREATE OR REPLACE PROCEDURE process_refund(
    IN  p_order_id     INT,
    IN  p_refund_amt   DECIMAL,
    OUT p_status       TEXT,
    OUT p_new_balance  DECIMAL
)
LANGUAGE plpgsql
AS $$
BEGIN
    -- Validate order
    IF NOT EXISTS (SELECT 1 FROM orders WHERE order_id = p_order_id) THEN
        p_status := 'ERROR: Order not found';
        p_new_balance := NULL;
        RETURN;
    END IF;

    -- Apply refund
    UPDATE accounts a
    SET balance = balance + p_refund_amt
    FROM orders o
    WHERE o.order_id = p_order_id
      AND a.customer_id = o.customer_id
    RETURNING a.balance INTO p_new_balance;

    UPDATE orders SET status = 'refunded' WHERE order_id = p_order_id;

    p_status := 'SUCCESS';
    COMMIT;
END;
$$;
```

Invocation with output parameters:

```sql
DO $$
DECLARE
    v_status      TEXT;
    v_new_balance DECIMAL;
BEGIN
    CALL process_refund(1042, 149.99, v_status, v_new_balance);
    RAISE NOTICE 'Status: %, New Balance: %', v_status, v_new_balance;
END $$;
```

### SQL Server Equivalent

```sql
CREATE PROCEDURE dbo.ProcessRefund
    @OrderId      INT,
    @RefundAmt    DECIMAL(10,2),
    @Status       NVARCHAR(100) OUTPUT,
    @NewBalance   DECIMAL(10,2) OUTPUT
AS BEGIN
    -- Procedure body
    SET @Status = 'SUCCESS';
END;

DECLARE @s NVARCHAR(100), @b DECIMAL(10,2);
EXEC dbo.ProcessRefund 1042, 149.99, @Status = @s OUTPUT, @NewBalance = @b OUTPUT;
```

### Audit Findings Summary

1. **OUT Parameters vs RETURNING**: In PostgreSQL, for single-value returns, a function with `RETURNS` is cleaner than a procedure with `OUT` — use procedures for multi-step transactions, functions for computation.
2. **Validate Before Mutating**: Always validate input parameters before executing DML — wrap in early-exit conditions with descriptive `OUT` status messages rather than raising unhandled exceptions.
3. **Transaction Ownership**: In PostgreSQL, procedures own their transaction lifecycle (`COMMIT`/`ROLLBACK` inside the body) — functions do not. Use procedures for operations requiring explicit transactional control.

---

## 64. What is the difference between a _function_ and a _stored procedure_?

### Technical Audit: Function vs Stored Procedure

Both are precompiled database routines, but they differ in purpose, invocation syntax, return behavior, and transactional capabilities.

### Comparison Table

| Dimension | Function | Stored Procedure |
|---|---|---|
| Return value | Mandatory (scalar or table) | Optional (`OUT` params) |
| Invocation | `SELECT`, `FROM`, expressions | `CALL` (SQL:2003) |
| Use in queries | Yes — `SELECT my_func(col)` | No |
| Transaction control | No `COMMIT`/`ROLLBACK` inside body | Yes (PostgreSQL 11+, SQL Server) |
| Side effects | Discouraged (pure computation) | Expected (DML, commits) |
| Error handling | Raises exception | Can handle and continue |
| Optimization | Inlineable (SQL language) | Black box to planner |

### Functions — Pure Computation

```sql
-- Can be used inline
SELECT order_id, calculate_tax(total) AS tax
FROM orders;

-- Usable in WHERE
SELECT * FROM orders WHERE is_large_order(total) = TRUE;
```

### Stored Procedures — Transactional Workflows

```sql
-- Multi-step transactional operation
CALL complete_order_fulfillment(p_order_id := 1042);
-- Internally: UPDATE inventory, INSERT shipment, UPDATE order status, COMMIT
```

### When to Use Which

Use a **function** when the operation computes and returns a value without side effects — tax calculations, string formatting, date manipulation.

Use a **stored procedure** when the operation is a multi-step business workflow involving DML, transaction management, or error handling across multiple tables.

### Audit Findings Summary

1. **Functions in WHERE/JOIN**: Functions used as predicates in large queries execute once per row — ensure they are `IMMUTABLE`/`STABLE` and consider expression indexes if performance-critical.
2. **PostgreSQL Pre-11**: PostgreSQL before version 11 did not have `PROCEDURE` — all routines were functions. `CALL` syntax and transactional procedures require PostgreSQL 11+.
3. **Avoid Side Effects in Functions**: Functions called by the planner may be invoked multiple times (due to plan re-evaluation) — side effects in functions produce non-deterministic results.

---

## 65. How do you use the _CAST_ and _CONVERT_ functions?

### Technical Audit: CAST and CONVERT

Both functions change a value's data type. `CAST` is the ANSI SQL standard; `CONVERT` is primarily SQL Server and MySQL syntax with additional formatting options.

### CAST — Standard SQL

```sql
-- Syntax: CAST(expression AS target_type)

-- String to integer
SELECT CAST('42' AS INTEGER);

-- Decimal to integer (truncates, does not round)
SELECT CAST(9.99 AS INTEGER);  -- Returns 9

-- Integer to decimal for division
SELECT CAST(7 AS DECIMAL) / 2;  -- Returns 3.5

-- String to date
SELECT CAST('2026-04-26' AS DATE);

-- Integer to varchar
SELECT 'Order #' || CAST(order_id AS VARCHAR) FROM orders;
```

### PostgreSQL :: Shorthand

```sql
SELECT '42'::INTEGER;
SELECT 9.99::INTEGER;
SELECT order_id::VARCHAR FROM orders;
```

### CONVERT — SQL Server and MySQL

**SQL Server** (with style formatting for dates):

```sql
-- CONVERT(target_type, expression [, style])
SELECT CONVERT(VARCHAR, GETDATE(), 103);  -- dd/mm/yyyy format
SELECT CONVERT(DECIMAL(10,2), '49.99');
```

**MySQL**:

```sql
SELECT CONVERT('42', SIGNED INTEGER);
SELECT CONVERT(price, CHAR);
```

### Safe Casting

`CAST` raises an error on invalid conversions. Use `TRY_CAST` (SQL Server) or application-level validation for potentially invalid inputs:

```sql
-- SQL Server: returns NULL instead of error on invalid conversion
SELECT TRY_CAST('not_a_number' AS INT);  -- Returns NULL
```

### Audit Findings Summary

1. **Truncation vs Rounding**: `CAST(9.99 AS INTEGER)` truncates to 9 — use `ROUND()` before casting if rounding is intended.
2. **Implicit Casting Danger**: Many engines perform implicit type coercion (e.g., `'5' = 5`) — implicit casts can prevent index use and produce surprising comparison results. Always cast explicitly.
3. **`TRY_CAST` / `TRY_CONVERT`**: For user-supplied data that may not be valid, use `TRY_CAST` (SQL Server) or validate at the application layer — unhandled cast failures terminate the query.

---

## 66. What is a _database transaction_?

### Technical Audit: Database Transaction

A **transaction** is a logical unit of work consisting of one or more SQL operations that are treated as an atomic whole. Either all operations within the transaction succeed and are committed, or none of them are applied.

### Transaction Lifecycle

```sql
BEGIN;              -- Start transaction

UPDATE accounts SET balance = balance - 500 WHERE id = 1;
UPDATE accounts SET balance = balance + 500 WHERE id = 2;
INSERT INTO transaction_log (from_id, to_id, amount) VALUES (1, 2, 500);

COMMIT;             -- Make all changes permanent
-- or ROLLBACK;     -- Undo all changes since BEGIN
```

### Autocommit Mode

By default, most SQL clients operate in **autocommit** mode — each statement is its own implicit transaction. Explicitly starting `BEGIN` suspends autocommit for the block.

### Savepoints

Savepoints allow partial rollback within a transaction:

```sql
BEGIN;

UPDATE inventory SET stock = stock - 10 WHERE product_id = 5;
SAVEPOINT inventory_updated;

UPDATE orders SET status = 'processing' WHERE order_id = 1042;
-- If this fails:
ROLLBACK TO SAVEPOINT inventory_updated;
-- Only the orders UPDATE is undone; inventory change is preserved

COMMIT;
```

### Transaction States

```
Active → Partially Committed → Committed
                             → Failed → Aborted (Rolled Back)
```

### Implicit Transactions (DDL)

In PostgreSQL, DDL (`CREATE TABLE`, `ALTER TABLE`) is transactional — an `ALTER TABLE` inside a `BEGIN` block is rolled back on `ROLLBACK`. This is not the case in MySQL or Oracle (DDL auto-commits).

### Audit Findings Summary

1. **Keep Transactions Short**: Long-running transactions hold locks and prevent vacuuming (PostgreSQL) — minimize the time between `BEGIN` and `COMMIT`.
2. **Never Commit in Loops**: Building a transaction around a loop that commits each iteration loses atomicity — batch the entire loop in one transaction or use bulk operations.
3. **DDL Transactionality**: PostgreSQL's transactional DDL is a powerful migration safety net — always run schema migrations inside transactions with rollback validation.

---

## 67. Explain the concept of _locking_ and its types in SQL databases.

### Technical Audit: Database Locking

**Locks** are concurrency control mechanisms that prevent conflicting operations from executing simultaneously. They ensure that concurrent transactions do not leave the database in an inconsistent state.

### Lock Granularity Levels

**Row-Level Locks**: Lock individual rows — highest concurrency, most fine-grained.

**Page-Level Locks**: Lock storage pages (8KB blocks) — intermediate granularity.

**Table-Level Locks**: Lock the entire table — lowest concurrency, used for DDL operations.

**Database-Level Locks**: Lock the entire database — used for backups, restores.

### Lock Modes (PostgreSQL)

| Mode | Abbreviation | Conflicts With |
|---|---|---|
| `ACCESS SHARE` | `SELECT` | `ACCESS EXCLUSIVE` only |
| `ROW SHARE` | `SELECT FOR UPDATE` | `EXCLUSIVE`, `ACCESS EXCLUSIVE` |
| `ROW EXCLUSIVE` | `INSERT`, `UPDATE`, `DELETE` | `SHARE`, `EXCLUSIVE` |
| `SHARE` | `CREATE INDEX` | `ROW EXCLUSIVE` and above |
| `EXCLUSIVE` | Rare DDL | Most other modes |
| `ACCESS EXCLUSIVE` | `DROP`, `TRUNCATE`, `ALTER` | All other modes |

### Explicit Row Locking

```sql
-- Lock selected rows for update (prevents concurrent modification)
SELECT * FROM inventory
WHERE product_id = 42
FOR UPDATE;

-- Lock without blocking (skip locked rows)
SELECT * FROM job_queue
WHERE status = 'pending'
ORDER BY created_at
LIMIT 1
FOR UPDATE SKIP LOCKED;
```

`FOR UPDATE SKIP LOCKED` is the standard pattern for queue processing — concurrent workers each claim a different row without blocking each other.

### Lock Contention and Deadlocks

A **deadlock** occurs when two transactions each hold a lock the other needs. Databases detect and resolve deadlocks by aborting one transaction.

Prevention: always acquire locks in the same order across transactions.

### MVCC (Multi-Version Concurrency Control)

PostgreSQL and MySQL InnoDB use MVCC — readers do not block writers and writers do not block readers. Each transaction sees a consistent snapshot of the database as of its start time, eliminating the need for read locks in most cases.

### Audit Findings Summary

1. **`SKIP LOCKED` for Job Queues**: The standard pattern for concurrent queue processors — eliminates the serialization bottleneck of `SELECT ... FOR UPDATE` without `SKIP LOCKED`.
2. **Lock Order Consistency**: Deadlocks are preventable by ensuring all transactions acquire locks on multiple rows/tables in the same canonical order (e.g., always lock lower `id` first).
3. **Minimize Lock Duration**: Acquire locks as late as possible and release as early as possible — never hold locks while waiting for external I/O (API calls, file reads).

---

## 68. What are the properties of _transactions_?

### Technical Audit: Transaction Properties (ACID)

The properties of a transaction are defined by the **ACID** model. See Q45 for the full ACID deep-dive; this entry focuses on their operational manifestation in SQL.

### Atomicity in Practice

The all-or-nothing guarantee is implemented via undo logging (InnoDB rollback segments) or WAL (PostgreSQL). On crash mid-transaction, recovery replays the log to restore the pre-transaction state.

```sql
BEGIN;
UPDATE wallet SET balance = balance - 1000 WHERE user_id = 1;
-- Power failure here: on restart, this UPDATE is rolled back automatically
COMMIT;
```

### Consistency Enforcement Mechanisms

| Mechanism | Purpose |
|---|---|
| `NOT NULL` | Prevents missing required values |
| `UNIQUE` | Prevents duplicate key violations |
| `CHECK` | Domain-specific business rules |
| `FOREIGN KEY` | Referential integrity |
| `TRIGGER` | Complex cross-row/cross-table rules |

### Isolation Anomalies

Different isolation levels protect against different anomalies:

| Anomaly | Description | Prevented at |
|---|---|---|
| Dirty Read | Reading uncommitted data from another TX | `READ COMMITTED` |
| Non-Repeatable Read | Same query returns different rows within one TX | `REPEATABLE READ` |
| Phantom Read | New rows appear in repeated range queries | `SERIALIZABLE` |
| Serialization Anomaly | Concurrent TX produce non-serializable outcome | `SERIALIZABLE` |

### Durability Implementation

PostgreSQL WAL ensures durability: changes are written to the WAL (durable log) before the data file is modified. On crash, the recovery process replays unfinished WAL records.

```sql
-- Check WAL configuration
SHOW synchronous_commit;  -- 'on' = fully durable; 'off' = potential data loss window
```

### Audit Findings Summary

1. **Isolation Level Default**: Most engines default to `READ COMMITTED` — sufficient for most OLTP applications but vulnerable to non-repeatable reads. Elevate to `REPEATABLE READ` or `SERIALIZABLE` for financial operations.
2. **Durability vs Throughput**: `synchronous_commit = off` in PostgreSQL can increase write throughput 5-10× at the cost of a small data-loss window (configurable `wal_writer_delay`) — appropriate for event logging, not financial data.
3. **Constraint Deferral**: `DEFERRABLE INITIALLY DEFERRED` constraints are checked at `COMMIT` rather than per-statement — useful when circular foreign key dependencies require both rows to be inserted before constraints are validated.

---

## 69. How do you manage _transaction isolation levels_?

### Technical Audit: Transaction Isolation Levels

**Transaction isolation levels** define how the operations of one transaction are visible to other concurrent transactions. They are specified in SQL:1992 and implemented (with variations) across all major RDBMS.

### The Four Standard Levels

```sql
-- Set isolation level for current transaction (PostgreSQL)
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;

-- Set session default
SET SESSION CHARACTERISTICS AS TRANSACTION ISOLATION LEVEL REPEATABLE READ;
```

### READ UNCOMMITTED

Allows dirty reads — reading uncommitted changes from other transactions. Not recommended; PostgreSQL does not implement it (treats it as `READ COMMITTED`).

### READ COMMITTED (Default in PostgreSQL, SQL Server)

Each statement within the transaction sees only committed data as of the statement's start time. Dirty reads are prevented; non-repeatable reads are possible.

```sql
-- Transaction A reads balance: 1000
-- Transaction B commits: balance = 500
-- Transaction A reads balance again: 500 (non-repeatable read)
```

### REPEATABLE READ (Default in MySQL InnoDB)

The transaction sees a consistent snapshot as of its first read. Non-repeatable reads are prevented; phantom reads are possible in standard SQL (PostgreSQL's MVCC prevents phantoms even at this level).

### SERIALIZABLE

The strictest level — concurrent transactions produce results identical to some serial execution order. Implemented in PostgreSQL via **Serializable Snapshot Isolation (SSI)** — detects and aborts transactions that would produce non-serializable outcomes.

```sql
BEGIN TRANSACTION ISOLATION LEVEL SERIALIZABLE;
SELECT SUM(balance) FROM accounts WHERE type = 'savings';
-- If another transaction modifies this set concurrently, one will be aborted
COMMIT;
```

### Performance vs Correctness Trade-off

Higher isolation levels reduce concurrency and increase the risk of transaction aborts/retries:

`READ COMMITTED` → highest concurrency → `SERIALIZABLE` → highest consistency

### Audit Findings Summary

1. **Financial Operations Require SERIALIZABLE**: Bank transfers, inventory reservations, and any check-then-act pattern are vulnerable to serialization anomalies at lower levels — use `SERIALIZABLE`.
2. **Retry Logic for SERIALIZABLE**: `SERIALIZABLE` transactions may be aborted with error `40001` (serialization failure) — implement exponential backoff retry logic at the application layer.
3. **PostgreSQL MVCC Advantage**: PostgreSQL's SSI implementation of `SERIALIZABLE` is non-blocking (unlike 2PL-based serializable in older systems) — the concurrency penalty is lower than traditional lock-based implementations.

---

## 70. What does it mean to _commit_ or _roll back_ a transaction?

### Technical Audit: COMMIT and ROLLBACK

`COMMIT` and `ROLLBACK` are the two terminal commands of a transaction. They determine whether the work performed during the transaction is permanently applied or entirely undone.

### COMMIT

`COMMIT` finalizes all changes made during the transaction — writing them durably to the database and releasing all held locks. After `COMMIT`, changes are visible to other transactions.

```sql
BEGIN;
UPDATE inventory SET stock = stock - 5 WHERE product_id = 99;
INSERT INTO order_items (order_id, product_id, quantity) VALUES (1042, 99, 5);
COMMIT;  -- Both changes are now permanent and visible
```

### ROLLBACK

`ROLLBACK` undoes all changes made during the transaction — restoring the database to the state it was in at `BEGIN`. All locks are released.

```sql
BEGIN;
DELETE FROM customers WHERE last_active < '2023-01-01';
-- Uh oh: forgot the WHERE clause was too broad
ROLLBACK;  -- All DELETEs are undone; data is intact
```

### SAVEPOINT and Partial Rollback

```sql
BEGIN;

UPDATE accounts SET balance = balance - 1000 WHERE id = 1;
SAVEPOINT after_debit;

-- Attempt risky operation
UPDATE bonus_pool SET total = total + 1000 WHERE quarter = 'Q1';

-- If this fails or produces wrong results:
ROLLBACK TO SAVEPOINT after_debit;
-- Only the bonus_pool UPDATE is undone

COMMIT;  -- Only the accounts UPDATE is committed
```

### Implicit Rollback

If a transaction encounters an unhandled error, the engine automatically rolls back the current statement (SQL Server) or the entire transaction (PostgreSQL). In PostgreSQL, after an error the transaction enters an **aborted** state — all subsequent commands until `ROLLBACK` return `ERROR: current transaction is aborted`.

### Autocommit and DDL

In MySQL, DDL statements (`CREATE`, `ALTER`, `DROP`) issue an implicit `COMMIT` before executing — they cannot be rolled back. In PostgreSQL, DDL is transactional and fully rollback-capable.

### Audit Findings Summary

1. **PostgreSQL Aborted State**: After a runtime error in a transaction block, PostgreSQL requires an explicit `ROLLBACK` (or `ROLLBACK TO SAVEPOINT`) before the connection can process new commands — handle this in connection pool error recovery logic.
2. **No Partial COMMIT**: SQL does not support committing part of a transaction — if atomic sub-units are needed, use savepoints or design separate transactions.
3. **DDL and Autocommit in MySQL**: `ALTER TABLE` in MySQL issues an implicit commit — schema migrations cannot be rolled back. Always test migrations in a staging environment before production.

---

## 71. How can SQL be integrated with _big data_ technologies?

### Technical Audit: SQL and Big Data Integration

Modern big data ecosystems expose SQL interfaces to enable analysts to query massive datasets without learning low-level frameworks like MapReduce or Spark RDD APIs.

### SQL-on-Hadoop

**Apache Hive**: Translates HiveQL (SQL dialect) into MapReduce or Tez jobs on HDFS. Batch-oriented; high latency but scalable to petabytes.

**Apache Impala**: In-memory, MPP SQL engine on HDFS/S3. Sub-second queries on structured data — significantly faster than Hive for interactive analytics.

**Presto / Trino**: Distributed SQL query engine that federates queries across HDFS, S3, RDBMS, Kafka, and other sources in a single query.

### Spark SQL

Apache Spark provides a SQL interface via `DataFrame`/`Dataset` APIs and `spark.sql()`:

```python
from pyspark.sql import SparkSession
spark = SparkSession.builder.appName("analytics").getOrCreate()

result = spark.sql("""
    SELECT region, SUM(revenue) AS total
    FROM parquet.`/data/sales/`
    GROUP BY region
    ORDER BY total DESC
""")
result.show()
```

Spark SQL supports reading Parquet, ORC, JSON, CSV, Delta Lake, and JDBC sources.

### Cloud Data Lakes with SQL

**AWS Athena**: Serverless Presto-based SQL over S3 — pay per query scanned, no infrastructure.

**BigQuery**: Serverless columnar SQL engine with petabyte-scale performance.

**Azure Synapse Analytics**: SQL queries over Data Lake Storage Gen2.

```sql
-- Athena: query Parquet files in S3 directly
SELECT year, month, SUM(clicks) AS total_clicks
FROM "my_database"."clickstream"
WHERE year = 2026
GROUP BY year, month;
```

### Delta Lake and Lakehouse Architecture

Delta Lake adds ACID transactions, schema enforcement, and time-travel to data lakes — enabling SQL `UPDATE`, `DELETE`, and `MERGE` on lake storage:

```sql
-- Delta Lake MERGE (upsert)
MERGE INTO delta.`/data/customers` AS target
USING updates AS source ON target.id = source.id
WHEN MATCHED THEN UPDATE SET *
WHEN NOT MATCHED THEN INSERT *;
```

### Audit Findings Summary

1. **Columnar Format Selection**: Always store big data in Parquet or ORC (columnar, compressed) rather than CSV — columnar formats reduce scan cost by reading only queried columns, yielding 5-10× performance improvements.
2. **Partitioning at the Lake Level**: Partition lake storage by common query dimensions (`year/month/region`) — enables partition pruning in Athena, Presto, and Spark SQL, dramatically reducing scanned data volume.
3. **Lakehouse over Warehouse for Raw Data**: For exploratory analytics on raw and semi-structured data, a lakehouse (Delta Lake + Spark SQL) is more flexible and cost-effective than a traditional warehouse.

---

## 72. Discuss the interoperability of SQL with _cloud-based data stores_.

### Technical Audit: SQL and Cloud Data Store Interoperability

Modern cloud data stores — regardless of their underlying storage model — expose SQL or SQL-compatible interfaces, making SQL the lingua franca of cloud analytics in 2026.

### Cloud Relational Databases (SQL Native)

Fully managed relational databases that accept standard SQL:

**Amazon RDS / Aurora**: PostgreSQL and MySQL compatible. Aurora Serverless v2 auto-scales capacity.

**Google Cloud SQL / AlloyDB**: PostgreSQL-compatible with columnar acceleration for HTAP workloads.

**Azure SQL Database**: T-SQL (SQL Server dialect) managed service.

### Cloud Data Warehouses (SQL over Columnar Storage)

**Snowflake**: ANSI SQL over a multi-cluster, shared-data architecture. Separates compute from storage — scales query compute independently.

**BigQuery**: Serverless SQL over Capacitor columnar format. Streaming inserts and batch loads; pay per bytes scanned.

**Amazon Redshift**: PostgreSQL-based columnar warehouse. Redshift Spectrum extends SQL queries to S3 data lakes.

### NoSQL Stores with SQL Interfaces

Several NoSQL systems now offer SQL or SQL-like query languages:

**Amazon DynamoDB** — PartiQL: SQL-compatible query language over DynamoDB:

```sql
SELECT * FROM "Orders" WHERE "customer_id" = 42;
```

**MongoDB** — supports SQL via BI Connector (ODBC/JDBC interface for BI tools).

**Cassandra** — CQL (Cassandra Query Language): SQL-like syntax with distributed table semantics.

### Data Federation with Trino / BigQuery Omni

Query across cloud-native stores in a single SQL statement:

```sql
-- Trino federated query: joins PostgreSQL RDS with S3 Parquet
SELECT r.customer_name, COUNT(s.event_id) AS total_events
FROM postgresql.public.customers r
JOIN hive.events.clickstream s ON r.customer_id = s.user_id
GROUP BY r.customer_name;
```

### Audit Findings Summary

1. **Dialect Awareness**: Cloud SQL dialects diverge from ANSI SQL — Snowflake's `QUALIFY`, BigQuery's `UNNEST`, and Redshift's `DISTKEY`/`SORTKEY` are not portable. Abstract these in an ORM or dbt layer when cross-cloud portability is required.
2. **Storage Cost Optimization**: In BigQuery and Athena, query cost is proportional to bytes scanned — partition and cluster tables, use `SELECT specific_columns` never `SELECT *`, and store data in columnar formats.
3. **Connection Pooling for Cloud RDBMS**: Managed cloud RDS instances have connection limits — use PgBouncer (PostgreSQL) or ProxySQL (MySQL) as a connection pooler between the application and the cloud database.

---

## 73. What is _Data Lake_ and how can SQL interact with it?

### Technical Audit: Data Lake and SQL Interaction

A **data lake** is a centralized repository that stores raw data in its native format — structured, semi-structured (JSON, XML), and unstructured (logs, images) — at scale, typically on cheap object storage (S3, GCS, ADLS).

### Data Lake vs Data Warehouse

| Dimension | Data Lake | Data Warehouse |
|---|---|---|
| Data format | Raw (any format) | Structured, processed |
| Schema | Schema-on-read | Schema-on-write |
| Users | Data scientists, engineers | Analysts, business users |
| Storage cost | Very low (object storage) | Higher (managed service) |
| Query performance | Variable | Optimized |
| Data processing | Required before use | Ready to query |

### SQL Interaction Patterns

**Schema-on-Read with Athena (AWS)**:

```sql
-- Define external table over S3 data
CREATE EXTERNAL TABLE clickstream (
    user_id    BIGINT,
    event_type VARCHAR,
    page_url   VARCHAR,
    timestamp  TIMESTAMP
)
STORED AS PARQUET
LOCATION 's3://my-bucket/clickstream/year=2026/';

-- Query directly
SELECT event_type, COUNT(*) FROM clickstream
WHERE timestamp >= TIMESTAMP '2026-04-01'
GROUP BY event_type;
```

**Delta Lake with Spark SQL**:

```sql
-- Create a Delta table on a data lake
CREATE TABLE delta.`/lake/orders/`
USING DELTA
AS SELECT * FROM staging_orders;

-- Full ACID SQL on lake storage
UPDATE delta.`/lake/orders/`
SET status = 'archived'
WHERE order_date < '2024-01-01';

-- Time travel: query historical snapshot
SELECT * FROM delta.`/lake/orders/`
TIMESTAMP AS OF '2026-04-01';
```

### Lakehouse Architecture

The **lakehouse** pattern (popularized by Databricks) combines data lake economics with data warehouse reliability:

- Delta Lake / Apache Iceberg / Apache Hudi provide ACID transactions on lake storage
- dbt runs SQL transformations on the lake
- BI tools query via SQL endpoints (Databricks SQL, Athena)

### Audit Findings Summary

1. **Apache Iceberg as Open Standard**: In 2026, Apache Iceberg has emerged as the open standard for lakehouse table format — supported by Snowflake, BigQuery, Spark, Flink, and Trino. Prefer Iceberg over proprietary formats for portability.
2. **Data Quality at Ingestion**: A data lake without quality controls becomes a "data swamp" — enforce schema validation and null checks at the ingestion layer before data lands in the lake.
3. **Partitioning Strategy**: Lake partitioning should match query patterns — partition by `year/month/day` for time-series access, by `region` or `tenant_id` for multi-tenant filtering. Over-partitioning (too many small files) degrades list/read performance.

---

## 74. Explain the interaction between SQL and _NoSQL_ within the same application.

### Technical Audit: SQL and NoSQL Polyglot Persistence

Modern applications routinely use SQL and NoSQL databases in combination — a pattern known as **polyglot persistence**. Each store is chosen for what it does best.

### Common Polyglot Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Application Layer                        │
└────────┬────────────────┬──────────────────┬────────────────┘
         │                │                  │
    PostgreSQL         MongoDB            Redis
   (Transactional)   (Catalogue/Docs)   (Cache/Sessions)
   orders, accounts  product metadata   hot data, rate limits
```

### Typical Use Case Mapping

| Data Type | SQL (PostgreSQL) | NoSQL |
|---|---|---|
| Transactional records | Orders, payments | — |
| User sessions | — | Redis (key-value) |
| Product catalog | — | MongoDB (document) |
| Social graph | — | Neo4j (graph) |
| Time-series metrics | — | InfluxDB / TimescaleDB |
| Full-text search | — | Elasticsearch |
| Event streams | — | Apache Kafka → OLAP |

### Synchronization Patterns

**Change Data Capture (CDC)**: Stream changes from PostgreSQL to NoSQL stores in near-real-time using Debezium → Kafka:

```
PostgreSQL WAL → Debezium → Kafka → MongoDB (read replica)
                                  → Elasticsearch (full-text index)
```

**Dual Write**: Application writes to both SQL and NoSQL simultaneously — simpler but risks inconsistency on partial failure. Use only with idempotent writes and reconciliation.

**Event Sourcing**: Write events to Kafka; derive SQL and NoSQL projections from the event stream independently.

### JSONB: SQL with NoSQL Flexibility

PostgreSQL's `JSONB` type provides document-store capabilities within SQL:

```sql
-- Store flexible metadata as JSONB
ALTER TABLE products ADD COLUMN metadata JSONB;

-- Query JSONB attributes
SELECT name FROM products
WHERE metadata->>'color' = 'red'
  AND (metadata->>'weight_kg')::FLOAT < 1.5;

-- GIN index for fast JSONB queries
CREATE INDEX idx_products_metadata ON products USING GIN (metadata);
```

### Audit Findings Summary

1. **Avoid Distributed Transactions Across Stores**: Achieving ACID across SQL and NoSQL requires the Saga pattern or eventual consistency — design workflows to be tolerant of temporary inconsistency between stores.
2. **JSONB as a Bridge**: For schemas that need both relational integrity and flexible document storage, PostgreSQL's `JSONB` can replace a separate MongoDB — evaluate before adding operational complexity.
3. **Eventual Consistency Tolerance**: Design UIs and APIs to tolerate read-your-writes delays when reading from a NoSQL replica populated by CDC — show optimistic UI updates while the stream catches up.

---

## 75. How does SQL work within a _microservices architecture_?

### Technical Audit: SQL in Microservices

In a microservices architecture, the guiding principle for data management is **database per service** — each service owns its own database, preventing tight coupling through shared schemas.

### Database Per Service Pattern

```
┌──────────────┐   ┌──────────────┐   ┌──────────────┐
│  Order       │   │  Inventory   │   │  Customer    │
│  Service     │   │  Service     │   │  Service     │
│  PostgreSQL  │   │  MySQL       │   │  PostgreSQL  │
│  orders_db   │   │  inventory_db│   │  customers_db│
└──────────────┘   └──────────────┘   └──────────────┘
```

Each service may use a different SQL (or NoSQL) engine appropriate to its access patterns.

### Cross-Service Data Access

Direct SQL JOINs across service databases are forbidden in microservices — they create coupling. Instead:

**API composition**: Services call each other's REST/gRPC endpoints; the client assembles the composite response.

**Event-driven synchronization**: Services publish domain events to Kafka; subscribing services maintain local read models.

```
Order Service emits → OrderPlaced event → Kafka
Inventory Service consumes → updates local reservation table
Customer Service consumes → updates local order history view
```

### Distributed Transactions: Saga Pattern

The Saga pattern replaces ACID distributed transactions with a sequence of local transactions with compensating operations:

```
1. Order Service: CREATE order (local TX) → publishes OrderCreated
2. Inventory Service: RESERVE stock (local TX) → publishes StockReserved
3. Payment Service: CHARGE card (local TX) → publishes PaymentCompleted
4. If any step fails: publish failure event → each service runs compensating TX
```

### Schema Migrations in Microservices

Each service manages its own migrations independently using tools like **Flyway** or **Liquibase**:

```
/migrations/
  V1__create_orders_table.sql
  V2__add_status_index.sql
  V3__add_region_column.sql
```

### Audit Findings Summary

1. **No Shared Database**: Sharing a database between microservices is the most common anti-pattern — it reintroduces monolithic coupling at the data layer, making services impossible to deploy independently.
2. **CQRS for Read Models**: Combine Command Query Responsibility Segregation (CQRS) with event sourcing — write commands go to the service's SQL database; read queries are served from denormalized read models updated via events.
3. **Eventual Consistency is the Default**: Accept that cross-service data views are eventually consistent, not immediately consistent — design UIs and downstream consumers accordingly.

---

## 76. What are some common SQL coding practices you follow?

### Technical Audit: SQL Coding Best Practices

Consistent coding standards improve readability, maintainability, and correctness across teams working on SQL codebases.

### Formatting and Readability

**Keyword capitalization** and **consistent indentation**:

```sql
SELECT
    c.customer_id,
    c.name                              AS customer_name,
    COUNT(o.order_id)                   AS order_count,
    COALESCE(SUM(o.total), 0)           AS lifetime_value
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
WHERE c.status = 'active'
  AND c.created_at >= '2026-01-01'
GROUP BY c.customer_id, c.name
HAVING COUNT(o.order_id) > 0
ORDER BY lifetime_value DESC;
```

**Always use table aliases** in multi-table queries and qualify all column references with the alias.

**Never use `SELECT *`** in production — always list columns explicitly.

### Naming Conventions

Use `snake_case` for all identifiers. Table names should be singular nouns (`customer`, `order`) or plural depending on team convention — be consistent. Prefix boolean columns with `is_` or `has_`. Primary keys should be `{table}_id` (e.g., `customer_id`, `order_id`).

### Safety Practices

**Always include `WHERE` in `UPDATE`/`DELETE`**. Before executing destructive operations, run the equivalent `SELECT` first to validate scope.

**Use transactions for multi-step DML** — never execute multiple related `INSERT`/`UPDATE`/`DELETE` statements outside a transaction.

**Parameterized queries for user input** — never concatenate user input into SQL strings.

```sql
-- ORM/driver parameterization
SELECT * FROM users WHERE email = $1 AND status = $2;
```

### Code Organization

Break complex queries into CTEs with descriptive names. Add inline comments for non-obvious business logic:

```sql
WITH eligible_customers AS (
    -- Customers active in last 90 days with at least 2 orders
    SELECT customer_id
    FROM customers
    WHERE last_active >= NOW() - INTERVAL '90 days'
),
...
```

### Audit Findings Summary

1. **`EXPLAIN ANALYZE` Before Deploying**: Test every new query against production-scale data in staging with `EXPLAIN ANALYZE` before deploying.
2. **Version Control All SQL**: Schema migrations and stored procedures belong in Git — use Flyway, Liquibase, or Alembic to track and apply changes deterministically.
3. **Avoid Magic Numbers**: Define threshold values as named CTEs, comments, or application constants — `WHERE total > 10000` communicates less than `-- Premium order threshold` context.

---

## 77. How can you ensure the portability of _SQL scripts_ across different database systems?

### Technical Audit: SQL Portability

SQL portability is the ability to run scripts across multiple database engines with minimal or no modification. In practice, full portability is constrained by vendor-specific extensions — the goal is minimizing the delta.

### Stick to ANSI SQL Core

The following are broadly portable across PostgreSQL, MySQL, SQL Server, and Oracle:

- `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `MERGE`
- `JOIN` types (`INNER`, `LEFT`, `RIGHT`, `FULL`)
- `GROUP BY`, `HAVING`, `ORDER BY`
- `CASE WHEN ... END`
- `COALESCE`, `NULLIF`, `CAST`
- Window functions (`ROW_NUMBER`, `RANK`, `SUM OVER`, etc.)
- `WITH` (CTEs)

### Common Portability Pitfalls

| Feature | PostgreSQL | MySQL | SQL Server | Oracle |
|---|---|---|---|---|
| String concat | `||` | `CONCAT()` | `+` or `CONCAT()` | `||` or `CONCAT()` |
| Auto-increment | `SERIAL` / `IDENTITY` | `AUTO_INCREMENT` | `IDENTITY` | `SEQUENCE` |
| Limit | `LIMIT n` | `LIMIT n` | `TOP n` / `FETCH FIRST n` | `ROWNUM` / `FETCH FIRST` |
| Date functions | `NOW()`, `DATE_TRUNC` | `NOW()`, `DATE_FORMAT` | `GETDATE()`, `DATEPART` | `SYSDATE`, `TRUNC` |
| Boolean | `BOOLEAN` | `TINYINT(1)` | `BIT` | No native |

### Portability Strategies

**Use `CONCAT()` over `||`**: More universally supported.

**Use `CAST()` over `::`**: PostgreSQL's `::` shorthand is non-standard.

**Use `FETCH FIRST n ROWS ONLY`**: The SQL:2008 standard pagination syntax, now supported by PostgreSQL, SQL Server 2012+, DB2, and Oracle 12c+.

```sql
-- Portable pagination (SQL:2008)
SELECT * FROM products
ORDER BY created_at DESC
OFFSET 0 ROWS FETCH FIRST 20 ROWS ONLY;
```

**Abstraction layers**: ORMs (SQLAlchemy, Hibernate, Prisma) handle dialect differences automatically. For raw SQL, use an abstraction layer or maintain dialect-specific migration scripts.

### Audit Findings Summary

1. **Document Dialect Dependencies**: Explicitly flag non-portable constructs in code comments — `-- PostgreSQL-specific: JSONB` alerts developers during potential database migrations.
2. **Integration Testing Across Engines**: If multi-engine support is a requirement, CI pipelines should run against all target databases — dialect bugs surface only at runtime.
3. **`FETCH FIRST` over `LIMIT`**: Adopt `FETCH FIRST n ROWS ONLY` for new cross-platform codebases — it is the ANSI standard and supported by all major 2026 RDBMS versions.

---

## 78. What methods do you use for version controlling _SQL scripts_?

### Technical Audit: SQL Version Control

SQL schema and data scripts require the same version control discipline as application code. Unversioned schema changes are the leading cause of environment drift and deployment failures.

### Migration-Based Version Control

**Flyway** and **Liquibase** are the de facto tools for SQL migration management.

**Flyway naming convention**:

```
migrations/
  V1__create_users_table.sql
  V2__add_email_index.sql
  V3__add_orders_table.sql
  V4__add_region_column_to_orders.sql
```

Flyway maintains a `flyway_schema_history` table tracking applied migrations. On application startup, it applies any pending migrations in version order.

### Migration File Principles

**One change per file**: Each migration should be atomic and focused — `V5__add_customer_status_column.sql`, not a mixed bag.

**Always write rollback scripts**: For every `V5__up.sql`, maintain a corresponding `V5__down.sql` rollback script.

**Migrations are immutable**: Never edit a committed migration — create a new migration to amend a previous change.

```sql
-- V5__add_customer_status.sql
ALTER TABLE customers ADD COLUMN status VARCHAR(20) NOT NULL DEFAULT 'active';
CREATE INDEX idx_customers_status ON customers (status);
```

### Git + CI Integration

All migration files live in the application repository under version control:

```
/src
/migrations
  /V1__initial_schema.sql
  /V2__add_audit_columns.sql
/tests
```

CI pipeline runs `flyway migrate` against a test database on every PR — schema changes are validated before merge.

### Stored Procedure Version Control

Store procedures and functions as `CREATE OR REPLACE` scripts in the repository — treat them as first-class code artifacts with code review and history.

### Audit Findings Summary

1. **Baseline Existing Databases**: When adopting Flyway/Liquibase on an existing database, generate a baseline migration from the current schema state to anchor the migration history.
2. **`CREATE OR REPLACE` for Idempotency**: Use `CREATE OR REPLACE` for functions, views, and procedures in migrations — allows re-running migrations safely in case of partial failure.
3. **Separate Schema and Data Migrations**: Keep DDL changes (schema) and DML changes (data seeds/backfills) in separate migration files — data migrations are often environment-specific and may not run in all environments.

---

## 79. What are the benefits of using _stored procedures_ instead of embedding SQL queries in code?

### Technical Audit: Stored Procedures vs Embedded SQL

Both approaches implement data access logic — the trade-offs involve performance, security, maintainability, and portability.

### Benefits of Stored Procedures

**Reduced Network Traffic**: A single `CALL procedure_name(params)` replaces multiple round-trip queries — significant for latency-sensitive operations over high-latency database connections.

**Execution Plan Caching**: The query plan is compiled and cached on first execution. Repeated calls reuse the cached plan, eliminating parse/plan overhead.

**Security Boundary**: Grant `EXECUTE` on a procedure without granting direct table access:

```sql
GRANT EXECUTE ON PROCEDURE get_user_profile TO web_app_role;
-- web_app_role cannot SELECT directly from users table
```

**Centralized Business Logic**: Complex multi-step workflows (order fulfillment, payment processing) are defined once in the database layer — consistent behavior regardless of which application calls them.

**SQL Injection Reduction**: Procedures accept typed parameters — SQL injection via parameter values is not possible because parameters are never interpolated into SQL strings inside the database.

### Limitations vs Embedded SQL (with ORM/Parameterized Queries)

**Version Control Complexity**: Stored procedures in the database are harder to version and test than application code — mitigated by storing them as SQL files in the repository.

**Portability**: PL/pgSQL, T-SQL, and PL/SQL are vendor-specific — procedures create database lock-in.

**Testability**: Unit testing stored procedures requires a running database — application code with parameterized queries is easier to mock and test.

**Debugging**: Debugging stored procedures is more difficult than application-layer code.

### Recommendation (2026 Context)

For stable, performance-critical, security-sensitive workflows: stored procedures. For application business logic that changes frequently and requires testability: parameterized queries through an ORM.

### Audit Findings Summary

1. **Hybrid Approach**: Use stored procedures for security-critical operations (user authentication checks, financial transactions) and ORM for CRUD operations that benefit from testing and portability.
2. **Avoid Logic Fragmentation**: Don't split a single workflow across stored procedures and application code — pick one layer and be consistent to avoid debugging nightmares.
3. **Parameterization is Non-Negotiable**: Whether using stored procedures or embedded SQL, all user-supplied values must be parameterized — SQL injection is always a risk when string concatenation is used.

---

## 80. How do you document _SQL code_ effectively?

### Technical Audit: SQL Code Documentation

SQL code documentation ensures that complex queries, stored procedures, and schema decisions remain understandable to team members and future maintainers.

### Inline Comments

Use `--` for single-line comments and `/* */` for block comments. Comments should explain *why*, not *what* — the SQL itself communicates what it does:

```sql
-- Returns active customers who have made a purchase in the last 90 days
-- Excludes test accounts (email ending in @internal.example.com)
SELECT
    c.customer_id,
    c.name,
    COUNT(o.order_id)    AS recent_orders,
    MAX(o.order_date)    AS last_order_date
FROM customers c
JOIN orders o ON c.id = o.customer_id
WHERE
    c.status = 'active'
    AND c.email NOT LIKE '%@internal.example.com'  -- Exclude test accounts
    AND o.order_date >= NOW() - INTERVAL '90 days'
GROUP BY c.customer_id, c.name;
```

### Stored Procedure Documentation Header

```sql
-- =============================================================
-- Function: calculate_order_total
-- Description: Calculates order total including applicable GST
--              and loyalty discount for a given customer tier.
-- Parameters:
--   p_order_id     (INT)  - Order to calculate
--   p_customer_id  (INT)  - Customer for tier lookup
-- Returns:
--   DECIMAL(10,2) - Final total after tax and discount
-- Author: Swarup
-- Last Modified: 2026-04-26
-- =============================================================
CREATE OR REPLACE FUNCTION calculate_order_total(
    p_order_id    INT,
    p_customer_id INT
) RETURNS DECIMAL(10,2) ...
```

### Schema Documentation

Use `COMMENT ON` to attach documentation to tables and columns — visible in psql `\d` and database documentation tools:

```sql
COMMENT ON TABLE orders IS 'Customer purchase records. Append-only; use status column for lifecycle management.';
COMMENT ON COLUMN orders.status IS 'Lifecycle state: pending → processing → shipped → delivered | cancelled | refunded';
```

### dbt Documentation

For SQL transformations in modern data stacks, **dbt** provides `schema.yml` for documentation:

```yaml
models:
  - name: active_customer_summary
    description: "Active customers with order aggregates. Refreshed daily."
    columns:
      - name: customer_id
        description: "Primary key from source CRM."
      - name: lifetime_value
        description: "Sum of all order totals in USD."
```

### Audit Findings Summary

1. **`COMMENT ON` for Schema Documentation**: Native SQL comments on tables/columns surface in database GUI tools (pgAdmin, DBeaver) and documentation generators — far more accessible than README files.
2. **Decision Rationale in Comments**: Document *why* an index exists, *why* a particular join type was chosen, or *why* a filter excludes certain rows — this context is lost once the original developer leaves.
3. **dbt for Data Warehouse Documentation**: If using dbt, `schema.yml` documentation is the standard — it generates a searchable HTML documentation site and enforces documentation as part of the CI process.

---

## 81. How would you find the Nth _highest salary_ from a table?

### Technical Audit: Finding the Nth Highest Value

This is a classic analytical SQL problem. Modern SQL solves it cleanly with window functions — the historical subquery approaches are largely obsolete.

### Window Function Approach (Recommended)

```sql
-- Using DENSE_RANK: handles ties correctly
SELECT salary
FROM (
    SELECT salary,
           DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk
    FROM employees
) ranked
WHERE rnk = 3;  -- Replace 3 with N
```

`DENSE_RANK()` assigns the same rank to tied values without gaps — if two employees share the highest salary, rank 2 is still the second distinct salary level.

### Difference Between RANK, DENSE_RANK, ROW_NUMBER

| Function | Ties | Gaps |
|---|---|---|
| `ROW_NUMBER()` | Breaks ties arbitrarily | No gaps |
| `RANK()` | Same rank for ties | Gaps after ties |
| `DENSE_RANK()` | Same rank for ties | No gaps |

For "Nth highest salary" semantically, `DENSE_RANK` is almost always correct — it finds the Nth distinct salary level.

### Using OFFSET (Simple, Less Explicit)

```sql
SELECT DISTINCT salary
FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET 2;  -- OFFSET N-1 for Nth highest
```

Clean but less explicit about tie handling.

### Legacy Correlated Subquery (Avoid)

```sql
-- AVOID: O(N²) performance, hard to maintain
SELECT salary FROM employees e1
WHERE 2 = (
    SELECT COUNT(DISTINCT salary) FROM employees e2
    WHERE e2.salary > e1.salary
);
```

### Generalized N Parameter (Dynamic)

```sql
-- Parameterized for any N
SELECT salary
FROM (
    SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk
    FROM employees
) t
WHERE rnk = :n;  -- Pass N as a bind parameter
```

### Audit Findings Summary

1. **DENSE_RANK for Business Intent**: For "Nth highest" semantics, `DENSE_RANK` is almost always the correct function — `ROW_NUMBER` breaks ties arbitrarily, producing inconsistent results.
2. **Correlated Subquery Performance**: The traditional correlated subquery approach is $O(N^2)$ — replace with window functions which execute in a single sort pass.
3. **Departmental Context**: For real-world use (e.g., 3rd highest salary per department), add `PARTITION BY department_id` to the window function.

---

## 82. How do you count the number of occurrences of a specific value in a column?

### Technical Audit: Counting Value Occurrences

Counting occurrences is a fundamental aggregation task. The appropriate technique depends on whether you're counting a specific value, all values, or a conditional distribution.

### COUNT with WHERE (Specific Value)

```sql
SELECT COUNT(*) AS pending_orders
FROM orders
WHERE status = 'pending';
```

### COUNT with FILTER (Multiple Values in One Pass)

```sql
SELECT
    COUNT(*) FILTER (WHERE status = 'pending')   AS pending,
    COUNT(*) FILTER (WHERE status = 'shipped')   AS shipped,
    COUNT(*) FILTER (WHERE status = 'delivered') AS delivered,
    COUNT(*) FILTER (WHERE status = 'cancelled') AS cancelled
FROM orders;
```

Single scan; more efficient than running separate queries.

### CASE WHEN Equivalent (Cross-Engine)

```sql
SELECT
    SUM(CASE WHEN status = 'pending'   THEN 1 ELSE 0 END) AS pending,
    SUM(CASE WHEN status = 'shipped'   THEN 1 ELSE 0 END) AS shipped,
    SUM(CASE WHEN status = 'delivered' THEN 1 ELSE 0 END) AS delivered
FROM orders;
```

### COUNT per Group (Frequency Distribution)

```sql
SELECT status, COUNT(*) AS occurrences
FROM orders
GROUP BY status
ORDER BY occurrences DESC;
```

### Percentage of Total

```sql
SELECT
    status,
    COUNT(*)                                                    AS count,
    ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER (), 2)         AS percentage
FROM orders
GROUP BY status
ORDER BY count DESC;
```

### Audit Findings Summary

1. **`FILTER` Clause Preference**: `COUNT(*) FILTER (WHERE condition)` is cleaner and semantically clearer than `SUM(CASE WHEN ...)` in PostgreSQL and standard SQL:2003+ — use it when available.
2. **`COUNT(col)` vs `COUNT(*)`**: `COUNT(column)` excludes NULLs; `COUNT(*)` counts all rows including NULLs. When counting specific values (where NULLs should be excluded), `COUNT(col)` is correct.
3. **Window Function for Percentages**: The `SUM(COUNT(*)) OVER ()` window aggregate computes the grand total in a single pass — avoids the performance cost of a separate subquery for the denominator.

---

## 83. How can you calculate _running totals_ in SQL?

### Technical Audit: Running Totals (Cumulative Sums)

A **running total** (cumulative sum) computes the sum of all preceding rows up to and including the current row, ordered by a specific column. Window functions are the standard mechanism.

### Basic Running Total

```sql
SELECT
    order_date,
    daily_revenue,
    SUM(daily_revenue) OVER (
        ORDER BY order_date
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) AS cumulative_revenue
FROM daily_sales
ORDER BY order_date;
```

### ROWS vs RANGE Frame Specification

```sql
-- ROWS: physically includes all preceding rows up to current
ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW

-- RANGE: includes all rows with ORDER BY value <= current row's value
-- Can include multiple rows at the same order_date (unexpected for running totals)
RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW  -- default when ORDER BY specified
```

Always use `ROWS` for running totals to ensure deterministic behavior when ORDER BY values have ties.

### Running Total per Partition (e.g., per Region)

```sql
SELECT
    region,
    order_date,
    revenue,
    SUM(revenue) OVER (
        PARTITION BY region
        ORDER BY order_date
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) AS cumulative_by_region
FROM daily_sales_by_region;
```

### Running Average

```sql
SELECT
    order_date,
    revenue,
    AVG(revenue) OVER (
        ORDER BY order_date
        ROWS BETWEEN 6 PRECEDING AND CURRENT ROW  -- 7-day moving average
    ) AS moving_avg_7d
FROM daily_sales;
```

### Running Count and Rank

```sql
SELECT
    customer_id,
    order_date,
    COUNT(*) OVER (
        PARTITION BY customer_id
        ORDER BY order_date
        ROWS UNBOUNDED PRECEDING
    ) AS order_sequence_number
FROM orders;
```

### Audit Findings Summary

1. **Always Specify `ROWS`**: Using `RANGE UNBOUNDED PRECEDING` (the default) can produce surprising cumulative values when multiple rows share the same ORDER BY value — `ROWS UNBOUNDED PRECEDING` is explicit and correct.
2. **Moving Averages**: Use `ROWS BETWEEN N PRECEDING AND CURRENT ROW` for rolling N-period averages — essential for smoothing time-series data in reporting.
3. **Index on ORDER BY Column**: The window sort operation benefits from an index on the `ORDER BY` column within the `OVER()` clause — reduces the sort pass to an index scan.

---

## 84. Explain how to reverse the contents of a column without using a _reverse_ function.

### Technical Audit: String Reversal Without REVERSE()

This is a classic SQL puzzle testing recursive CTE knowledge and string manipulation techniques. The challenge is reversing a string character by character using SQL constructs.

### Recursive CTE Approach (Portable)

```sql
WITH RECURSIVE reverse_cte AS (
    -- Base case: extract last character, set remainder
    SELECT
        SUBSTRING(word, 1, LENGTH(word) - 1)  AS remaining,
        SUBSTRING(word, LENGTH(word), 1)       AS reversed,
        1                                       AS step
    FROM (SELECT 'hello' AS word) src

    UNION ALL

    -- Recursive: peel next-to-last character
    SELECT
        SUBSTRING(remaining, 1, LENGTH(remaining) - 1),
        reversed || SUBSTRING(remaining, LENGTH(remaining), 1),
        step + 1
    FROM reverse_cte
    WHERE LENGTH(remaining) > 0
)
SELECT reversed
FROM reverse_cte
WHERE LENGTH(remaining) = 0;
-- Result: 'olleh'
```

### Generate Series + String Aggregation (PostgreSQL)

```sql
WITH word AS (SELECT 'hello' AS w),
chars AS (
    SELECT
        SUBSTRING(w, gs.n, 1)                   AS ch,
        LENGTH(w) - gs.n + 1                    AS rev_pos
    FROM word, generate_series(1, LENGTH((SELECT w FROM word))) AS gs(n)
)
SELECT STRING_AGG(ch, '' ORDER BY rev_pos) AS reversed
FROM chars;
```

### Why This Matters

This question tests understanding of recursive CTEs, string functions (`SUBSTRING`, `LENGTH`), and ordered aggregation. In production, simply use `REVERSE()` (available in PostgreSQL, MySQL, SQL Server) — the exercise demonstrates SQL's Turing-completeness.

### Audit Findings Summary

1. **Use `REVERSE()` in Production**: Never implement string reversal without the built-in function in production code — the recursive CTE is an academic exercise demonstrating SQL's expressive power.
2. **Recursion Termination**: Always include a termination condition (`WHERE LENGTH(remaining) > 0`) in recursive CTEs — missing it causes infinite recursion and query timeout.
3. **`generate_series` Elegance**: The `generate_series` + `STRING_AGG` approach is more readable than recursive CTE for character-level string manipulation in PostgreSQL.

---

## 85. What approach do you use for creating a _calendar table_, and what are its uses?

### Technical Audit: Calendar Table

A **calendar table** (also called a date dimension table) is a pre-populated reference table containing one row per date, with derived attributes for each date. It is a cornerstone of data warehousing and reporting systems.

### Generating a Calendar Table

```sql
-- PostgreSQL: generate rows for every date in a range
CREATE TABLE dim_date AS
SELECT
    d::DATE                                        AS date_key,
    EXTRACT(YEAR FROM d)::INT                      AS year,
    EXTRACT(QUARTER FROM d)::INT                   AS quarter,
    EXTRACT(MONTH FROM d)::INT                     AS month,
    TO_CHAR(d, 'Month')                            AS month_name,
    EXTRACT(WEEK FROM d)::INT                      AS week_of_year,
    EXTRACT(DOW FROM d)::INT                       AS day_of_week,
    TO_CHAR(d, 'Day')                              AS day_name,
    CASE WHEN EXTRACT(DOW FROM d) IN (0, 6) THEN TRUE ELSE FALSE END AS is_weekend,
    FALSE                                          AS is_holiday,  -- Populate separately
    EXTRACT(DAY FROM d)::INT                       AS day_of_month,
    EXTRACT(DOY FROM d)::INT                       AS day_of_year
FROM generate_series('2020-01-01'::DATE, '2030-12-31'::DATE, '1 day') AS d;

ALTER TABLE dim_date ADD PRIMARY KEY (date_key);
CREATE INDEX idx_dim_date_year_month ON dim_date (year, month);
```

### Use Cases

**Reporting with no-data gaps**: LEFT JOIN to dim_date ensures every date appears in time-series reports, even days with zero sales:

```sql
SELECT
    d.date_key,
    COALESCE(SUM(o.total), 0) AS daily_revenue
FROM dim_date d
LEFT JOIN orders o ON d.date_key = o.order_date::DATE
WHERE d.date_key BETWEEN '2026-01-01' AND '2026-03-31'
GROUP BY d.date_key
ORDER BY d.date_key;
```

**Business day calculations**: Count working days between dates, excluding weekends and holidays.

**Fiscal period reporting**: Custom fiscal year/quarter mappings that differ from the calendar year.

**Date filtering simplification**: `WHERE d.quarter = 1 AND d.year = 2026` instead of complex date arithmetic.

### Audit Findings Summary

1. **Pre-Populate Holidays**: The `is_holiday` column requires manual or API-driven population per locale — automate this as part of annual data maintenance.
2. **Extend for Fiscal Calendars**: Add `fiscal_year`, `fiscal_quarter`, `fiscal_week` columns for companies with non-calendar fiscal years (e.g., April–March financial year in India).
3. **Star Schema Cornerstone**: In data warehouses, `dim_date` is the most-joined dimension — always index `year`, `month`, `quarter` columns and keep the table in cache-friendly size.

---

## 86. What is the process of _Extract, Transform, Load (ETL)_?

### Technical Audit: ETL Process

**ETL** is the standard data integration process for moving data from source systems into a target system (typically a data warehouse). It consists of three phases executed in sequence.

### Extract

Pull data from source systems — OLTP databases, APIs, flat files, cloud services, event streams:

```python
# Extract from PostgreSQL source
import psycopg2
conn = psycopg2.connect(SOURCE_DSN)
cursor = conn.cursor()
cursor.execute("SELECT * FROM orders WHERE updated_at >= %s", [last_run_timestamp])
raw_data = cursor.fetchall()
```

**Incremental extraction** (preferred over full extraction): use `updated_at` timestamps, CDC (Change Data Capture), or database log tailing to extract only changed records.

### Transform

Cleanse, validate, standardize, enrich, and reshape the extracted data:

**Common transformations**:
- Null handling: `COALESCE(field, default)`
- Deduplication: `ROW_NUMBER() OVER (PARTITION BY ... ORDER BY ...)`
- Type casting and format normalization (date formats, currency codes)
- Business rule application (category mapping, flag derivation)
- Joining to reference/lookup tables for enrichment
- Aggregation (pre-aggregating to reduce warehouse query load)

```sql
-- In-warehouse transformation (ELT pattern with dbt)
SELECT
    order_id,
    customer_id,
    COALESCE(total, 0)                    AS total,
    CASE WHEN total > 10000 THEN 'premium' ELSE 'standard' END AS order_tier,
    order_date::DATE                      AS order_date
FROM {{ source('raw', 'orders') }}
WHERE order_id IS NOT NULL;
```

### Load

Write transformed data to the target system. Two loading strategies:

**Full load**: Truncate and reload the entire target table — simple but expensive for large datasets.

**Incremental load (Upsert)**:

```sql
INSERT INTO fact_orders (order_id, customer_id, total, order_date, order_tier)
SELECT order_id, customer_id, total, order_date, order_tier
FROM staging_orders
ON CONFLICT (order_id)
DO UPDATE SET
    total = EXCLUDED.total,
    order_tier = EXCLUDED.order_tier,
    updated_at = NOW();
```

### Audit Findings Summary

1. **ELT over ETL in Cloud**: Modern cloud warehouses (BigQuery, Snowflake, Redshift) transform data in-warehouse after loading raw data — ELT (Extract, Load, Transform) leverages the warehouse's massively parallel compute, eliminating the intermediate transformation server.
2. **Idempotent Pipelines**: Design ETL runs to be idempotent — running them multiple times produces the same result. This enables safe retries on failure.
3. **Data Quality Gates**: Validate source data quality at the extract stage — reject or quarantine records that fail validation rather than loading bad data into the warehouse.

---

## 87. How do you import/export data from/to a flat file using SQL?

### Technical Audit: SQL Flat File Import/Export

Most database engines provide native commands for bulk import/export from/to CSV and other flat file formats — significantly faster than row-by-row INSERT operations.

### PostgreSQL: COPY Command

**Export to CSV**:

```sql
-- Server-side (requires superuser or pg_write_server_files role)
COPY orders TO '/tmp/orders_2026.csv' WITH (FORMAT CSV, HEADER TRUE, DELIMITER ',');

-- Client-side (no special privilege, uses psql client path)
\copy orders TO '/local/path/orders_2026.csv' CSV HEADER;
```

**Import from CSV**:

```sql
-- Server-side
COPY orders (order_id, customer_id, total, order_date, status)
FROM '/tmp/orders_import.csv'
WITH (FORMAT CSV, HEADER TRUE, DELIMITER ',', NULL 'NULL');

-- Client-side
\copy orders FROM '/local/path/orders_import.csv' CSV HEADER;
```

**Selective export with query**:

```sql
COPY (
    SELECT order_id, customer_id, total
    FROM orders
    WHERE order_date >= '2026-01-01'
) TO '/tmp/recent_orders.csv' CSV HEADER;
```

### MySQL: LOAD DATA INFILE / SELECT INTO OUTFILE

```sql
-- Export
SELECT * FROM orders INTO OUTFILE '/tmp/orders.csv'
FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\n';

-- Import
LOAD DATA INFILE '/tmp/orders.csv'
INTO TABLE orders
FIELDS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;  -- Skip header row
```

### SQL Server: BCP and BULK INSERT

```sql
-- BULK INSERT
BULK INSERT orders
FROM 'C:\data\orders.csv'
WITH (FORMAT = 'CSV', FIRSTROW = 2, FIELDTERMINATOR = ',', ROWTERMINATOR = '\n');
```

### Performance Tips

For large imports: disable indexes before loading, load in batches, then rebuild indexes:

```sql
-- PostgreSQL bulk load optimization
ALTER TABLE orders DISABLE TRIGGER ALL;
-- Load with COPY
ALTER TABLE orders ENABLE TRIGGER ALL;
ANALYZE orders;
```

### Audit Findings Summary

1. **COPY vs INSERT Performance**: PostgreSQL `COPY` can load millions of rows per second; row-by-row `INSERT` is 10-100× slower. Always use `COPY` for bulk operations.
2. **Character Encoding**: Explicitly specify `ENCODING 'UTF8'` in `COPY` to prevent character set issues with international data.
3. **Error Handling**: Use PostgreSQL's `COPY ... ON_ERROR STOP` (PG17+) or log-based error handling to identify and isolate malformed rows rather than failing the entire import.

---

## 88. Explain the steps for a basic _ETL process_ in a data warehousing environment.

### Technical Audit: ETL Process in Data Warehousing

In a data warehousing context, the ETL pipeline transforms operational OLTP data into the dimensional model (star/snowflake schema) used for analytics. See Q86 for the general ETL concept — this entry focuses on the warehouse-specific implementation.

### Step 1: Source System Analysis

Identify and document source systems, their schemas, change capture mechanisms, and data quality characteristics. Establish baseline row counts and distributions to validate downstream transformations.

### Step 2: Staging Layer (Raw Landing)

Extract data from source systems into a staging schema — exact replicas of source tables with no transformation. Staging is a buffer:

```sql
-- Staging table mirrors source exactly
CREATE TABLE staging.raw_orders (
    order_id      INT,
    customer_id   INT,
    total         DECIMAL(10,2),
    order_date    TIMESTAMP,
    status        VARCHAR(50),
    extracted_at  TIMESTAMP DEFAULT NOW()
);
```

### Step 3: Data Cleansing and Validation

Apply quality checks in the staging layer before transforming:

```sql
-- Identify invalid records
SELECT COUNT(*) FROM staging.raw_orders WHERE order_id IS NULL;
SELECT COUNT(*) FROM staging.raw_orders WHERE total < 0;
SELECT COUNT(*) FROM staging.raw_orders WHERE customer_id NOT IN (SELECT id FROM staging.raw_customers);
```

Route invalid records to a quarantine table for manual review.

### Step 4: Dimension Table Population (SCD Handling)

Populate dimension tables from staging, applying Slowly Changing Dimension (SCD) logic:

```sql
-- SCD Type 2: insert new record, expire previous
INSERT INTO dim_customer (customer_id, name, email, region, valid_from, valid_to, is_current)
SELECT s.id, s.name, s.email, s.region, NOW(), '9999-12-31', TRUE
FROM staging.raw_customers s
WHERE NOT EXISTS (
    SELECT 1 FROM dim_customer d
    WHERE d.customer_id = s.id AND d.is_current = TRUE
      AND d.name = s.name AND d.email = s.email
);
```

### Step 5: Fact Table Population

Load the fact table after dimensions are fully populated:

```sql
INSERT INTO fact_sales (date_id, customer_id, product_id, quantity, revenue)
SELECT
    d.date_id,
    dc.surrogate_key,
    dp.surrogate_key,
    s.quantity,
    s.total
FROM staging.raw_orders s
JOIN dim_date d      ON s.order_date::DATE = d.date_key
JOIN dim_customer dc ON s.customer_id = dc.customer_id AND dc.is_current = TRUE
JOIN dim_product dp  ON s.product_id = dp.product_id AND dp.is_current = TRUE;
```

### Step 6: Post-Load Validation and Reconciliation

```sql
-- Validate row counts match source
SELECT COUNT(*) FROM fact_sales
WHERE date_id IN (SELECT date_id FROM dim_date WHERE date_key = CURRENT_DATE);
-- Compare with: SELECT COUNT(*) FROM staging.raw_orders WHERE order_date::DATE = CURRENT_DATE
```

### Audit Findings Summary

1. **Surrogate Keys in Dimensions**: Always use warehouse-generated surrogate keys (not source system natural keys) in fact tables — source keys change; surrogate keys are stable.
2. **SCD Type 2 for Historical Accuracy**: Type 1 (overwrite) loses history; Type 2 (add row with validity dates) preserves it — essential for any dimension that changes over time (customer region, product category).
3. **Reconciliation Reporting**: Build automated row count and sum reconciliation checks between staging and the warehouse into every ETL run — missing records or sum discrepancies must trigger pipeline alerts.

---

## 89. How do you cleanse and format data using SQL queries?

### Technical Audit: SQL Data Cleansing

Data cleansing corrects inconsistencies, removes duplicates, handles nulls, and standardizes formats — the Transform step of ETL.

### Trimming Whitespace

```sql
UPDATE customers SET name = TRIM(name) WHERE name != TRIM(name);

-- Or in SELECT (non-destructive)
SELECT TRIM(BOTH ' ' FROM name) AS clean_name FROM customers;
```

### Case Normalization

```sql
-- Standardize email to lowercase
UPDATE users SET email = LOWER(TRIM(email));

-- Proper case for names (PostgreSQL)
SELECT INITCAP(LOWER(first_name)) AS first_name FROM customers;
```

### Phone Number Standardization

```sql
-- Remove all non-numeric characters from phone
UPDATE contacts
SET phone = REGEXP_REPLACE(phone, '[^0-9]', '', 'g')
WHERE phone ~ '[^0-9]';
```

### Handling NULL and Empty Strings

```sql
-- Treat empty strings as NULL
UPDATE products
SET description = NULL
WHERE description = '';

-- Substitute NULLs with defaults
UPDATE employees
SET department = COALESCE(department, 'Unassigned')
WHERE department IS NULL;
```

### Date Format Normalization

```sql
-- Standardize mixed date formats to DATE type
UPDATE events
SET event_date = TO_DATE(raw_date, 'DD/MM/YYYY')
WHERE raw_date ~ '^\d{2}/\d{2}/\d{4}$';
```

### Deduplication

```sql
-- Keep only the most recent record per email
DELETE FROM users
WHERE id IN (
    SELECT id FROM (
        SELECT id,
               ROW_NUMBER() OVER (PARTITION BY email ORDER BY created_at DESC) AS rn
        FROM users
    ) t
    WHERE rn > 1
);
```

### Outlier Detection

```sql
-- Flag statistical outliers using z-score
SELECT
    order_id,
    total,
    (total - AVG(total) OVER ()) / STDDEV(total) OVER () AS z_score
FROM orders
WHERE ABS((total - AVG(total) OVER ()) / STDDEV(total) OVER ()) > 3;
```

### Audit Findings Summary

1. **Audit Before Mutating**: Always run the cleansing logic as a `SELECT` first to audit affected rows — never run `UPDATE` or `DELETE` without previewing impact.
2. **Idempotent Cleansing**: Design cleansing transforms to be safely re-runnable — `WHERE name != TRIM(name)` prevents unnecessary updates on already-clean data.
3. **Preserve Raw Data**: Never overwrite raw ingested data — maintain a `staging.raw_*` layer and apply cleansing when populating the cleansed layer, enabling re-processing if cleansing logic changes.

---

## 90. What tools do you use for automating data import/export routines?

### Technical Audit: Data Import/Export Automation Tools

Data automation tools handle scheduling, orchestration, error recovery, and monitoring of recurring data movement tasks.

### Native Database Tools

**PostgreSQL `pg_dump` / `pg_restore`**: Schema and data export/import for backup and migration:

```bash
# Export
pg_dump -Fc mydb > mydb_backup.dump

# Restore
pg_restore -d targetdb mydb_backup.dump
```

**MySQL `mysqldump`**:

```bash
mysqldump -u root -p mydb orders > orders_export.sql
```

### ETL/ELT Orchestration Platforms

**Apache Airflow**: Python-based DAG (Directed Acyclic Graph) workflow orchestrator. Schedules and monitors complex multi-step ETL pipelines:

```python
with DAG('daily_etl', schedule_interval='@daily') as dag:
    extract = PostgresOperator(sql='extract_orders.sql', ...)
    transform = PythonOperator(python_callable=transform_data, ...)
    load = PostgresOperator(sql='load_to_warehouse.sql', ...)
    extract >> transform >> load
```

**dbt (data build tool)**: SQL-first transformation tool for ELT workflows — models are `.sql` files with Jinja templating, run via `dbt run`. Handles dependency resolution, testing, and documentation.

**Fivetran / Airbyte**: Managed connector platforms for extracting data from SaaS sources (Salesforce, HubSpot, Stripe) directly into the data warehouse.

**AWS Glue / Azure Data Factory**: Cloud-native ETL services with managed connectors, serverless compute, and visual pipeline builders.

### Scripting for Custom Pipelines

For custom routines, Python with `psycopg2`/`SQLAlchemy` + `pandas` for lightweight transformations:

```python
import pandas as pd
from sqlalchemy import create_engine

engine = create_engine(DATABASE_URL)
df = pd.read_sql("SELECT * FROM orders WHERE order_date >= CURRENT_DATE - 7", engine)
df['order_tier'] = df['total'].apply(lambda x: 'premium' if x > 10000 else 'standard')
df.to_sql('fact_orders', engine, if_exists='append', index=False)
```

### Audit Findings Summary

1. **Airflow for Complex Pipelines**: For production ETL with dependencies, retries, alerting, and audit trails — Apache Airflow or Prefect is the standard choice in 2026.
2. **dbt for Warehouse Transformations**: If data lands in the warehouse before transformation (ELT), dbt is the industry-standard tool — it brings software engineering practices (version control, testing, CI/CD) to SQL transformations.
3. **Managed Connectors for SaaS Sources**: Fivetran/Airbyte eliminate the maintenance burden of custom extractors for common SaaS sources — the connectors handle schema drift, pagination, and rate limiting automatically.

---

## 91. How would you model a _many-to-many relationship_ in SQL?

### Technical Audit: Many-to-Many Relationship Modeling

A many-to-many (M:N) relationship cannot be directly implemented in a relational schema — it requires a **junction table** (also called an associative entity, bridge table, or link table) to decompose it into two one-to-many relationships.

### Classic Example: Students and Courses

One student can enroll in many courses; one course can have many students enrolled.

```sql
-- Entity tables
CREATE TABLE students (
    student_id   INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name         VARCHAR(100) NOT NULL,
    email        VARCHAR(320) UNIQUE NOT NULL
);

CREATE TABLE courses (
    course_id    INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title        VARCHAR(200) NOT NULL,
    credits      INT NOT NULL
);

-- Junction table
CREATE TABLE enrollments (
    student_id   INT NOT NULL REFERENCES students(student_id) ON DELETE CASCADE,
    course_id    INT NOT NULL REFERENCES courses(course_id)   ON DELETE CASCADE,
    enrolled_at  TIMESTAMP DEFAULT NOW(),
    grade        CHAR(2),
    PRIMARY KEY (student_id, course_id)  -- Composite primary key
);
```

### Adding Attributes to the Relationship

The junction table can carry attributes of the relationship itself — not just the foreign keys:

```sql
-- enrollments with grade and enrollment date is richer than a pure link table
INSERT INTO enrollments (student_id, course_id, grade)
VALUES (42, 7, 'A');
```

### Querying the M:N Relationship

```sql
-- All courses for a specific student
SELECT c.title, e.grade
FROM courses c
JOIN enrollments e ON c.course_id = e.course_id
WHERE e.student_id = 42;

-- All students in a specific course
SELECT s.name, e.enrolled_at
FROM students s
JOIN enrollments e ON s.student_id = e.student_id
WHERE e.course_id = 7;
```

### Self-Referencing M:N (e.g., User Follows User)

```sql
CREATE TABLE follows (
    follower_id  INT REFERENCES users(id),
    following_id INT REFERENCES users(id),
    followed_at  TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (follower_id, following_id),
    CHECK (follower_id != following_id)  -- Prevent self-follow
);
```

### Audit Findings Summary

1. **Composite PK on Junction Table**: The composite primary key `(student_id, course_id)` simultaneously ensures uniqueness and creates an efficient index for both join directions.
2. **Index Both Directions**: While the composite PK covers `(student_id, course_id)` lookups, add a separate index on `(course_id, student_id)` for efficient reverse lookups.
3. **Cascade Delete Consideration**: `ON DELETE CASCADE` on junction table FK references is often correct — when a student is deleted, their enrollment records should also be removed. Evaluate per use case.

---

## 92. Describe how to manage _hierarchical data_ in SQL.

### Technical Audit: Hierarchical Data in SQL

Hierarchical data (trees, org charts, category trees, threaded comments) requires special modeling strategies in relational databases. Four primary patterns exist.

### Pattern 1: Adjacency List

Each row stores a reference to its immediate parent. Simple to implement; requires recursive CTEs for arbitrary-depth traversal.

```sql
CREATE TABLE categories (
    id        INT PRIMARY KEY,
    name      VARCHAR(100),
    parent_id INT REFERENCES categories(id)  -- NULL for root nodes
);

-- Recursive CTE to traverse the full tree
WITH RECURSIVE tree AS (
    SELECT id, name, parent_id, 0 AS depth, ARRAY[id] AS path
    FROM categories WHERE parent_id IS NULL
    UNION ALL
    SELECT c.id, c.name, c.parent_id, t.depth + 1, t.path || c.id
    FROM categories c JOIN tree t ON c.parent_id = t.id
)
SELECT depth, id, name, path FROM tree ORDER BY path;
```

### Pattern 2: Nested Sets (Preorder Tree Traversal)

Each node stores `lft` and `rgt` values representing its position in the tree. Enables retrieval of all descendants without recursion via `BETWEEN`:

```sql
-- All descendants of node 5
SELECT * FROM categories WHERE lft BETWEEN 5.lft AND 5.rgt;
```

Very fast reads; expensive writes (all lft/rgt values shift on insert).

### Pattern 3: Materialized Path (Path Enumeration)

Each row stores the full path from root to node as a string:

```sql
CREATE TABLE categories (
    id   INT PRIMARY KEY,
    name VARCHAR(100),
    path VARCHAR(500)  -- e.g., '/1/4/12/'
);

-- All children of node 4
SELECT * FROM categories WHERE path LIKE '/1/4/%';
```

Simple queries; path integrity requires application-level maintenance.

### Pattern 4: Closure Table

A separate table stores all ancestor-descendant relationships at every depth:

```sql
CREATE TABLE category_paths (
    ancestor_id   INT REFERENCES categories(id),
    descendant_id INT REFERENCES categories(id),
    depth         INT,
    PRIMARY KEY (ancestor_id, descendant_id)
);

-- All descendants of node 4 at any depth
SELECT descendant_id FROM category_paths WHERE ancestor_id = 4;
```

Excellent for reads; requires maintaining the closure table on writes.

### Pattern Comparison

| Pattern | Read | Write | Query Complexity |
|---|---|---|---|
| Adjacency List | Moderate (requires recursive CTE) | Simple | Moderate |
| Nested Sets | Fast | Expensive | Simple |
| Materialized Path | Fast | Moderate | Simple (LIKE) |
| Closure Table | Fast | Moderate | Simple |

### Audit Findings Summary

1. **Adjacency List + Recursive CTE**: The default choice for most applications in PostgreSQL — simple schema, standard SQL, good performance for moderate depth.
2. **Closure Table for Deep Trees**: For read-heavy trees with many levels (threaded comments, bill of materials) — closure table offers the best read performance.
3. **`ltree` Extension in PostgreSQL**: PostgreSQL's `ltree` extension provides native materialized path support with specialized operators and GiST indexing — the most ergonomic option for label-based hierarchies.

---

## 93. How would you approach writing SQL queries for a reporting application?

### Technical Audit: SQL for Reporting Applications

Reporting SQL optimizes for clarity, correctness, and performance against large historical datasets. It differs from OLTP SQL in access patterns, complexity, and performance characteristics.

### Design Principles

**Use CTEs for Readability**:

```sql
WITH
-- Step 1: Filter and aggregate orders
order_metrics AS (
    SELECT
        customer_id,
        COUNT(*)         AS total_orders,
        SUM(total)       AS lifetime_value,
        MAX(order_date)  AS last_order_date,
        MIN(order_date)  AS first_order_date
    FROM orders
    WHERE order_date >= '2026-01-01'
    GROUP BY customer_id
),

-- Step 2: Segment customers
customer_segments AS (
    SELECT
        customer_id,
        total_orders,
        lifetime_value,
        CASE
            WHEN lifetime_value >= 100000 THEN 'platinum'
            WHEN lifetime_value >= 50000  THEN 'gold'
            WHEN lifetime_value >= 10000  THEN 'silver'
            ELSE 'standard'
        END AS segment
    FROM order_metrics
)

-- Step 3: Final report
SELECT
    c.name,
    c.email,
    cs.segment,
    cs.total_orders,
    cs.lifetime_value
FROM customers c
JOIN customer_segments cs ON c.id = cs.customer_id
ORDER BY cs.lifetime_value DESC;
```

**Materialized Views for Expensive Pre-Aggregations**:

```sql
CREATE MATERIALIZED VIEW monthly_revenue AS
SELECT
    DATE_TRUNC('month', order_date) AS month,
    region,
    SUM(total) AS revenue,
    COUNT(*) AS orders
FROM orders
GROUP BY 1, 2;

REFRESH MATERIALIZED VIEW CONCURRENTLY monthly_revenue;
```

**Parameterize Date Ranges**: Avoid hardcoded dates — use bind parameters or function arguments for date range filters.

**Index Strategy for Reports**: Composite indexes on common filter columns + covering indexes to eliminate heap fetches for frequent report queries.

### Pagination for Large Reports

```sql
-- Keyset pagination for large report exports
SELECT * FROM order_report
WHERE (order_date, order_id) < ('2026-04-01', 5000)
ORDER BY order_date DESC, order_id DESC
LIMIT 1000;
```

### Audit Findings Summary

1. **Materialized Views for Dashboards**: High-traffic dashboards should never hit raw tables — pre-aggregate with materialized views refreshed on schedule aligned with acceptable data latency.
2. **Avoid `SELECT *` in Reports**: Explicit column selection prevents performance regressions when tables grow new columns and enables covering index scans.
3. **Report Query Isolation**: Route report queries to read replicas or a dedicated analytics database — preventing interference with OLTP workloads.

---

## 94. Explain how to handle _temporal data_ and time zones in SQL.

### Technical Audit: Temporal Data and Time Zone Management

Temporal data represents moments in time or durations. Mishandled time zones are one of the most common sources of data inconsistency in distributed applications.

### Core Data Types

**`DATE`**: Calendar date only (no time component). No time zone — always interpreted in application context.

**`TIMESTAMP`** (`TIMESTAMP WITHOUT TIME ZONE`): Date and time with no time zone metadata. Avoid for application timestamps — ambiguous without context.

**`TIMESTAMPTZ`** (`TIMESTAMP WITH TIME ZONE`): PostgreSQL's preferred timestamp type. Stored internally as UTC; displayed in session time zone. The correct type for all application events.

### Best Practice: Store in UTC, Display in Local Time

```sql
-- Store: always UTC
INSERT INTO events (event_name, occurred_at)
VALUES ('order_placed', NOW());  -- NOW() returns current TIMESTAMPTZ (UTC)

-- Display: convert at query time
SELECT
    event_name,
    occurred_at AT TIME ZONE 'Asia/Kolkata' AS occurred_at_ist
FROM events;
```

### Time Zone Conversion

```sql
-- PostgreSQL: convert between zones
SELECT
    '2026-04-26 10:00:00+00'::TIMESTAMPTZ AT TIME ZONE 'Asia/Kolkata' AS ist,
    '2026-04-26 10:00:00+00'::TIMESTAMPTZ AT TIME ZONE 'America/New_York' AS est;
```

### Temporal Queries

```sql
-- Events in the last 24 hours
SELECT * FROM events
WHERE occurred_at >= NOW() - INTERVAL '24 hours';

-- Date truncation (group by day in IST)
SELECT
    DATE_TRUNC('day', occurred_at AT TIME ZONE 'Asia/Kolkata') AS day_ist,
    COUNT(*) AS events
FROM events
GROUP BY 1
ORDER BY 1;
```

### Temporal Tables (SQL:2011 Bitemporal Data)

PostgreSQL does not natively support SQL:2011 temporal tables — implement manually using valid time ranges:

```sql
CREATE TABLE product_prices (
    product_id    INT,
    price         DECIMAL(10,2),
    valid_from    TIMESTAMPTZ NOT NULL,
    valid_to      TIMESTAMPTZ NOT NULL DEFAULT 'infinity',
    PRIMARY KEY (product_id, valid_from)
);

-- Current price
SELECT price FROM product_prices
WHERE product_id = 42
  AND valid_from <= NOW()
  AND valid_to > NOW();
```

### Audit Findings Summary

1. **Always Use `TIMESTAMPTZ`**: `TIMESTAMP WITHOUT TIME ZONE` is dangerous in multi-timezone deployments — without UTC enforcement, timestamps become ambiguous when the server time zone changes.
2. **Avoid `CURRENT_DATE` for Timestamped Records**: `CURRENT_DATE` returns the date in the database server's time zone — use `NOW()` or `CURRENT_TIMESTAMP` for `TIMESTAMPTZ` columns.
3. **DST Boundary Awareness**: Date arithmetic across daylight saving time transitions requires IANA time zone names (e.g., `'Asia/Kolkata'`) not offsets (`'+05:30'`) — offsets are fixed; IANA names handle DST automatically.

---

## 95. How do you use SQL in financial applications for risk and portfolio analysis?

### Technical Audit: SQL for Financial Analytics

Financial applications require precise decimal arithmetic, temporal accuracy, audit trails, and complex aggregations. SQL is well-suited for these demands.

### Mark-to-Market Portfolio Valuation

```sql
WITH latest_prices AS (
    SELECT DISTINCT ON (symbol)
        symbol, price, price_date
    FROM market_prices
    ORDER BY symbol, price_date DESC
)
SELECT
    h.portfolio_id,
    h.symbol,
    h.shares,
    lp.price                           AS current_price,
    h.shares * lp.price                AS market_value,
    h.shares * (lp.price - h.cost_basis) AS unrealized_pnl
FROM holdings h
JOIN latest_prices lp ON h.symbol = lp.symbol
WHERE h.portfolio_id = 42;
```

### Value at Risk (VaR) Approximation

```sql
-- Historical simulation VaR at 95% confidence
WITH daily_returns AS (
    SELECT
        symbol,
        (price - LAG(price) OVER (PARTITION BY symbol ORDER BY price_date))
            / LAG(price) OVER (PARTITION BY symbol ORDER BY price_date) AS daily_return
    FROM market_prices
    WHERE price_date >= CURRENT_DATE - INTERVAL '252 days'
),
portfolio_returns AS (
    SELECT price_date,
           SUM(daily_return * h.market_value) / SUM(h.market_value) AS weighted_return
    FROM daily_returns dr
    JOIN current_holdings h ON dr.symbol = h.symbol
    GROUP BY price_date
)
SELECT
    PERCENTILE_CONT(0.05) WITHIN GROUP (ORDER BY weighted_return) AS var_95
FROM portfolio_returns;
```

### Exposure Aggregation by Risk Factor

```sql
SELECT
    r.risk_factor,
    r.factor_value,
    SUM(h.market_value * r.sensitivity)   AS total_exposure,
    SUM(h.market_value * r.sensitivity^2) AS exposure_variance
FROM holdings h
JOIN risk_sensitivities r ON h.instrument_id = r.instrument_id
GROUP BY r.risk_factor, r.factor_value
ORDER BY ABS(SUM(h.market_value * r.sensitivity)) DESC;
```

### Audit Trail for Regulatory Compliance

```sql
CREATE TABLE trade_audit (
    audit_id      BIGINT GENERATED ALWAYS AS IDENTITY,
    trade_id      BIGINT NOT NULL,
    changed_by    VARCHAR(100) NOT NULL,
    changed_at    TIMESTAMPTZ DEFAULT NOW(),
    old_values    JSONB,
    new_values    JSONB,
    operation     CHAR(1) CHECK (operation IN ('I','U','D'))
);
```

### Audit Findings Summary

1. **`DECIMAL(19,4)` for Financial Values**: Never use `FLOAT` for monetary amounts in financial applications — floating-point imprecision accumulates across thousands of calculations. Use `DECIMAL(19,4)` or higher precision.
2. **`PERCENTILE_CONT` for Statistical Risk**: PostgreSQL's `PERCENTILE_CONT` and `PERCENTILE_DISC` are native statistical functions for VaR, quantile analysis, and distribution analytics.
3. **Immutable Audit Tables**: Financial audit trails must be append-only — disable `UPDATE`/`DELETE` via RLS policies or trigger-enforced immutability. Consider PostgreSQL's `pg_audit` extension for comprehensive audit logging.

---

## 96. What steps do you take to _troubleshoot a failed SQL query_?

### Technical Audit: SQL Query Troubleshooting

Systematic troubleshooting involves reading the error precisely, isolating the problem, and applying targeted fixes.

### Step 1: Read the Error Message

Database error messages are precise — read them completely:

```
ERROR: column "customer_name" does not exist
LINE 3: WHERE customer_name = 'Alice'
        ^
HINT: Perhaps you meant to reference the column "name".
```

The error includes the line number, the problematic token, and often a hint. Never guess without reading the message.

### Step 2: Isolate the Problem

Break complex queries into smaller units:

```sql
-- Instead of debugging a 100-line query at once
-- Test each CTE independently
WITH customer_orders AS (
    SELECT customer_id, COUNT(*) as order_count
    FROM orders
    GROUP BY customer_id
)
SELECT * FROM customer_orders LIMIT 5;  -- Test this CTE alone first
```

### Step 3: Verify Table and Column Names

```sql
-- PostgreSQL: list columns of a table
SELECT column_name, data_type FROM information_schema.columns
WHERE table_name = 'orders' AND table_schema = 'public';

-- Or use psql shorthand
\d orders
```

### Step 4: Check Data Types

Type mismatches cause silent failures or conversion errors:

```sql
-- Incorrect: comparing INT to VARCHAR
WHERE order_id = '42abc'

-- Verify types and cast explicitly
WHERE order_id = CAST('42' AS INT)
```

### Step 5: Examine NULL Behavior

Add `IS NULL` / `IS NOT NULL` checks; add `COALESCE` for problematic columns.

### Step 6: Analyze the Execution Plan

For queries that run but return wrong results or are slow:

```sql
EXPLAIN (ANALYZE, VERBOSE, BUFFERS) <your query here>;
```

### Step 7: Test with Simplified Data

Reproduce the issue against a minimal dataset to eliminate complexity.

### Common Error Categories

| Error | Likely Cause |
|---|---|
| Column does not exist | Typo, wrong alias, missing table qualifier |
| Operator does not exist | Type mismatch (text vs integer) |
| Division by zero | Unguarded denominator |
| `ERROR: current transaction is aborted` | Previous error not rolled back |
| Missing FROM-clause entry | Alias referenced before being defined |

### Audit Findings Summary

1. **Incremental CTE Testing**: Test each CTE independently before composing the full query — the most effective isolation technique for complex analytical queries.
2. **`\set VERBOSITY verbose`**: In psql, verbose error mode includes the SQL state code and internal context, providing more debugging information.
3. **Check Transaction State**: In PostgreSQL, any error aborts the current transaction — always check if you're in an aborted transaction state and issue `ROLLBACK` before retrying.

---

## 97. How can you recover data from a corrupt SQL database?

### Technical Audit: Corrupt Database Recovery

Database corruption can result from hardware failure, OS-level crashes, storage issues, or bugs in the database engine. Recovery strategy depends on the type and extent of corruption.

### Prevention First: Backup Discipline

The most effective recovery strategy is a recent, tested backup:

**PostgreSQL continuous backup with WAL archiving** (pg_basebackup + WAL):

```bash
# Create base backup
pg_basebackup -D /backup/base -Ft -z -P

# WAL archiving configured in postgresql.conf
archive_mode = on
archive_command = 'cp %p /wal_archive/%f'
```

### Point-in-Time Recovery (PITR)

Restore to a specific moment before corruption:

```bash
# Restore base backup
tar -xzf /backup/base/base.tar.gz -C /var/lib/postgresql/data

# Configure recovery target in recovery.conf / postgresql.conf
recovery_target_time = '2026-04-26 09:30:00'
restore_command = 'cp /wal_archive/%f %p'

# Start PostgreSQL — it will replay WAL up to the target time
pg_ctl start
```

### Identifying Corruption

```sql
-- PostgreSQL: check for table corruption
SELECT * FROM pg_catalog.pg_check_relation('orders');

-- Test all data pages
VACUUM VERBOSE orders;  -- Reports corruption found during vacuuming

-- pg_dump as corruption check (will fail on corrupt pages)
pg_dump -Fc --exclude-table=corrupt_table mydb > partial_backup.dump
```

### Partial Recovery from Corrupt Table

```sql
-- PostgreSQL: recover readable rows from corrupt table
SET zero_damaged_pages = on;  -- Continue past corrupt pages
SELECT * FROM corrupt_table;  -- Returns rows from uncorrupted pages

-- Extract recoverable data
COPY (SELECT * FROM corrupt_table) TO '/tmp/recovered.csv' CSV;
```

### MySQL InnoDB Corruption Recovery

```sql
-- Enable force recovery mode in my.cnf
innodb_force_recovery = 1  -- Increment up to 6 if lower levels fail

-- Export recoverable data
mysqldump --force mydb corrupt_table > recovered.sql
```

### Audit Findings Summary

1. **3-2-1 Backup Rule**: Three copies, two different media types, one offsite — any production database must follow this; corruption recovery without a backup is extremely limited.
2. **Test Restores Regularly**: A backup that has never been successfully restored is an untested assumption — schedule monthly restore drills to a test environment.
3. **`zero_damaged_pages` is Lossy**: Enabling this PostgreSQL setting allows the engine to skip corrupt pages — data in those pages is permanently lost. Use only as a last resort.

---

## 98. What methods do you employ to ensure _data integrity_?

### Technical Audit: Data Integrity in SQL

**Data integrity** ensures that data is accurate, consistent, and reliable throughout its lifecycle. It is enforced through a combination of database-level constraints, application design, and operational practices.

### Constraint-Based Integrity

**Entity integrity** (primary key uniqueness):

```sql
CREATE TABLE orders (
    order_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY
);
```

**Domain integrity** (valid values):

```sql
ALTER TABLE orders
    ADD CONSTRAINT chk_total_positive CHECK (total > 0),
    ADD CONSTRAINT chk_status_valid   CHECK (status IN ('pending','processing','shipped','delivered','cancelled'));
```

**Referential integrity** (foreign keys):

```sql
ALTER TABLE order_items
    ADD CONSTRAINT fk_order
        FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE;
```

**Uniqueness** (business keys):

```sql
ALTER TABLE users ADD CONSTRAINT uq_email UNIQUE (email);
```

**NOT NULL** for mandatory fields:

```sql
ALTER TABLE customers ALTER COLUMN email SET NOT NULL;
```

### Transaction-Based Integrity

Wrap multi-step operations in transactions to prevent partial updates:

```sql
BEGIN;
UPDATE inventory SET stock = stock - 1 WHERE product_id = 42;
INSERT INTO order_items (order_id, product_id, quantity) VALUES (1042, 42, 1);
COMMIT;
```

### Trigger-Based Integrity

Enforce complex cross-row business rules beyond CHECK constraints:

```sql
CREATE OR REPLACE FUNCTION check_credit_limit()
RETURNS TRIGGER AS $$
BEGIN
    IF (SELECT SUM(total) FROM orders WHERE customer_id = NEW.customer_id) > 
       (SELECT credit_limit FROM customers WHERE id = NEW.customer_id) THEN
        RAISE EXCEPTION 'Credit limit exceeded for customer %', NEW.customer_id;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;
```

### Application-Level Integrity

**Input validation** before reaching the database. **Parameterized queries** to prevent SQL injection. **Optimistic locking** with version columns to prevent lost updates in concurrent systems.

### Audit Findings Summary

1. **Constraints Over Application Logic**: Database constraints are the last line of defense — they enforce integrity even when code bypasses the application (direct DB access, migrations, ETL). Always add constraints for invariants.
2. **Deferrable Constraints**: `DEFERRABLE INITIALLY DEFERRED` allows circular FK dependencies to be inserted in any order within a transaction — useful for complex domain models.
3. **Constraint Naming**: Always name constraints explicitly (`CONSTRAINT chk_positive_total CHECK ...`) — anonymous constraints are harder to drop and reference in error messages.

---

## 99. How do you decipher and resolve _deadlocks_ in SQL?

### Technical Audit: Deadlock Detection and Resolution

A **deadlock** occurs when two or more transactions are each waiting for a lock held by the other, creating a circular wait condition that cannot be resolved without intervention.

### How Deadlocks Occur

```
Transaction A: LOCK row 1 → waiting for row 2
Transaction B: LOCK row 2 → waiting for row 1
```

Both transactions are suspended indefinitely — the database detects the cycle and terminates one.

### Database Detection and Response

Most engines detect deadlocks automatically via a deadlock detector that periodically checks the wait-for graph. The engine selects a **victim** transaction (typically the least costly to abort) and rolls it back with an error:

```
ERROR: deadlock detected
DETAIL: Process 12345 waits for ShareLock on transaction 67890; 
        blocked by process 67890.
        Process 67890 waits for ShareLock on transaction 12345; 
        blocked by process 12345.
HINT: See server log for query details.
```

### Diagnosing Deadlocks in PostgreSQL

```sql
-- Log deadlocks
ALTER SYSTEM SET log_lock_waits = on;
ALTER SYSTEM SET deadlock_timeout = '1s';
SELECT pg_reload_conf();

-- View current lock waits
SELECT
    blocked_locks.pid         AS blocked_pid,
    blocked_activity.query    AS blocked_statement,
    blocking_locks.pid        AS blocking_pid,
    blocking_activity.query   AS blocking_statement
FROM pg_catalog.pg_locks blocked_locks
JOIN pg_catalog.pg_stat_activity blocked_activity ON blocked_activity.pid = blocked_locks.pid
JOIN pg_catalog.pg_locks blocking_locks ON blocking_locks.locktype = blocked_locks.locktype
    AND blocking_locks.granted = TRUE AND blocked_locks.granted = FALSE
JOIN pg_catalog.pg_stat_activity blocking_activity ON blocking_activity.pid = blocking_locks.pid;
```

### Prevention Strategies

**Consistent lock ordering**: All transactions that access multiple rows must acquire locks in the same canonical order (e.g., always lock by ascending `id`):

```sql
-- Lock lower ID first, then higher ID — prevents circular wait
SELECT * FROM accounts WHERE id IN (1, 2) ORDER BY id FOR UPDATE;
```

**Minimize lock duration**: Acquire locks as late as possible; commit as soon as possible.

**Reduce lock granularity**: Use row-level locks instead of table locks where possible.

**Use `SELECT ... FOR UPDATE SKIP LOCKED`**: For queue processing, skip locked rows rather than waiting.

### Application-Level Retry

Since deadlocks are inevitable in high-concurrency systems, always implement retry logic:

```python
import psycopg2
from psycopg2 import errors

for attempt in range(3):
    try:
        with conn.cursor() as cur:
            cur.execute("BEGIN")
            # ... transaction operations ...
            cur.execute("COMMIT")
        break
    except errors.DeadlockDetected:
        conn.rollback()
        time.sleep(0.1 * (2 ** attempt))  # Exponential backoff
```

### Audit Findings Summary

1. **Lock Order is the Primary Prevention**: Most application-level deadlocks result from inconsistent lock acquisition order — establish and enforce a canonical lock ordering convention.
2. **`deadlock_timeout` Tuning**: Set `deadlock_timeout` in PostgreSQL to match acceptable latency — the default (1s) may be too long for real-time applications. Setting it to 50-100ms enables faster detection.
3. **Retry is Mandatory, Not Optional**: Even with perfect lock ordering, deadlocks can occur in multi-table scenarios — all transactional code paths must handle `ERROR 40P01` with retry logic.

---

## 100. Explain how to use SQL for _predictive analysis_ and _machine learning_ purposes.

### Technical Audit: SQL for Predictive Analysis and ML

SQL plays a central role in the ML pipeline — primarily for feature engineering, data preparation, and in-database inference — though the model training itself typically happens in Python/R frameworks.

### Feature Engineering with SQL

SQL is the most efficient tool for computing ML features from structured data at scale:

```sql
-- Customer churn prediction features
CREATE MATERIALIZED VIEW churn_features AS
SELECT
    c.customer_id,

    -- Recency
    EXTRACT(DAY FROM NOW() - MAX(o.order_date))   AS days_since_last_order,

    -- Frequency
    COUNT(o.order_id)                              AS total_orders,
    COUNT(o.order_id) FILTER (WHERE o.order_date >= NOW() - INTERVAL '90 days')
                                                   AS orders_last_90d,

    -- Monetary
    SUM(o.total)                                   AS lifetime_value,
    AVG(o.total)                                   AS avg_order_value,

    -- Engagement
    COUNT(DISTINCT DATE_TRUNC('month', o.order_date)) AS active_months,

    -- Target variable
    CASE WHEN MAX(o.order_date) < NOW() - INTERVAL '180 days'
         THEN 1 ELSE 0 END                         AS is_churned
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
GROUP BY c.customer_id;
```

### In-Database ML with MADlib (PostgreSQL)

Apache MADlib provides SQL-callable ML algorithms running inside PostgreSQL:

```sql
-- Train a logistic regression model
SELECT madlib.logregr_train(
    'churn_features',           -- Source table
    'churn_model',              -- Output model table
    'is_churned',               -- Target column
    'ARRAY[days_since_last_order, total_orders, lifetime_value, avg_order_value]',  -- Features
    NULL, 100, 1e-6, 'irls'     -- Grouping, iterations, tolerance, optimizer
);

-- Predict with the trained model
SELECT
    customer_id,
    madlib.logregr_predict(coef, intercept,
        ARRAY[days_since_last_order, total_orders, lifetime_value, avg_order_value]
    ) AS predicted_churn
FROM churn_features, churn_model;
```

### SQL in the ML Pipeline

```
Raw Data (SQL) → Feature Engineering (SQL/dbt) → Training Data Export
→ Model Training (Python/scikit-learn, XGBoost, TensorFlow)
→ Model Scoring: model applied in Python or pushed back to DB for inference
→ Predictions stored in SQL table → Consumed by applications via SQL
```

### BigQuery ML (In-Database Training)

```sql
-- Train a logistic regression model directly in BigQuery
CREATE OR REPLACE MODEL `project.dataset.churn_model`
OPTIONS (model_type='logistic_reg', input_label_cols=['is_churned'])
AS
SELECT
    days_since_last_order,
    total_orders,
    lifetime_value,
    avg_order_value,
    is_churned
FROM `project.dataset.churn_features`;

-- Predict
SELECT * FROM ML.PREDICT(MODEL `project.dataset.churn_model`,
    (SELECT * FROM `project.dataset.new_customers`));
```

### Audit Findings Summary

1. **SQL for Feature Engineering, Python for Model Training**: SQL excels at set-based feature computation at scale — use it for the data preparation and feature store layer. Use Python (scikit-learn, XGBoost, PyTorch) for model training and hyperparameter tuning.
2. **Feature Store Pattern**: Materialize computed features into a feature store table (refreshed periodically) — models consume consistent, pre-computed features rather than recomputing on every training run.
3. **BigQuery ML / Snowflake Cortex in 2026**: Cloud warehouse-native ML (`BQML`, `Snowflake ML`) enable model training and inference entirely within SQL — appropriate for standard models (linear regression, logistic regression, k-means, time-series forecasting) without requiring Python infrastructure.

#### Explore all 100 answers here 👉 [Devinterview.io - SQL](https://devinterview.io/questions/web-and-mobile-development/sql-interview-questions)

<br>

<a href="https://devinterview.io/questions/web-and-mobile-development/">
<img src="https://firebasestorage.googleapis.com/v0/b/dev-stack-app.appspot.com/o/github-blog-img%2Fweb-and-mobile-development-github-img.jpg?alt=media&token=1b5eeecc-c9fb-49f5-9e03-50cf2e309555" alt="web-and-mobile-development" width="100%">
</a>
</p>
