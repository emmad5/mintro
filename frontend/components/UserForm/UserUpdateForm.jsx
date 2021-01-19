import React from 'react';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    let birthdate = '';
    if (props.currentUser.birthdate) {
      birthdate = props.currentUser.birthdate.split('-').slice(1).join('/')
    }
    this.state = {
      addQ: 0,
      id: props.currentUser.id,
      name: props.currentUser.name || '',
      linked_in: props.currentUser.linked_in || '',
      pronoun: props.currentUser.preferences.pronoun || '',
      from: props.currentUser.preferences.from || '',
      birthdate: birthdate,
      phone: props.currentUser.phone || '',
      personal: props.currentUser.preferences.personal || '',
      activities: {
        '1': props.currentUser.preferences.activities[1] || '',
        '2': props.currentUser.preferences.activities[2] || '',
        '3': props.currentUser.preferences.activities[3] || '',
        '4': props.currentUser.preferences.activities[4] || '',
        '5': props.currentUser.preferences.activities[5] || '',
        '6': props.currentUser.preferences.activities[6] || '',
        '7': props.currentUser.preferences.activities[7] || '',
        '8': props.currentUser.preferences.activities[8] || '',
      },
      about_me: {
        'career': props.currentUser.preferences.about_me['career'] || '',
        'aspiration': props.currentUser.preferences.about_me['aspiration'] || '',
        'proud': props.currentUser.preferences.about_me['proud'] || '',
        'classmates': props.currentUser.preferences.about_me['classmates'] || '',
      },
      movies: {
        '1': props.currentUser.preferences.movies[1] || '',
        '2': props.currentUser.preferences.movies[2] || '',
        '3': props.currentUser.preferences.movies[3] || '',
        '4': props.currentUser.preferences.movies[4] || '',
        '5': props.currentUser.preferences.movies[5] || ''
      },
      books: {
        '1': props.currentUser.preferences.books[1] || '',
        '2': props.currentUser.preferences.books[2] || '',
        '3': props.currentUser.preferences.books[3] || '',
        '4': props.currentUser.preferences.books[4] || '',
        '5': props.currentUser.preferences.books[5] || ''
      },
      eats: {
        '1': props.currentUser.preferences.eats[1] || '',
        '2': props.currentUser.preferences.eats[2] || '',
        '3': props.currentUser.preferences.eats[3] || '',
        '4': props.currentUser.preferences.eats[4] || '',
        '5': props.currentUser.preferences.eats[5] || ''
      },
      share_email: props.currentUser.share_email || '',
    };
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  updateActivities(field) {
    return (e) => {
      const { activities } = this.state
      activities[field] = (e.currentTarget.value)
      this.setState({ activities })
    }
  }

  updateMovies(field) {
    return (e) => {
      const { movies } = this.state
      movies[field] = (e.currentTarget.value)
      this.setState({ movies })
    }
  }

  updateBooks(field) {
    return (e) => {
      const { books } = this.state
      books[field] = (e.currentTarget.value)
      this.setState({ books })
    }
  }

  updateEats(field) {
    return (e) => {
      const { eats } = this.state
      eats[field] = (e.currentTarget.value)
      this.setState({ eats })
    }
  }

  updateTopFive(field) {
    return (e) => {
      const { top_fives } = this.state
      top_fives[field] = (e.currentTarget.value)
      this.setState({ top_fives })
    }
  }

  updateAboutMe(field) {
    return (e) => {
      const { about_me } = this.state
      about_me[field] = (e.currentTarget.value)
      this.setState({ about_me })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { id, name, linked_in, birthdate, phone, activities, about_me, movies, books, eats, share_email, from, pronoun, personal } = this.state
    const birthdateDate = new Date(birthdate)
    const preferences = Object.assign({}, { activities, about_me, movies, books, eats, from, pronoun, personal });
    const user = Object.assign({}, { id, name, linked_in, birthdate: birthdateDate, phone, share_email, preferences });
    this.props.updateUser(user).then(res => {
      window.location.reload();
    });
    this.props.editMintro(false);
  }

  render() {
    return (
      <div className="user-form flex flex-column align-center">
        <div className="font-18">Edit your mintro</div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <div className="section pa-24">
              <div>1. Basic Info</div>
              <div>
                <label>Full Name:
                <input type="text"
                    value={this.state.name}
                    onChange={this.update('name')}
                  />
                </label>
              </div>
              <div>
                <label>Pronouns:
                <input type="text"
                    value={this.state.pronoun}
                    onChange={this.update('pronoun')}
                  />
                </label>
              </div>
              <div>
                <label>Birthday (mm/dd):
                  <input type="text"
                    value={this.state.birthdate}
                    onChange={this.update('birthdate')}
                  />
                </label>
              </div>
              <div>
                <label>Where are you from?
                  <input type="text"
                    value={this.state.from}
                    onChange={this.update('from')}
                  />
                </label>
              </div>
            </div>
            <div className="section pa-24">
              <label><div className="pb-12">2. List up to eight activities you enjoy</div>
                <div className="flex">
                  <div className="pr-8">a</div>
                  <input type="text"
                    value={this.state.activities['1']}
                    onChange={this.updateActivities('1')}
                  />
                </div>
                <div className="flex">
                  <div className="pr-8">b</div>
                  <input type="text"
                    value={this.state.activities['2']}
                    onChange={this.updateActivities('2')}
                  />
                </div>
                <div className="flex">
                  <div className="pr-8">c</div>
                  <input type="text"
                    value={this.state.activities['3']}
                    onChange={this.updateActivities('3')}
                  />
                </div>
                <div className="flex">
                  <div className="pr-8">d</div>
                  <input type="text"
                    value={this.state.activities['4']}
                    onChange={this.updateActivities('4')}
                  />
                </div>
                <div className="flex">
                  <div className="pr-8">e</div>
                  <input type="text"
                    value={this.state.activities['5']}
                    onChange={this.updateActivities('5')}
                  />
                </div>
                <div className="flex">
                  <div className="pr-8">f</div>
                  <input type="text"
                    value={this.state.activities['6']}
                    onChange={this.updateActivities('6')}
                  />
                </div>
                <div className="flex">
                  <div className="pr-8">g</div>
                  <input type="text"
                    value={this.state.activities['7']}
                    onChange={this.updateActivities('7')}
                  />
                </div>
                <div className="flex">
                  <div className="pr-8">h</div>
                  <input type="text"
                    value={this.state.activities['8']}
                    onChange={this.updateActivities('8')}
                  />
                </div>
              </label>
            </div>
            <div className="pa-24 section more-about-you">
              <div className="pb-12">3. Some more about you</div>
              <div>
                <label>
                  <div>
                    What is your biggest aspiration?
              </div>
                  <input type="text"
                    value={this.state.about_me['aspiration']}
                    onChange={this.updateAboutMe('aspiration')}
                  />
                </label>
              </div>
              <div>
                <label>
                  <div>
                    What are you proud of that you haven’t told many people about?
              </div>
                  <input type="text"
                    value={this.state.about_me['proud']}
                    onChange={this.updateAboutMe('proud')}
                  />
                </label>
              </div>
              <div>
                <label>
                  <div>
                    If someone gave you enough money to start a business – no strings attached – what kind of business would you start and why?
              </div>
                  <input type="text"
                    value={this.state.about_me['career']}
                    onChange={this.updateAboutMe('career')}
                  />
                </label>
              </div>
              <div>
                <label>
                  <div>
                    What are you interested in learning about your classmates this semester?
              </div>
                  <input type="text"
                    value={this.state.about_me['classmates']}
                    onChange={this.updateAboutMe('classmates')}
                  />
                </label>
              </div>

            </div>
            <div className="pa-24 section">
              <div className="pb-12">4. Three "Top 5's"</div>
              <div className="flex">
                <div className="top-5">
                  a. TV Shows or Movies
              <div className="flex flex-end">
                    <div className="top-5-input">i</div><input type="text"
                      value={this.state.movies['1']}
                      onChange={this.updateMovies('1')}
                    />
                  </div>
                  <div className="flex flex-end">
                    <div className="top-5-input">ii</div><input type="text"
                      value={this.state.movies['2']}
                      onChange={this.updateMovies('2')}
                    />
                  </div>
                  <div className="flex flex-end">
                    <div className="top-5-input">iii </div><input type="text"
                      value={this.state.movies['3']}
                      onChange={this.updateMovies('3')}
                    />
                  </div>
                  <div className="flex flex-end">
                    <div className="top-5-input">iv </div><input type="text"
                      value={this.state.movies['4']}
                      onChange={this.updateMovies('4')}
                    />
                  </div>
                  <div className="flex flex-end">
                    <div className="top-5-input">v</div><input type="text"
                      value={this.state.movies['5']}
                      onChange={this.updateMovies('5')}
                    />
                  </div>
                </div>
                <div className="top-5">
                  b. Books or Games
              <div className="flex flex-end">
                    <div className="top-5-input">i</div><input type="text"
                      value={this.state.books['1']}
                      onChange={this.updateBooks('1')}
                    />
                  </div>
                  <div className="flex flex-end">
                    <div className="top-5-input">ii</div><input type="text"
                      value={this.state.books['2']}
                      onChange={this.updateBooks('2')}
                    />
                  </div>
                  <div className="flex flex-end">
                    <div className="top-5-input">iii </div><input type="text"
                      value={this.state.books['3']}
                      onChange={this.updateBooks('3')}
                    />
                  </div>
                  <div className="flex flex-end">
                    <div className="top-5-input">iv </div><input type="text"
                      value={this.state.books['4']}
                      onChange={this.updateBooks('4')}
                    />
                  </div>
                  <div className="flex flex-end">
                    <div className="top-5-input">v</div><input type="text"
                      value={this.state.books['5']}
                      onChange={this.updateBooks('5')}
                    />
                  </div>
                </div>
                <div className="top-5">
                  b. Food
              <div className="flex flex-end">
                    <div className="top-5-input">i</div><input type="text"
                      value={this.state.eats['1']}
                      onChange={this.updateEats('1')}
                    />
                  </div>
                  <div className="flex flex-end">
                    <div className="top-5-input">ii</div><input type="text"
                      value={this.state.eats['2']}
                      onChange={this.updateEats('2')}
                    />
                  </div>
                  <div className="flex flex-end">
                    <div className="top-5-input">iii </div><input type="text"
                      value={this.state.eats['3']}
                      onChange={this.updateEats('3')}
                    />
                  </div>
                  <div className="flex flex-end">
                    <div className="top-5-input">iv </div><input type="text"
                      value={this.state.eats['4']}
                      onChange={this.updateEats('4')}
                    />
                  </div>
                  <div className="flex flex-end">
                    <div className="top-5-input">v</div><input type="text"
                      value={this.state.eats['5']}
                      onChange={this.updateEats('5')}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="pa-24 section">
              <div className="pb-12">5. Where can your classmates reach you? (optional)</div>
              <div>
                <label>Phone:
              <input type="text"
                    value={this.state.phone}
                    onChange={this.update('phone')}
                  />
                </label>
              </div>
              <div>
                <label>Email:
              <input type="email"
                    value={this.state.share_email}
                    onChange={this.update('share_email')}
                  />
                </label>
              </div>
              <div>
                <label>LinkedIn Profile:
              <input type="text"
                    value={this.state.linked_in}
                    onChange={this.update('linked_in')}
                  />
                </label>
              </div>
              <div>
                <label>Other (Instagram/Facebook/Personal Website):
              <input type="text"
                    value={this.state.personal}
                    onChange={this.update("personal")}
                  />
                </label>
              </div>
            </div>
            <div className="pa-24">
              <input className="user-form-submit" type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default UserForm;