import {
  Layout,
  Row,
  Col,
  Table,
  Space,
  Divider,
  Statistic,
  Button,
  Modal
} from 'antd';
import { CreditCardOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../redux/actions';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const { Content } = Layout;

const Cart = () => {
  const dispatch = useDispatch();
  const cartList = useSelector((state: any) => state.cart.cart);
  const products = useSelector((state: any) => state.products);
  const [isModalVisible, setIsModalVisible] = useState(false);
  let finalArray: any[] = [];
  let sum = 0;

  const showModal = () => {
    if (finalArray.length !== 0) {
      setIsModalVisible(true);
    } else {
      alert('Please select at least one product.');
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  //get cart list
  cartList.map((item: any) => {
    products.map((product: any) => {
      if (item === product.id) {
        finalArray.push(product);
      }
    })
  })

  //sum prices
  finalArray.forEach(price => {
    sum += price.price;
  })

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
      title: 'Delete Item',
      key: 'id',
      dataIndex: 'id',
      render: (id: any) => (
        <Space size='middle'>
          <ShoppingCartIcon style={{ cursor: 'pointer' }} onClick={() => dispatch(getCart(id))} />
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Layout style={{ padding: '0px 5vw', minHeight: '92.5vh' }}>
        <Content className='site-layout-background'>
          <br></br>
          <Divider orientation='left'>Products in Cart</Divider>
          <br></br>
          <Table
            size='small'
            columns={columns}
            dataSource={finalArray}
            style={{ width: '100%', margin: 'auto' }}
            pagination={false}
            scroll={{ x: true, y: 700 }}
          />
          <Row justify='end'>
            <Col>
              <Statistic
                title='Total (tax incl).'
                value={sum}
                precision={2}
              />
              <Button style={{ marginTop: 16 }} type='primary' onClick={() => showModal()}>
                Pay now <CreditCardOutlined />
              </Button>
              <Modal footer={[]} title="Payment Successful!" visible={isModalVisible} onCancel={handleCancel}>
                <Row justify='center'><Col>Thank you for choosing us, your payment has been completed.</Col></Row>
              </Modal>
            </Col>
          </Row>
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

export default Cart;