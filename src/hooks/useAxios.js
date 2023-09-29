import { useState } from 'react';
import {v1 as uuid} from "uuid";
import axios from 'axios';

const useAxios = () => {
    const [data, setData] = useState([]);

    const addData = async(url) => {
        const response = await axios.get(url);
        setData(data => [...data, { ...response.data, id: uuid() }]);
    }

    return [data, addData]
}

export default useAxios;