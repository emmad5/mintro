import React from "react"

const AboutMe = (props) => {
  const { birthdate, name, preferences, phone, share_email, linked_in, id, currentUser, editMintro } = props
  const { about_me, books, eats, movies, pronoun, from, personal } = preferences
  let activities;
  let booksTop5;
  let eatsTop5;
  let moviesTop5;
  if (preferences.activities) {
    activities = Object.entries(preferences.activities).map((act, id) => <div key={id}>{act[0]}. {act[1]}</div>)
  }
  if (books) {
    booksTop5 = Object.entries(books).map((book, id) => <div key={id}>{book[0]}. {book[1]}</div>)
  }
  if (eats) {
    eatsTop5 = Object.entries(eats).map((eat, id) => <div key={id}>{eat[0]}. {eat[1]}</div>)
  }
  if (movies) {
    moviesTop5 = Object.entries(movies).map((movie, id) => <div key={id}>{movie[0]}. {movie[1]}</div>)
  }

  let formattedBirthday;
  if (birthdate) {
    const date = new Date(birthdate.split('-').slice(1).join('-'))
    const format = date.toLocaleString('default', { month: 'long', day: 'numeric'  });
    formattedBirthday = <span>{format}</span>
  }
  
  return <div className="pa-24 about-me">
    <div>
      <div className="pb-24 name">{name}</div>
      {formattedBirthday && <div>Birthday: {formattedBirthday}</div>}
      {pronoun && <div>Pronouns: {pronoun}</div>}
      {from && <div>Where are you from: {from}</div>}
    </div>
    <div className="pt-24">
      <div className="about-me-header">Activities and Hobbies:</div>
      <div>{activities}</div>
    </div>
    <div className="pt-24">
      <div className="about-me-header">Some more about you</div>
      {about_me.aspiration && <div><div className="about-me-subheader">What is your biggest aspiration?</div>
      <div className="pb-12">{about_me.aspiration}</div></div>}
      {about_me.proud && <div><div className="about-me-subheader">What are you proud of that you haven’t told many people about?</div>
      <div className="pb-12">{about_me.proud}</div></div>}
      {about_me.career && <div><div className="about-me-subheader">If someone gave you enough money to start a business – no strings attached – what kind of business would you start and why?</div>
      <div className="pb-12">{about_me.career}</div></div>}
      {about_me.classmates && <div><div className="about-me-subheader">What are you interested in learning about your classmates this semester?</div>
      <div className="pb-12">{about_me.classmates}</div></div>}
      {about_me.friends && <div><div className="about-me-subheader">We will be friends if...</div>
      <div className="pb-12">{about_me.friends}</div></div>}
    </div>
    <div className="pt-24">
      <div className="about-me-header">Three 	&#8220;Top 5’s&#8221;</div>
      <div className="flex">
      <div className="top-5">
        <div className="about-me-subheader">Movies/TV Shows</div>
        <div>
          {moviesTop5}
        </div>
      </div>
      <div className="top-5" >
        <div className="about-me-subheader">Books or Games</div>
        <div>
          {booksTop5}
        </div>
      </div>
      <div className="top-5">
        <div className="about-me-subheader">Food</div>
        <div>
          {eatsTop5}
        </div>
      </div>
      </div>
    </div>
    <div className="pt-24">
      <div className="about-me-header">Contact Information:</div>
      <div className="mb-12">{phone && <a href={`tel:${phone}`} >Phone: {phone}</a>}</div>
      <div className="mb-12">{share_email && <a href={`mailto: ${share_email}`}>Email: {share_email}</a>}</div>
      <div className="mb-12">{linked_in && <a href={linked_in} target="_blank">LinkedIn: {linked_in}</a>}</div>
      <div>{personal && <a href={personal}>Personal: {personal}</a>}</div>
    </div>
    {currentUser.id === id && <div className="edit-mintro" onClick={() => editMintro(true)}>Edit My Mintro</div>}
  </div>
}

export default AboutMe