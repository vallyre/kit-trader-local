import React, {Component} from 'react';

class ItemForm extends Component {
  render() {
    return (

      <form className='item-form'>

        <h3>Add an item.</h3>
        <p>Each item submitted will be added to your kit.</p>

        <div className='item-form-line'>

          <label htmlFor='type'>Item</label>
          <select className='item-type' required>
            <option value='jersey'>Jersey</option>
            <option value='shorts'>Shorts</option>
            <option value='socks'>Socks</option>
            <option value='jacket'>Warmup Jacket</option>
            <option value='pants'>Warmup Pants</option>
            <option value='other'>Ball</option>
            <option value='other'>Gloves</option>
            <option value='other'>Shoes</option>
      </select><span>*</span>

      <label htmlFor='size'>Size</label>
          <select className='item-size' name='size' required>
            <option value='YS'>Youth Small</option>
            <option value='YM'>Youth Medium</option>
            <option value='YL'>Youth Large</option>
            <option value='YXL'>Youth X-Large</option>
            <option value='S'>Adult Small</option>
            <option value='M'>Adult Medium</option>
            <option value='L'>Adult Large</option>
            <option value='XL'>Adult X-Large</option>
            <option value='LXS'>Ladies X-Small</option>
            <option value='LS'>Ladies Small</option>
            <option value='LM'>Ladies Medium</option>
            <option value='LL'>Ladies Large</option>
            <option value='A'>Adult</option>
            <option value='Y'>Youth</option>
            <option value='none'>No Size</option>
      </select><span>*</span>

      <label htmlFor='number'>Number </label>
          <input type='number' className='item-number' name='number' min='0' max='99' id='enter-item-form-number' />
        </div>

        <div className='item-form-line'>

          <label htmlFor='color'>Color</label>
          <select className='item-color' required>
            <option value='cyan'>Cyan</option>
            <option value='black'>Black</option>
            <option value='gold'>Gold</option>
            <option value='gray'>Gray</option>
            <option value='green'>Green</option>
            <option value='ltblue'>Light Blue</option>
            <option value='ltgreen'>Light Green</option>
            <option value='maroon'>Maroon</option>
            <option value='navy'>Navy</option>
            <option value='orange'>Orange</option>
            <option value='purple'>Purple</option>
            <option value='red'>Red</option>
            <option value='royal'>Royal Blue</option>
            <option value='silver'>Silver</option>
            <option value='white'>White</option>
            <option value='yellow'>Yellow</option>
            <option value='other'>Other Color</option>
      </select><span>*</span>

      <label htmlFor='condition'>Condition</label>
          <select className='item-condition' name='condition'>
            <option value='new'>New</option>
            <option value='likenew'>Like New</option>
            <option value='good'>Used good</option>
            <option value='fair'>Used fair</option>
            <option value='poor'>Used poor</option>
      </select>

          <label htmlFor='item-price'>Item price $</label>
          <input className='item-price' type='number' min='0' max='99' />


        </div>

        <button type='submit'>Add item</button>

      </form>

)
}
}

export default ItemForm;
