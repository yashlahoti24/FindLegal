import  { useState } from 'react';

const UploadImage = () => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleUpload = async () => {
    if (!image) {
      alert('Please select an image to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', image);
    formData.append('lawyerId',"123456789")

    try {
      setUploading(true);

      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body:formData
            // lawyerId:"123456789"
        
      });

      if (!response.ok) {
        throw new Error('Failed to upload image');
      }

      const data = await response.json();
      console.log('Image uploaded successfully:', data);
      setImageUrl(`http://localhost:5000/image/${data._id}`); // Set uploaded image URL
      alert('Image uploaded successfully!');
      setImage(null); // Clear selected image
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <h2>Upload Image</h2>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
      {imageUrl && (
        <div>
          <h2>Uploaded Image</h2>
          <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '100%' }} />
        </div>
      )}
    </div>
  );
};

export default UploadImage;