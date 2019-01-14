import React, {Component} from 'react'
import {fetchCategoriesFromServer} from '../store/categories'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {Grid, Header} from 'semantic-ui-react'

// ASK ABOUT WITHROUTER IF WE NEED IT OR NOT
// DURING STAND UP ASK ABOUT WHAT IT PREVENTS

class Categories extends Component {
  componentDidMount() {
    this.props.fetchAllCategories()
  }

  render() {
    return (
      <div id="categories">
        <Header as="h1">All Categories:</Header>
        <Grid columns={4}>
          {this.props.categories &&
            this.props.categories.map(category => {
              return (
                <Grid.Column key={category.id}>
                  <img src={category.imageUrl} width="100px" />
                  <h3>
                    <Link to={`/category/${category.id}`}>
                      {category.categoryName}
                    </Link>
                  </h3>
                </Grid.Column>
              )
            })}
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories
})
const mapDispatchToProps = dispatch => ({
  fetchAllCategories: () => {
    dispatch(fetchCategoriesFromServer())
  }
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Categories)
)
/**
 * CONTAINER
 */
