import React, { useState } from 'react';
import { useMinimalSelectStyles } from '@mui-treasury/styles/select/minimal';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import RenderCheckboxes from './RenderCheckboxes';

// Original design here: https://github.com/siriwatknp/mui-treasury/issues/540

const SelectPlaylist = props => {
  const [val, setVal] = useState(1)

  const handleChange = (event) => {
    setVal(event.target.value) //this grabs the value on the list, starting with 1, then 2, and etc...
    console.log(event.target.value)
  };

  const minimalSelectClasses = useMinimalSelectStyles()

  const iconComponent = (props) => {
    return (
      <ExpandMoreIcon className={props.className + " " + minimalSelectClasses.icon}/>
    )}

  // moves the menu below the select input
  const menuProps = {
    classes: {
      paper: minimalSelectClasses.paper,
      list: minimalSelectClasses.list
    },
    anchorOrigin: {
      vertical: "bottom",
        horizontal: "left"
    },
    transformOrigin: {
      vertical: "top",
        horizontal: "left"
    },
    getContentAnchorEl: null
  }

  return (
    <FormControl>
      <Select
        disableUnderline
        classes={{ root: minimalSelectClasses.select }}
        MenuProps={menuProps}
        IconComponent={iconComponent}
        value={val}
        onChange={handleChange}
      >
        {props.playlist.map((p, i) => {
            return (
            <MenuItem value={i}>{p.playlist}</MenuItem>
            )
          })
        }
      </Select>

      {/* loop through the selected playlist to render checkboxes for each item */}
      { props.playlist[val]["songs"].map((p, index) => {
            return (<RenderCheckboxes key={index} playlistSongs={p} />)
          }
        )
      }
    </FormControl>
  );
};


export default SelectPlaylist
