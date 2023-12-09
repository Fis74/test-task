import Avatar from 'antd/lib/avatar/avatar';
import { List, Typography  } from 'antd';
import React from 'react';

const ItemsList = ({
  items,
  addItemHandler,
}) => {
  const { Text } = Typography;
  
  const itemsStyle = {
    cursor: 'pointer',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "5px"
  };

  return (
    <div>
      <List
        itemLayout="vertical"
        dataSource={items}
        renderItem={(item) => (
          <List.Item

            actions={[]}
            onClick={() => addItemHandler(item)}
            style={itemsStyle}>

            <Avatar
                  shape={'square'}
                  size={50}
                  src={item.img}
                  alt={item.name} />
            <Text style={{ textAlign: "center"}} strong>{item.name}</Text>      

          </List.Item>
        )}
      />
    </div>
  );
};

export default ItemsList;