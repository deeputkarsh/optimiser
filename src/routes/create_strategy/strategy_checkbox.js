import React from 'react'
import { Grid,  Checkbox, InputLabel } from '@material-ui/core'

export default (props) => {
  const { minimizeErosion, clearInventory, clearOldAgeProductFirst, onInputChange } = props
  const onCheck = ({ target:{ checked } }, fieldName)=>{
    onInputChange({ [fieldName]: !!checked })
  }
  return (
    <Grid container>
      <InputLabel>Strategy : </InputLabel>
      <Grid container className='checkbox-container'>
        <Grid item>
          <InputLabel className='checkbox-label'>
            <Checkbox
              checked={minimizeErosion}
              value='Minimise Errosion'
              color='primary'
              disabled
              inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
            <span>Minimise Errosion</span>
          </InputLabel>
        </Grid>
        <Grid item>
          <InputLabel className='checkbox-label'>
            <Checkbox
              checked={clearInventory}
              onChange={ e => onCheck(e,'clearInventory') }
              value='Clear Inventory'
              color='primary'
              inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
            <span>Clear Inventory</span>
          </InputLabel>
        </Grid>
        <Grid item>
          <InputLabel className='checkbox-label'>
            <Checkbox
              checked={clearOldAgeProductFirst}
              onChange={ e => onCheck(e,'clearOldAgeProductFirst') }
              value='Clear Old Age Product First'
              color='primary'
              inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
            <span>Clear Old Age Product First</span>
          </InputLabel>
        </Grid>
      </Grid>
    </Grid>
  )
}