import React from 'react'
import { BsFillEmojiFrownFill } from "react-icons/bs";
import { UserStoreContext } from "../../context/UserContext";


const HomePage = () => {
  const userStore = React.useContext(UserStoreContext);

  const getProfile = () => {
    const profileValue = JSON.parse(localStorage.getItem("profile"));
    if (profileValue) {
      userStore.updateProfile(profileValue);
    }
  };

  React.useEffect(() => {
    getProfile();
  }, []);
  return (
    <main role="main">
  <div className="jumbotron">
    <div className="container">
      <h1 className="display-3">Hello, world! <BsFillEmojiFrownFill/> </h1>
      <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
      <p><a className="btn btn-primary btn-lg" href="1" role="button">Learn more »</a></p>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <h2> {userStore.profile ? (
                <span className="nav-text">{userStore.profile.name}</span>
              ) : (
                <></>
              )}</h2>
        <p>Will you do the same for me? It's time to face the music I'm no longer your muse. Heard it's beautiful, be the judge and my girls gonna take a vote. I can feel a phoenix inside of me. Heaven is jealous of our love, angels are crying from up above. Yeah, you take me to utopia.</p>
        <p><a className="btn btn-secondary" href="1" role="button">View details »</a></p>
      </div>
      <div className="col-md-4">
        <h2>Heading</h2>
        <p>Standing on the frontline when the bombs start to fall. Heaven is jealous of our love, angels are crying from up above. Can't replace you with a million rings. Boy, when you're with me I'll give you a taste. There’s no going back. Before you met me I was alright but things were kinda heavy. Heavy is the head that wears the crown.</p>
        <p><a className="btn btn-secondary" href="1" role="button">View details »</a></p>
      </div>
      <div className="col-md-4">
        <h2>Heading</h2>
        <p>Playing ping pong all night long, everything's all neon and hazy. Yeah, she's so in demand. She's sweet as pie but if you break her heart. But down to earth. It's time to face the music I'm no longer your muse. I guess that I forgot I had a choice.</p>
        <p><a className="btn btn-secondary" href="1" role="button">View details »</a></p>
      </div>
    </div>
  </div> 
</main>

  )
}

export default HomePage