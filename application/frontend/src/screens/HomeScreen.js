import './HomeScreen.css';
import { useEffect, useState, Fragment } from 'react';
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
    <Fragment>
      <h1 className='homescreen__title'>
        Find all your Books, Notes, and Supplies here.
      </h1>
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

        <button
          className='homescreen__search__button'
          onClick={handleSearch}
          type='button'
        >
          Search
        </button>
      </div>
    </Fragment>
  );
};

export default HomeScreen;
