const initalState =  {
  status: 'All',
  colors: []
};

export default function filtersReducer(state = initalState, action) {
  switch(action.type) {
    case 'filters/statusFilterChanged': {
      return {
        ...state,
          status: action.payload
      };
    }
    case 'filters/colorFilterChanged': {
      const { color, changeType } = action.payload;
      let newColors = [...state.colors];
      if(changeType === 'Add') {
        if(!newColors.includes(color)) {
          newColors.push(color);
        }
      }
      else if(changeType === 'Delete') {
        newColors = newColors.filter(c => c !== color);
      }

      return {
        ...state,
        colors: newColors
      };
    }
    default:
      return state;
  }
}

export const filterStatus = 0;
