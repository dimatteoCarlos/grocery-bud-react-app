import React from 'react';
import { iconObj } from '../assets/iconsData/icons.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Item = ({ id, itemName }) => {

function editHandler(id){
  console.log('funcion edit', id)
}

function deleteHandler(id){
  console.log('funcion delete', id)
}




  return (
    <article className='item'>
      <p>{`${itemName} with id: ${id}`}</p>
      <div className='button-container'>
        <>
          {iconObj.map((i, ind) => (
            <button key={ind} className={`btn-${i.iClass}`
            }
            const a={()=>`${i.iClass}fn(${id})`}
            onClick={()=>`${i.iClass}fn(${id})`}
            >
              <FontAwesomeIcon
                className={`i-${i.iClass}`}
                icon={i.iconId}
                
                // style={{ color: {iColor} }}
              />
            </button>
          ))}

          <button className={`btn-${iconObj[0].iClass}`}>
            <FontAwesomeIcon
              className={`i-${iconObj[0].iClass}`}
              icon={iconObj[0].iconId}
            />
          </button>
        </>
      </div>
    </article>
  );
};

export default Item;
