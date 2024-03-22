import styles from './CardMenu.module.scss'

interface iCardMenu {
  title: string
  text: string
  src: string
  setIsVisible: any
  isVisible: boolean
}

export default function CardMenu({ title, text, src, setIsVisible, isVisible }: iCardMenu) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.content}>
          <button
            onClick={() => setIsVisible(!isVisible)}
            className={styles.close}
          >
            X
          </button>
          <h2 className={styles.title}>
            Курс по <span>{title}</span>
          </h2>
          <p className={styles.text}>{text}</p>
          <iframe
            src={src}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          ></iframe>
          <button type='button'>Продолжить обучение</button>
        </div>
      </div>
    </>
  )
}
