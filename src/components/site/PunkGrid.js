const PunkGrid = (props) => {

  return (

	  <div className='grid md:grid-cols-4 grid-cols-2 gap-4'>
	    {props.children}
	  </div>

  );
};

export default PunkGrid;
