
import { connect } from 'react-redux';
import { updateUser, createGroup, logout, fetchGroups } from '../actions/actions';
import Homepage from '../components/Homepage/Homepage';

const mapStateToProps = ({ session, entities: { users, groups } }) => {
  return {
    currentUser: users[session.id],
    users,
    groups
  };
};

const mapDispatchToProps = {
  logout: logout,
  updateUser: updateUser,
  createGroup: createGroup,
  fetchGroups: fetchGroups
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);