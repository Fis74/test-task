import Avatar from 'antd/lib/avatar/avatar';
import { List, Button } from 'antd';
import { CloseOutlined, RotateRightOutlined } from '@ant-design/icons';
import React from 'react';

const SelectList = ({
  items,
  addItemHandler,
  deleteItemHandler,
  rotateItemHandler
}) => {

  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={items}
        renderItem={(item) => (
          <List.Item
            actions={[]}
            onClick={() => addItemHandler(item)}>
            <Avatar
                  shape={'square'}
                  size={75}
                  src={item.img}
                  alt={item.name} />
            {item.coords && (
              <>
              <div style={{width: "20px", display: "flex", flexDirection: "column"}}>{item.coords && `x:${item.coords.x} y:${item.coords.y}`}</div>
              <div style={{width: "40px", display: "flex", flexDirection: "column", gap: "3px"}}>
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  rotateItemHandler(item);
                }}
                type="primary"
                size={'small'}
                icon={<RotateRightOutlined />}
              />
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteItemHandler(item);
                }}
                type="primary"
                size={'small'}
                icon={<CloseOutlined />}
              />
              </div>
              </>
            )}
          </List.Item>
        )}
      />
    </div>
  );
};

export default SelectList;