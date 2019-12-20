import React, { useEffect, useState } from 'react'
import { Grid, FormControl, TextField, InputLabel, Select, MenuItem, Button } from '@material-ui/core'

export default function (props) {
  const { strategyConstraints, addConstraint, onInputChange } = props
  const [selectedTypes, setSelectedTypes] = useState([])
  useEffect(() => {
    const selected = strategyConstraints.filter(({ constraintType }) => !!constraintType).map(item => item.constraintType)
    setSelectedTypes(selected)
  }, [strategyConstraints])
  const pushConstraint = _ => {
    if (strategyConstraints.length < 3) { addConstraint(strategyConstraints) }
  }
  const onConstraintChange = (data, index, clicktype) => {
    const newList = [...strategyConstraints]
    if (clicktype === 'delete') {
      newList.splice(index, 1)
      if (newList.length < 1) { addConstraint(newList) }
    } else { newList.splice(index, 1, data) }
    onInputChange({ strategyConstraints: newList })
  }

  const renderConstraints = _ => strategyConstraints.map((item, index) => (
    <Constraint
      key={`${index}-${item.type}`}
      index={index}
      {...item}
      selectedTypes={selectedTypes}
      pushConstraint={pushConstraint}
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
  const CONSTRAINT_TYPES = ['Max Discount %', 'Min Discount %', 'Step Change Discount %']
  const { constraintType, selectedTypes, index, constraintValue, pushConstraint, onConstraintChange } = props
  const selectList = CONSTRAINT_TYPES.filter(item => !selectedTypes.includes(item))
  if (constraintType) {
    selectList.push(constraintType)
  }

  const onInputChange = ({ target: { value } }, fieldName) => {
    if (constraintType === '' && value && fieldName === 'constraintType') {
      pushConstraint()
    }
    onConstraintChange({ constraintType, constraintValue, [fieldName]: value }, index)
  }
  return (
    <Grid container justify='space-between' spacing={2}>
      <Grid item xs={6}>
        <FormControl variant='outlined' className='form-control'>
          <InputLabel id='demo-simple-select-outlined-label'>Constraints</InputLabel>
          <Select
            labelId='demo-simple-select-outlined-label'
            id='demo-simple-select-outlined'
            value={constraintType}
            onChange={e => onInputChange(e, 'constraintType')}
          >
            {selectList.map(item => {
              return (<MenuItem key={item} value={item}>{item}</MenuItem>)
            })}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl className='form-control'>
          <TextField
            name='strategy constraint'
            label='Value'
            variant='outlined'
            type='text'
            placeholder={constraintType}
            className='{styles.loginInput}'
            required
            disabled={!constraintType}
            value={constraintValue}
            onChange={e => onInputChange(e, 'constraintValue')}
          />
        </FormControl>
        <Button color='primary' size='large' variant='contained' onClick={e => onConstraintChange(null, index, 'delete')}> Delete Constraint </Button>
      </Grid>
    </Grid>
  )
}
