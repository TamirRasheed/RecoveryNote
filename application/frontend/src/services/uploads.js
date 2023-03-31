import axios from 'axios';
const instance = axios.create();

const cloudinaryUpload = async (fileToUpload) => {
  console.log(fileToUpload)
 return await instance
    .post('/uploads/cloudinary-upload', fileToUpload)
  // return axios
  //   .post('/uploads/cloudinary-upload', fileToUpload)
  .then((res) => res.data)
  .catch((err) => console.log(err));
};

export default cloudinaryUpload;
