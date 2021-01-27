function ItemMenu() {
  return (
    <div>
      <div class="flex flex-col justify-between h-screen p-4 bg-gray-800">
        <div class="text-sm">
          <div class="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">Mobiles</div>
          <div class="bg-gray-700 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">Smart Watches</div>
          <div class="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300"> Speakers</div>
          <div class="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">TV</div>
          <div class="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">Furniture</div>
          <div class="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">Laptops</div>
        </div>

      </div>

    </div>
  )
}

export default ItemMenu;