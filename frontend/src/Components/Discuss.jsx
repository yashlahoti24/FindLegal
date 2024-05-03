import React, { useContext, useState, useEffect } from "react";
import "../css/Posts.css";
import "../css/Discuss.css";
import { Link } from "react-router-dom";
import noteContext from "../context/notes/NoteContext";
import Posts from "./Posts";
import { Row, Col, Container } from "react-bootstrap";
import DiscussSide from "./DiscussSide";

function Discuss() {
  const context = useContext(noteContext);
  const { getPost, data } = context;
  // let arr=[];
  // let [data,setData] = useState();
  const host = "http://localhost:5000";

  useEffect(() => {
    getPost();
    // console.log(data);
  }, [data]);
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   await addPost(note.title, note.description, note.tag);
  //   console.log(note);
  //   console.log("frontend");
  // };
  // const onChange = (e) => {
  //   setNote({ ...note, [e.target.name]: e.target.value });
  // };

  return (
    <>
      <div className="head">
        <h1 className="heading ">
          Know your law With <br /> FindLegal
        </h1>
        <Link to={"/create-post"}>
          <button className="btn btn-outline-success">
            Start a discussion
          </button>
        </Link>
      </div>
      <Row>
        <Col md={8}>
          <Container>
          {data &&
            Array.from(data).map((p) => {
              console.log(p)
              return <Posts key={p._id} post={p} />;
            })}
            </Container>
        </Col>
        <Col>
          <Container>
           
            <DiscussSide/>
          </Container>
        </Col>
      </Row>
    </>
  );
}

export default Discuss;
