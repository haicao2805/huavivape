import React from 'react';
import { Footer } from '../../../../core/components/footer';
import { NavBar } from '../../../../core/components/navbar';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <div className="flex-1">{children}</div>
            <Footer />
        </div>
    );
};
