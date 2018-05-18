import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button, Container, Menu, Segment } from 'semantic-ui-react';
import classNames from 'classnames/bind';
import styles from '../../../css/main.scss';

const cx = classNames.bind(styles);


class NavigationMain extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeItem: 'home'
		};

		this.handleItemClick = this.handleItemClick.bind(this);
	}

	handleItemClick = (e, { name }) => {
		this.setState({ activeItem: name });
	};

	render() {
		const { activeItem } = this.state;

		return (
			<Segment inverted>
				<Container>
					<Menu inverted pointing secondary className={cx('myClass')}>
						<Menu.Item as={Link} to="/" name="home" active={activeItem === 'home'} onClick={this.handleItemClick}>Home</Menu.Item>
						<Menu.Item as={Link} to="/about" name="about" active={activeItem === 'about'} onClick={this.handleItemClick}>About</Menu.Item>
						<Menu.Item as={Link} to="/films" name="films" active={activeItem === 'films'} onClick={this.handleItemClick}>Films</Menu.Item>

						<Menu.Item position="right">
							<Button as="a" inverted>Log in</Button>
							<Button as="a" inverted style={{marginLeft: '0.5em'}}>Sign Up</Button>
						</Menu.Item>
					</Menu>
				</Container>
			</Segment>
		);
	}
}

export default NavigationMain;
