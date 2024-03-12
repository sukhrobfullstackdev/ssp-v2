"use client";
import React from 'react';
import withAuth from "../../components/hocs/withAuth";

const DashboardPage = () => {
    return (
        <div>
            Dashboard
        </div>
    );
};

export default withAuth(DashboardPage);