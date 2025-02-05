import useTictactoe from '../hooks/use_tic-tac-toe';
function TicTacToe() {
  const {board,resetGame,handleClick,getStatusMessage}=useTictactoe();
  return (
    <div className='game'>
      <div className="status">
        {getStatusMessage()}
        <button className="reset" onClick={resetGame}>reset game</button>
      </div>
      <div className="board">
        {board.map((b, index)=>{
          return(
            <button className="cell" key={index} onClick={()=>handleClick(index)} disabled={b!==null}>{b}</button>
          )
        })}
      </div>
    </div>
  );
}
export default TicTacToe;
