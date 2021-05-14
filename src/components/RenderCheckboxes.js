// https://react.school/material-ui/checkbox

import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from "@material-ui/core/FormControlLabel"

const RenderCheckboxes = props => {
  const [checked, setChecked] = React.useState(true)
  const handleChange = (event) => {
    setChecked(event.target.checked)
  }
  return (
    <FormControlLabel
      control={<Checkbox checked={checked} onChange={handleChange} />}
      label={props.song}
    />
  );
}

export default RenderCheckboxes
