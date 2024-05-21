const RollDice = ( {isNumber, rollDice} ) => {
  return (
    <div onClick={rollDice}>
      <img src={`/images/dice_${isNumber}.png`} alt='dice' />
    </div>
  )
}

export default RollDice
