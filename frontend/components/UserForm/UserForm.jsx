import React from 'react';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.currentUser.id,
      name: '',
      linked_in: '',
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
      const { id, name, linked_in, birthdate, expertise, phone, activities, about_me, movies, books, eats, share_email } = this.state
    const preferences = Object.assign({}, { activities, about_me, movies, books, eats });
    const user = Object.assign({}, { id, name, linked_in, birthdate, expertise, phone, share_email, preferences});
    console.log(user)
    this.props.updateUser(user);
  }

  render() {
    return (
      <div className="user-form">
        <form onSubmit={this.handleSubmit}>
          <div>
            1. Basic Info
            <br />
            <label>Full Name:
              <input type="text"
                value={this.state.name}
                onChange={this.update('name')}
              />
            </label>
            <br />
            <br />
            <label>Birthday (mm/dd):
              <input type="date"
                value={this.state.birthdate}
                onChange={this.update('birthdate')}
              />
            </label>
            <br />
            <br />
            <label>Industry/Expertise:
              <input type="text"
                value={this.state.expertise}
                onChange={this.update('expertise')}
              />
            </label>

 
            <br />
            <label>2. Activities and Hobbies:
              <br />
              a
              <input type="text"
                value={this.state.activities['1']}
                onChange={this.updateActivities('1')}
              />
              <br />b
              <input type="text"
                value={this.state.activities['2']}
                onChange={this.updateActivities('2')}
              />
              <br />c
              <input type="text"
                value={this.state.activities['3']}
                onChange={this.updateActivities('3')}
              />
              <br />d
              <input type="text"
                value={this.state.activities['4']}
                onChange={this.updateActivities('4')}
              />
              <br />e
              <input type="text"
                value={this.state.activities['5']}
                onChange={this.updateActivities('5')}
              />
              <br />f
              <input type="text"
                value={this.state.activities['6']}
                onChange={this.updateActivities('6')}
              />
              <br />g
              <input type="text"
                value={this.state.activities['7']}
                onChange={this.updateActivities('7')}
              />
              <br />h
              <input type="text"
                value={this.state.activities['8']}
                onChange={this.updateActivities('8')}
              />
              <br />i
              <input type="text"
                value={this.state.activities['9']}
                onChange={this.updateActivities('9')}
              />
              <br />j
              <input type="text"
                value={this.state.activities['10']}
                onChange={this.updateActivities('10')}
              />
            </label>
            <br />
            3. Some more about you
              <br />
            <label>What is your dream career?
              <input type="text"
                value={this.state.about_me['career']}
                onChange={this.updateAboutMe('career')}
              />
            </label>
            <br />
            <label>What can you talk about for hours?
              <input type="text"
                value={this.state.about_me['talk']}
                onChange={this.updateAboutMe('talk')}
              />
            </label>
            <br />
            <label>What skills are you working to improve on?
              <input type="text"
                value={this.state.about_me['skills']}
                onChange={this.updateAboutMe('skills')}
              />
            </label>
            <br />
            <label>What do you want others to know about you?
              <input type="text"
                value={this.state.about_me['others']}
                onChange={this.updateAboutMe('others')}
              />
            </label>
            <br />
            4. Three “Top 5’s” (conversation starters)
            <br />
            a. Movies/TV Shows
            <br />
            i<input type="text"
              value={this.state.movies['1']}
              onChange={this.updateMovies('1')}
            />
            <br />
              ii<input type="text"
              value={this.state.movies['2']}
              onChange={this.updateMovies('2')}
            />
            <br />
             iii <input type="text"
              value={this.state.movies['3']}
              onChange={this.updateMovies('3')}
            />
            <br />
             iv <input type="text"
              value={this.state.movies['4']}
              onChange={this.updateMovies('4')}
            />
            <br />
             v <input type="text"
              value={this.state.movies['5']}
              onChange={this.updateMovies('5')}
            />
            <br />
           b. Books
            <br />
            i<input type="text"
              value={this.state.books['1']}
              onChange={this.updateBooks('1')}
            />
            <br />
             ii<input type="text"
              value={this.state.books['2']}
              onChange={this.updateBooks('2')}
            />
            <br />
             iii <input type="text"
              value={this.state.books['3']}
              onChange={this.updateBooks('3')}
            />
            <br />
             iv <input type="text"
              value={this.state.books['4']}
              onChange={this.updateBooks('4')}
            />
            <br />
            v<input type="text"
              value={this.state.books['5']}
              onChange={this.updateBooks('5')}
            />
            <br />
            <br />
           b. Eats
            <br />
            i<input type="text"
              value={this.state.eats['1']}
              onChange={this.updateEats('1')}
            />
            <br />
             ii<input type="text"
              value={this.state.eats['2']}
              onChange={this.updateEats('2')}
            />
            <br />
             iii <input type="text"
              value={this.state.eats['3']}
              onChange={this.updateEats('3')}
            />
            <br />
             iv <input type="text"
              value={this.state.eats['4']}
              onChange={this.updateEats('4')}
            />
            <br />
            v<input type="text"
              value={this.state.eats['5']}
              onChange={this.updateEats('5')}
            />
            <br />
            5. Where can your classmates reach you? (optional)
            <br />
            <label>Phone:
              <input type="text"
                value={this.state.phone}
                onChange={this.update('phone')}
              />
            </label>
            <br />
            <br />
            <label>Email:
              <input type="email"
                value={this.state.share_email}
                onChange={this.update('share_email')}
              />
            </label>
            <br />
            <br />
            <label>LinkedIn:
              <input type="text"
                value={this.state.linked_in}
                onChange={this.update('linked_in')}
              />
            </label>
            <br />
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default UserForm;