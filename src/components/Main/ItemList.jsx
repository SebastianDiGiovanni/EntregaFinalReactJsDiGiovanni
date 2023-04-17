import React from 'react'
import Item from './Item'

const ItemList = ({array}) => {  

    return (
        <>
            <div id="productCards"> 
                <div className="cardFlex">
                    {array.map((element,i) => 
                        <Item key={i} producto={element} />)}
                </div>
            </div>
        </>
    )
}

export default ItemList;

