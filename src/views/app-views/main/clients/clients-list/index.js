import React, { useEffect } from 'react';
import { Card, Table, message } from 'antd';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import { useHistory } from "react-router-dom";

const ClientsList = ({ clients, loading, error }) => {
    const history = useHistory();
    const editClient = ( client ) => {
        history.push(`/app/main/clients/edit-client/${client.id}`);  
    };
    useEffect(() => {
      const key = "Error";
      if (error) {
        message.error( { content: error, key, duration: 3 } );
      } 
    }, [error])

    const tableColumns = [
      {
        title: "Client",
        dataIndex: "name",
        render: (_, record) => (
          <div onClick={() => {editClient(record)}} className="d-flex cursor-pointer">
            <AvatarStatus
              src={`/img/avatars/thumb-${record.id}.jpg`}
              name={record.name}
              subTitle={record.username}
            />
          </div>
        ),
        sorter: {
          compare: (a, b) => {
						a = a.name.toLowerCase();
  					b = b.name.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
        },
      },
      {
        title: "Email",
        dataIndex: "email",
        sorter: {
          compare: (a, b) => {
						a = a.name.toLowerCase();
  					b = b.name.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
        },
      },
      {
        title: "Phone",
        dataIndex: "phone",
      },
      {
        title: "Website",
        dataIndex: "website",
        sorter: {
          compare: (a, b) => {
						a = a.name.toLowerCase();
  					b = b.name.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
        },
      },
      {
        title: "Company",
        dataIndex: ["company", "name"],
        sorter: {
          compare: (a, b) => {
						a = a.name.toLowerCase();
  					b = b.name.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
        },
      },
    ];
    return (
      <Card bodyStyle={{ padding: "0px" }}>
          <Table loading={loading} size="large" columns={tableColumns} dataSource={clients} rowKey="id" />
      </Card>
    );
}

export default ClientsList;