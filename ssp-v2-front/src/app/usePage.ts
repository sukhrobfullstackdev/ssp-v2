import {type FormProps} from 'antd';
import {getToken, setToken} from "../utils/auth";
import { useRouter } from 'next/navigation'

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

async function getData(values) {
    const res = await fetch('https://mbatbackend.chamber.uz/test_be/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'withCredentials': 'true'
        },
        proxy: {
            protocol: 'https',
            host: 'https://mbatbackend.chamber.uz/test_be'
        },
        crossdomain: true,
        withCredentials: false,
        body: JSON.stringify({login: values.username, password: values.password}),
    });
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res;
}

const usePage = () => {
    const router = useRouter();
    const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
        try {
            const data = await getData(values);
            const body = await data.json();
            const token = data.headers.get('Authorization');
            await setToken(token);
            console.log('body', body);
            router.push('/dashboard');
        } catch (e) {
            console.error('Error fetching data:', e);
        }
    };

    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return {onFinish, onFinishFailed};
};

export default usePage;