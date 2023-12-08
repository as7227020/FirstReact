import MyItem from "./MyItem";

const List = ({ listData, deleteData ,subittingStatus}) => {
  console.log("listData", listData);

  return (
    <div className="list">
      {listData.map((item) => {
        const { note, myDate, myTime, id } = item;
        return (
          <MyItem //Porpo
            key={id}
            id={id}
            note={note}
            myDate={myDate}
            myTime={myTime}
            deleteData={deleteData}
            subittingStatus={subittingStatus}
          />
        );
      })}
    </div>
  );
};

export default List;
