import React, { useEffect, useState } from 'react';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [upIm,setUpIm] =useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`http://localhost:5000/images`);
        const data = await response.json();
        setImages(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
    const filteredImages = images.filter(image => image.lawyerId === "123456789");
    console.log(filteredImages)
    setUpIm(filteredImages);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Image Gallery</h2>
      <div className="image-gallery">
        {upIm.map((image) => (
          <div key={image._id} className="image-item">
            <img
              src={`http://localhost:5000/image/${image._id}`}
              alt={image.name}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <p>{image.name}</p>
          </div>
        ))}
        {/* {
            images.filter((image)=>{
                image.lawyerId==="123456789" && (
                    <div key={image._id} className="image-item">
                    <img
                      src={`http://localhost:5000/image/${image._id}`}
                      alt={image.name}
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                )
            })
        } */}
      </div>
    </div>
  );
};

export default ImageGallery;