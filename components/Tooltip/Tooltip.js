import { useState } from 'react';
import { CgArrowsExpandUpRight } from 'react-icons/cg';

const Tooltip = (props) => {
  const [tooltipIsOpen, setTooltipIsOpen] = useState(false);

  const tooltipHandler = () => {
    setTooltipIsOpen((prevState) => !prevState);
  };
  const closeTooltipHandler = () => {
    setTooltipIsOpen(false);
  };

  return (
    <>
      <button
        className='border border-light rounded-lg p-2'
        onClick={tooltipHandler}
        // onBlur={closeTooltipHandler}
        type='button'
      >
        <CgArrowsExpandUpRight />
      </button>
      {/* tooltip itself */}
      {tooltipIsOpen && (
        <div className='absolute flex-col bg-scale-75 border border-e-light rounded-lg p-2 top-0 left-0 right-O bottom-0 justify-center items-center md:flex-row overflow-y-auto bg-medium'>
          {props.children}
        </div>
      )}
    </>
  );
};

export default Tooltip;
