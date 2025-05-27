import React from 'react';
import HomePageBanners from '../../components/admin-dashboard-components/homepage-banners';
import ProductApprovals from '../../components/admin-dashboard-components/product-approvals';
import ProductFeedback from '../../components/admin-dashboard-components/product-feedback';
import { GoFileSymlinkFile } from 'react-icons/go';

const AdminEcommerceManagement = () => {
    return (
        <div className='md:mt-10 mt-5'>
            <div className='flex md:justify-between justify-start md:flex-row flex-col md:items-center items-start md:gap-0 gap-4 mb-6'>
                <div>
                    <h1 className='text-2xl rethink-sans-700'>E-Commerce Management</h1>
                    <p className='rethink-sans-400 text-gray-700'>Access products, reviews, and banners.</p>
                </div>
                <div>
                    <button className="bg-[#01575C] flex items-center justify-center gap-3 py-2 px-4 text-sm rounded-md text-white">
                        <div><GoFileSymlinkFile /></div>
                        <span className="">Export Csv</span>
                    </button>
                </div>
            </div>

            <div className="flex md:flex-row flex-col gap-4">
                <div className="flex flex-col gap-4 md:w-2/3 w-full">
                    <ProductApprovals />
                    <ProductFeedback />
                </div>

                <div className="md:w-1/3 w-full">
                    <HomePageBanners />
                </div>
            </div>
        </div>
    );
};

export default AdminEcommerceManagement;
