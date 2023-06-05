import { FaEdit, FaTrash, FaTrashCan, FaTrashAlt } from 'react-icons/fa';

const Item = ({
  id,
  itemName,
  setItemName,
  setIsEdit,
  isEdit,
  setIdToEdit,
  deleteFn,
}) => {
  function editHandler(id) {
    setIsEdit((prev) => true);
    setIdToEdit(id);
    setItemName(itemName);
  }

  function deleteHandler(id) {
    deleteFn(id);
  }

  return (
    <article className='item'>
      <div className='item-name'>{`${itemName} `}</div>
      <div className='button-container'>
        <button className={'btn-edit btn'}>
          <FaEdit className='i-edit' onClick={() => editHandler(id)} />
        </button>

        <button className={'btn-delete btn'}>
          <FaTrashAlt
            className='i-delete'
            onClick={() => deleteHandler(id, itemName)}
          />
        </button>
      </div>
    </article>
  );
};

export default Item;
