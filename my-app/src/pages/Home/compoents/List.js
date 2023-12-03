import MyItem from "./MyItem";

const List = ({ listData, deleteData }) => {
  console.log("listData", listData);

  return (
    <div className="list">
      {listData.map((item) => {
        const { note, myDate, myTime, id } = item;
        return (
          <MyItem
            key={id}
            id={id}
            note={note}
            myDate={myDate}
            myTime={myTime}
            deleteData={deleteData}
          />
        );
      })}
    </div>
  );
};

export default List;
