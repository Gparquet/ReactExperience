import { compose, withState, withHandlers } from 'recompose';
import ContactHoc from './ContactHoc';

const initialState = {
    firstName: 'Parquet',
    lastName: 'Tata',
    phoneNumber: '06366565',
    email: 'toto.tata@test.fr',
    isFamily: false,
};

const enhance = (
    compose(withState('user', 'setUser', initialState),
        withHandlers({
            handleChange: props => event => {
                props.setUser({
                    ...props.user,
                    firstName: event.target.value
                })
            }
        }))
);

export default enhance(ContactHoc);

