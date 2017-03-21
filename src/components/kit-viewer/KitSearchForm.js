import React, {Component} from 'react';

class KitSearchForm extends Component {
  render() {
    return (

      <form className='kit-viewer-search-form'>

        <div className='kit-search-line'>
          <label htmlFor='kit-trans-type'>Transaction type</label>
          <select className='kit-trans-type' name='kit-trans-type' required>
            <option value='sell'>Kits for sale</option>
            <option value='trade'>Kits for trade</option>
            <option value='donate'>Free kits</option>
            <option value='want'>Needed kits</option>
          </select>
        </div>

        <div className='kit-search-line'>
          <label htmlFor='search-club'>Club</label>
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
          </select>
          <select className='kit-club-level' required>
            <option value='classic'>Classic</option>
            <option value='challenge'>Challenge</option>
            <option value='select'>Select</option>
            <option value='academy'>Academy</option>
            <option value='recreation'>Recreation</option>
          </select>
        </div>

        <div className='kit-search-line'>
          <label htmlFor='type'>Item type</label>
          <select className='item-type' required>
            <option value='jersey'>Jersey</option>
            <option value='shorts'>Shorts</option>
            <option value='socks'>Socks</option>
            <option value='jacket'>Warmup Jacket</option>
            <option value='pants'>Warmup Pants</option>
            <option value='other'>Ball</option>
            <option value='other'>Gloves</option>
            <option value='other'>Shoes</option>
          </select>
        </div>

        <div className='kit-search-line'>
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
          </select>
        </div>

        <div className='kit-search-line'>
          <label htmlFor='year'>Season</label>
          <select className='kit-season' name='size' required>
            <option value='2015'>2015-2016</option>
            <option value='2016'>2016-2017</option>
            <option value='2017'>2017-2018</option>
          </select>
        </div>

        <button className='kit-search-clear'>reset</button>

      </form>

)
}
}

export default KitSearchForm;
