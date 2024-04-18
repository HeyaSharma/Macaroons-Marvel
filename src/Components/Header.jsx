import React from 'react'
import './header.css';
import { Link } from 'react-router-dom';


export default function Header() {
    return (
      <div className='a'>
           <div className='b'> 
                <h1> &hearts; Macaron Marvel &hearts; </h1>
            </div>
           <div className='c'>
                    <ul>
                        <li><Link to = '/'> Home </Link></li>
                        <li><Link to = '/menu'> Menu </Link></li>
                        <li><Link to = '/customized'> Customized </Link></li>
                        <li><Link to = '/connect'> Connect </Link></li>
                        <li><Link to = '/time'> Time </Link></li>
                    </ul>

            </div>
    </div>

   
  )
}
