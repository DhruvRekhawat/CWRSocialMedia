import { Card } from "@nextui-org/card";
import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../lib/firebase";
import NewPostForm from "./NewPostForm";

interface Post {
  user: string;
  title: string;
  description: string;
  image: string;
}

const Feed = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const q = collection(db, "posts");
  const getAllPosts = async () => {
    let postsArray: any[] = [];
    getDocs(q).then((docs) => {
      docs.forEach((doc) => postsArray.push(doc.data()));
      setPosts(postsArray);
    });
  };


  setInterval(()=>{
    getAllPosts();
  },30000)
  

  return (
    <main className="p-4">
      <NewPostForm></NewPostForm>
      <div className="w-full flex flex-col justify-center items-center p-8 ">
        <div className="grid grid-cols-1 gap-4">
          {posts.map((value, index) => {
            return (
              <Card className="w-[20rem] p-3 bg-violet-200 flex flex-col justify-center items-center" key={index}>
                <div className="rounded-lg">
                  <img src={value.image} alt="" />
                </div>
                <p>User: {value.user}</p>
                <p>Title: {value.title}</p>
                <p>Description: {value.description} </p>
              </Card>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Feed;
