import './Instructions.css'

const Instructions = ({ steps }: Props) => {

  return <div className='instructions'>
    <h2 className='intructions__heading'>Instruktioner</h2>
    {steps.map((step, index) => (
      <div key={index} className='instructions__box'>
        <div className='instructions__number'>{index + 1}</div>
        <div><p className='instructions__text'>{step}</p></div>
      </div>
    ))}
  </div>
}

interface Props {
  steps: string[];
}

export default Instructions;