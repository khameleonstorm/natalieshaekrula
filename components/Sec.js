import Image from 'next/image'
import s from './Sec.module.css'

export default function Sec({data}) {
  return (
    <div className={s.ctn} style={{background: data.bg}}>
      <div className={s.wrp} style={data.reverse? {flexDirection: 'row-reverse'}: {}}>
      <div className={s.left}>
          <Image src={data.img} alt={data.title} width={500}/>
          </div>
          <div className={s.right} style={!data.reverse? {color: "#0e0015"}: {}}>
            <h1>{data.title}</h1>
            <p style={data.reverse? {fontWeight: "300"}: {}}>{data.desc}</p>
          </div>
      </div>
    </div>
  )
}
