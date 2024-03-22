import styles from './CourseCard.module.scss'

interface ICourseCard {
  id: number
  title: string
  text: string
  image: string
  setIsVisible: any
  isVisible: boolean
  setCount: any
}

export default function CourseCard({
  id,
  title,
  text,
  image,
  setIsVisible,
  isVisible,
  setCount
}: ICourseCard) {
  return (
    <div
      className={styles.course}
      onClick={() => {
        setIsVisible(!isVisible)
        setCount((id))
      }}
    >
      <h3>{title}</h3>
      <div className={styles.image}>
        <img src={image} alt={title} />
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  )
}
