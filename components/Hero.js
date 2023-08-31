import s from './Hero.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero({data}) {
  return (
    <div className={s.ctn}>
      <div className={s.wrp}>
        <div className={s.left}>
          <h1>{data.title}</h1>
          <h2>{data.subtitle}</h2>
          <Link href="/contact" className='heroBtn'>Contact Me!</Link>
        </div>
        <div className={s.right}>
          <Image src={data.image} alt="natalie-shae-krula" width={500}/>
        </div>
      </div>
    </div>
  )
}
