import './styles.css';
import {PostsProvider} from "../../contexts/PostsProvider";
import {Posts} from "../../components/Posts";

function Index() {
  return (
    <PostsProvider>
      <div>
        <Posts />
      </div>
    </PostsProvider>
  );
}

export default Index;
