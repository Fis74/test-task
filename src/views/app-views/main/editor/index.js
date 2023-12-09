import { Col, Row, Button, Input, message } from 'antd';
import { useState } from 'react';
import { saveDataToTXT, setDataFromTXT } from 'utils/FileFunctions';
import Field from './Field';
import ItemsList from './ItemsList';
import SelectList from './SelectList';

const Editor = () => {
  const [items] = useState([
    {id: 1, name: 'Диван', img: '/img/editor/1.svg', coords: null, rotate: 0},
    {id: 2, name: 'Стол на 4 места', img: '/img/editor/2.svg', coords: null, rotate: 0},
    {id: 3, name: 'Стол', img: '/img/editor/3.svg', coords: null, rotate: 0},
    {id: 4, name: 'Телевизор', img: '/img/editor/4.svg', coords: null, rotate: 0}
  ]);
  
  const [selectedItems, setSelectedItems] = useState([]);

  const addItemHandler = (item) => {
    if (item.coords === null) {
      const addItem = { ...item, coords: { x: 0, y: 0 }, uniqKey: Math.random() };
      setSelectedItems((prev) => [...prev, addItem]);
    }
  };

  const deleteItemHandler = ({id, coords}) => {
    if (coords !== null ) {
      setSelectedItems((prev) =>
        prev.filter((item) => 
        ((item.id !== id) || ((item.id === id) && 
        ((item.coords.x !==  coords.x && 
        item.coords.y !==  coords.y) ||
        (item.coords.x ===  coords.x && 
          item.coords.y !==  coords.y)||
          (item.coords.x !==  coords.x && 
            item.coords.y ===  coords.y))))
        )
      );
    }
  };

  const rotateItemHandler = ({id, coords, rotate}) => {
    setSelectedItems((prev) =>
    prev.map((item) => ( (item.id === id && 
      (item.coords.x ===  coords.x && 
      item.coords.y ===  coords.y)) ? { ...item, rotate: rotate >= 360 ? 90 : rotate + 90 } : item))
    );
  }

  const setPositionHandler = (id, newPosition, oldPosition) => {
    setSelectedItems((prev) =>
      prev.map((item) => ( (item.id === id && 
        (item.coords.x ===  oldPosition.x && 
        item.coords.y ===  oldPosition.y)) ? { ...item, coords: newPosition } : item))
    );
  };

  const saveHandler = () => {
    const coords = selectedItems.map((item) => (item));
    const filteredCoords = coords.filter((p) => p.coords);
    saveDataToTXT(filteredCoords, "editor");
  };

  const uploadHandler = (files) => {
    const file = files.target.files[0];
    setDataFromTXT(file, setPositionFromFile);
  };

  const setPositionFromFile = (data) => {
    const key = "updatable";
      for (let index = 0; index < data.length; index++) {
        const item = data[index];
        if (item.id && item.coords && item.name && item.img && item.rotate >= 0 && item.uniqKey >= 0) {
          setSelectedItems((prev) => [...prev, item]);
          if (data.length-1 === index) {
            message.success({ content: "File Uploaded!", key, duration: 1.5 });
          }
        } else {
          message.error({ content: "Error File NOT VALID!", key, duration: 1.5 });
          setSelectedItems([]);
          break;
        }
      }
  };

  return ( 
        <Row >
          <Col span={3} >
            <div style={{ flexWrap: "wrap", alignItems: "center", display: 'flex', justifyContent: 'center', gap: "10px" }}>
              <Button type="primary" onClick={saveHandler}>
                Сохранить
              </Button>
              <label
                htmlFor="upload"
                className={'ant-btn ant-btn-primary'}>
                Загрузить
              </label>
              <Input
                style={{ display: 'none' }}
                name="upload"
                id="upload"
                type="file"
                onChange={uploadHandler}></Input>
            </div>
            <ItemsList
              items={items}
              addItemHandler={addItemHandler}
              deleteItemHandler={deleteItemHandler}
            />
            
          </Col>
          <Col span={5}>
            <SelectList
              items={selectedItems}
              addItemHandler={addItemHandler}
              deleteItemHandler={deleteItemHandler}
              rotateItemHandler={rotateItemHandler}
            />
          </Col>
          <Col span={16}>
            <Field
              selectedItems={selectedItems}
              setPosition={setPositionHandler}
            />
          </Col>
        </Row>
  );
};

export default Editor;