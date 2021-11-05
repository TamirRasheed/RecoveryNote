import './PostProductScreen.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getDepartments as listDepartments } from '../redux/actions/departmentActions';

import cloudinaryUpload from '../services/uploads';

const PostProductScreen = () => {
  //const [selectedFile, setSelectedFile] = useState();
  //const [isFilePicked, setIsFilePicked] = useState(false);
  const [imageUrl, setimageUrl] = useState('');

  const [selectedDepartment, setSelectedDepartment] = useState('');
  const dispatch = useDispatch();

  const getDepartments = useSelector((state) => state.getDepartments);
  const { departments, loading, error } = getDepartments;

  useEffect(() => {
    dispatch(listDepartments());
  }, [dispatch]);

  const handleFileUpload = (e) => {
    const uploadData = new FormData();
    uploadData.append('file', e.target.files[0], 'file');
    cloudinaryUpload(uploadData).then((res) => setimageUrl(res.secure_url));
  };

  return (
    <div id='details_box'>
      <form encType='multipart/form-data'>
        <div className='product_details'>
          <label htmlFor='image'>Upload Image: </label>
          <input
            type='file'
            id='img_upload'
            name='image'
            defaultValue={null}
            onChange={(e) => handleFileUpload(e)}
            required
          />
        </div>

        <div className='product_details'>
          <label htmlFor='listingName'>Listing Title: </label>
          <input
            type='text'
            id='listing_name'
            placeholder='Enter name'
            defaultValue=''
            name='listingName'
            required
          />
        </div>

        <div className='product_details'>
          <label htmlFor='price'>Price:</label>
          <input
            type='number'
            min='1'
            step='any'
            id='price'
            placeholder='Enter price, ex. 10.30'
            defaultValue=''
            name='price'
            required
          />
        </div>

        {/* Change this to selector & dynamic */}
        <div id='department' className='product_details'>
          <label htmlFor='departments'>Department: </label>
          <select
            name='departments'
            id='departments'
            onChange={(e) => setSelectedDepartment(e.target.value)}
          >
            <option value={null}></option>
            {!loading &&
              !error &&
              departments.map((department) => (
                <option key={department._id} value={department._id}>
                  {department.name}
                </option>
              ))}
          </select>
        </div>

        <div id='description' className='product_details'>
          <label htmlFor='desc'>Product Description:</label>
          <textarea
            id='desc'
            name='desc'
            defaultValue=''
            rows='2'
            placeholder='Enter description'
            required
          ></textarea>
        </div>
        <div className='product_details'>
          <input className='product_post_button' type='submit' value='Post' />
        </div>
      </form>
    </div>
  );
};

export default PostProductScreen;
