import React from "react"

const AboutMe = (props) => {
  console.log(props)
  const { birthdate, expertise, name, preferences, phone, share_email, linked_in } = props
  const { about_me, books, eats, movies, pronoun, from } = preferences
  let activities;
  let booksTop5;
  let eatsTop5;
  let moviesTop5;
  if (preferences.activities) {
    activities = Object.entries(preferences.activities).map((act, id) => <div key={id}>{act}</div>)
  }
  if (books) {
    booksTop5 = Object.entries(books).map((book, id) => <div key={id}>{book}</div>)
  }
  if (eats) {
    eatsTop5 = Object.entries(eats).map((eat, id) => <div key={id}>{eat}</div>)
  }
  if (movies) {
    moviesTop5 = Object.entries(movies).map((movie, id) => <div key={id}>{movie}</div>)
  }
  
  return <div>
    <div>
      <div className="pb-24">All About {name}</div>
      {birthdate && <div>Birthday: {birthdate}</div>}
      {pronoun && <div>Pronouns: {pronoun}</div>}
      {from && <div>Where are you from: {from}</div>}
    {expertise && <div>Industry/Expertise: {expertise}</div>}
    </div>
    <div className="pt-24">
      <div>Activities and Hobbies:</div>
      <div>{activities}</div>
    </div>
    <div className="pt-24">
      <div>Some more about you</div>
      {about_me.career && <div><div>What is your dream career?</div><div>{about_me.career}</div></div>}
      {about_me.talk && <div><div>What can you talk about for hours?</div><div>{about_me.talk}</div></div>}
      {about_me.skills && <div><div>What skills are you working to improve on?</div><div>{about_me.skills}</div></div>}
      {about_me.others && <div><div>What do you want others to know about you?</div><div>{about_me.others}</div></div>}
    </div>
    <div>
      <div>Three “Top 5’s” (conversation starters)</div>
      <div>
        <div>Movies/TV Shows</div>
        <div>
          {moviesTop5}
        </div>
      </div>
      <div>
        <div>Books</div>
        <div>
          {booksTop5}
        </div>
      </div>
      <div>
        <div>Eats</div>
        <div>
          {eatsTop5}
        </div>
      </div>
    </div>
    <div className="pt-24">
    <div>Contact Information</div>
      <div>{phone && <a href={`tel:${phone}`}>{phone}</a>}</div>
      <div>{share_email && <a href={`mailto: ${share_email}`}>{share_email}</a>}</div>
      <div>{linked_in && <a href={linked_in}>{linked_in}</a>}</div>
    </div>
  </div>
}

export default AboutMe