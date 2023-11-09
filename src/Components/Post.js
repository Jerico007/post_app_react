import {
  // post_fetching,
  // post_success,
  // post_error,
  fetchFunction
} from "../Redux/Actions/postAction,";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
// import Axios from "axios";

// const url = "https://gauravgitacc.github.io/postAppData/posts.json";

const Post = () => {
  const { fetching, data, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    // getData();
    dispatch(fetchFunction());
  }, []);

  // async function getData() {
  //   try {
  //     dispatch(post_fetching());
  //     let response = await Axios.get(url);
  //     console.log(response);
  //     dispatch(post_success(response.data));
  //   } catch (error) {
  //     console.log(error.message);
  //     dispatch(post_error(error.message));
  //   }
  // }

  return (
    <div className="Post">
      {fetching ? (
        <h1 className="loader">Loading...</h1>
      ) : (
        <div className="data-holder">
          {data &&
            data.map((item) => {
              return (
                <div key={item.id}>
                  <h1>{item.title}</h1>
                  <p>{item.body}</p>
                  <hr></hr>
                </div>
              );
            })}
            {
                error && <h1>{error}</h1>
            }
        </div>
      )}
    </div>
  );
};

export default Post;
