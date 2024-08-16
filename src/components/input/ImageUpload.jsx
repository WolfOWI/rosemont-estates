import React, { useState } from "react";

function ImageUpload({ onImagesSelected }) {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 5) {
      alert("You can only upload up to 5 images.");
      return;
    }
    setSelectedImages(files);
    onImagesSelected(files);
  };

  return (
    <div>
      <input type="file" multiple accept="image/*" onChange={handleImageChange} />
      {selectedImages.length > 0 && (
        <div>
          {selectedImages.map((image, index) => (
            <img
              key={index}
              src={URL.createObjectURL(image)}
              alt="Selected"
              style={{ width: "100px", marginRight: "10px" }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ImageUpload;
