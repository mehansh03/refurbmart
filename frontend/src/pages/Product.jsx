import React from "react"

// Custom Badge component
const Badge = ({ children, variant = "secondary", className = "" }) => {
  const variants = {
    default: "bg-gray-200 text-gray-800",
    secondary: "bg-stone-100 text-stone-800"
  }
  return (
    <span
      className={`
        inline-block px-2 py-1 rounded-full text-xs font-semibold
        ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}

// Custom Card wrapper
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-2xl overflow-hidden ${className}`}>
    {children}
  </div>
)

// Custom CardContent with padding wrapper
const CardContent = ({ children, className = "" }) => (
  <div className={`p-8 ${className}`}>{children}</div>
)

const Product = () => {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <Card className="max-w-6xl mx-auto my-28">
        <CardContent className="p-0">
          <div className="grid md:grid-cols-2 md:gap-40 p-8 ">
            {/* Product Image */}
            <div class="flex justify-center items-center bg-gray-100 rounded-2xl">
              <img
                src="https://m.media-amazon.com/images/I/316ArzLeJ2L._SX300_SY300_QL70_FMwebp_.jpg"
                alt="Apple MacBook Air M1"
                class="object-contain w-60 h-60 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4 mt-3">
                <Badge variant="secondary">Apple</Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">MacBook Air</h1>
                <p className="text-xl text-gray-600">Supercharged by M1 chip</p>
              </div>

              {/* Specifications */}
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-900">Specifications</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500">Processor</span>
                      <span className="font-medium">Apple M1</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500">Display</span>
                      <span className="font-medium">13" Retina</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500">Memory</span>
                      <span className="font-medium">16GB RAM</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500">Storage</span>
                      <span className="font-medium">512GB SSD</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500">Seller</span>
                      <span className="font-medium">piyushdhamecha327</span>
                    </div>

                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="pt-4 border-t">
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-bold text-gray-900">₹30,000</span>
                </div>
              </div>
              <button className="bg-stone-800 text-white block rounded-3xl p-3 text-xl hover:bg-white hover:text-stone-700 transition-colors duration-300 ease-in-out">Contact seller</button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Product