import styles from './GetStarted.module.scss'

export default function GetStarted() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>
          <span>ОТКРОЙ МИР</span> ПРОГРАММИРОВАНИЯ ВМЕСТЕ С НАМИ.
        </h1>
        <p>
          У нас вы можете научиться{' '}
          <span>основам верстки и разметки Web-страниц</span>, а так же изучить
          базовые обращения к сайту и работу с данными с помощью языка{' '}
          <span>JavaScript</span>.
        </p>
        <div className={styles.buttons}>
          <button className={styles.active} type='button'>
            Начать прямо сейчас
          </button>
          <button type='button'>Ознакомиться с программой</button>
        </div>
      </div>
      <div className={styles.image}>
        <img src='/back1.png' alt='back1' />
      </div>
    </div>
  )
}
