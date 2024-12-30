import cloudinary from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


  cloudinary.v2.uploader.upload("./test.jpg", {
    folder: "test-folder",
  })
    .then(result => {
      console.log(" _| Imagine încărcată cu succes!");
      console.log("URL-ul imaginii:", result.secure_url);
    })
    .catch(error => {
      console.error(" X Eroare la încărcarea imaginii:", error.message);
    });
  