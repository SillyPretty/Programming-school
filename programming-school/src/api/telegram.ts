const baseUrl: string =
  'https://api.telegram.org/bot6198798163:AAElugwhVRGmfiTGEecIjm0ztcSoSi0noz4/'

export const sendMessage = async (message: string): Promise<void> => {
  const url: string = `${baseUrl}sendMessage?chat_id=-4121353519&text=${message}`
   await fetch(url)
}
