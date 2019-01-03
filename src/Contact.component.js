import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    margin: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

// eslint-disable-next-line react/prefer-stateless-function
class ContactComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
    };
    this.handleTest = this.handleTest.bind(this);
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleTest = () => {
    const { firstName, lastName } = this.state;
    // eslint-disable-next-line react/prop-types
    this.props.addContact(firstName, lastName);
  };

  render() {
    // eslint-disable-next-line react/prop-types
    const { contacts, classes } = this.props;
    const { firstName, lastName } = this.state;
    return (
        <div>
            <ul>
            {
                contacts.map(currentContact => (
                <li key={currentContact.id}>
                    {`${currentContact.firstName} ${currentContact.lastName} 
                    ${currentContact.mode}`}
                </li>))
            }
            </ul>
            <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-firstName"
          label="firstName"
          className={classes.textField}
          value={firstName}
          onChange={this.handleChange('firstName')}
          margin="normal"
        />
        <TextField
          id="standard-lastName"
          label="lastName"
          className={classes.textField}
          value={lastName}
          onChange={this.handleChange('lastName')}
          margin="normal"
        />
          <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.handleTest}>
            Add
          </Button>
            </form>
        </div>
    );
  }
}

export default withStyles(styles)(ContactComponent);
