import { useEffect, useState } from 'react'

let screensizes = [
  {
    name: 'mobile',
    index: 1,
    width: 768,
  },{
    name: 'tablet',
    index: 2,
    width: 991,
  },{
    name: 'small monitor',
    index: 3,
    width: 1200,
  },{
    name: 'large monitor',
    index: 4,
    width: 9999999999999,
  }
];


// Notifications
const useWindowResize = () => {
  
  const [properties, setProperties] = useState({});
  
  const updateWindowProperties = () => {
    
    let height = window.innerHeight;
    let width = window.innerWidth;
    
    let screen = screensizes.find((item) => {
      return item.width >= width;
    });
    
    setProperties({
      screen: screen.name,
      screenIndex: screen.index,
      screenWidth: screen.width,
      height: height,
      width: width,
    });
  };
  useEffect(() => {
    updateWindowProperties();
  }, []);
  useEffect(() => {
      window.addEventListener("resize", updateWindowProperties);
      return () => window.removeEventListener("resize", updateWindowProperties);
  });
  

	return properties
}

export default useWindowResize