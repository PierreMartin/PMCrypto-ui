import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { sendTransactionAction, mineBlockAction } from '../actions/blocks';
import { fetchAddressAction, fetchBalanceAction } from '../actions/wallet';
import { Container, Header, Segment, Icon } from 'semantic-ui-react';
import LayoutPage from '../components/layouts/LayoutPage/LayoutPage';
import classNames from 'classnames/bind';
import styles from './css/home.scss';

const cx = classNames.bind(styles);

class Home extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchAddressAction();
		this.props.fetchBalanceAction();
		// this.props.fetchTransactionPoolAction();
	}

	componentDidUpdate() {
		// ...
	}

	getMetaData() {
		return {
			title: 'Home | wallet',
			meta: [{ name: 'description', content: 'wallet' }],
			link: []
		};
	}

  render() {
		const { address, balance } = this.props;

    return (
      <LayoutPage {...this.getMetaData()}>
				<Segment textAlign="center" vertical>
					<Container text>
						<Header as="h2"><Icon name="plug" /><Header.Content>MY ADDRESS</Header.Content></Header>
						<div style={{fontSize: '11px'}} >
							{ address }
						</div>
					</Container>
				</Segment>

				<Segment vertical>
					<Container text>
						Balance: { balance }
					</Container>
				</Segment>

      </LayoutPage>
    );
  }
}

Home.propTypes = {
	address: PropTypes.string,
	balance: PropTypes.number,

	// sendTransactionAction: PropTypes.func.isRequired,
	// mineBlockAction: PropTypes.func.isRequired,
	// fetchTransactionPoolAction: PropTypes.func.isRequired
	fetchBalanceAction: PropTypes.func.isRequired,
	fetchAddressAction: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
	return {
		address: state.wallet.address,
		balance: state.wallet.balance
	};
};

export default connect(mapStateToProps, { fetchAddressAction, fetchBalanceAction })(Home);
