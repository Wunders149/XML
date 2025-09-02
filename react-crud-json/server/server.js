const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

const dbPath = path.join(__dirname, 'db.json');

// Get all items
app.get('/api/items', (req, res) => {
    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read database' });
        }
        res.json(JSON.parse(data));
    });
});

// Get a single item by ID
app.get('/api/items/:id', (req, res) => {
    const id = req.params.id;
    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read database' });
        }
        const items = JSON.parse(data);
        const item = items.find(i => i.id === parseInt(id));
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.json(item);
    });
});

// Create a new item
app.post('/api/items', (req, res) => {
    const newItem = req.body;
    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read database' });
        }
        const items = JSON.parse(data);
        newItem.id = items.length ? items[items.length - 1].id + 1 : 1;
        items.push(newItem);
        fs.writeFile(dbPath, JSON.stringify(items, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to save item' });
            }
            res.status(201).json(newItem);
        });
    });
});

// Update an item
app.put('/api/items/:id', (req, res) => {
    const id = req.params.id;
    const updatedItem = req.body;
    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read database' });
        }
        const items = JSON.parse(data);
        const index = items.findIndex(i => i.id === parseInt(id));
        if (index === -1) {
            return res.status(404).json({ error: 'Item not found' });
        }
        items[index] = { ...items[index], ...updatedItem };
        fs.writeFile(dbPath, JSON.stringify(items, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to update item' });
            }
            res.json(items[index]);
        });
    });
});

// Delete an item
app.delete('/api/items/:id', (req, res) => {
    const id = req.params.id;
    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read database' });
        }
        let items = JSON.parse(data);
        items = items.filter(i => i.id !== parseInt(id));
        fs.writeFile(dbPath, JSON.stringify(items, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to delete item' });
            }
            res.status(204).send();
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});