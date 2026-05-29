function CategoriesList({ categoriesData, title, setfunction, scrollToSection,
    categoryRefs }) {

    // console.log(categoriesData, "categoriesData in CategoriesList.jsx"); 

    return (

        <>
            <div className="flex flex-col w-full bg-white rounded-lg shadow-md p-3 items-center">

                <img
                    src={categoriesData.image}
                    alt={categoriesData.categoryName}

                    onClick={() =>
                        scrollToSection(
                            categoryRefs[categoriesData.categoryName]
                        )
                    }

                    className="w-30 h-30 object-cover rounded-lg cursor-pointer"
                />

                <h2 className="font-medium text-gray-600 text-sm text-center mt-2">
                    {categoriesData.categoryName}
                </h2>

                {/* <button 
                    onClick={() => setfunction(categoriesData)}
                    className="bg-blue-500 text-white px-3 py-1 mt-2 rounded hover:bg-blue-600 transition w-full text-sm"
                >
                    Shop Now
                </button> */}
            </div>

        </>
    )
}

export default CategoriesList;