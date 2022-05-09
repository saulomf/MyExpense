import React, { createContext, useState } from "react";

interface expenseData {
	_id?: string;
	date: string;
	item: string;
	value: number;
	additionalInfo: {
		type: string;
	};
}

interface ListContextInterface {
	listData: Array<expenseData>;
	addLocalData: (expense: expenseData) => void;
	updateExpense: (expense: expenseData, id: string) => void;
	deleteLocalData: (id: string) => void;
}

export const ListContext = createContext<ListContextInterface>(
	{} as ListContextInterface
);

export const ListProvider: React.FC = ({ children }) => {
	const [listData, setListData] = useState<Array<expenseData>>([]);

	const addLocalData = (expense: expenseData) => {
		setListData((prev) => [...prev, expense]);
	};

	const deleteLocalData = (id: string) => {
		const newListData = listData.filter((item) => item._id !== id);
		setListData([]);
		setListData(newListData);
	};

	const updateExpense = (expense: expenseData, id: string) => {
		let copyListData = [...listData];
		for (let i = 0; i < copyListData.length; i++) {
			if (copyListData[i]._id === id) copyListData[i] = expense;
		}
		setListData([]);
		setListData(copyListData);
	};

	return (
		<ListContext.Provider
			value={{ listData, addLocalData, updateExpense, deleteLocalData }}
		>
			{children}
		</ListContext.Provider>
	);
};
