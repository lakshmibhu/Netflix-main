const PostAction = {
  getPosts: (requestModel) => {
    console.log("\n\n\n1.PostAction---getPosts");
    return { type: "GET_POSTS", requestModel: requestModel };
  },
  receivePosts: (posts) => {
    console.log("5.PostAction---receivePosts");
    return { type: "RECEIVE_POSTS", posts: posts };
  },
  getPost: (requestModel) => {
    console.log("\n\n\n1.PostAction---getPost");
    return { type: "GET_POST", requestModel: requestModel };
  },
  receivePost: (post) => {
    console.log("5.PostAction---receivePost");
    return { type: "RECEIVE_POST", post: post };
  }
};

export default PostAction;
