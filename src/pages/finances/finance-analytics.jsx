import React from 'react'
import FinanceAnalytics from '../../components/finance-components/finance-analytics'
import RevenueChart from '../../components/finance-components/revenue-chart'

import TotalVisitors from '../../components/finance-components/total-visitors'
import TotalOrders from '../../components/finance-components/total-order'

import TotalCountries from '../../components/finance-components/total-countries'
import TopSellingItems from '../../components/finance-components/top-selling-items'

const Finance = () => {
    return (
        <div className="space-y-6 overflow-x-hidden">
            <FinanceAnalytics />

            <div className="flex flex-wrap gap-4">
                <div className="w-full lg:w-[60%]">
                    <RevenueChart />
                </div>
                <div className="w-full lg:w-[38%] flex flex-col space-y-4">
                    <TotalOrders />
                    <TotalVisitors />
                </div>
            </div>

            <div className="flex flex-wrap gap-4">
                <div className="w-full lg:w-[60%]">
                    <TopSellingItems />
                </div>
                <div className="w-full lg:w-[38%]">
                    <TotalCountries />
                </div>
            </div>

        </div>
    )
}

export default Finance