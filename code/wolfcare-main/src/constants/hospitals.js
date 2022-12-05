import React from 'react';

export const hospitalsColumns = [
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: 'Address',
		dataIndex: 'address',
		key: 'address',
	},
	{
		title: 'Phone number',
		dataIndex: 'phnum',
		key: 'phnum',
	},
	{
		title: 'Action',
		dataIndex: '',
		key: 'x',
		render: () => <a>Delete</a>,
	}
];

// Dummy hospitals list

export const hospitalsData = [
	{
		key: 1,
		name: 'John Brown',
		age: 32,
		address: 'New York No. 1 Lake Park',
		description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
	},
	{
		key: 2,
		name: 'Jim Green',
		age: 42,
		address: 'London No. 1 Lake Park',
		description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
	},
	{
		key: 3,
		name: 'Not Expandable',
		age: 29,
		address: 'Jiangsu No. 1 Lake Park',
		description: 'This not expandable',
	}
];