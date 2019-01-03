import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
      button: {
      margin: theme.spacing.unit,
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
});

const AddContactComponent = (datas) => {
  // eslint-disable-next-line react/prop-types
  const { classes,
    props: {
        data: {
        firstName,
        lastName,
    // eslint-disable-next-line react/prop-types
    }, handleFunctions: { handleAdd, handleChange },
},
} = datas;

  return (
      <React.Fragment>
          <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-firstName"
          label="firstName"
          className={classes.textField}
          value={firstName}
          onChange={handleChange('firstName')}
          margin="normal"
        />
        <TextField
          id="standard-lastName"
          label="lastName"
          className={classes.textField}
          value={lastName}
          onChange={handleChange('lastName')}
          margin="normal"
        />
          <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleAdd}>
            Add
          </Button>
          </form>
      </React.Fragment>
    );
};

export default withStyles(styles)(AddContactComponent);
