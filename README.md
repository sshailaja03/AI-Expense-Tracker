# AI-Powered Expense Tracker

> A full-stack expense management application combining React, Node.js, MongoDB, practical data structures and algorithms, and AI-generated spending insights.

## Why This Project

Expense trackers are usually simple CRUD applications. This project goes further by using core DSA concepts for real application features such as sorting, date-range search, category aggregation, and top-expense ranking.

It demonstrates how **computer science fundamentals can be applied inside a real product**, rather than existing only as isolated interview problems.

## Features

- Add and remove expenses with description, amount, category, and date
- Filter expenses by category
- Sort the ledger by date or amount
- Search expenses within a date range
- Visualize spending by category and month
- Rank the highest-value expenses
- Track unique expense categories dynamically
- Generate AI-powered spending insights

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, Vite |
| Backend | Node.js |
| Database | MongoDB |
| Core Logic | Custom DSA modules in JavaScript |
| AI | AI-powered insight generation |

## Architecture

```
React + Vite
     │
     │ REST API
     ▼
Node.js / Server
     │
     ├──────────────► MongoDB
     │
     ▼
DSA Engine
 ├─ Merge Sort
 ├─ Binary Search
 ├─ HashMap Aggregation
 ├─ Set Operations
 └─ Max-Heap
     │
     ▼
AI Insight Service
```

The DSA engine is separated from the HTTP and persistence layers. This keeps the algorithmic logic reusable and independently testable.

## DSA & Engineering Highlights

### Merge Sort
Used to sort expenses by date or amount.

- Time: **O(n log n)**
- Space: **O(n)**

### Binary Search
Used for efficient date-range lookup after the ledger is sorted.

- Time: **O(log n)** per boundary
- Space: **O(1)** excluding the returned result

### HashMap Aggregation
Used to calculate category and monthly spending totals.

- Time: **O(n)**
- Space: **O(k)** for distinct keys

### Set
Used to maintain unique expense categories and power dynamic filters.

- Build: **O(n)**
- Average membership check: **O(1)**

### Max-Heap
Used to rank the highest-value expenses.

- Build through insertion: **O(n log n)**
- Top-k extraction: **O(k log n)**
- Space: **O(n)**

A future optimization is a fixed-size min-heap, reducing top-k retrieval to **O(n log k)** when k is small.

## Data Flow

1. Expenses are retrieved from MongoDB.
2. Merge sort orders the records.
3. Binary search narrows the data for date-range queries.
4. HashMap aggregation calculates category/month totals.
5. Set operations produce unique categories.
6. Max-heap ranking identifies top expenses.
7. The aggregated data is used to generate AI spending insights.

## Project Structure

```
project-root/
├── client/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── ...
├── server/
│   ├── lib/
│   │   ├── sorting.js
│   │   ├── searching.js
│   │   ├── aggregator.js
│   │   ├── topExpenses.js
│   │   ├── uniqueSet.js
│   │   └── demo.js
│   ├── routes/
│   ├── models/
│   └── server.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm
- MongoDB (local or MongoDB Atlas)

### Installation

```bash
git clone https://github.com/sshailaja03/AI-Expense-Tracker.git
cd AI-Expense-Tracker

cd server
npm install

cd ../client
npm install
```

### Environment Variables

Create `server/.env`:

```env
MONGODB_URI=<your-mongodb-connection-string>
PORT=5000
AI_API_KEY=<your-ai-provider-key>
```

Never commit real API keys or database credentials.

### Running Locally

Start the backend:

```bash
cd server
npm run dev
```

Start the frontend in another terminal:

```bash
cd client
npm run dev
```

## Testing the DSA Layer

The DSA modules can be exercised independently of the database and HTTP layer:

```bash
npm run test:dsa
```

This validates the core sorting, searching, aggregation, set, and heap operations against a sample dataset.

## Engineering Takeaways

This project demonstrates:

- Applying DSA concepts to product features
- Separating business logic from infrastructure
- Designing reusable algorithmic modules
- Reasoning about time and space complexity
- Building a full-stack application around a real-world problem
- Integrating AI into an existing application workflow
- Handling configuration securely through environment variables

## Roadmap

- Optimize top-N ranking with a fixed-size min-heap
- Add database indexes for larger datasets
- Cache frequently requested aggregations
- Expand AI insights with trend and predictive analysis
- Add broader automated API and integration coverage

## Collaboration & Maintenance

This repository originated as a collaborative project and is currently maintained under **Shailaja Singh's GitHub profile**. See the commit history for the project's development timeline and contributions.

---
**Shailaja Singh** · Software Engineering Student · C++ · DSA · Full-Stack Development
