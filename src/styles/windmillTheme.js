const Theme = {
  // Button
  button: {
    base: 'align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-bold focus:outline-none hover:shadow font-sans',
    block: 'w-full',
    size: {
      larger: 'px-7 py-4 rounded-full',
      large: 'px-7 py-3 rounded-full',
      regular: 'px-7 py-2 rounded-full',
      small: 'px-7 py-2 rounded-full text-sm',
      icon: {
        larger: 'p-4 rounded-lg',
        large: 'p-3 rounded-lg',
        regular: 'p-2 rounded-lg',
        small: 'p-2 rounded-md',
      },
      pagination: 'px-3 py-1 rounded-md text-xs',
    },
    // styles applied to the SVG icon
    icon: {
      larger: 'h-5 w-5',
      large: 'h-5 w-5',
      regular: 'h-5 w-5',
      small: 'h-3 w-3',
      left: 'mr-2 -ml-1',
      right: 'ml-2 -mr-1',
    },
    primary: {
      base: 'text-white bg-primary bg-gradient-to-b from-primary to-primary-light border border-transparent',
      active: 'active:bg-primary-hover hover:bg-primary-hover',
      disabled: 'opacity-50 cursor-not-allowed',
    },
    white2: {
      base: 'text-header bg-white border border-transparent',
      active: 'active:bg-white hover:bg-white',
      disabled: 'opacity-50 cursor-not-allowed',
    },
    outline: {
      base: 'dark:text-header-dark border focus:outline-none rounded border-gray-200 text-paragraph transition-all',
      active:
        'active:bg-transparent hover:border-primary focus:border-gray-500 active:text-gray-500 focus:ring focus:ring-gray-300 hover:text-primary',
      disabled: 'opacity-50 cursor-not-allowed bg-gray-300',
    },
    link: {
      base: 'text-header dark:text-header-dark focus:outline-none border border-transparent',
      active:
        'active:bg-transparent hover:bg-gray-100 focus:ring focus:ring-gray-300 dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10',
      disabled: 'opacity-50 cursor-not-allowed',
    },
    // this is the button that lives inside the DropdownItem
    dropdownItem: {
      base: 'inline-flex items-center cursor-pointer w-full px-2 py-1 text-sm font-medium transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200',
    },
  },
}

export default Theme;
