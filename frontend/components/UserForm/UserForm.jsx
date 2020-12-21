import React from 'react';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.currentUser.id,
      name: '',
      linked_in: '',
      pronoun: '',
      from: '',
      birthdate: '',
      expertise: '',
      phone: '',
      activities: {
        '1': '',
        '2': '',
        '3': '',
        '4': '',
        '5': '',
        '6': '',
        '7': '',
        '8': '',
        '9': '',
        '10': '',
      },
      about_me: {
        'career': '',
        'talk': '',
        'skills': '',
        'others': ''
      },
      movies: {
        '1': '',
        '2': '',
        '3': '',
        '4': '',
        '5': ''
      },
      books: {
        '1': '',
        '2': '',
        '3': '',
        '4': '',
        '5': ''
      },
      eats: {
        '1': '',
        '2': '',
        '3': '',
        '4': '',
        '5': ''
      },
      share_email: ''
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
    const { id, name, linked_in, birthdate, expertise, phone, activities, about_me, movies, books, eats, share_email, from, pronoun } = this.state
    const preferences = Object.assign({}, { activities, about_me, movies, books, eats, from, pronoun });
    const user = Object.assign({}, { id, name, linked_in, birthdate, expertise, phone, share_email, preferences});
    console.log(user)
    this.props.updateUser(user);
  }

  render() {
    return (
      <div className="user-form flex flex-column align-center">
        <div className="font-18">Please fill out this form to continue</div>
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
                  <input type="date"
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
              <div>
                <label>Industry/Expertise:
                  <input type="text"
                    value={this.state.expertise}
                    onChange={this.update('expertise')}
                  />
                </label>
              </div>
            </div>
            <div className="section pa-24">
              <label>2. List Ten activities you enjoy
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
              <div className="flex">
              <div className="pr-8">i</div>
              <input type="text"
                value={this.state.activities['9']}
                onChange={this.updateActivities('9')}
              /> 
              </div>
              <div className="flex">
              <div className="pr-8">j</div>
              <input type="text"
                value={this.state.activities['10']}
                onChange={this.updateActivities('10')}
                  />
                </div>
            </label>
            </div>
            <div className="pa-24 section">
              <div>3. Some more about you</div>
            <div>
              <label>
              <div>
                What is your dream career?
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
                What can you talk about for hours?
              </div>
              <input type="text"
                value={this.state.about_me['talk']}
                onChange={this.updateAboutMe('talk')}
              />
            </label>
            </div>
            <div>
              <label>
              <div>
                What skills are you working to improve on?
              </div>
              <input type="text"
                value={this.state.about_me['skills']}
                onChange={this.updateAboutMe('skills')}
              />
            </label>
            </div>
            <div>
              <label><div>What do you want others to know about you?
              </div>
              <input type="text"
                value={this.state.about_me['others']}
                onChange={this.updateAboutMe('others')}
              />
            </label>
            </div>
            </div>
            <div className="pa-24 section">
            <div>4. Three "Top 5's"</div>
            a. Movies/TV Shows<div>
            i<input type="text"
              value={this.state.movies['1']}
              onChange={this.updateMovies('1')}
            />
              </div>
              <div>
              ii<input type="text"
              value={this.state.movies['2']}
              onChange={this.updateMovies('2')}
            />
              </div>
              <div>
             iii <input type="text"
              value={this.state.movies['3']}
              onChange={this.updateMovies('3')}
            />
              </div>
              <div>
             iv <input type="text"
              value={this.state.movies['4']}
              onChange={this.updateMovies('4')}
            />
              </div>
            <div>
             v <input type="text"
              value={this.state.movies['5']}
              onChange={this.updateMovies('5')}
            />
              </div>
           b. Books<div>
            i<input type="text"
              value={this.state.books['1']}
              onChange={this.updateBooks('1')}
            />
              </div>
              <div>
             ii<input type="text"
              value={this.state.books['2']}
              onChange={this.updateBooks('2')}
            />
              </div>
              <div>
             iii <input type="text"
              value={this.state.books['3']}
              onChange={this.updateBooks('3')}
            />
              </div>
              <div>
             iv <input type="text"
              value={this.state.books['4']}
              onChange={this.updateBooks('4')}
            />
              </div>
              <div>
            v<input type="text"
              value={this.state.books['5']}
              onChange={this.updateBooks('5')}
            />
              </div>
           b. Eats<div>
            i<input type="text"
              value={this.state.eats['1']}
              onChange={this.updateEats('1')}
            />
              </div>
              <div>
             ii<input type="text"
              value={this.state.eats['2']}
              onChange={this.updateEats('2')}
            />
              </div>
              <div>
             iii <input type="text"
              value={this.state.eats['3']}
              onChange={this.updateEats('3')}
            />
              </div>
              <div>
             iv <input type="text"
              value={this.state.eats['4']}
              onChange={this.updateEats('4')}
            />
              </div>
            <div>
            v<input type="text"
              value={this.state.eats['5']}
              onChange={this.updateEats('5')}
            />
            </div>
            </div>
            <div className="pa-24 section">
            <div>5. Where can your classmates reach you? (optional)</div>
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