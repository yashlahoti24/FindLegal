import React, { useState } from "react";
import Input from "./Common/Input";

function CreatePost() {
  const [post, setPost] = useState("");
//   const { data, errors, tags } = this.state;
  function handleChange(e) {
    setPost(e.target.value);
}
//     function handleTagChange(tagID){
//     console.log("hello");
//     let data = this.state.data;
//     const newtags = data.tags;
//     const index = newtags.indexOf(tagID);
//     if (index === -1) newtags.push(tagID);
//     else newtags.splice(index, 1);
//     data = {
//       title: data.title,
//       description: data.description,
//       tags: newtags,
//     };
//     console.log(data);
//     this.setState({ data });
//   };

  return (
    <>
      {/* <div className="post">
        <textarea
          name="title"
          placeholder="Title"
          cols="100"
          rows="1"
          onChange={handleChange}
        ></textarea>
        <textarea
          name="description"
          placeholder="Description"
          cols="100"
          rows="7"
          onChange={handleChange}
        ></textarea>
        <textarea
          name="tags"
          placeholder="Tags "
          cols="100"
          rows="1"
          onChange={handleChange}
        ></textarea>
      </div>
      <button className="success" type="submit">
        Post
      </button> */}

      <div className="container-lg">
        <h1 className="text-center m-2">Create a New Discussion</h1>
        <div
          className="container m-4 p-4 rounded"
          style={{ backgroundColor: "#F1F1F1" }}
        >
          <form>
            <Input
              // value={data.title}
              onChange={handleChange}
              label="Title"
              name="title"
              type="text"
              // error={errors.title}
            />
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                // value={data.description}
                onChange={handleChange}
                name="description"
                type="description"
                id="description"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="tags">Related Tags</label>
              <br />
              {/* {tags.map((tag) => (
                <React.Fragment>
                  <label className="mr-3 ml-3"> */}
                    <input
                    //   key={tag._id}
                    //   className="form-check-input"
                      className="form-control"
                      type="text"
                      onChange={handleChange}
                    />
                    {/* {tag.name}
                  </label>
                </React.Fragment> */}
              {/* ))} */}
            </div>
            <div className="text-center">
                <button
                  className="btn btn-primary mt-4"
                //   disabled={this.validate()}
                >
                  Submit
                </button>
              </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreatePost;
