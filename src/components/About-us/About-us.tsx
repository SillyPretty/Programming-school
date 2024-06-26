import styles from './About-us.module.scss'

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>О нас</h2>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <img src='/back2.png' alt='back2' />
        </div>
        <div className={styles.content}>
          <p className={styles.text}>
            Добро пожаловать на сайт, посвященный обучению веб-программированию!
            Наш проект создан с целью помочь начинающим разработчикам освоить
            основные принципы создания веб-сайтов, приложений и других
            интерактивных проектов. Мы предоставляем бесплатные материалы, уроки
            и ресурсы, которые помогут вам учиться и развиваться в данной
            области.
          </p>
          <p className={styles.text}>
            Наши уроки охватывают широкий спектр тем, начиная от основ HTML и
            CSS, заканчивая более сложными темами, такими как JavaScript, PHP,
            базы данных и многое другое. Мы также предлагаем практические
            задания и проекты, которые помогут вам закрепить полученные знания и
            навыки.
          </p>
          <p className={styles.text}>
            Наша цель - сделать обучение веб-программированию доступным и
            понятным для всех желающих. Мы верим, что каждый может научиться
            программированию, нужно только желание и настойчивость.
          </p>
          <p className={styles.text}>
            Присоединяйтесь к нашему сообществу, изучайте новые технологии и
            становитесь профессионалом в области веб-разработки! Начните свой
            путь к успеху прямо сейчас на нашем сайте.
          </p>
        </div>
      </div>
      <a className={styles.link} href='https://github.com/SillyPretty' target='_blank'>
        GitHub
      </a>
    </div>
  )
}
