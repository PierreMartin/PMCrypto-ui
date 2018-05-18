import React from 'react';
import LayoutPage from '../components/layouts/LayoutPage/LayoutPage';
import { Container, Header, Segment } from 'semantic-ui-react';

const About = () => {
	function getMetaData() {
		return {
			title: 'About | react stater',
			meta: [{ name: 'description', content: 'react stater' }],
			link: []
		};
	}

	return (
		<LayoutPage {...getMetaData()}>
			<Segment textAlign="center" vertical>
				<Container text>
					<Header as="h2" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium aperiam commodi, dolore dolorum ducimus ea, eius explicabo hic laudantium molestiae officiis, porro quidem quod repellendus sunt tempora totam voluptate!" />
					<Header as="h2" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium aperiam commodi, dolore dolorum ducimus ea, eius explicabo hic laudantium molestiae officiis, porro quidem quod repellendus sunt tempora totam voluptate!" />
					<Header as="h2" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium aperiam commodi, dolore dolorum ducimus ea, eius explicabo hic laudantium molestiae officiis, porro quidem quod repellendus sunt tempora totam voluptate!" />
					<Header as="h2" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium aperiam commodi, dolore dolorum ducimus ea, eius explicabo hic laudantium molestiae officiis, porro quidem quod repellendus sunt tempora totam voluptate!" />
				</Container>
			</Segment>
		</LayoutPage>
	);
};

export default About;
