export const formatTime = (sec) => {
   return `${Math.floor(sec / 60 )}:${sec % 60 < 10 ? `0${sec % 60}` : sec % 60 } min`
}
