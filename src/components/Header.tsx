import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className='flex gap-4 bg-black text-2xl text-white p-4'>
      <NavLink to='rocft'>ROCFT</NavLink>
      <NavLink to='ravlt'>RAVLT</NavLink>
    </div>
  ) 
}

export default Header;