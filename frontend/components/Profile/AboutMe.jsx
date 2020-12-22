import React from "react"

const AboutMe = (props) => {
  const { birthdate, expertise, name, preferences, phone, share_email, linked_in } = props
  const { about_me, books, eats, movies, pronoun, from } = preferences
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
    {expertise && <div>Industry/Expertise: {expertise}</div>}
    </div>
    <div className="pt-24">
      <div className="about-me-header">Activities and Hobbies:</div>
      <div>{activities}</div>
    </div>
    <div className="pt-24">
      <div className="about-me-header">Some more about you</div>
      {about_me.career && <div><div className="about-me-subheader">What is your dream career?</div>
      <div className="pb-12">{about_me.career}</div></div>}
      {about_me.talk && <div><div className="about-me-subheader">What can you talk about for hours?</div>
      <div className="pb-12">{about_me.talk}</div></div>}
      {about_me.skills && <div><div className="about-me-subheader">What skills are you working to improve on?</div>
      <div className="pb-12">{about_me.skills}</div></div>}
      {about_me.others && <div><div className="about-me-subheader">What do you want others to know about you?</div>
      <div className="pb-12">{about_me.others}</div></div>}
    </div>
    <div className="pt-24">
     <div className="about-me-header">Three “Top 5’s” (conversation starters)</div>
      <div className="flex">
      <div className="top-5">
        <div className="about-me-subheader">Movies/TV Shows</div>
        <div>
          {moviesTop5}
        </div>
      </div>
      <div className="top-5" >
        <div className="about-me-subheader">Books</div>
        <div>
          {booksTop5}
        </div>
      </div>
      <div className="top-5">
        <div className="about-me-subheader">Eats</div>
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
      <div>{linked_in && <a href={linked_in}>LinkedIn: {linked_in}</a>}</div>
    </div>
  </div>
}

export default AboutMe