'use client'
import SidebarWithHeader from "@/components/dashboardComponents/Sidebar";
import { ReactNode } from "react";

interface dashLayoutProps {
    children: ReactNode
}

const DashLayout = ({children}: dashLayoutProps) => {
    return ( 
        <SidebarWithHeader>
            {children}
        </SidebarWithHeader>
     );
}
 
export default DashLayout;