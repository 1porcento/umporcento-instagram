import {
  Link,
  ButtonCta
} from './styles'

import { FaArrowRight } from 'react-icons/fa6'

export default function Button({ text }){
  return(
    <Link href='#planos'>
      <ButtonCta>
        <FaArrowRight size={20} />{text}
      </ButtonCta>
    </Link>
  )
}