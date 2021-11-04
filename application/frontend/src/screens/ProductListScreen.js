import './ProductListScreen.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import Product from '../components/Product';

//Actions
import { getProductsByDepartment as listProducts } from '../redux/actions/productActions';

const ProductListScreen = ({ match }) => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProductsByDepartment);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    if (match.params.id) {
      dispatch(listProducts(match.params.id));
    }
  }, [dispatch, match]);

  return (
    <div className='productlistscreen'>
      <h2 className='productlistscreen__title'>Latest Products</h2>
      <div className='productlistscreen__products'>
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductListScreen;
