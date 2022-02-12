import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      {/* TODO */}
      <div className="input-area">
        <input id="add-text" placeholder="TODOを入力" />
        <button id="add-button">追加</button>
      </div>
      {/* 未完了 */}
      <div className="imcomplete-area">
        <p className="title">未完了のTODO</p>
        <ul id="imcomplete-list">
          <div className="list-row">
            <li>ああああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div className="list-row">
            <li>いいいい</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      {/* 完了 */}
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul id="complete-list">
          <div className="list-row">
            <li>ううう</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
