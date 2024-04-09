import { useState } from 'react'
import styles from './SendMessage.module.scss'
import { sendMessage } from '../../api/telegram'

export default function SendMessage({ setOrder }: any) {
  const [inputValue, setInputValue] = useState<string>('')
  const [selectedOption, setSelectedOption] = useState<string>('')
  const [isSend, setIsSend] = useState<boolean>(false)
  const handleOptionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setSelectedOption(event.target.value)
  }
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }
  const handleSubmit = async (name: string, curse: string): Promise<void> => {
    setIsSend(true)
    if (!name.startsWith('@')) {
      ;`@${name}`
    }
    if (inputValue != '' && selectedOption != '') {
      if (!name.startsWith('@')) {
        const message: string = `Пользователь: @${name} обратился по поводу курса ${curse}`
        await sendMessage(message)
        setIsSend(false)
        setOrder(false)
      } else {
        const message: string = `Пользователь: ${name} обратился по поводу курса ${curse}`
        await sendMessage(message)
        setIsSend(false)
        setOrder(false)
      }
    } else {
      setIsSend(false)
      alert('Не все поля заполнены. Проверьте ещё раз')
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.close} onClick={() => setOrder(false)}>
          x
        </div>
        <div className={styles.image}>
          <img src='/icon-telegram.svg' alt='icon-telegram' />
        </div>
        <h2 className={styles.title}>Укажите свой Телеграм</h2>
        <p className={styles.text}>
          <span>После</span> отправки с вами свяжутся в течении{' '}
          <span>24 часов</span> для уточнения заказа и консультации с вами.
          <br />
          <span>Спасибо за обращение 3</span>
        </p>
        <input
          className={styles.input_text}
          placeholder='@TG_NAME'
          type='text'
          value={inputValue}
          onChange={handleInputChange}
        />
        <select
          className={styles.select_input}
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option>Выберите вариант</option>
          <option value='Html и Css'>Html и Css</option>
          <option value='JavaScript'>JavaScript</option>
          <option value='Github'>Github</option>
          <option value='React JS'>React JS</option>
          <option value='BackEnd'>BackEnd</option>
        </select>
        <button
          className={styles.send}
          onClick={() => handleSubmit(inputValue, selectedOption)}
        >
          {isSend ? 'Загрузка...' : 'Отправить'}
        </button>
      </div>
    </div>
  )
}
