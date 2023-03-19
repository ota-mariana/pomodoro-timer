import { Play } from 'phosphor-react'
import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  Separator,
  StartCountDownButton,
  TaskInput,
  MinutesAmountInput,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <FormContainer>
        <label htmlFor="task">Vou trabalhar em</label>
        <TaskInput id="task" placeholder="Dê um nome para seu projeto" />

        <label htmlFor="">Durante</label>
        <MinutesAmountInput
          type="number"
          id="minutesAmount"
          placeholder="00"
          step={5}
        />

        <span>minutos</span>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartCountDownButton disabled type="submit">
          <Play size={24} />
          Começar
        </StartCountDownButton>
      </FormContainer>
    </HomeContainer>
  )
}
