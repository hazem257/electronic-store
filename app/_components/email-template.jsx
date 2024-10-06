import {
	Body,
	Button,
	Container,
	Head,
	Hr,
	Html,
	Img,
	Preview,
	Section,
	Text,
} from '@react-email/components';
import * as React from 'react';


export const EmailTemplate = ({
	body,
}) => (
	<Html>
		<Head />
		<Preview>
			The Ecommerce Platform For Yout Digital Products search now for your future
		</Preview>
		<Body style={main}>
			<Container style={container}>
				<Img
					src='https://res.cloudinary.com/db2w9pi7f/image/upload/v1727614766/thumbnail_453030946_122094334250452115_2718023448396137154_n_c1301f7029.jpg?updatedAt=2024-09-29T12%3A59%3A23.242Z'
					width="420"
					height="300"
					alt="Koala"
					style={logo}
				/>
				<Text style={paragraph}>Hi {body.fullName},</Text>
				<Text style={paragraph}>
					Thank you purchasing on Sleem Tech Ecommerce. Click on Below download button to download the all digital content
				</Text>
				<Section style={btnContainer}>
					<Button pX={12} pY={12}
						style={{
							padding: 5,
							paddingLeft: 10,
							paddingRight: 10,


						}}
						href="https://res.cloudinary.com/db2w9pi7f/image/upload/v1727614766/thumbnail_453030946_122094334250452115_2718023448396137154_n_c1301f7029.jpg?updatedAt=2024-09-29T12%3A59%3A23.242Z">
						Download
					</Button>
				</Section>
				<Text style={paragraph}>
					Best,
					<br />
					The Sleem Tech team
				</Text>
				<Hr style={hr} />
				<Text style={footer}>Subscribe to Ali Sleem</Text>
			</Container>
		</Body>
	</Html>
);


const main = {
	backgroundColor: '#ffffff',
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
	margin: '0 auto',
	padding: '20px 0 48px',
};

const logo = {
	margin: '0 auto',
};

const paragraph = {
	fontSize: '16px',
	lineHeight: '26px',
};

const btnContainer = {
	textAlign: 'center',
};

const button = {
	backgroundColor: '#5F51E8',
	borderRadius: '3px',
	color: '#fff',
	fontSize: '16px',
	textDecoration: 'none',
	textAlign: 'center',
	display: 'block',
};

const hr = {
	borderColor: '#cccccc',
	margin: '20px 0',
};

const footer = {
	color: '#8898aa',
	fontSize: '12px',
};
