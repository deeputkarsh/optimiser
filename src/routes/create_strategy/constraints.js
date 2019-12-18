import React from 'react'
import { Grid, FormControl, TextField, InputLabel, Select, MenuItem } from '@material-ui/core'

export default function (props) {
  const { strategyConstraint, onInputChange } = props
  return (
    <Grid container>
      <Constraint />
    </Grid>
  )
}

const Constraint = props => {
  const { strategyConstraint, onInputChange } = props
  return (
    <Grid container>
      <Grid item xs={6}>
        <FormControl variant='outlined' className='' style={{ width: '100%' }}>
          <InputLabel id='demo-simple-select-outlined-label'>
              Class
          </InputLabel>
          <Select
            labelId='demo-simple-select-outlined-label'
            id='demo-simple-select-outlined'
            value={strategyClass}
            onChange={e => onInputChange(e, 'strategyClass')}
            labelWidth={24}
          >
            <MenuItem value={140}>140</MenuItem>
            <MenuItem value={20}>10</MenuItem>
            <MenuItem value={30}>11</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl style={{ width: '100%' }}>
          <TextField
            name='strategy constraint'
            label='Constraint'
            variant='outlined'
            type='text'
            placeholder='Max Discount %'
            className='{styles.loginInput}'
            required
            value={strategyConstraint}
            onChange={e => onInputChange(e, 'strategyConstraint')}
          />
        </FormControl>
      </Grid>
    </Grid>
  )
}
