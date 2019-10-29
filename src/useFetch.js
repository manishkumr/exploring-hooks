import {useState, useEffect } from "react";

export default function useFetch(url) {
    const [data, setData] = useState([]);
    useEffect(  () => {
        async function fetchData() {
            try{
              const response = await fetch(url);
              const data = await response.json();
              setData(data)
            } catch (e) {
                console.error(e)
            }
        }
        fetchData();
    }, []);
    return data;
}