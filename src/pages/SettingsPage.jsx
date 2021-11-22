import React, { useState, useContext, useEffect } from "react";
import { Context } from "../context/Context";
import Heading from "../components/Heading";
import styled from "styled-components";
import Checkbox from "../components/Checkbox";

function SettingsPage() {
	const [context, updateContext] = useContext(Context);
	const [allowNotifications, setAllowNotifications] = useState(
		context.allowNotifications
	);
	const [canUseNotifications, setCanUseNotifications] = useState(false);

	useEffect(() => {
		if (window.Notification) {
			setCanUseNotifications(true);
		}
	}, []);

	useEffect(() => {
		if (allowNotifications) {
			if ("Notification" in window) {
				Notification.requestPermission().then((result) => {
					if (result === "granted") {
						updateContext({
							allowNotifications: true,
						});
					} else {
						setAllowNotifications(false);
						updateContext({
							allowNotifications: false,
						});
					}
				});
			}
		} else {
			setAllowNotifications(false);
			updateContext({
				allowNotifications: false,
			});
		}
	}, [allowNotifications]);

	return (
		<Wrapper>
			<Heading text="Settings" />
			<SettingsHeading>Notifications</SettingsHeading>
			{canUseNotifications ? (
				<>
					<Checkbox
						text="Allow notifications"
						checked={allowNotifications}
						defaultChecked={allowNotifications}
						onChange={() => setAllowNotifications(!allowNotifications)}
					/>
					<Text>
						Even if you allow us to send you notifications, we will never spam
						you! 🙂 Notifications are used, for example, to notify you when a
						photo is taken using the delay timer.
					</Text>
				</>
			) : (
				<Text>
					Your device does not support notifications unfortunately... 😢
				</Text>
			)}
		</Wrapper>
	);
}

const Wrapper = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const SettingsHeading = styled.h2`
	text-transform: uppercase;
	font-size: 0.8rem;
	letter-spacing: 1px;
	font-weight: 300;
	margin: 0.5rem 0;
	color: var(--color-accent);
	position: relative;

	&::before,
	&::after {
		content: "";
		width: 50px;
		height: 1px;
		background-color: var(--color-accent);
		position: absolute;
		top: 50%;
	}

	&::before {
		left: -60px;
	}

	&::after {
		right: -60px;
	}
`;

const Text = styled.p`
	max-width: 350px;
	font-size: 0.8rem;
	margin: 0.5rem 0;
`;

export default SettingsPage;
