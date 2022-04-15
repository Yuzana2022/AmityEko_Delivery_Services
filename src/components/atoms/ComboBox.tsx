import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputBase from '@material-ui/core/InputBase';

import eventBus from '../events/EventBus';

export default function ComboBox(props : any) {
  const [sourceData, setSourceData] = React.useState(props.data.array);
  const [value, setValue] = React.useState(props.data.array[0].name);
  const [inputValue, setInputValue] = React.useState('');
  const [id, setId] = React.useState(props.data.id);

  const valueChanged = (value : any) => {
    console.log('valueChanged',value)
    eventBus.dispatch("selectValue", { value: value,id : id });
  }

  return (
    <Autocomplete
    value={value}
    onChange={(event: any, newValue: string | null) => { valueChanged(newValue)}}
    inputValue={inputValue}
    onInputChange={(event, newInputValue) => {
      setInputValue(newInputValue);
    }}
    id="controllable-states-demo"
    options={sourceData}
    sx={{ width: 200 }}
    renderInput={(params) => <TextField {...params} label="Town" />}
  />
  );
}