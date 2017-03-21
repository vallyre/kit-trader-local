import React, {Component} from 'react';

class KitForm extends Component {
  render() {
    return (


<form className='kit-form' type='submit'>
  <h3>Describe your kit.</h3>
  <p>Your kit setup will display on the right.</p>

  <div className='kit-form-line'>

    <label htmlFor='kit-trans-type'>I want to</label>
    <select className='kit-trans-type' name='kit-trans-type' required>
      <option value='sell'>Sell my kit</option>
      <option value='trade'>Trade my kit</option>
      <option value='donate'>Donate my kit</option>
      <option value='want'>Post a needed kit</option>
    </select><span>*</span>

    <label htmlFor='kit-price'>Whole kit price $</label>
    <input className='kit-price' type='number' min='0' max='99' />

  </div>

  <div className='kit-form-line'>

    <label htmlFor='club'>Which club?</label>
    <select className='kit-club' name='club' required>
      <option value='CASL'>CASL | Capital Area SL</option>
      <option value='CSL'>CSL | Chatham SL</option>
      <option value='EWSA'>EWSA | East Wake SA</option>
      <option value='GCAA'>GCAA | Greater Cleveland AA</option>
      <option value='NCFC'>NCFC | North Carolina FC Youth</option>
      <option value='SASL'>SASL | Sanford Area SL</option>
      <option value='TFCA'>TFCA | Triangle Futbol Club Alliance</option>
      <option value='TUSA'>TUSA | Triangle United SA</option>
      <option value='TUSAWFC'>TUSA-WakeFC | TriangleUnited/WakeFC</option>
      <option value='TUSAXL'>TUSA-XL | TriangleUnited/XL Soccer</option>
      <option value='ACS'>ACS | AC Sandhills</option>
      <option value='FSC'>FSC | Fayetteville SC</option>
      <option value='JUSA'>JUSA | Johnston United SA</option>
      <option value='BSC'>BSC | Burlington SC</option>
      <option value='CCSC'>CCSC | Central Carolina SC</option>
      <option value='GUSA'>GUSA | Greensboro United SC</option>
      <option value='KSA'>KSA | Kernersville SC</option>
      <option value='NCSF'>NCSF | NC Soccer Fusion</option>
      <option value='NCUSA'>NCUSA | NC United SA</option>
      <option value='PTFC'>PTFC | Piedmont Triad Futbol Club</option>
      <option value='TCYSA'>TCYSA | Twin City Youth SA</option>
      <option value='URYSA'>URYSA | United Rockingham Youth SA</option>
      <option value='other'>other | other club not listed</option>
    </select><span>*</span>

    <select className='kit-club-level' required>
      <option value='classic'>Classic</option>
      <option value='challenge'>Challenge</option>
      <option value='select'>Select</option>
      <option value='academy'>Academy</option>
      <option value='recreation'>Recreation</option>
    </select><span>*</span>
  </div>

  <div className='kit-form-line'>

    <label htmlFor='kit-zip'>Zip code</label>
    <input className='kit-zip' type='number'/><span>*</span>

    <label htmlFor='year'>Season</label>
    <select className='kit-season' name='size' required>
      <option value='2015'>2015-2016</option>
      <option value='2016'>2016-2017</option>
      <option value='2017'>2017-2018</option>
    </select><span>*</span>
  </div>

  <div className='kit-form-line'>

    <label htmlFor='kit-phone'>Cell phone</label>
    <input className='kit-phone' type='tel' />
  </div>

  <textarea maxLength='100' placeholder='Briefly comment on your items.'></textarea>

  <button type='submit'>Make kit</button>
</form>



)
}
}

export default KitForm;
