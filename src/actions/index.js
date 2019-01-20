// Action creator function
export const selectLibrary = (libraryId) => {
  return {
      type: 'select_library',
      payload: libraryId
  } ;
};
