//@flow
import React from 'react';

type Contact = {
  github?: {
    name: string,
    avatar: string,
    publicRepos: string,
    url: string,
    followers: number,
    following: number,
  },
  isGithub: boolean,
  id: number,
  contactName: string,
  phoneNumber: string,
};
const defaultImage =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIlhSi6ThmxOKDymY1VV1y0yjebUPehjJsCsy306lsHmaB0qj4';
export default function getContact(props: Contact) {
  let {github, contactName, phoneNumber, isGithub, id} = props;
  let {followers, following, name, avatar, publicRepos, url} = github;
  if (isGithub) {
    return (
      <div>
        <h2 style={{textAlign: 'center'}}>User Profile</h2>
        <div className="card">
          <img src={avatar} style={{width: 100}} />
          <h1>{contactName}</h1>
          <p className="title">Information </p>
          <p>Phone Number: {phoneNumber}</p>
          <p>Github Name: {name}</p>
          <p>Public Repo: {publicRepos}</p>
          <p>Github Link : {url}</p>
          <p>Followers : {followers}</p>
          <p>Following : {following}</p>
          <p>
            <button>Contact</button>
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h2 style={{textAlign: 'center'}}>User Profile</h2>
        <div className="card">
          <img src={defaultImage} style={{width: 100}} />
          <h1>{props.contactName}</h1>
          <h1>{props.phoneNumber}</h1>
          <p className="title">This user doesnt have github account </p>
          <p>
            <button>Contact</button>
          </p>
        </div>
      </div>
    );
  }
}
