import { useState } from "react"

export default function Dashboard() {
  const [showUserMenu, setShowUserMenu] = useState(false)

  const seller = {
    name: "Piyush Dhamecha",
    email: "piyushdhamecha327@gmail.com"
  }

  const laptops = [
    {
      id: 1,
      name: "MacBook Pro 16-inch M3",
      brand: "Apple",
      price: 249990,
      condition: "Excellent",
      status: "Available",
      image: "/placeholder.svg?height=200&width=300",
      processor: "M3 Pro",
      ram: "18GB RAM",
      storage: " 512GB SSD"
    },
    {
      id: 2,
      name: "Dell XPS 13 Plus",
      brand: "Dell",
      price: 129990,
      condition: "Good",
      status: "Available",
      image: "/placeholder.svg?height=200&width=300",
      processor: "Intel i7",
      ram: "16GB RAM",
      storage: "512GB SSD"
    },
    {
      id: 3,
      name: "ThinkPad X1 Carbon Gen 11",
      brand: "Lenovo",
      price: 189990,
      condition: "Fair",
      status: "Sold",
      image: "/placeholder.svg?height=200&width=300",
      processor: "Intel i7",
      ram: "16GB RAM",
      storage: "512GB SSD"
    },
    {
      id: 4,
      name: "Surface Laptop Studio 2",
      brand: "Microsoft",
      price: 179990,
      condition: "Excellent",
      status: "Available",
      image: "/placeholder.svg?height=200&width=300",
      processor: "Intel i7",
      ram: "16GB RAM",
      storage: "512GB SSD"
    },
    {
      id: 5,
      name: "MacBook Air M2",
      brand: "Apple",
      price: 99990,
      condition: "Good",
      status: "Available",
      image: "/placeholder.svg?height=200&width=300",
      processor: "M2",
      ram: "8GB",
      storage: "256GB SSD"
    },
    {
      id: 6,
      name: "ASUS ROG Zephyrus G14",
      brand: "ASUS",
      price: 159990,
      condition: "Fair",
      status: "Available",
      image: "/placeholder.svg?height=200&width=300",
      processor: "AMD Ryzen 9/RTX 4060",
      ram: " 16GB RAM",
      storage: "1TB SSD"
    },
  ]

  const availableLaptops = laptops.filter((laptop) => laptop.status === "Available").length
  const soldLaptops = laptops.filter((laptop) => laptop.status === "Sold").length

  const getStatusColor = (status) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-800"
      case "Sold":
        return "bg-gray-100 text-gray-800"
    }
  }

  const getConditionColor = (condition) => {
    switch (condition) {
      case "Excellent":
        return "bg-green-200 text-green-950"
      case "Good":
        return "bg-green-100 text-green-800"
      default:
        return "bg-yellow-100 text-yellow-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <svg className="h-8 w-8 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-2xl font-bold text-gray-900">LaptopStore</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-stone-600 hover:bg-stone-700">
                <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add Laptop
              </button>
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100"
                >
                  <div className="h-8 w-8 rounded-full bg-stone-600 flex items-center justify-center text-white font-medium">
                    {seller.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                </button>
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg border z-10">
                    <div className="px-4 py-3 border-b">
                      <p className="text-sm font-medium">{seller.name}</p>
                      <p className="text-xs text-gray-600">{seller.email}</p>
                    </div>
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Support</a>
                      <div className="border-t"></div>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Log out</a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">{seller.name}</h1>

        {/* Search input (non-functional) */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search laptops..."
            className="block w-full pl-10 pr-3 py-2 rounded-md bg-white placeholder-gray-500"
            disabled
          />
        </div>

        {/* Laptop Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {laptops.map((laptop) => (
            <div key={laptop.id} className="bg-white rounded-lg shadow  overflow-hidden">
              <div className="aspect-video relative">
                <img src={laptop.image} alt={laptop.name} className="w-full h-full object-cover" />
                <span className={`absolute top-2 right-2 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(laptop.status)}`}>
                  {laptop.status}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{laptop.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{laptop.brand} • {laptop.processor} • {laptop.ram} • {laptop.storage}</p>
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <span className="text-xl font-bold text-green-600">Rs. {laptop.price.toLocaleString()}</span>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${getConditionColor(laptop.condition)}`}>
                    {laptop.condition}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

// Reusable Stat Card
const StatCard = ({ title, value, subtitle }) => (
  <div className="bg-white p-6 rounded-lg shadow">
    <p className="text-sm text-gray-600">{title}</p>
    <p className="text-2xl font-bold">{value}</p>
    <p className="text-xs text-gray-500">{subtitle}</p>
  </div>
)
