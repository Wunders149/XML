# React CRUD with JSON Database

This project is a simple React application that demonstrates how to perform CRUD (Create, Read, Update, Delete) operations using a persistent JSON database. The application allows users to manage a list of items, with a user-friendly interface for adding, viewing, and editing items.

## Project Structure

```
react-crud-json
├── public
│   └── index.html          # Main HTML file
├── src
│   ├── index.js           # Entry point of the React application
│   ├── App.js             # Main App component
│   ├── components          # Contains reusable components
│   │   ├── ItemList.js    # Component to display a list of items
│   │   ├── ItemForm.js    # Component for creating and editing items
│   │   └── ItemDetail.js   # Component to display item details
│   ├── pages
│   │   └── Home.js        # Landing page component
│   ├── services
│   │   └── api.js         # API service for CRUD operations
│   └── styles
│       └── App.css        # CSS styles for the application
├── server
│   ├── server.js          # Express server setup
│   └── db.json            # Persistent JSON database
├── package.json            # npm configuration file
└── README.md               # Project documentation
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd react-crud-json
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Start the server:**
   Navigate to the `server` directory and run:
   ```
   node server.js
   ```

4. **Run the React application:**
   In a new terminal, navigate back to the root directory and run:
   ```
   npm start
   ```

5. **Open your browser:**
   Go to `http://localhost:3000` to view the application.

## Features

- **Create:** Add new items to the list using the form.
- **Read:** View the list of items and details of each item.
- **Update:** Edit existing items through the form.
- **Delete:** Remove items from the list.

## Technologies Used

- React
- Express
- JSON
- CSS

## License

This project is licensed under the MIT License.