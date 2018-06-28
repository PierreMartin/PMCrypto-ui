import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAddressAction, fetchBalanceAction, fetchTransactionPoolAction, sendTransactionAction, mineBlockAction } from '../actions/wallet';
import { Button, Container, Header, Segment, Icon, Form } from 'semantic-ui-react';
import LayoutPage from '../components/layouts/LayoutPage/LayoutPage';
// import classNames from 'classnames/bind';
// import styles from './css/home.scss';

// const cx = classNames.bind(styles);

class Home extends Component {
	constructor(props) {
		super(props);
		this.sendTransactionChange = this.sendTransactionChange.bind(this);
		this.sendTransactionSubmit = this.sendTransactionSubmit.bind(this);
		this.mineBlockClick = this.mineBlockClick.bind(this);

		this.state = {
			fields: {}
		};
	}

	componentDidMount() {
		this.props.fetchAddressAction();
		this.props.fetchBalanceAction();
		this.props.fetchTransactionPoolAction();
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

	sendTransactionChange(event, field) {
		this.setState({fields: {...this.state.fields, ...{ [field.name]: field.value }} });
	}

	sendTransactionSubmit(event) {
		event.preventDefault();
		const address = this.state.fields.address;
		const amount = parseInt(this.state.fields.amount, 10);
		this.props.sendTransactionAction(address, amount);
	}

	mineBlockClick() {
		this.props.mineBlockAction();
	}

  render() {
		const { address, balance, transactionPool } = this.props;

    return (
      <LayoutPage {...this.getMetaData()}>
				<Segment textAlign="center" vertical>
					<Container text>
						<Header as="h4"><Icon name="privacy" /><Header.Content>MY ADDRESS</Header.Content></Header>
						<div style={{wordWrap: 'break-word'}} >
							{ address }
						</div>
					</Container>
				</Segment>

				<Segment vertical>
					<Container text textAlign="center">
						<Header as="h4"><Icon name="balance" /><Header.Content>MY BALANCE</Header.Content></Header>
						{ balance }
					</Container>
				</Segment>

				<Segment vertical>
					<Container text>
						<Header as="h4"><Icon name="send" /><Header.Content>SEND COIN</Header.Content></Header>

						<Form size="small" onSubmit={this.sendTransactionSubmit}>
							<Form.Group widths="equal">
								<Form.Input label="Address" placeholder="Address" name="address" value={this.state.fields.address || ''} onChange={this.sendTransactionChange} />
								<Form.Input type="number" label="Amount" placeholder="Amount" name="amount" value={this.state.fields.amount || ''} onChange={this.sendTransactionChange} />
							</Form.Group>

							<Form.Button>Submit</Form.Button>
						</Form>

					</Container>
				</Segment>

				<Segment vertical>
					<Container text>
						<Header as="h4"><Icon name="external" /><Header.Content>TRANSACTION POOL</Header.Content></Header>

						<table className="table">
							<thead>
								<tr>
									<th colSpan="2">#ID</th>
								</tr>
							</thead>
							<tbody>
							{transactionPool.map((tx, key) => {
								return (
									<tr key={key}>
										<td>
											<b>ID: {tx.id}</b>
										</td>

										{tx.txIns.map((txIn, key2) => {
											return (
												<tr key={key2}>
													<td>{txIn.signature}</td>
												</tr>
											);
										})}

										{tx.txOuts.map((txOut, key3) => {
											return (
												<tr key={key3}>
													<td>{txOut.address}</td>
												</tr>
											);
										})}
									</tr>
								);
							})}
							</tbody>
						</table>

					</Container>
				</Segment>

				<Segment vertical>
					<Container text>
						<Header as="h4"><Icon name="retweet" /><Header.Content>MINE BLOCK (test)</Header.Content></Header>
						<Button primary onClick={this.mineBlockClick}>Click to mine block<Icon name="right arrow" /></Button>
					</Container>
				</Segment>

      </LayoutPage>
    );
  }
}

Home.propTypes = {
	address: PropTypes.string,
	balance: PropTypes.number,

	transactionPool: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string,
		txIns: PropTypes.array,
		txOuts: PropTypes.array
	})),

	sendTransactionAction: PropTypes.func.isRequired,
	mineBlockAction: PropTypes.func.isRequired,
	fetchTransactionPoolAction: PropTypes.func.isRequired,
	fetchBalanceAction: PropTypes.func.isRequired,
	fetchAddressAction: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
	return {
		address: state.wallet.address,
		balance: state.wallet.balance,
		transactionPool: state.wallet.transactionPool
	};
};

export default connect(mapStateToProps, { fetchAddressAction, fetchBalanceAction, fetchTransactionPoolAction, sendTransactionAction, mineBlockAction })(Home);
