import React from "react";
import { PersonCircle, HandThumbsUpFill } from "react-bootstrap-icons";
import CreateReply from "./CreateReply";

function PostPage() {
  return (
    <>
      <div className="container col-lg-6 shadow-lg p-3 mt-5 bg-body rounded">
        <h2>Title</h2>
        <p className="mt-4 text-align" style={{ color: "#505050" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
          nobis quod architecto dolorum. Magnam aliquid deserunt, quasi aut
          nesciunt quam est quo sapiente consequuntur laborum optio distinctio
          perspiciatis mollitia ducimus odio debitis tempore modi quod velit
          voluptas iste autem. Voluptas odit, amet laboriosam similique
          accusamus voluptates incidunt. Quos magnam quas facere fugit
          asperiores. Dolore vitae est consequatur facere debitis et, possimus
          molestiae dolor aliquam unde itaque, accusamus sequi placeat odio.
        </p>
        <div className="mt-1">
          Related Topics:
          <span className="tag">tag 1</span>
          <span className="tag">tag 2</span>
          <span className="tag">tag 3</span>
          <span className="tag">tag 4</span>
          <div className="d-flex w-100 justify-content-between mt-3 mb-3">
            <button
              // disabled={!user}
              className={
                "btn btn-outline-primary"
              }
              // onClick={this.handleUpvote}
            >
              <HandThumbsUpFill className="mr-2" />
              1K
            </button>
            <p>2.5K Views</p>
          </div>
          <div
            class="d-flex w-100 justify-content-between"
            style={{ color: "#505050" }}
          >
            <div>
              <PersonCircle size={30} className="mr-2" />
              Posted by Yash Lahoti
            </div>
            <p class="mb-1">
              12:00 PM, 12/01/2022
            </p>
          </div>
        </div>
      </div>
      <CreateReply />
      <div className="container col-lg-6 shadow-lg p-3 mt-5 bg-body rounded">
        Showing 10 replies
      </div>
      <div>
        
            <div className="container col-lg-6 shadow-lg p-3 mt-3 bg-body rounded">
              <div className="ml-4">
                <PersonCircle size={30} className="mr-3" />
                Posted by Tanmay Yadav
              </div>
              <div className="m-4">Very Good</div>
              <div className="d-flex w-100 justify-content-between mt-3 mb-3">
                <button
                  className={
                    "btn btn-outline-primary"
                  }
                  // disabled={!user}
                  // onClick={() => {
                  //   this.handleReplyUpvote(reply._id);
                  // }}
                >
                  <HandThumbsUpFill className="mr-2" />
                  {/* {reply.upvotes.length} */}
                </button>
                <p class="mb-1">
                  2:43 PM 12/01/2022
                </p>
              </div>
            </div>
      </div>
    </>
  );
}

export default PostPage;
