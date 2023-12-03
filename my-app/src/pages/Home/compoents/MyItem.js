const MyItem = ({id, note, myDate, myTime , deleteData}) => {

function deteleItem()
{
    deleteData(function(preV){
        return preV.filter(item => item.id !== id)
    })
}

  return (
    <div className="item">
      <div>
        <p>{note}</p>
        <p>{`${myDate} - ${myTime}`}</p>
      </div>
      <button className="remove" onClick={deteleItem}>刪除</button>
    </div>
  );
};

export default MyItem;
