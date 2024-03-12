"use client";
import {useEffect} from 'react';
import {useRouter} from 'next/navigation';
import {isAuthenticated} from "../../utils/auth";

const withAuth = (Component) => {
    return () => {
        const router = useRouter();

        useEffect(() => {
            if (!isAuthenticated()) {
                router.push('/');
            }
        }, [router]);
        return Component();
    };
};

export default withAuth;
