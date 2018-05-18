import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Container, Header, Icon, Segment } from 'semantic-ui-react';
import { createBlockAction } from '../actions/blocks';
import LayoutPage from '../components/layouts/LayoutPage/LayoutPage';
import classNames from 'classnames/bind';
import styles from './css/home.scss';

const cx = classNames.bind(styles);

class Home extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// ...
	}

	componentDidUpdate() {
		// ...
	}

	getMetaData() {
		return {
			title: 'Home | react stater',
			meta: [{ name: 'description', content: 'react stater' }],
			link: []
		};
	}

  render() {
		// const {  } = this.props;

    return (
      <LayoutPage {...this.getMetaData()}>
				<Segment inverted textAlign="center" style={{ minHeight: 400, padding: '1em 0em' }} vertical>
					<Container text>
						<Header as="h1" content="Hello, world!" inverted className={cx('myClass')} style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '1em' }} />
						<Header as="h2" content="Do whatever you want when you want to." inverted style={{ fontSize: '1.7em', fontWeight: 'normal' }} />
						<Button primary size="huge">Get Started<Icon name="right arrow" /></Button>
					</Container>
				</Segment>

				<Segment textAlign="center" vertical>
					<Container text>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequatur dolor earum facilis illum iste repellat, sequi tempora. Accusamus ad aut dolores et expedita nam officia provident quia, quis quisquam.
					</Container>
				</Segment>

				<Segment vertical>
					<Container text>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet consequatur dolor doloribus earum obcaecati voluptatem! Assumenda consectetur consequatur dignissimos iste optio quae, reprehenderit rerum soluta vero voluptas? Dolorem, totam!
					</Container>
				</Segment>

      </LayoutPage>
    );
  }
}

/*
 Home.propTypes = {
	optionalArray: PropTypes.array, || PropTypes.arrayOf()
	optionalBool: PropTypes.bool,
	optionalFunc: PropTypes.func,
	optionalNumber: PropTypes.number,
	optionalObject: PropTypes.object,
	optionalString: PropTypes.string,
	optionalSymbol: PropTypes.symbol
};
*/


Home.propTypes = {
	blocks: PropTypes.arrayOf(PropTypes.shape({
		hash: PropTypes.string,
		index: PropTypes.string
	})),

	// createBlockAction: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
	return {
		// blocks: state.blocks.all
	};
};

export default connect(mapStateToProps, null)(Home);
