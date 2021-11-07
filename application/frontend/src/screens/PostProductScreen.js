import './PostProductScreen.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { getDepartments as listDepartments } from '../redux/actions/departmentActions';

import cloudinaryUpload from '../services/uploads';

const PostProductScreen = ({ history }) => {
  const [imageUrl, setimageUrl] = useState('');

  const dispatch = useDispatch();

  const getDepartments = useSelector((state) => state.getDepartments);
  const { departments, loading, error } = getDepartments;

  const getLoginStatus = useSelector((state) => state.login);
  const { loggedIn, _id } = getLoginStatus;

  useEffect(() => {
    dispatch(listDepartments());
  }, [dispatch]);

  const handleFileUpload = (event) => {
    const uploadData = new FormData();
    uploadData.append('file', event.target.files[0], 'file');
    cloudinaryUpload(uploadData).then((res) => setimageUrl(res.secure_url));
  };

  const handleSubmit = (event) => {
    const newProduct = {
      name: event.target.elements.listing_name.value,
      description: event.target.elements.desc.value,
      price: event.target.elements.price.value,
      imageUrl: imageUrl,
      departmentId: event.target.elements.departments.value,
      sellerId: 'aaaaaaaaaaaaaaaaaaaaaaa1',
    };

    axios
      .post('/api/products/post', newProduct)
      .then(function (response) {
        history.push(`/product/${response.data._id}`);
      })
      .catch(function (error) {
        console.log(error);
      });

    event.preventDefault();
  };

  return (
    <>
      {!loggedIn && <Redirect to='/login' />}
      <div id='details_box'>
        <form onSubmit={handleSubmit} encType='multipart/form-data'>
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

          {imageUrl && (
            <div className='product_details'>
              <img src={imageUrl} alt='user-uploaded' />
            </div>
          )}

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

          <div id='department' className='product_details'>
            <label htmlFor='departments'>Department: </label>
            <select name='departments' id='departments'>
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
    </>
  );
};

export default PostProductScreen;
