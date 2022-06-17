import {useContext, useEffect, useRef} from "react";
import {PostsContext} from "../../contexts/PostsProvider/context";
import {loadPosts} from "../../contexts/PostsProvider/action";

export const Posts = () => {
  const isMounted = useRef(true);
  const postsContext = useContext(PostsContext);
  const {postsState, postsDispatch} = postsContext;

  useEffect(() => {
    loadPosts(postsDispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch();
      }
    });
    return () => {
      isMounted.current = false;
    };
  }, [postsDispatch]);

  return(
    <div>
      <h1> Posts </h1>
      {postsState.posts.map((post) => (
        <p key={post.id}>{post.title}</p>
        )
      )}
      {postsState.loading && (
        <p><strong>Carregando os posts ...</strong></p>
      )}
    </div>
  )
}