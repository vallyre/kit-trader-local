import React, {Component} from 'react';

class ItemForm extends Component {

  createItem(event) {
    event.preventDefault();
    const item = {
      type: this.type.value,
      size: this.size.value,
      number: this.number.value,
      color: this.color.value,
      condition: this.condition.value,
      price: this.price.value
    }
    this.props.addItem(item);
    this.itemForm.reset();
  }

  render() {
    return (

      <form ref={(input) => this.itemForm = input} className='item-form' onSubmit={(e) => this.createItem(e)}>

        <h3>Add an item.</h3>
        <p>Each item submitted will be added to your kit.</p>

        <div className='item-form-line'>

          <label htmlFor='type'>Item</label>
          <select ref={(input) => this.type = input} className='item-type'>
            <option value='jersey'>Jersey</option>
            <option value='shorts'>Shorts</option>
            <option value='socks'>Socks</option>
            <option value='jacket'>Warmup Jacket</option>
            <option value='pants'>Warmup Pants</option>
            <option value='ball'>Ball</option>
            <option value='gloves'>Gloves</option>
            <option value='shoes'>Shoes</option>
            <option value='shinguards'>Shinguards</option>
      </select><span>*</span>

      <label htmlFor='size'>Size</label>
          <select ref={(input) => this.size = input} className='item-size' name='size' required>
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
          <input ref={(input) => this.number = input} type='number' className='item-number' name='number' min='0' max='99' id='enter-item-form-number' />
        </div>

        <div className='item-form-line'>

          <label htmlFor='color'>Color</label>
          <select ref={(input) => this.color = input} className='item-color' required>
            <option value='#1CEFEF'>Cyan</option>
            <option value='#131515'>Black</option>
            <option value='#FFCD14'>Gold</option>
            <option value='#8A8A89'>Gray</option>
            <option value='#018007'>Green</option>
            <option value='#99E4E5'>Light Blue</option>
            <option value='#AAF710'>Light Green</option>
            <option value='#900312'>Maroon</option>
            <option value='#170374'>Navy</option>
            <option value='#E36F01'>Orange</option>
            <option value='#7902BC'>Purple</option>
            <option value='#FA0202'>Red</option>
            <option value='#3B02FA'>Royal Blue</option>
            <option value='#DFDEE1'>Silver</option>
            <option value='#F1EFF7'>White</option>
            <option value='#FAE805'>Yellow</option>
      </select><span>*</span>

      <label htmlFor='condition'>Condition</label>
          <select ref={(input) => this.condition = input} className='item-condition' name='condition'>
            <option value='new'>New</option>
            <option value='like new'>Like New</option>
            <option value='good condition'>Used good</option>
            <option value='fair condition'>Used fair</option>
            <option value='poor condition'>Used poor</option>
      </select>

          <label htmlFor='item-price'>Item price $</label>
          <input ref={(input) => this.price = input} className='item-price' type='number' min='0' max='99' />


        </div>

        <button type='submit'>Add item</button>

      </form>

)
}
}

export default ItemForm;
