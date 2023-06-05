//core of app

const Form = (
  {
    alertMsg,

    alert,
    setAlert,

    list,
    setList,

    itemName,
    setItemName,

    isEdit,
    setIsEdit,
    idToEdit,
    setIdToEdit,

    showAlert,
    setShowAlert,
  },
  { key }
) => {
  function onChangeInput(e) {
    const { name, value } = e.target;
    setItemName((prev) => value);
 
  }

  function createItem() {
    const newItem = { id: crypto.randomUUID(), itemName: itemName };

    setList([...list, newItem]);
    setItemName('');
    // setShowAlert(true);
    // setAlert(alertMsg.create);
   
  }

  function updateItem(id) {
    let itemToEdit = list.find((item) => item.id === id);

    const updatedVar = { ...itemToEdit, itemName: itemName };

    const updated = list.map((item) => (item.id === id ? updatedVar : item));

    setList((prev) => updated);
    setIsEdit(false);
    setIdToEdit(null);
    setItemName('');

    setShowAlert(true);
    setAlert(alertMsg.update);
  }

  function onSubmitHandler(e, key) {
    e.preventDefault();

    if (!itemName.trim()) {
      setShowAlert(true);

      setAlert((prev) => alertMsg.empty);
      setItemName('');

      return;

    } else if (!isEdit) {
      createItem();
      setShowAlert(true);
      setAlert(alertMsg.create);
      return;
    } else {
      setShowAlert(true);
      setAlert(alertMsg.update);
      updateItem(idToEdit);
      return;
    }

    setShowAlert(false);
    setAlert({ msg: '', colorCode: '' });
  }

  return (
    <div className='form-container'>
      <form onSubmit={onSubmitHandler} className='form-inside'>
        <input
          type='text'
          className='form-input'
          placeholder='e.g. this is a to do list'
          required
          autoFocus
          
          onChange={(e) => onChangeInput(e)}
          // onChange={(e) => setItemName(e.target.value)}
          name='itemName'
          value={itemName}
        />

        <button className='btn-submit' type='submit'>
          {isEdit ? 'Edit' : 'Add'}
        </button>
      </form>
    </div>
  );
};

export default Form;
