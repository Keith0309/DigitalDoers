import "./remove.css"

const RemoveButton = ({ onRemove }) => {


  return (
    <div className='justify-content-center' >
        <button className="removeStyle" onClick={ onRemove }> <i className="bi bi-x-circle-fill"></i></button>
    </div>
  );
};

export default RemoveButton;