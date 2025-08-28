import { NavLink } from 'react-router'

type ISidebarProps = {
  navItems: { path: string, name: string }[]
}

const Sidebar = ({ navItems }: ISidebarProps) => {
  const isActiveLink = (active: boolean) => (active ? 'text-teal-500!' : 'text-white!');
  
  return (
    <nav className='p-5'>
      <ul className='flex flex-col gap-1'>
        { 
          navItems.map( (item, index) => 
            <li key={index}>
              <NavLink to={item.path} className={ ({ isActive }) => isActiveLink(isActive) }>{ item.name }</NavLink>
            </li> 
          ) 
        }
      </ul>
    </nav>
  )
}

export default Sidebar