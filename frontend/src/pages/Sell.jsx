import { useState } from "react"

const Sell = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const handleImageChange = (event) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target?.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = () => {
    setSelectedImage(null)
    // Reset the file input
    const fileInput = document.getElementById("photo")
    if (fileInput) {
      fileInput.value = ""
    }
  }

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
        <form className="bg-white shadow-md rounded px-8 py-6 w-full max-w-md space-y-4">
          <h2 className="text-xl font-semibold text-center">Upload Product</h2>

          {/* Photo Upload */}
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="photo">
              Product Photo
            </label>
            <input
              id="photo"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-stone-50 file:text-[#44403b] hover:file:bg-stone-100"
            />
          </div>

          {/* Photo Preview Section */}
          {selectedImage && (
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Photo Preview</span>
                <button
                  type="button"
                  onClick={removeImage}
                  className="text-red-500 hover:text-red-700 text-sm font-medium"
                >
                  Remove
                </button>
              </div>
              <div className="flex justify-center">
                <img
                  src={selectedImage || "/placeholder.svg"}
                  alt="Product preview"
                  className="max-w-full max-h-48 object-contain rounded-lg shadow-sm"
                />
              </div>
            </div>
          )}

          {/* Product Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Product name"
              className="shadow-sm border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="processor">
              Processor(s)
            </label>
            <input
              id="processor"
              type="text"
              placeholder="CPU/GPU in this format"
              className="shadow-sm border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="display">
              Display
            </label>
            <input
              id="display"
              type="text"
              placeholder="Size in inches"
              className="shadow-sm border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="ram">
              RAM
            </label>
            <input
              id="ram"
              type="text"
              placeholder="RAM"
              className="shadow-sm border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#66aaff] focus:border-[#66aaff]"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="storage">
              Storage
            </label>
            <input
              id="storage"
              type="text"
              placeholder="Storage with type"
              className="shadow-sm border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#66aaff] focus:border-[#66aaff]"
            />
          </div>

          {/* Condition Dropdown */}
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="condition">
              Condition
            </label>
            <select
              id="condition"
              className="block appearance-none w-full bg-white border border-gray-300 rounded py-2 px-3 pr-8 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#66aaff] focus:border-[#66aaff]"
            >
              <option>Excellent</option>
              <option>Good</option>
              <option>Fair</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="price">
              Price (₹)
            </label>
            <input
              id="price"
              type="number"
              placeholder="0.00"
              className="shadow-sm border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#66aaff] focus:border-[#66aaff]"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#44403b] hover:bg-white text-white hover:text-[#44403b] font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-[#66aaff] border-2 border-[#44403b] transition-colors duration-200"
            >
              Sell
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Sell
