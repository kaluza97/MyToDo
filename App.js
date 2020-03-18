import React, { Component } from "react";
import Header from "./header";
import Mymodal from "./modal";
import EditModal from "./editModal";

import { truncate } from "./truncate";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        {
          id: 123131,
          title: "pracuj.pl",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unkn",
          author: "Edward Zwierzchowski",
          date: "Wed Feb 19 2020 18:19:09 GMT+0100"
        },
        {
          id: 123155222,
          title: "kivi.ninja.xx",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unkn",
          author: "Ksiadz Ryszard",
          date: "Tue Feb 18 2020 19:30:09 GMT+0100"
        },
        {
          id: 123132222,
          title: "Hrejterzy.pl",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unkn",
          author: "Benjamin Drabko",
          date: "Tue Feb 18 2020 19:37:09 GMT+0100"
        },
        {
          id: 123131,
          title: "Blyatyfull.ru",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unkn",
          author: "Edward Zwierzchowski",
          date: "Wed Feb 19 2020 18:19:09 GMT+0100"
        }
      ]
    };
  }

  // delete(item) {
  //   const list = this.state.list.filter(i => i.id !== item.id);
  //   this.setState({ list });
  // }

  render() {
    const list = this.state.list.map(item => (
      <div key={item.id}>
        <div
          className="list-item"
          // onClick={this.delete.bind(this, item)}
        >
          <Mymodal></Mymodal>
          <EditModal></EditModal>
          <div className="list-head">
            <h2 className="list-head-title">{item.title}</h2>
            <p className="head-item">Author : {item.author}</p>
            <p className="head-item">Date : {item.date}</p>
          </div>
          <div className="list-tail">
            <p className="tail-item">{truncate(item.description, 70)}</p>
          </div>
        </div>
      </div>
    ));
    return (
      <div className="list">
        <Header>{}</Header>
        <div>{list}</div>
      </div>
    );
  }
}
