import './HomeScreen.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getDepartments as listDepartments } from '../redux/actions/departmentActions';

const HomeScreen = ({ history }) => {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const dispatch = useDispatch();

  const getDepartments = useSelector((state) => state.getDepartments);
  const { departments, loading, error } = getDepartments;

  useEffect(() => {
    dispatch(listDepartments());
  }, [dispatch]);

  const handleSearch = () => {
    if (selectedDepartment) {
      history.push(`/productList/${selectedDepartment}`);
    }
  };

  return (
    <div className='homescreen'>
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

      <button onClick={handleSearch} type='button'>
        Search
      </button>
    </div>
  );
};

export default HomeScreen;
