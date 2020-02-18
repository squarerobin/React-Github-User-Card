import React from 'react'
import axios from 'axios'
import './App.css';
import Card from './Card/Card'

class App extends React.Component {
  constructor() {
    console.log('constructor is getting called')
    super()
    this.state = {

      name: "",
      image: "",
      userName: "",
      location: "",
      url: "",
      followers: "",
      following: "",
      bio: "",



    }
  }

  componentDidMount() {
    console.log('componentDidMount is getting called')

    axios
      .get("https://api.github.com/users/squarerobin")
      .then(res => {
        // this probably returns a 200 status code
        console.log(res.data)

        this.setState({



          name: res.data.name,
          image: res.data.avatar_url,
          userName: res.data.userName,
          location: res.data.location,
          url: res.data.url,
          followers: res.data.followers,
          following: res.data.following,
          bio: res.data.bio


        })
      })




      .catch((err) => {
        // this probably returns either a 400 or 500 status code
        console.log('You hit an error: ', err);
      });




  }

  render() {
    //console.log(this.state.user)

    return (


      <div className="container">
        <div className="header">
          <img src="../assets/lambdalogo.png" alt="Lambda Logo" />
          <p>❤️'s</p>
          <img src="../../react-github-user-card/assets/lambdalogo.png" alt="GitHub Logo" />
        </div>
       <Card />
        <div class="cards"></div>
      </div>


    )




  }
}

export default App;
