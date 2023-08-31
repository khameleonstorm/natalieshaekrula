import s from './Nav.module.css'
import Image from 'next/image'
import logo from '../public/assets/logo.svg'
import Link from 'next/link'
import { GrClose } from 'react-icons/gr'
import { HiMenuAlt3 } from 'react-icons/hi'
import { useState, useEffect } from 'react'

export default function Nav() {
  const [menu, setMenu] = useState(false)
  const [showBg, setShowBg] = useState(false)

  const closeMenu = () => {
    setMenu(false)
  }
  const openMenu = () => {
    setMenu(true)
  }

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 100) {
      setShowBg(true);
    } else {
      setShowBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  return (
    <div className={`${showBg && s.ctnBg} ${s.ctn}`}>
      <div className={s.wrp}>
        <Link href='/' className={s.logo}>
          <Image src={logo} alt="Natalie Shae logo" width={40}/>
          <h1>Natalie</h1>
        </Link>

        <div className={s.menu} onClick={closeMenu} style={menu? {right: '0'} : {}}>
          <GrClose className={s.close}/>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/service'>Service</Link>
          <Link href='/contact'>Contact</Link>
        </div>

        <HiMenuAlt3 className={s.open} onClick={openMenu}/>
      </div>
    </div>
  )
}
