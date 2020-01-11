import React, { useEffect, useState } from 'react'
import { Grid, FormControl, TextField, InputLabel, Select, MenuItem } from '@material-ui/core'
import Delete from '@material-ui/icons/Delete'

const CONSTRAINT_TYPES = ['Max Discount %', 'Min Discount %', 'Step Change Discount %']

export default function (props) {
  const { strategyConstraints, onInputChange } = props
  const [constraintTypeList, setConstraintList] = useState([])
  useEffect(() => {
    const selected = strategyConstraints.filter(({ constraintType }) => !!constraintType).map(item => item.constraintType)
    const unSelectList = CONSTRAINT_TYPES.filter(item => !selected.includes(item))
    setConstraintList(unSelectList)
  }, [strategyConstraints])
  const onConstraintChange = (data, index, option) => {
    const newList = [...strategyConstraints]
    const defaultObj = { constraintType: '', constraintValue: '' }
    console.log(option)
    if (option === 'pushConstraint' && strategyConstraints.length < 3) {
      newList.push(defaultObj)
    }
    if (option === 'delete') {
      newList.splice(index, 1)
      if (newList.length < 1) { newList.push(defaultObj) }
    } else { newList.splice(index, 1, data) }
    onInputChange({ strategyConstraints: newList })
  }

  const renderConstraints = _ => strategyConstraints.map((item, index) => (
    <Constraint
      key={`${index}-${item.type}`}
      index={index}
      {...item}
      constraintTypeList={constraintTypeList}
      onConstraintChange={onConstraintChange}
    />
  ))
  return (
    <Grid container>
      {renderConstraints()}
    </Grid>
  )
}

const Constraint = props => {
  const { constraintType, constraintTypeList, index, constraintValue, onConstraintChange } = props

  const onInputChange = ({ target: { value } }, fieldName) => {
    const option = (constraintType === '' && value && fieldName === 'constraintType') ? 'pushConstraint' : ''
    onConstraintChange({ constraintType, constraintValue, [fieldName]: value }, index, option)
  }
  return (
    <Grid container>
      <Grid item xs={6}>
        <FormControl variant='outlined' className='form-control'>
          <InputLabel id='demo-simple-select-outlined-label'>Constraints</InputLabel>
          <Select
            labelId='demo-simple-select-outlined-label'
            id='demo-simple-select-outlined'
            labelWidth={72}
            value={constraintType}
            onChange={e => onInputChange(e, 'constraintType')}
          >
            {constraintType && <MenuItem key={constraintType} value={constraintType}>{constraintType}</MenuItem>}
            {constraintTypeList.map(item => {
              return (<MenuItem key={item} value={item}>{item}</MenuItem>)
            })}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={5} className='contraint-value'>
        <FormControl className='form-control'>
          <TextField
            name='strategy constraint'
            label='Value'
            variant='outlined'
            // type='text'
            type='number'
            placeholder={constraintType}
            className='{styles.loginInput}'
            required
            disabled={!constraintType}
            value={constraintValue}
            onChange={e => onInputChange(e, 'constraintValue')}
          />
        </FormControl>
      </Grid>
      <Grid item xs={1} className='delete-container' onClick={e => onConstraintChange(null, index, 'delete')}>
        <Delete />
      </Grid>
    </Grid>
  )
}
