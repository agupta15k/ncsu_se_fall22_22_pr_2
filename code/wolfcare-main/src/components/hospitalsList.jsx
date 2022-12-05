import React from 'react';
import { Table } from 'antd';
import { hospitalsData, hospitalsColumns } from '../constants/hospitals';

class HospitalsList extends React.Component {
	render() {
		return (
			<Table
				columns={ hospitalsColumns }
				expandable={ {
					expandedRowRender: (record) => (
						<p
							style={ {
								margin: 0,
							} }
						>
							{ record.description }
						</p>
					)
				} }
				dataSource={ hospitalsData }
				bordered={ true }
				showHeader
				scroll={ {
					y: 530
				} }
				pagination={ {
					position: [ 'bottomCenter' ],
					showQuickJumper: true
				} }
			/>
		);
	}
}

export default HospitalsList;
