import './App.css';
import { Link } from "react-router-dom"
import { Plus } from "lucide-react"

function App() {
  return (
    <>
      <div className="min-h-screen pt-16">

        <div className="p-4">
          <input
            type="text"
            placeholder="Search laptops..."
            className="w-full p-2 mt-8 border-gray-300 rounded-md outline-0 bg-gray-100 md:hidden"
          />
        </div>

        <div className='grid p-2'>
          <h2 className='text-2xl font-semibold m-4'>Brands</h2>
          <ul className='flex flex-wrap mx-4'>
            <li className='bg-gray-100 m-2 rounded-2xl p-2 hover:bg-gray-200'>Apple</li>
            <li className="bg-gray-100 m-2 rounded-2xl p-2 hover:bg-gray-200">Dell</li>
            <li className="bg-gray-100 m-2 rounded-2xl p-2 hover:bg-gray-200">HP</li>
            <li className="bg-gray-100 m-2 rounded-2xl p-2 hover:bg-gray-200">Lenovo</li>
            <li className="bg-gray-100 m-2 rounded-2xl p-2 hover:bg-gray-200">Asus</li>
          </ul>
        </div>


        <div className="flex p-2">

          <div className="flex-1 p-4">
            <h2 className="text-2xl font-semibold mb-4">Laptops</h2>
            <input
              type="text"
              placeholder="Search laptops..."
              className="w-full p-4 border-gray-300 rounded-md outline-0 bg-gray-100 hidden md:block text-black mb-2"
            />
            <ul className="grid lg:grid-cols-4 x:grid-cols-5 sm:grid-cols-2 md:grid-cols-3 gap-2">
              <li className="bg-gray-50 rounded shadow transform scale-100
                 transition-transform duration-300 ease-in-out hover:scale-105
                 p-4 flex flex-col items-center max-w-xs w-full">
                <Link className="flex flex-col items-center">
                  <h3 className="text-lg font-bold text-center">MacBook Air</h3>
                  <img
                    src="https://m.media-amazon.com/images/I/316ArzLeJ2L._SX300_SY300_QL70_FMwebp_.jpg"
                    alt="macbook air"
                    className="object-contain max-w-full h-auto my-2"
                  />
                  <p className="text-gray-600">₹92,000</p>
                </Link>
              </li>


              <li className="bg-gray-50 rounded shadow transform scale-100
                 transition-transform duration-300 ease-in-out hover:scale-105
                 p-4 flex flex-col items-center max-w-xs w-full">
                <Link className="flex flex-col items-center">
                  <h3 className="text-lg font-bold text-center">Dell XPS 13</h3>
                  <img
                    src="https://m.media-amazon.com/images/I/316ArzLeJ2L._SX300_SY300_QL70_FMwebp_.jpg"
                    alt="macbook air"
                    class="object-contain max-w-full h-auto my-2"
                  />
                  <p className="text-gray-600">₹1,10,000</p>
                </Link>
              </li>


              <li className="bg-gray-50 rounded shadow transform scale-100
                 transition-transform duration-300 ease-in-out hover:scale-105
                 p-4 flex flex-col items-center max-w-xs w-full">
                <Link className="flex flex-col items-center">
                  <h3 className="text-lg font-bold text-center">HP Spectre x360</h3>
                  <img
                    src="https://m.media-amazon.com/images/I/316ArzLeJ2L._SX300_SY300_QL70_FMwebp_.jpg"
                    alt="macbook air"
                    class="object-contain max-w-full h-auto my-2"
                  />
                  <p className="text-gray-600">₹95,000</p>
                </Link>
              </li>

            </ul>
          </div>

        </div>
      </div>

      <button
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#6f6d6d] hover:bg-[#6f6d6d] 
                   text-white rounded-full shadow-lg hover:shadow-xl 
                   transition-all duration-300 ease-in-out transform hover:scale-110
                   flex items-center justify-center z-50 
                   focus:outline-none"
        aria-label="Add new item">
        <Plus className="w-6 h-6" />
      </button>
    </>
  );
}

export default App;