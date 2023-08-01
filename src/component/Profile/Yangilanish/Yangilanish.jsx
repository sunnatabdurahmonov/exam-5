import React, { useEffect, useState } from 'react';
import { Space, Table} from 'antd';
import jpeg from '../../../assest/Oval 2.svg'
import button from '../../../assest/button.svg'
import '../Yangilanish/yangilanish.scss'
import qs from 'qs';
import { ArrowUpOutlined } from '@ant-design/icons';


const columns = [
  {
    title: 'Фото',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <img src={jpeg} alt="logo" />
  },
  {
    title: 'Название',
    dataIndex: 'age',
    key: 'age',
    render: (text) => <p>Срочно нужен программист yii2</p>
  },
  {
    title: ' Цена',
    dataIndex: 'address',
    key: 'address',
    render:(text) => <div className="narx">
      <p>2 000 000</p>
      <p>6 000 000</p>
    </div>
  },
  {
    title: ' Дата',
    dataIndex: 'Дата',
    key: 'Дата',
    render:(text) => <div className="data">
      <p># 345 002 </p>
      <p>С: 28 июнь</p>
      <p>По: 28 июль</p>
    </div>
  },
  {
    title: 'Действие',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <div className="div">
        <ArrowUpOutlined className='icons'/>
        <button  className='Поднять'> Поднять</button>
        </div>
    <div className="div">
    <ArrowUpOutlined className='icons-blue'/>
    <button className='Рекламировать'>  Рекламировать</button>
    </div>
        <img src={button} alt="logo" />
      </Space>
    ),
  },
];
const data1 = [
  {
    key: '1',
    name: 'John Brown',

  },
  {
    key: '2',

  },
  {
    key: '3',

  },  {
    key: '4',
  },
  {
    key: '5',
  },
  {
    key: '6',
  },
  {
    key: '7',
  },
  {
    key: '8',
  }
];


const getRandomuserParams = (params) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});
export const Yangilanish = () => {
  const [data,setData] = useState();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  const fetchData = () => {
    setLoading(true);
    fetch(`https://randomuser.me/api?${qs.stringify(getRandomuserParams(tableParams))}`)
      .then((res) => res.json())
      .then(({ results }) => {
        setData(results);
        setLoading(false);
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: 200,
          },
        });
      });
  };

  useEffect(() => {
    fetchData();
  },[JSON.stringify(tableParams)]);
  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  }
  return (
    <Table
      columns={columns}
      dataSource={data1}
      pagination={tableParams.pagination}
      loading={loading}
      onChange={handleTableChange}
    />
  );
}

export default Yangilanish
