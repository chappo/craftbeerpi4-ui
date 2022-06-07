import React from "react";
import "../../App.css";
import { useParams } from "react-router-dom";
import { Dashboard, DashboardProvider } from "./DashboardContext";


const Dashboard2 = () => {  
  return (
    <DashboardProvider>
        <Dashboard width="100%" height="auto" />
    </DashboardProvider>  
  );
};

const FixDashboard = () => {  
  const { dashboardid } = useParams();
  return (
    <DashboardProvider>
        <Dashboard width="100%" height="auto" fixdash={dashboardid}/>
    </DashboardProvider>  
  );
};

export {Dashboard2, FixDashboard};
