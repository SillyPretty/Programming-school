import styles from './Courses.module.scss'
import CourseCard from './CourseCard'

export default function Courses({
  setIsVisible,
  isVisible,
  setCount
}: any) {
  type typeData = {
    id: number
    image: string
    title: string
    text: string
  }

  const courseData: typeData[] = [
    {
      id: 0,
      image: '/html-icon.png',
      title: 'Html + css',
      text: 'В этом курсе вы узнаете что такое css и html, основные теги в HTML и основные стили в CSS.'
    },
    {
      id: 1,
      image: '/js-icon.png',
      title: 'JavaScript',
      text: 'В этом курсе вы узнаете основы языка JavaScript, типы данных, переменные, методы и функции.'
    },
    {
      id: 2,
      image: '/github-icon.png',
      title: 'GitHub',
      text: 'В этом курсе вы узнаете что GitHub, для чего он используется, что такое ветки и для чего они нужны.'
    },
    {
      id: 3,
      image: '/react-icon.png',
      title: 'React JS',
      text: 'В этом курсе вы узнаете что такое React JS.'
    },
    {
      id: 4,
      image: '/nest-icon.png',
      title: 'BackEnd',
      text: 'В этом курсе вы коснетесь BackEnd-а узнаете как работает сервер и как он отправляет данные к нам на Frontend.'
    }
  ]

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Наши курсы</h2>
      <div className={styles.curses}>
        {courseData.map(elem => (
          <CourseCard
            setIsVisible={setIsVisible}
            isVisible={isVisible}
            setCount={setCount}
            key={elem.title}
            {...elem}
          />
        ))}
      </div>
    </div>
  )
}
