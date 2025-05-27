import React from 'react'
import DashboardAnalytics from '../../components/admin-dashboard-components/analtyics'
import UserEngagmentChart from '../../components/admin-dashboard-components/user-chart'
import SalesTrend from '../../components/admin-dashboard-components/sales-trend'
import RevenueChart from '../../components/admin-dashboard-components/revenue-report'
import TopRankingFarms from '../../components/admin-dashboard-components/top-ranking-farms'
import TotalVisitors from '../../components/admin-dashboard-components/total-visitors'

const dashboard = () => {
  return (
    <div  className="space-y-6 overflow-x-hidden mb-10">
        <DashboardAnalytics />


        <div className="flex flex-wrap gap-4">
                <div className="w-full lg:w-[60%]">
                    <UserEngagmentChart />
                </div>
                <div className="w-full lg:w-[38%] flex flex-col space-y-4">
                    <SalesTrend />
                    <TotalVisitors />

                </div>
            </div>

            <div className="flex flex-wrap gap-4">
                <div className="w-full lg:w-[60%]">
                    <RevenueChart />
                </div>
                <div className="w-full lg:w-[38%]">
                    <TopRankingFarms />
                </div>
            </div>
    </div>
  )
}

export default dashboard