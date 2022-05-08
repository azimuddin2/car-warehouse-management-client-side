import { useEffect, useState } from "react";

const useItems = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return [products]
}

export default useItems;
