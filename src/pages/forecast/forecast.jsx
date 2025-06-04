/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import AnimalHarvest from '../../components/dashboard-components/animal-harvest'
import CropYield from '../../components/dashboard-components/crop-yield'

import Calender from '../../../public/images/Vector - 5.svg'
import Dropdown from '../../../public/images/Vector.png'

const forecast = () => {
    const [dateRange, setDateRange] = useState("17 Nov - 17 Dec")
  
  return (
    <div>
      <div className='flex justify-end items-center mb-3'>
         <div className="flex items-center gap-2 rethink-sans-500 bg-white px-4 py-2 rounded-lg shadow text-sm">
                  <span className="text-lg">
                    <img src={Calender} alt="" />
                  </span>
                  <span>{dateRange}</span>
                  <span>
                    <img src={Dropdown} alt="" />
                  </span>
                </div>
      </div>
      <div className="bg-white rounded-lg border border-slate-200/70 p-5 w-full">
        <div className="flex justify-between border-b border-slate-200/70 items-start mb-8">
          <div className='flex flex-col gap-2 items-start '>
            <h2 className="text-xl rethink-sans-700 text-gray-900">Overall Accuracy</h2>
            <div className="md:hidden flex rethink-sans-400 w-38 items-center text-sm text-gray-500">
            <span className="bg-[#F1F4F5] py-2 px-4 rounded-md cursor-pointer text-xs">Last 30 Days</span>
          </div>
            <p className="text-xs mt-1 text-gray-500 rethink-sans-400 mb-3 md:w-3/4 w-full">The overall forecast accuracy is high, but can be improved by ensuring all activity records are up-to-date. Missing data can lead to less accurate predictions. Regularly update your activity log to maintain forecast reliability.</p>
          </div>
          <div className="md:flex hidden rethink-sans-400 w-38 items-center text-sm text-gray-500">
            <span className="bg-[#F1F4F5] py-2 px-4 rounded-md cursor-pointer text-xs">Last 30 Days</span>
          </div>
        </div>

        <div className="mt-8 rethink-sans-400">
          <div className="flex justify-between mb-2">
            <div className="font-bold text-xl text-gray-900">Data Completeness</div>
          </div>

          <div className="flex w-full h-2 mt-2 mb-2">
            <div className="bg-[#17A24A] rounded-l-full" style={{width: '85%'}}></div>
            <div className="bg-gray-200 rounded-r-full" style={{width: '15%'}}></div>
          </div>

          <div className="mb-6">
            <span className="text-sm text-gray-500 rethink-sans-400">85% Complete</span>
          </div>
        </div>
      </div>
      <div className='mt-5'>
        <div>
          <CropYield />
        </div>
        <div>
          <AnimalHarvest />
        </div>
      </div>
    </div>
  )
}

export default forecast