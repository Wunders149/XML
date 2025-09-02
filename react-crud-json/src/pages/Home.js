import React, { useEffect, useState } from 'react';
import ItemList from '../components/ItemList';
import ItemForm from '../components/ItemForm';

const Home = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const response = await fetch('/api/items');
            const data = await response.json();
            setItems(data);
        };

        fetchItems();
    }, []);

    return (
        <div>
            <h1>Item Management</h1>
            <ItemForm setItems={setItems} />
            <ItemList items={items} />
        </div>
    );
};

export default Home;