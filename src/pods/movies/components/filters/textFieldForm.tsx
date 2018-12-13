import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography/Typography";

interface Props {
  name: string;
  label: string;
  onChange: any;
  value: string;
  error?: string;
  type? : string;
  className?: string;
}

const defaultProps : Partial<Props> = {
  type: 'text', 
}

const onTextFieldChange = (fieldId : string, onChange: (fieldId, value) => void) => (e) => {
  onChange(fieldId, e.target.value);
}

export const TextFieldForm : React.StatelessComponent<Props> = (props) => {
  const {name, label, onChange, value, error, type, className} = props;

  return (
    <>
        <TextField
          label={label}
          margin="normal"
          value={value}
          type={type}
          onChange={onTextFieldChange(name, onChange)}
          className={className}
        />
        <Typography 
          variant="caption" 
          color="error"
          gutterBottom>
          {error}
        </Typography>        
    </>
  )
}