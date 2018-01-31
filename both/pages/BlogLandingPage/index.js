import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { asyncConnect } from 'redux-connect';
import { getPosts } from './api';
import selectPostsPage from './selector';
import {
  getPostsSuccess,
  getPostsFailure,
} from './actions';

const mapStateToProps = selectPostsPage();

@asyncConnect([{
  promise: ({ params, helpers, store: { dispatch }, data }) => {
    return getPosts(data)
      .then(r => dispatch(getPostsSuccess(r.data.posts)));
  }
}], mapStateToProps)
export default class BlogLandingPage extends React.Component {

  static propTypes = {
    posts: PropTypes.array.isRequired,
  };

  renderPostsLinks = () => {
    return this.props.posts.map((post, ndx) =>
      <li key={ndx}>
        <Link to={`/post/${post.key}`}>
          {post.name}
        </Link>
        {post.categories.length > 0 &&
          post.categories.map((category) =>
            <Link to={`/post?category=${category.key}`}>
              {category.name}
            </Link>
          )
        }
      </li>);
  }

  render() {
    return (
      <section className="blog-landing-page">
        <h1>Posts</h1>
        <ul>
        {this.renderPostsLinks()}
        </ul>
      </section>
    );
  }
}
