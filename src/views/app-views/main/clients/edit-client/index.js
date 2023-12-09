import React, { useEffect, useState } from 'react';
import { Form, Avatar, Button, Input, Row, Col, message, Upload, Spin } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import Flex from 'components/shared-components/Flex'
import { useDispatch, useSelector } from 'react-redux';
import { useParams  } from "react-router-dom";
import { selectClient, changeClient } from 'redux/actions/Clients';
import { useHistory } from "react-router-dom";

const EditClient = () => {
    const history = useHistory();
    const { id } = useParams();
    const avatarEndpoint = "https://www.mocky.io/v2/5cc8019d300000980a055e76";
    const dispatch = useDispatch();
    const { selectClient: client, loading, updateLoading, updateStatus} = useSelector(state => state.clients);
    const [data, setData] = useState({
      name: client?.name ?? "",
      username: client?.username ?? "",
      phone: client?.phone ?? "",
      email: client?.email ?? "",
      website: client?.website ?? "",
      company: client?.company?.name ?? "",
      avatarUrl: `/img/avatars/thumb-${id}.jpg` ?? "",
    });

    useEffect(() => {  
        dispatch(selectClient(parseInt(id)))
    }, [dispatch, id])

    useEffect(() => {
      const key = "updatable";
      if (updateStatus === "success") {
        message.success( { content: "Done!", key, duration: 2 } );
        history.push(`/app/main/clients/clients-list`);
      } else if (updateStatus === "error") {
        message.error( { content: "Error", key, duration: 2 } );
        history.push(`/app/main/clients/clients-list`);
      }
    }, [updateStatus, history])
    
    const getBase64 = (img, callback) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => callback(reader.result));
      reader.readAsDataURL(img);
    }

    if (!client?.id && !loading) {
      return <div>PAGE NOT FOUND</div>
    }

    const onFinish = (values) => {
      const key = "updatable";
      message.loading({ content: "Updating...", key });
      setData({
        ...data,
        name: values?.name,
        username: values?.username,
        phone: values?.phone,
        email: values?.email,
        website: values?.website,
        company: values?.company
      });
      dispatch(changeClient(data))
    };
    
    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

    const onUploadAavater = (info) => {
      console.log(info.file.status)
      const key = "updatable";
      if (info.file.status === "uploading") {
        message.loading({ content: "Uploading...", key, duration: 1000 });
        return;
      }
      if (info.file.status === "done") {
        getBase64(info.file.originFileObj, (imageUrl) => {
          setData({...data, avatarUrl: imageUrl})
        });
        message.success({ content: "Uploaded!", key, duration: 1.5 });
      }
      if (info.file.status === "error") {
        message.error({ content: "Error!", key, duration: 1.5 });
      }
    };

    const onRemoveAvater = () => {
      setData({...data, avatarUrl: ""});
    };

    return (
       <Spin size="large" spinning={loading || updateLoading}>
            <>
            <Flex
              alignItems="center"
              mobileFlex={false}
              className="text-center text-md-left"
            >
              <Avatar size={90} src={data.avatarUrl} icon={<UserOutlined />} />
              <div className="ml-md-3 mt-md-0 mt-3">
                <Upload
                  onChange={onUploadAavater}
                  showUploadList={false}
                  action={avatarEndpoint}
                >
                  <Button type="primary">Change Avatar</Button>
                </Upload>
                <Button className="ml-2" onClick={onRemoveAvater}>
                  Remove
                </Button>
              </div>
            </Flex>
            <div className="mt-4">
              <Form
                name="basicInformation"
                layout="vertical"
                initialValues={data}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Row>
                  <Col xs={24} sm={24} md={24} lg={16}>
                    <Row gutter={ROW_GUTTER}>
                      <Col xs={24} sm={24} md={12}>
                        <Form.Item
                          label="Name"
                          name="name"
                          rules={[
                            {
                              required: true,
                              message: "Please input your name!",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12}>
                        <Form.Item
                          label="Username"
                          name="username"
                          rules={[
                            {
                              required: true,
                              message: "Please input your username!",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12}>
                        <Form.Item
                          label="Email"
                          name="email"
                          rules={[
                            {
                              required: true,
                              type: "email",
                              message: "Please enter a valid email!",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12}>
                        <Form.Item label="Phone Number" name="phone">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12}>
                        <Form.Item label="Website" name="website">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12}>
                        <Form.Item label="Company" name="company">
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Button type="primary" htmlType="submit">
                      Save Change
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </>
        </Spin>
    )
}

export default EditClient