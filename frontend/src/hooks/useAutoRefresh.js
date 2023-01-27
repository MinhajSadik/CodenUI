import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { setUser } from "../../redux/feature/userSlice";


export function useAutoRefresh() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`${process.env.APP_API_URL}/api/v1/user/refresh`, {
                    withCredentials: true,
                });
                console.log({ data })
                dispatch(setUser(data));
                setLoading(false);
            } catch (error) {
                console.error(error.message);
                setLoading(false);
            }
        })()
    }, []);

    return { loading };
};


