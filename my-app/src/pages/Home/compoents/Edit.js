import { useState } from "react";
import {v4} from 'uuid'

const Edit = ({ addData, subittingStatus}) => { //index.js 在Edit內所設定的
  //記事
  const [note, setNote] = useState("");
  function NoteChange(e) {
    setNote(e.target.value);
  }

  //日期
  const [myDate, setDate] = useState("");
  function DateChange(e) {
    setDate(e.target.value);
  }

  const [myTime, setTime] = useState("");
  function TimeChange(e) {
    setTime(e.target.value);
  }
  console.log(note, myDate, myTime);
  function AddItem() {
    subittingStatus.current = true;
    addData(function (prevData) {
      return [
        {
          id : v4(),
          note,
          myDate,
          myTime,
        },
        ...prevData,
      ];
    });
  }

  return (
    <div>
      <h1>備忘錄</h1>

      <p>記事 : </p>
      <input type="text" value={note} onChange={NoteChange} />

      <p>日期 : </p>
      <input type="date" value={myDate} onChange={DateChange} />

      <p>時間 : </p>
      <input type="time" value={myTime} onChange={TimeChange} />

      <button onClick={AddItem} className="add">
        新增
      </button>
    </div>
  );
};

export default Edit;
