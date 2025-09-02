import React, { useState } from 'react';
import { createItem } from '../services/api';

const ItemForm = ({ onItemCreated }) => {
    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newItem = { name: itemName, description: itemDescription };
        await createItem(newItem);
        onItemCreated();
        setItemName('');
        setItemDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="itemName">Item Name:</label>
                <input
                    type="text"
                    id="itemName"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="itemDescription">Item Description:</label>
                <textarea
                    id="itemDescription"
                    value={itemDescription}
                    onChange={(e) => setItemDescription(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add Item</button>
        </form>
    );
};

export default ItemForm;