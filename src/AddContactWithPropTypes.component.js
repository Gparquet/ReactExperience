import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const propTypes = {
  props: PropTypes.shape({
    data: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
  }).isRequired,
  handleFunctions: PropTypes.shape({
    handleAdd: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
  }).isRequired,
  }).isRequired,
};

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
  const { classes,
    props: {
        data: {
        firstName,
        lastName,
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

AddContactComponent.propTypes = propTypes;
export default withStyles(styles)(AddContactComponent);
