'use server';
import {cookies} from 'next/headers';

export const setToken = async (token: string) => {
    const oneDay = 24 * 60 * 60 * 1000;
    await cookies().set('token', token, {expires: Date.now() + oneDay});
};
export const getToken = async () => {
    const res = await cookies().get('token');
    return res.value;
};
export const deleteToken = () => {
    cookies().delete('token');
};
export const isAuthenticated = (): boolean => {
    return cookies().has('token');
};