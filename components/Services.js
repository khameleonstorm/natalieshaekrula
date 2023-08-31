import s from './Services.module.css'
import Image from 'next/image'
import natalie from '../public/assets/natalie-shae-krula-3.jpg'
import Link from 'next/link'

export default function Services() {
  return (
    <div className={s.ctn}>
      <div className={s.wrp}>
        <div className={s.heading}>
          <div className={s.left}>
            <Image src={natalie} alt='natalie-shae-krula' width={500}/>
          </div>
          <div className={s.right}>
            <h1>My Services</h1>
            <p>
            Unlock portfolio potential through adept guidance in real estate, gold, and agriculture sectors. Leverage my extensive experience and profound market trend insights to not only maximize returns but also strategically mitigate risks. Take a proactive step towards securing your financial future by reaching out today. With my expert assistance, you&apos;ll be poised for a robust and prosperous tomorrow.
            </p>
            <Link href="/contact" className='heroBtn'>Contact Me!</Link>
          </div>
        </div>

        <div className={s.cards}>
          <div className={s.card}>
            <h3>Real Estate</h3>
            <p>
              Real estate is a smart investment for long-term wealth, steady income, and stability in your portfolio.
            </p>
          </div>
          <div className={s.card}>
            <h3>Gold</h3>
            <p>
            Gold is a stable investment for long-term wealth, diversification, and protection against inflation.
            </p>
          </div>
          <div className={s.card}>
            <h3>Agriculture</h3>
            <p>
              Agriculture is a tangible investment for long-term wealth, sustainable income, and global demand.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
