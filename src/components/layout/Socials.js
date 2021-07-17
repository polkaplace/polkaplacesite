const Socials = (props) => {
  return (
    <>
      {props.menu.social.map((m, i) => {
	    let Icon = m.icon;
	    return (
			<a key={m.href} href={m.href} rel='noreferrer' target='_blank' className='mr-3'><Icon width="20" height="20" /></a>
		)})}
    </>
  );
};

export default Socials;
