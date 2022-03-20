import {
  Layout,
  Row,
  Col,
  Table,
  Space,
  Divider
} from 'antd';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Rating } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCart, likeButtonClick } from './redux/actions';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const { Content } = Layout;

const Favorites = () => {
  const dispatch = useDispatch();
  const favoriteList = useSelector((state: any) => state.likeButton.like);
  const cartList = useSelector((state: any) => state.cart.cart);
  const products = useSelector((state: any) => state.products);
  let finalArray: any[] = [];

  favoriteList.map((item: any) => {
    products.map((product: any) => {
      if (item === product.id) {
        finalArray.push(product);
      }
    })
  })

  console.log(finalArray)

  //Table columns
  const columns = [
    {
      title: 'Product Name',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Price ($)',
      key: 'price',
      dataIndex: 'price',
      render: (text: any, record: any) => (
        <Space size='middle'>
          <p>{text}$</p>
        </Space>
      ),
    },
    {
      title: 'Product Image',
      key: 'image',
      dataIndex: 'image',
      render: (image: any) => (
        <Space size='middle'>
          <img src={image} alt="product" style={{ maxWidth: '100px' }} />
        </Space>
      ),
    },
    {
      title: 'Rating',
      key: 'rating',
      dataIndex: 'rating',
      render: (rating: any) => (
        <Space size='middle'>
          <Rating size='small' name="read-only" value={rating.rate} readOnly />
        </Space>
      ),
    },
    {
      title: 'Add To Cart',
      key: 'id',
      dataIndex: 'id',
      render: (id: any) => (
        <Space size='middle'>
          <ShoppingCartIcon style={{ cursor: 'pointer', color: cartList.includes(id) ? 'purple' : '' }} onClick={() => dispatch(getCart(id))} />
        </Space>
      ),
    },
    {
      title: 'Delete',
      key: 'id',
      dataIndex: 'id',
      render: (id: any) => (
        <Space size='small'>
          <FavoriteIcon style={{ cursor: 'pointer' }} onClick={() => dispatch(likeButtonClick(id))} />
        </Space>
      ),
    },
  ];


  return (
    <div>
      <Layout style={{ padding: '0px 100px', minHeight: '92.5vh' }}>
        <Content className='site-layout-background'>
          <br></br>
          <Divider orientation='left'>Total Items</Divider>
          <br></br>
          <Table
            size='small'
            columns={columns}
            dataSource={finalArray}
            style={{ width: '80%', margin: 'auto' }}
            pagination={false}
          />
          <Divider orientation='right'>
            <p>Billing</p>
          </Divider>
          <Row justify='center'>
            <Col md={12}>
              <Divider orientation='left'>Policy</Divider>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <Divider orientation='left'>Terms</Divider>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </Col>
          </Row>
          <br></br>
        </Content>
      </Layout>
    </div>
  )
}

export default Favorites;