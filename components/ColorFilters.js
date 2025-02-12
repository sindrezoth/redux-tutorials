import { availableColors } from '../features/filters/colors.js'

const ColorFilters = ({ value, onChange } ) => {
  return (
    <div className="todo-filter-color">
      <h4>Filter by Color</h4>
      <ul>
        { availableColors.map((color, i) => 
          <li>
            <input 
              name={color}
              id={`color${i}`} 
              type="checkbox" 
              defaultChecked={value.includes(color)}
              onChange={onChange}
              onClick={onChange}
            />
            <label htmlFor={`color${i}`}>
              <span style={{background: color, paddingLeft: '1.5em'}} />
                {color}
            </label>
          </li>)
        }
      </ul>
    </div>
  );
};

export default ColorFilters;
