import { Navbar } from "../Navbar";
import { Post } from "../Post";
import "./index.css";

export const App = () => {
  return (
    <>
      <Navbar />
      <Post userName="Buddy" text="hello I'm Buddy" />
      <Post
        userName="Leon"
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde consequuntur deserunt dolorem veniam beatae? Quia at error incidunt! Quasi aut animi enim? Ullam error libero modi, nobis iusto maiores adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde consequuntur deserunt dolorem veniam beatae? Quia at error incidunt! Quasi aut animi enim? Ullam error libero modi, nobis iusto maiores adipisci."
      />
      <Post
        userName="Who?"
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde consequuntur deserunt dolorem veniam beatae? Quia at error incidunt! Quasi aut animi enim? Ullam error libero modi, nobis iusto maiores adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde consequuntur deserunt dolorem veniam beatae? Quia at error incidunt! Quasi aut animi enim? Ullam error libero modi, nobis iusto maiores adipisci."
      />
      <Post userName="Mr.Pickles" text="hello Buddy" />
      <Post
        userName="Henry"
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde consequuntur deserunt dolorem veniam beatae? Quia at error incidunt! Quasi aut animi enim? Ullam error libero modi, nobis iusto maiores adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde consequuntur deserunt dolorem veniam beatae? Quia at error incidunt! Quasi aut animi enim? Ullam error libero modi, nobis iusto maiores adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde consequuntur deserunt dolorem veniam beatae? Quia at error incidunt! Quasi aut animi enim? Ullam error libero modi, nobis iusto maiores adipisci.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde consequuntur deserunt dolorem veniam beatae? Quia at error incidunt! Quasi aut animi enim? Ullam error libero modi, nobis iusto maiores adipisci."
      />
    </>
  );
};
