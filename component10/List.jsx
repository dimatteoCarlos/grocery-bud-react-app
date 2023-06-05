//map the list of Items

import Item from './Item';

const List = ({
  list,
  setList,
  isEdit,
  setIsEdit,
  itemName,
  setItemName,
  setIdToEdit,
  deleteFn,
}) => {
  return (
    <section className='section-list'>
      {list.length > 0 &&
        list.map((item) => (
          <Item
            key={item.id}
            {...item}
            setIsEdit={setIsEdit}
            isEdit={isEdit}
            setItemName={setItemName}
            setIdToEdit={setIdToEdit}
            deleteFn={deleteFn}
          />
        ))}
    </section>
  );
};

export default List;
