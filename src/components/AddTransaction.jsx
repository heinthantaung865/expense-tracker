import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = ({ transactionToEdit, isEdit, setIsEdit }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);
  const {editTransaction} = useContext(GlobalContext);
  const [tempEditText, setTempEditText] = useState('');

  // Update tempEditText and other fields when isEdit or transactionToEdit changes
  useEffect(() => {
    if (isEdit && transactionToEdit) {
      setTempEditText(transactionToEdit.text);
      setText(transactionToEdit.text);
      setAmount(transactionToEdit.amount);
    } else {
      setTempEditText('');
      setText('');
      setAmount(0);
    }
  }, [isEdit, transactionToEdit]);

  function addTransactionAction() {
    const newTransaction = {
      id: crypto.randomUUID(),
      text: text,
      amount: +amount
    };

    addTransaction(newTransaction);
    setText('');
    setAmount(0);
  }

  function editTransactionAction() {
    console.log('editTransaction');
    const editedNewTransaction = {
      id : transactionToEdit.id,
      text: text,
      amount : +amount
    }
    editTransaction(editedNewTransaction);
    setText('');
    setAmount(0);
    // Logic for editing the transaction goes here
  }

  function handleForm(e) {
    e.preventDefault();

    if (!text || !amount || amount == 0) {
      alert('Please enter both text and a valid amount.');
      return;
    }

    if (!isEdit) {
      addTransactionAction();
    } else {
      editTransactionAction();
    }
  }

  return (
    <form onSubmit={handleForm} className="mt-6 bg-white p-6 rounded-lg shadow-md">
  <div className="text-lg font-semibold mb-4">
    {isEdit ? 'Edit Transaction' : 'Add New Transaction'}
  </div>
  <hr className="mb-4" />
  <div className="mb-4">
    <label className="block text-sm text-gray-600 mb-2">Text</label>
    <input
      value={text}
      onChange={(e) => setText(e.target.value)}
      type="text"
      className="w-full p-2 border border-gray-300 rounded-lg"
    />
  </div>
  <div className="mb-4">
    <label className="block text-sm text-gray-600 mb-2">
      Amount <span className="text-xs text-gray-400">(expense-negative, income-positive)</span>
    </label>
    <input
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      type="number"
      className="w-full p-2 border border-gray-300 rounded-lg"
    />
  </div>
  <button className="w-full bg-blue-500 text-white py-2 rounded-lg">
    {isEdit ? 'Edit' : 'Add'} Transaction
  </button>
</form>


  );
};

export default AddTransaction;
