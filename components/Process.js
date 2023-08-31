import s from './Process.module.css'
import { FaBookReader } from 'react-icons/fa'
import { GiProfit, GiPodiumWinner } from 'react-icons/gi'

export default function Process() {
  return (
    <div className={s.ctn}>
      <div className={s.wrp}>
        <div className={s.heading}>
          <h1>My Process</h1>
          <p>
            Over the span of my illustrious 22-year career, I&apos;ve masterfully overseen a staggering portfolio that surges past the $6.7 billion mark. My realm of influence extends to a mosaic of 800 diverse individuals, each benefiting from my avant-garde investment advisory prowess. Paramount among my pursuits is the impregnable safeguarding of your investments—a relentless endeavor to truncate conceivable losses and amplify lucidly lucrative prospects. Armed with my unparalleled proficiency and unwavering dedication to birthing extraordinary outcomes, take solace in the certainty that your investments repose within the adept embrace of the future.
          </p>
        </div>

        <div className={s.cards}>
          <div className={s.card}>
            <FaBookReader />
            <h2>Learn</h2>
            <p>Deciphering clients is pivotal. Gauging risk tolerance, investment horizon, and past financial hurdles unveils the crux. Tailored fixes then emerge, aligning with distinct aims and needs.</p>
          </div>

          <div className={s.card}>
            <GiProfit />
            <h2>Strategy</h2>
            <p>Comprehending clients, we collaboratively devise personalized strategies through workshops. Transparent dialogue and pooled expertise yield a bespoke, success-forging plan.</p>
          </div>

          <div className={s.card}>
            <GiPodiumWinner />
            <h2>Success</h2>
            <p>I scrupulously sift options, presenting only viable solutions. No mere concepts, but fully actionable strategies for wealth, ensuring tangible results and optimizing your journey.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
