import React, { useEffect, useState } from 'react';
import Header from './Header.jsx';
import Form from './Form.jsx';
import List from './List.jsx';
import { alertMsg, key } from './constants/constants.js';
import './style10.css';

console.clear();

function getLocalStorage(key) {
  let list = localStorage.getItem(key);
  if (list) {
    return (list = JSON.parse(localStorage.getItem(key)));
  } else {
    return [];
  }
}
const initList = getLocalStorage(key);

const GroceryBudApp = () => {
  const [list, setList] = useState(initList);

  const [itemName, setItemName] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [alert, setAlert] = useState({ msg: '', colorCode: '' });
  const [showAlert, setShowAlert] = useState(false);
  const [idToEdit, setIdToEdit] = useState('');

  function clearList() {
    setShowAlert(true);
    setAlert((alert) => alertMsg.emptyList);
    setList([]);
    setItemName('');
    setIsEdit(false);
  }

  function deleteFn(id) {
    const listUpdated = list.filter((item) => item.id !== id);
    setList(listUpdated);
    setShowAlert(true);
    setAlert(alertMsg.delete);
    setIsEdit(false);
    setIdToEdit('');
    setItemName('');
  }

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(list));
  }, [list]);

  useEffect(() => {
    const alertTimer = setTimeout(() => {
      setShowAlert(false);
      setAlert({ msg: '', colorCode: 'yellow' });
    }, 1000);

    return () => {
      return clearTimeout(alertTimer);
    };
  }, [list]);

  return (
    <main className='app-wrapper'>
      <Header
        alert={alert}
        setAlert={setAlert}
        showAlert={showAlert}
        setShowAlert={setShowAlert}
      />
      <Form
        key={key}
        alertMsg={alertMsg}
        alert={alert}
        setAlert={setAlert}
        list={list}
        setList={setList}
        itemName={itemName}
        setItemName={setItemName}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        idToEdit={idToEdit}
        setIdToEdit={setIdToEdit}
      />

      <List
        list={list}
        setList={setList}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        setItemName={setItemName}
        idToEdit={idToEdit}
        setIdToEdit={setIdToEdit}
        deleteFn={deleteFn}
      />

      {list.length > 0 && (
        <div className='clear-container'>
          <button className='clear-btn' onClick={clearList}>
            Clear Items
          </button>
        </div>
      )}
    </main>
  );
};

export default GroceryBudApp;
