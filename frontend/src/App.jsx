import './App.css';
import { Link } from "react-router-dom"

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
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">

              <li className="bg-gray-50 rounded shadow transform scale-100 transition-transform duration-300 ease-in-out hover:scale-105 p-4">
                <Link>
                  <h3 className="text-lg font-bold">MacBook Air</h3>
                  <p className="text-gray-600">₹92,000</p>
                </Link>
              </li>


              <li className="bg-gray-50 rounded shadow transform scale-100 transition-transform duration-300 ease-in-out hover:scale-105 p-4">
                <Link>
                  <h3 className="text-lg font-bold">Dell XPS 13</h3>
                  <p className="text-gray-600">₹1,10,000</p>
                </Link>
              </li>


              <li className="bg-gray-50 rounded shadow transform scale-100 transition-transform duration-300 ease-in-out hover:scale-105 p-4">
                <Link>
                  <h3 className="text-lg font-bold">HP Spectre x360</h3>
                  <p className="text-gray-600">₹95,000</p>
                </Link>
              </li>

            </ul>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;