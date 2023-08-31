import s from './AboutMe.module.css'

export default function AboutMe() {
  return (
  <div className={s.ctn}>
    <div className={s.moreText}>
      <div className={s.left}>
        <h1><span>Natalie </span> Shae Krula </h1>
        <p>
        My career journey has encompassed diverse phases, honing a rich skill set within and beyond the market. This breadth of experience empowers me to adeptly oversee your investments, ensuring unwavering profitability. I hold esteemed registrations across six premier investment firms, triumphing in six brokerage examinations, and securing licenses across 53 US states—testimony to my expertise and commitment.
        </p>
      </div>
      <div className={s.left}>
        <h1><span>Education </span> & Experience</h1>
        <p>
        I&apos;ve worked with over 600 clients, in 20 counties, over 3 continents. What this has shown me is not only that success can happen anywhere, but that the building blocks of success are within everyone, wherever they come from. 
        </p>
        <p>
        I am never satisfied with my work until my clients have achieved all the financial goals that we set out together. It&apos;s this determination and refusal to let anyone down that has become my hallmark in the industry. 
        </p>
        <a href='https://brokercheck.finra.org/individual/summary/6922246' className='heroBtn'>More Details!</a>
      </div>
    </div>
  </div>
  )
}
