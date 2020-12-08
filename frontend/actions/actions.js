import * as APIUtil from '../util/api';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_CURRENT_GROUP = 'RECEIVE_CURRENT_GROUP';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const RECEIVE_GROUPS = 'RECEIVE_GROUPS';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveCurrentGroup = currentGroup => ({
  type: RECEIVE_CURRENT_GROUP,
  currentGroup
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const signup = user => dispatch => (
  APIUtil.signup(user).then(user => {
    if (user) dispatch(receiveCurrentUser(user))
  }).catch(err => dispatch(receiveErrors(err)))
);

export const login = user => dispatch => (
  APIUtil.login(user).then(user => {
    if (user) dispatch(receiveCurrentUser(user))
  }).catch(err => dispatch(receiveErrors(err)))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(() => (
    dispatch(logoutCurrentUser())
  ))
);

export const updateUser = (user) => dispatch => (
  APIUtil.updateUser(user).then((user) => {
    if (user) dispatch(receiveCurrentUser(user))
  }).catch (err => dispatch(receiveErrors(err)))
);

export const createGroup = (group) => dispatch => (
  APIUtil.createGroup(group).then((user) => {
    if (user) dispatch(receiveCurrentUser(user))
  }).catch (err => dispatch(receiveErrors(err)))
);


export const fetchGroups = () => dispatch => (
  ApiUtil.fetchGroups().then(groups => dispatch(receiveGroups(groups)))
);

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receiveGroups = (groups) => ({
  type: RECEIVE_GROUPS,
  groups
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});