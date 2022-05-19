import React, {useContext} from 'react'
import ThemeContext from './ThemeContext'


export default function BtnToggle() {
 
  const theme = useContext(ThemeContext);
  const mode = (theme.currentTheme === 'light') ? 'Lightmode' : 'Darkmode'

  return (
    <button className='btn-toggle' onClick={theme.toggleTheme}>{mode}</button>
  )
}

