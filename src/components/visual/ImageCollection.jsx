function ImageCollection({ images }) {
  return (
    <>
      <div className="w-full h-[56vh] flex">
        {/* No Images Added */}
        {images.length === 0 && (
          <div className="w-full h-full flex justify-center items-center bg-beige-0 rounded-2xl">
            <h3>No Images Available.</h3>
          </div>
        )}
        {/* 1 Image Layout */}
        {images.length === 1 && (
          <div className="w-full h-full overflow-hidden rounded-2xl">
            <img src={images[0]} alt="house" className="w-full h-full object-cover" />
          </div>
        )}
        {/* 2 Images Layout */}
        {images.length === 2 && (
          <div className="flex justify-between">
            <div className="w-[65%] h-full overflow-hidden mr-4 rounded-2xl ">
              <img src={images[0]} alt="house" className="w-full h-full object-cover" />
            </div>
            <div className="w-[35%] h-full overflow-hidden rounded-2xl">
              <img src={images[1]} alt="house" className="w-full h-full object-cover" />
            </div>
          </div>
        )}
        {/* 3 Images Layout */}
        {images.length === 3 && (
          <div className="flex justify-between">
            <div className="w-[65%] h-full overflow-hidden mr-4 rounded-2xl">
              <img src={images[0]} alt="house" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col w-[35%] h-full overflow-hidden">
              <div className="w-full h-[50%] overflow-hidden rounded-2xl mb-2">
                <img src={images[1]} alt="house" className="w-full h-full object-cover" />
              </div>
              <div className="w-full h-[50%] overflow-hidden rounded-2xl mt-2">
                <img src={images[2]} alt="house" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        )}
        {/* 4 Images Layout */}
        {images.length === 4 && (
          <div className="flex justify-between">
            <div className="flex w-[70%] h-full overflow-hidden mr-4 rounded-2xl">
              <div className="w-[70%] h-full overflow-hidden rounded-2xl mr-4">
                <img src={images[0]} alt="house" className="w-full h-full object-cover" />
              </div>
              <div className="w-[30%] h-full overflow-hidden rounded-2xl">
                <img src={images[1]} alt="house" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="flex flex-col w-[30%] h-full overflow-hidden">
              <div className="w-full h-[50%] overflow-hidden rounded-2xl mb-2">
                <img src={images[2]} alt="house" className="w-full h-full object-cover" />
              </div>
              <div className="w-full h-[50%] overflow-hidden rounded-2xl mt-2">
                <img src={images[3]} alt="house" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        )}
        {/* 5 Image Layout */}
        {images.length === 5 && (
          <div className="flex justify-between">
            <div className="w-[50%] h-full overflow-hidden mr-4">
              <img src={images[0]} alt="house" className="w-full h-full object-cover rounded-2xl" />
            </div>
            <div className="w-[50%] h-full grid grid-cols-2 grid-rows-2 gap-4">
              <div className="w-full h-full overflow-hidden">
                <img
                  src={images[1]}
                  alt="house"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="w-full h-full overflow-hidden">
                <img
                  src={images[2]}
                  alt="house"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="w-full h-full overflow-hidden">
                <img
                  src={images[3]}
                  alt="house"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="w-full h-full overflow-hidden">
                <img
                  src={images[4]}
                  alt="house"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ImageCollection;
