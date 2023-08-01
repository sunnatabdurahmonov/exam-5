import React, { useContext, useState } from 'react';
import { Button, Space } from 'antd';
import { SectionContext } from '../../../context/Contex';

const LoginBtn = () => {
  const {token} = useContext(SectionContext)
  const [loadings, setLoadings] = useState([]);
  const enterLoading = (index) => {
      if( token) {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = false;
            return newLoadings;
          });
      }else{
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
          });
      }
      
 
  };
  return (
    <Space direction="vertical">

      <Space wrap>
        <Button className='btn-login'  type="primary" htmlType='submit' loading={loadings[0]} onClick={() => enterLoading(0)}>
        Войти
        </Button>
      </Space>
    </Space>
  );
};
export default LoginBtn;