import { FaTelegramPlane } from 'react-icons/fa'
import { IoMdMail, IoLogoTwitter } from 'react-icons/io'
import s from './Footer.module.css'

export default function Footer() {
  return (
    <div className={s.ctn}>
      <div className={s.wrp}>
        <h1> Empowering self-transformation lies within. Seeking aid for this endeavor carries no shame. </h1>

        <div className={s.contacts}>
          <h2>Contact Info</h2>
          <div className={s.contact}>
            <div className={s.contactWrp}>
              <div><a href="mailto: help@natalieshaekrula.com"><IoMdMail /></a><p>help@natalieshaekrula.com</p></div>
            </div>

            <div className={s.contactWrp}>
              <div><a href="https://t.me/Natalieshaekrula"><FaTelegramPlane /></a><p>Telegram</p></div>
              <div><a href="https://twitter.com/shaekrula"><IoLogoTwitter /></a><p>Twitter</p></div>
            </div>

          </div>
        </div>
      </div>

      <div className={s.copyright}>
        <p>© 2022 Natalie Shae Krula</p>
      </div>
    </div>
  )
}