// https://react.school/material-ui/checkbox
import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from "@material-ui/core/FormControlLabel"

const RenderCheckboxes = props => {
  const [checked, setChecked] = React.useState(true)
  const handleChange = event => {
    setChecked(event.target.checked)
  }
  let label = `${props.playlistSongs.title} - ${props.playlistSongs.artist}`
  return (
    <FormControlLabel
      control={<Checkbox checked={checked} onChange={handleChange} />}
      label={label} //change this to show "Song - Artist"
    />
  );
}


export default RenderCheckboxes
