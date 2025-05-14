import AnimalImage from '../../../public/images/illustration-animal.png'
import { Link } from 'react-router-dom'


const AnimalManagement = () => {
    return (
        <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex flex-col items-center justify-center py-8">
                <div className="relative w-34 h-34 mb-2">
                    <div>
                        <img src={AnimalImage} alt="" />
                    </div>
                </div>  
                <h2 className="text-xl rethink-sans-700 text-gray-900 mb-1">No Animals Added</h2>
                <p className="text-sm text-gray-500 mb-4 rethink-sans-400">Add a new animal to see it listed here.</p>

                <Link to={"/main-dashboard/animal-management/add-animal"}>
                    <button className="bg-[#01575C] rethink-sans-400 cursor-pointer hover:bg-teal-900 text-white px-6 py-2  rounded-md text-sm transition-colors">
                        Add Animal
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default AnimalManagement
