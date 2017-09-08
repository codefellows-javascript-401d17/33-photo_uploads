let validateProfileCreate = (profile) => {
  if (!profile.avatar || !profile.bio || !profile._id || !profile.owner || !profile.username || !profile.email) {
    throw new Error('VALIDATION ERROR: profile requires additional information');
  }
}

export default (state=null, action) => {
  let {type, payload} = action;

  switch (type) {
    case 'PROFILE_CREATE':
      validateProfileCreate(payload);
      return payload;
    case 'PROFILE_UPDATES':
      return {...state, ...payload}
    case 'LOGOUT':
      return null
    default:
      return state
  }
}
