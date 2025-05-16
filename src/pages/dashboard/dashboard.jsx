import React from 'react'
import DashboardAnalytics from '../../components/dashboard-components/dashboard-analytics'
import RevenueChart from '../../components/dashboard-components/revenue-chart'
import PlantsSummaryTable from '../../components/dashboard-components/plants-summary-table'
import EcommerceItemListTable from '../../components/dashboard-components/store-items-table'
import AnimalListTable from '../../components/dashboard-components/animals-table-list'
import TotalVisitors from '../../components/dashboard-components/total-visitors'

const Dashboard = () => {
    return (
        <div className="space-y-6 overflow-x-hidden">
            <DashboardAnalytics />

            <div className="flex flex-wrap gap-4">
                <div className="w-full lg:w-[60%]">
                    <RevenueChart />
                </div>
                <div className="w-full lg:w-[38%]">
                    <PlantsSummaryTable />
                </div>
            </div>

            <div className="flex flex-wrap gap-4">
                <div className="w-full lg:w-[60%]">
                    <EcommerceItemListTable />
                </div>
                <div className="w-full lg:w-[38%] flex flex-col space-y-4">
                    <TotalVisitors />
                    <AnimalListTable />
                </div>  
            </div>
        </div>
    )
}

export default Dashboard
