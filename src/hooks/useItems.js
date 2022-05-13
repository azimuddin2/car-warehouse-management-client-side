import { useEffect, useState } from "react";

const useItems = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://murmuring-dusk-95457.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return [products, setProducts]
}

export default useItems;
