import './App.scss'
import Header from './../Header/Header.tsx'
import GetStarted from '../GetStarted/GetStarted.tsx'
import Courses from '../Courses/Courses.tsx'
import CardMenu from '../CardMenu/CardMenu.tsx'
import { useState } from 'react'
import AboutUs from '../About-us/About-us.tsx'
import Footer from '../Footer/Footer.tsx'
import SendMessage from '../SendMessage/SendMessage.tsx'

function App() {
  type typeCardMenu = {
    title: string
    src: string
    text: string
  }

  const dataCardMenu: typeCardMenu[] = [
    {
      title: 'Html и Css',
      text: 'В этом подготовительном курсе вы узнаете что такое css и html, основные теги в HTML и основные стили в CSS.',
      src: 'https://www.youtube.com/embed/SACNwTRVoMo?si=m57RYjpds4gdexu6'
    },
    {
      title: 'JavaScript',
      text: 'В этом подготовительном курсе вы узнаете основы языка JavaScript, типы данных, переменные, методы и функции.',
      src: 'https://www.youtube.com/embed/f4C-j45PKQ4?si=nmhAmw7Gc6NQAsUp'
    },
    {
      title: 'Github',
      text: 'В этом подготовительном курсе вы узнаете что GitHub, для чего он используется, что такое ветки и для чего они нужны.',
      src: 'https://www.youtube.com/embed/KU-lcr3lBiU?si=XrGlSHBgIDvSUgAI'
    },
    {
      title: 'React JS',
      text: 'В этом подготовительном курсе вы узнаете что такое React JS.',
      src: 'https://www.youtube.com/embed/Fbsusu0xfpY?si=ODKL5ezA07kQ99lG'
    },
    {
      title: 'BackEnd',
      text: 'В этом подготовительном курсе вы коснетесь BackEnd-а узнаете как работает сервер и как он отправляет данные к нам на Frontend.',
      src: 'https://www.youtube.com/embed/5uM-nfrYcbw?si=7RrD0ICiTKYgN5uo'
    }
  ]

  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [count, setCount] = useState<number>(0)
  const [order, setOrder] = useState(false)

  return (
    <>
      {order && <SendMessage setOrder={setOrder} />}
      {isVisible && (
        <CardMenu
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          {...dataCardMenu[count]}
        />
      )}
      <Header setOrder={setOrder} order={order} />
      <main>
        <GetStarted />
        <Courses
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          setCount={setCount}
        />
        <AboutUs />
      </main>
      <Footer />
    </>
  )
}

export default App
