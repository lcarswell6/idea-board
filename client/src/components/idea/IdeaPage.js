import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'


const Ideas = styled.div`
background-color:yellow;
text-align: left;
border-color:blue;
min-width:240px;
max-width:500px;
border: 1px solid black;



`

const Header = styled.div`
text-align:center;
position: relative;
background-color:purple;
color: white;
font-size: 20px;
border: 1px solid white;
height:96px;

`
const Card = styled.div`
background-color:aqua;
color: green;
display: flex;
flex-direction: column;
border: 1px solid black;
padding:2em;
margin:10px;
position: relative;
min-width:240px;
max-width: 500px;

`
class IdeaPage extends Component {
    state = {
        user: {
            userName: "",
            password: "",
            ideas: []
        }
    }
    async    componentWillMount() {
        const { userId } = this.props.match.params
        console.log(userId)
        const res = await axios.get(`/api/users/${userId}`)
        this.setState({ user: res.data })
    }

    render() {
        return (
            <Ideas>
                <Header>
                    <h1>{this.state.user.userName}'s Board</h1>
                </Header>
                {this.state.user.ideas.map((idea) => {
                    return (
                        <Card key={idea._id}>
                            <h3>{idea.title}</h3>
                            <p>{idea.description}</p>
                        </Card>
                    )
                }
                )}
            </Ideas>
        );
    }
}

export default IdeaPage;