import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

const ItemDetail = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await api.get(`/items/${id}`);
                setItem(response.data);
            } catch (error) {
                console.error('Error fetching item:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchItem();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!item) {
        return <div>Item not found</div>;
    }

    return (
        <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
        </div>
    );
};

export default ItemDetail;