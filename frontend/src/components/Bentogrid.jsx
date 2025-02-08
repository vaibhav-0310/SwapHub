import React from 'react';

const BentoGrid = ({ blogs, categoryName }) => {
  return (
    <div className="h-[25vh] w-full flex items-center justify-center p-6 my-10">
      <div className="w-full max-w-screen-xl flex">
        {/* Left Side - Image and Description (25% of the container) */}
        <div className="w-1/4 flex flex-col justify-center p-6 bg-gray-100">
          <img
            src="https://via.placeholder.com/150"
            alt="Image description"
            className="w-full h-auto rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-700">{categoryName}</h2>
          <p className="text-lg text-gray-500">
            This is a description for the {categoryName} category, explaining what users can do in this section.
          </p>
        </div>

        {/* Right Side - Bento Grid (75% of the container) */}
        <div className="w-3/4 p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Bento Grid Boxes */}
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-indigo-100 rounded-lg flex justify-center items-center p-6"
                style={{
                  height: '120px',
                  backgroundImage: `url(${blog.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <span className="text-xl font-bold text-white">{blog.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
